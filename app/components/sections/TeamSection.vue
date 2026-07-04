<template>
  <section id="team" class="team section-frame" aria-labelledby="team-title">
    <div class="section-heading">
      <p class="eyebrow">Our Team</p>
      <h2 id="team-title"><span>Leadership</span> <em>Team</em></h2>
    </div>
    <div class="team-grid">
      <article v-for="member in team" :key="member.name" class="team-card">
        <figure class="team-card__photo-frame">
          <img class="team-card__photo" :src="member.image" :alt="`${member.name}, ${member.role}`" loading="eager" decoding="async" />
        </figure>
        <p class="eyebrow">{{ member.role }}</p>
        <h3>{{ member.name }}</h3>
        <span class="team-card__profile-badge" aria-label="Executive profile">
          Executive Profile
        </span>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { team } from '~/data/company'
</script>
