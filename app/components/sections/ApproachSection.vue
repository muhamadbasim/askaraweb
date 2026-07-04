<template>
  <section id="approach" class="approach section-frame section-frame--dark" aria-labelledby="approach-title">
    <span class="digital-wave digital-wave--approach" aria-hidden="true" />
    <div class="section-heading section-heading--dark">
      <p class="eyebrow">Our Approach</p>
      <h2 id="approach-title"><span>Proven</span> <em>Methodology</em></h2>
    </div>
    <ol class="timeline">
      <li v-for="step in approach" :key="step.title" class="timeline__item">
        <span class="timeline__number">{{ step.number }}</span>
        <h3>{{ step.title }}</h3>
        <p>{{ step.description }}</p>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
import { approach } from '~/data/company'
</script>
