<template>
  <main class="site-shell">
    <HeroSection />
    <AboutSection />
    <VisionMissionSection />
    <ServicesSection />
    <ApproachSection />
    <ValuesSection />
    <TeamSection />
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import AboutSection from '~/components/sections/AboutSection.vue'
import ApproachSection from '~/components/sections/ApproachSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import TeamSection from '~/components/sections/TeamSection.vue'
import ValuesSection from '~/components/sections/ValuesSection.vue'
import VisionMissionSection from '~/components/sections/VisionMissionSection.vue'

let motionContext: gsap.Context | undefined
let sectionObserver: IntersectionObserver | undefined

onMounted(() => {
  if (!import.meta.client) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    document.documentElement.classList.add('motion-reduced')
    return
  }

  motionContext = gsap.context(() => {
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

    heroTimeline
      .from('.topbar', { autoAlpha: 0, y: -18, duration: 0.7 })
      .from('.hero .eyebrow', { autoAlpha: 0, y: 18, duration: 0.55 }, '-=0.25')
      .from('#hero-title span', { autoAlpha: 0, yPercent: 110, duration: 0.78, stagger: 0.12 }, '-=0.2')
      .from('.hero__lead', { autoAlpha: 0, y: 22, duration: 0.62 }, '-=0.32')
      .from('.hero__actions .btn', { autoAlpha: 0, y: 18, duration: 0.5, stagger: 0.08 }, '-=0.28')
      .from('.hero__visual', { autoAlpha: 0, x: 42, rotate: 1.5, duration: 0.85 }, '-=0.68')
      .from('.diagonal', { scaleY: 0, transformOrigin: 'bottom center', duration: 0.62, stagger: 0.1 }, '-=0.58')

    const sections = gsap.utils.toArray<HTMLElement>('.section-frame:not(.hero)')
    const revealSelector =
      '.section-heading, .section-copy, .quote-card, .feature-card, .vision-card, .service-card, .timeline__item, .value-card, .team-card, .contact-card'

    sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const section = entry.target as HTMLElement
          const targets = section.querySelectorAll(revealSelector)

          gsap.from(targets, {
            autoAlpha: 0,
            y: 34,
            duration: 0.72,
            ease: 'power3.out',
            stagger: 0.08,
            clearProps: 'opacity,visibility,transform',
          })

          sectionObserver?.unobserve(section)
        })
      },
      { rootMargin: '0px 0px -20% 0px', threshold: 0.14 },
    )

    sections.forEach((section) => sectionObserver?.observe(section))

    gsap.to('.digital-wave', {
      yPercent: -5,
      xPercent: 2,
      duration: 5.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  })
})

onUnmounted(() => {
  sectionObserver?.disconnect()
  motionContext?.revert()
})
</script>
