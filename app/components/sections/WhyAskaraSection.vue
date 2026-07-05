<template>
  <section id="why-askara" class="why-askara section-frame section-frame--dark" aria-labelledby="why-askara-title">
    <span class="digital-wave digital-wave--why" aria-hidden="true" />
    <div class="section-heading section-heading--dark">
      <p class="eyebrow">Why Askara</p>
      <h2 id="why-askara-title"><span>Business-first</span> <em>technology partner</em></h2>
    </div>
    <p class="section-copy section-copy--dark">
      We combine strategic consulting, scalable engineering, and long-term support so every digital initiative moves from idea to measurable business impact.
    </p>
    <div class="proof-grid" aria-label="Reasons to choose Askara">
      <article v-for="item in whyAskara" :key="item.title" class="proof-card">
        <span class="proof-card__metric">{{ item.metric }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { whyAskara } from '~/data/company'
</script>
