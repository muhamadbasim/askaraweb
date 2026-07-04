<template>
  <section id="services" class="services section-frame section-frame--light" aria-labelledby="services-title">
    <div class="section-heading">
      <p class="eyebrow">Our Services</p>
      <h2 id="services-title"><span>Digital</span> <em>Solutions</em></h2>
    </div>
    <div class="service-grid">
      <article v-for="service in services" :key="service.title" class="service-card">
        <p class="service-card__icon" aria-hidden="true">{{ service.icon }}</p>
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { services } from '~/data/company'
</script>
