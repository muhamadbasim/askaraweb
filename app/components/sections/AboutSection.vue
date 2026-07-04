<template>
  <section id="about" class="about section-frame" aria-labelledby="about-title">
    <div class="section-heading">
      <p class="eyebrow">About Us</p>
      <h2 id="about-title"><span>About</span> <em>Us</em></h2>
    </div>
    <div class="about__layout">
      <div>
        <p class="section-copy">
          PT Askara Digital Technology is a technology partner dedicated to delivering intelligent
          digital solutions that help organizations innovate, transform, and grow in the digital era.
        </p>
        <blockquote class="quote-card">
          <p>We bridge technology and business to create sustainable value and long-term impact.</p>
        </blockquote>
      </div>
      <div class="feature-grid" aria-label="Askara strengths">
        <article v-for="feature in features" :key="feature.title" class="feature-card">
          <span class="feature-card__icon" aria-hidden="true">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { features } from '~/data/company'
</script>
