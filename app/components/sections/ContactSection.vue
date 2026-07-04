<template>
  <section id="contact" class="contact section-frame" aria-labelledby="contact-title">
    <div>
      <p class="eyebrow">Let’s Connect</p>
      <h2 id="contact-title"><span>Build the future</span> <em>together</em></h2>
      <p class="section-copy">
        Let’s build the future of your business together with smart digital solutions.
      </p>
    </div>
    <address class="contact-card">
      <span>{{ companyContact.location }}</span>
      <span>{{ companyContact.address }}</span>
      <a :href="`mailto:${companyContact.email}`">{{ companyContact.email }}</a>
      <a :href="companyContact.phoneHref">{{ companyContact.phone }}</a>
      <a :href="companyContact.websiteHref">{{ companyContact.website }}</a>
      <span class="release-badge">v{{ release.version }} · {{ release.codename }}</span>
    </address>
  </section>
</template>

<script setup lang="ts">
import { companyContact } from '~/data/company'
import { release } from '~/data/release'
</script>
