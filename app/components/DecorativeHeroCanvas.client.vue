<template>
  <canvas
    ref="canvasRef"
    class="hero-webgl"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
import type {
  BufferGeometry,
  LineSegments,
  PerspectiveCamera,
  Points,
  Scene,
  WebGLRenderer,
} from 'three'

const canvasRef = ref<HTMLCanvasElement | null>(null)

let renderer: WebGLRenderer | undefined
let scene: Scene | undefined
let camera: PerspectiveCamera | undefined
let particles: Points<BufferGeometry> | undefined
let gridLines: LineSegments<BufferGeometry> | undefined
let frameId = 0
let cleanupResize: (() => void) | undefined
let cleanupDeferredStart: (() => void) | undefined
let disposed = false

type WindowWithIdleCallback = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number
  cancelIdleCallback?: (handle: number) => void
}

function supportsWebGL() {
  try {
    const testCanvas = document.createElement('canvas')
    return Boolean(
      window.WebGLRenderingContext &&
        (testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl')),
    )
  } catch {
    return false
  }
}

function waitForInitialContent(canvas: HTMLCanvasElement) {
  return new Promise<boolean>((resolve) => {
    const prefersCompactViewport = window.matchMedia('(max-width: 760px)').matches
    if (prefersCompactViewport) {
      resolve(false)
      return
    }

    let settled = false

    const settle = (shouldStart: boolean) => {
      if (settled) return
      settled = true
      cleanupDeferredStart?.()
      cleanupDeferredStart = undefined
      resolve(shouldStart)
    }

    const scheduleIdleStart = () => {
      if (disposed) {
        settle(false)
        return
      }

      const fallbackHandle = window.setTimeout(() => settle(true), 1000)
      const idleWindow = window as WindowWithIdleCallback

      if (idleWindow.requestIdleCallback) {
        const idleHandle = idleWindow.requestIdleCallback(
          () => settle(true),
          { timeout: 1400 },
        )

        cleanupDeferredStart = () => {
          window.clearTimeout(fallbackHandle)
          idleWindow.cancelIdleCallback?.(idleHandle)
        }
      } else {
        cleanupDeferredStart = () => window.clearTimeout(fallbackHandle)
      }
    }

    if (!('IntersectionObserver' in window)) {
      scheduleIdleStart()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()
        scheduleIdleStart()
      },
      { rootMargin: '160px', threshold: 0.01 },
    )

    observer.observe(canvas)
    cleanupDeferredStart = () => observer.disconnect()
  })
}

onMounted(async () => {
  if (!import.meta.client) return

  const canvas = canvasRef.value
  if (!canvas) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion || !supportsWebGL()) {
    canvas.remove()
    return
  }

  const shouldStartWebGL = await waitForInitialContent(canvas)
  if (!shouldStartWebGL || disposed) {
    canvas.remove()
    return
  }

  const three = await import('three')
  const {
    AdditiveBlending,
    BufferAttribute,
    BufferGeometry,
    Color,
    Float32BufferAttribute,
    LineBasicMaterial,
    LineSegments,
    PerspectiveCamera,
    Points,
    PointsMaterial,
    Scene,
    WebGLRenderer,
  } = three

  if (disposed) return

  try {
    renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas,
      powerPreference: 'high-performance',
    })
  } catch {
    canvas.remove()
    return
  }
  renderer.setClearAlpha(0)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))

  scene = new Scene()
  scene.fog = null

  camera = new PerspectiveCamera(45, 1, 0.1, 100)
  camera.position.set(0, 0, 7.5)

  const particleCount = 86
  const positions = new Float32Array(particleCount * 3)
  const sizes = new Float32Array(particleCount)

  for (let index = 0; index < particleCount; index += 1) {
    const i = index * 3
    positions[i] = (Math.random() - 0.5) * 8
    positions[i + 1] = (Math.random() - 0.5) * 4.6
    positions[i + 2] = (Math.random() - 0.5) * 2.2
    sizes[index] = 0.055 + Math.random() * 0.075
  }

  const particleGeometry = new BufferGeometry()
  particleGeometry.setAttribute('position', new BufferAttribute(positions, 3))
  particleGeometry.setAttribute('size', new BufferAttribute(sizes, 1))

  const particleMaterial = new PointsMaterial({
    color: new Color('#19c7b7'),
    size: 0.055,
    transparent: true,
    opacity: 0.72,
    blending: AdditiveBlending,
    depthWrite: false,
  })

  particles = new Points(particleGeometry, particleMaterial)
  particles.position.set(0.38, 0.08, 0)
  scene.add(particles)

  const linePositions: number[] = []
  const columns = 7
  const rows = 5
  const cellX = 1.05
  const cellY = 0.72

  for (let x = 0; x < columns; x += 1) {
    for (let y = 0; y < rows; y += 1) {
      const x1 = (x - (columns - 1) / 2) * cellX
      const y1 = (y - (rows - 1) / 2) * cellY
      const z = Math.sin(x * 0.8 + y * 0.6) * 0.35

      if (x < columns - 1) {
        linePositions.push(x1, y1, z, x1 + cellX, y1 + 0.12 * Math.sin(y), z + 0.08)
      }
      if (y < rows - 1) {
        linePositions.push(x1, y1, z, x1 + 0.1 * Math.cos(x), y1 + cellY, z - 0.08)
      }
    }
  }

  const lineGeometry = new BufferGeometry()
  lineGeometry.setAttribute('position', new Float32BufferAttribute(linePositions, 3))

  const lineMaterial = new LineBasicMaterial({
    color: new Color('#12afa4'),
    transparent: true,
    opacity: 0.16,
    blending: AdditiveBlending,
    depthWrite: false,
  })

  gridLines = new LineSegments(lineGeometry, lineMaterial)
  gridLines.position.set(0.55, -0.1, -0.2)
  gridLines.rotation.z = -0.2
  scene.add(gridLines)

  const resize = () => {
    if (!renderer || !camera || !canvas.parentElement) return
    const { width, height } = canvas.parentElement.getBoundingClientRect()
    renderer.setSize(Math.max(width, 1), Math.max(height, 1), false)
    camera.aspect = Math.max(width, 1) / Math.max(height, 1)
    camera.updateProjectionMatrix()
  }

  resize()
  window.addEventListener('resize', resize)
  cleanupResize = () => window.removeEventListener('resize', resize)

  const render = (time: number) => {
    if (!renderer || !scene || !camera) return
    const t = time * 0.001

    if (particles) {
      particles.rotation.y = t * 0.08
      particles.rotation.z = Math.sin(t * 0.45) * 0.035
      particles.position.y = Math.sin(t * 0.7) * 0.08
    }

    if (gridLines) {
      gridLines.rotation.y = Math.sin(t * 0.35) * 0.14
      gridLines.rotation.x = Math.cos(t * 0.28) * 0.08
    }

    renderer.render(scene, camera)
    frameId = window.requestAnimationFrame(render)
  }

  frameId = window.requestAnimationFrame(render)
})

onUnmounted(() => {
  disposed = true
  if (frameId) window.cancelAnimationFrame(frameId)
  cleanupDeferredStart?.()
  cleanupResize?.()

  particles?.geometry.dispose()
  Array.isArray(particles?.material)
    ? particles?.material.forEach((material) => material.dispose())
    : particles?.material.dispose()

  gridLines?.geometry.dispose()
  Array.isArray(gridLines?.material)
    ? gridLines?.material.forEach((material) => material.dispose())
    : gridLines?.material.dispose()

  renderer?.dispose()
})
</script>
