<template>
  <section id="vision" class="vision section-frame section-frame--dark" aria-labelledby="vision-title">
    <span class="digital-wave" aria-hidden="true" />
    <div class="section-heading section-heading--dark">
      <p class="eyebrow">Vision & Mission</p>
      <h2 id="vision-title"><span>Purposeful</span> <em>Innovation</em></h2>
    </div>
    <div class="vision__grid">
      <article class="vision-card vision-card--primary">
        <span class="vision-card__icon" aria-hidden="true">✦</span>
        <p class="eyebrow">Our Vision</p>
        <h3>Leading digital technology partner</h3>
        <p>
          To be a leading digital technology partner recognized for innovation,
          excellence, and measurable impact.
        </p>
      </article>
      <article class="vision-card">
        <span class="vision-card__icon" aria-hidden="true">▤</span>
        <p class="eyebrow">Our Mission</p>
        <ul class="mission-list">
          <li v-for="mission in missions" :key="mission">{{ mission }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { missions } from '~/data/company'
</script>
