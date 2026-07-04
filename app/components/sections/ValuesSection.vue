<template>
  <section id="values" class="values section-frame section-frame--light" aria-labelledby="values-title">
    <div class="section-heading">
      <p class="eyebrow">Our Values</p>
      <h2 id="values-title"><span>How we</span> <em>work</em></h2>
    </div>
    <div class="value-grid">
      <article v-for="value in values" :key="value.title" class="value-card">
        <span class="value-card__icon" aria-hidden="true">{{ value.icon }}</span>
        <h3>{{ value.title }}</h3>
        <p>{{ value.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { values } from '~/data/company'
</script>
