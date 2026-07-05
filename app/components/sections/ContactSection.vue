<template>
  <section id="contact" class="contact section-frame" aria-labelledby="contact-title">
    <div>
      <p class="eyebrow">Let’s Connect</p>
      <h2 id="contact-title"><span>Ready to transform</span> <em>your business?</em></h2>
      <p class="section-copy">
        Tell us your challenge — we will help map the right digital solution, from first consultation to measurable delivery.
      </p>
      <div class="contact__actions" aria-label="Contact actions">
        <a class="btn btn--primary btn--light" :href="companyContact.whatsappHref" target="_blank" rel="noopener noreferrer">{{ companyContact.whatsappLabel }}</a>
        <a class="btn btn--outline-light" :href="`mailto:${companyContact.email}`">Email Askara</a>
      </div>
      <ol class="contact-funnel" aria-label="Consultation flow">
        <li>Share your business challenge</li>
        <li>Get a practical solution direction</li>
        <li>Align roadmap, budget, and next sprint</li>
      </ol>
    </div>
    <address class="contact-card">
      <span>{{ companyContact.location }}</span>
      <span>{{ companyContact.address }}</span>
      <a :href="`mailto:${companyContact.email}`">{{ companyContact.email }}</a>
      <a :href="companyContact.whatsappHref" target="_blank" rel="noopener noreferrer">{{ companyContact.whatsappLabel }}</a>
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
