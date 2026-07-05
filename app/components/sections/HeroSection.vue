<template>
  <section class="hero section-frame" aria-labelledby="hero-title">
    <div class="hero__backdrop" aria-hidden="true">
      <span class="orb orb--one" />
      <span class="orb orb--two" />
      <span class="dot-grid" />
      <DecorativeHeroCanvas />
    </div>

    <nav class="topbar" aria-label="Primary navigation">
      <a class="brand" href="#hero-title" aria-label="Askara Digital Technology home">
        <span class="brand__mark" aria-hidden="true">A</span>
        <span>
          <strong>ASKARA</strong>
          <small>DIGITAL TECHNOLOGY</small>
        </span>
      </a>
      <div class="topbar__links">
        <a href="#about">About</a>
        <a href="#vision">Vision</a>
        <a href="#services">Services</a>
        <a href="#why-askara">Why Askara</a>
        <a href="#industries">Industries</a>
        <a href="#approach">Approach</a>
        <a href="#values">Values</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>

    <div class="hero__grid">
      <div class="hero__content reveal-stack">
        <p class="eyebrow">PT ASKARA DIGITAL TECHNOLOGY</p>
        <h1 id="hero-title">
          <span>Innovate.</span>
          <span>Transform.</span>
          <span>Accelerate.</span>
        </h1>
        <p class="hero__lead">
          Empowering businesses through innovative digital solutions, advanced technology,
          and trusted partnerships.
        </p>
        <div class="hero__actions" aria-label="Hero actions">
          <a class="btn btn--primary" href="#services">Explore Services</a>
          <a class="btn btn--ghost" :href="companyContact.whatsappHref" target="_blank" rel="noopener noreferrer">WhatsApp Consultation</a>
        </div>
      </div>

      <div class="hero__visual" aria-label="Corporate glass-building inspired Askara visual">
        <div class="glass-card">
          <img src="/images/references/hero-cover.jpg" alt="Askara company profile visual reference with corporate skyline" />
          <div class="glass-card__overlay" aria-hidden="true" />
        </div>
        <div class="diagonal diagonal--navy" aria-hidden="true" />
        <div class="diagonal diagonal--teal" aria-hidden="true" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DecorativeHeroCanvas from '~/components/DecorativeHeroCanvas.client.vue'
import { companyContact } from '~/data/company'
</script>
