<template>
  <section id="industries" class="industries section-frame section-frame--light" aria-labelledby="industries-title">
    <div class="section-heading">
      <p class="eyebrow">Industries Served</p>
      <h2 id="industries-title"><span>Digital solutions</span> <em>across sectors</em></h2>
    </div>
    <p class="section-copy">
      Askara adapts modern software, cloud, data, and automation capabilities to the operating realities of high-growth organizations.
    </p>
    <div class="industry-grid" aria-label="Industries served by Askara">
      <article v-for="industry in industries" :key="industry.title" class="industry-card">
        <span class="industry-card__icon" aria-hidden="true">{{ industry.icon }}</span>
        <h3>{{ industry.title }}</h3>
        <p>{{ industry.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { industries } from '~/data/company'
</script>
