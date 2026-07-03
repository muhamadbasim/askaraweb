<template>
  <main class="error-page" aria-labelledby="error-title">
    <section class="error-card">
      <a class="brand error-card__brand" href="/" aria-label="Back to Askara home">
        <span class="brand__mark" aria-hidden="true">A</span>
        <span>
          <strong>ASKARA</strong>
          <small>DIGITAL TECHNOLOGY</small>
        </span>
      </a>

      <p class="eyebrow">Website Recovery</p>
      <h1 id="error-title">{{ title }}</h1>
      <p class="error-card__copy">
        {{ message }}
      </p>
      <p v-if="isChunkError" class="error-card__hint">
        A new version of the website may have just been deployed. Refreshing clears the stale module cache and loads the latest build.
      </p>

      <div class="hero__actions">
        <button class="btn btn--primary" type="button" @click="reloadFresh">
          Refresh website
        </button>
        <NuxtLink class="btn btn--ghost" to="/">
          Back to home
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const rawMessage = computed(() => props.error?.message || 'Something went wrong while loading the website.')
const isChunkError = computed(() => /dynamically imported module|Importing a module script failed|Loading chunk|ChunkLoadError/i.test(rawMessage.value))
const title = computed(() => (isChunkError.value ? 'Loading the latest website' : `${props.error?.statusCode || 500} error`))
const message = computed(() =>
  isChunkError.value
    ? 'Your browser is holding an older website file while Cloudflare has a newer deployment ready.'
    : rawMessage.value,
)

function reloadFresh() {
  if (import.meta.client) {
    const url = new URL(window.location.origin)
    url.searchParams.set('refresh', Date.now().toString())
    window.location.replace(url.toString())
  }
}
</script>
