<template>
  <section id="industries" class="industries section-frame section-frame--light" aria-labelledby="industries-title">
    <div class="section-heading">
      <p class="eyebrow">Industry Solutions</p>
      <h2 id="industries-title"><span>Comprehensive digital</span> <em>transformation solutions</em></h2>
    </div>
    <p class="section-copy">
      ERP, AI, automation, and enterprise applications shaped for the operating realities of modern industries — rebuilt from the Askara solution map into semantic, responsive web content.
    </p>

    <div class="solution-summary" aria-label="Askara solution coverage summary">
      <article>
        <strong>10</strong>
        <span>industry-ready solution tracks</span>
      </article>
      <article>
        <strong>ERP + AI</strong>
        <span>automation and intelligence layer</span>
      </article>
      <article>
        <strong>1 partner</strong>
        <span>from consulting to long-term support</span>
      </article>
    </div>

    <div class="industry-grid industry-grid--solutions" aria-label="Digital transformation solutions by industry">
      <article
        v-for="industry in industries"
        :key="industry.title"
        class="industry-card industry-card--solution"
        :style="{ '--solution-accent': industry.accent }"
      >
        <div class="industry-card__topline">
          <span class="industry-card__icon industry-card__icon--solution" aria-hidden="true">{{ industry.icon }}</span>
          <span class="industry-card__subtitle">{{ industry.subtitle }}</span>
        </div>
        <h3>{{ industry.title }}</h3>
        <p>{{ industry.description }}</p>

        <div class="capability-list" aria-label="Core capabilities">
          <span v-for="capability in industry.capabilities.slice(0, 6)" :key="capability">{{ capability }}</span>
        </div>

        <div class="benefit-panel" aria-label="Business benefits">
          <strong>Business impact</strong>
          <ul>
            <li v-for="benefit in industry.benefits" :key="benefit">{{ benefit }}</li>
          </ul>
        </div>
      </article>
    </div>

    <aside class="technology-partner" aria-labelledby="technology-partner-title">
      <div class="technology-partner__intro">
        <p class="eyebrow">One Technology Partner</p>
        <h3 id="technology-partner-title">Every industry, connected through one reliable digital ecosystem.</h3>
        <p>
          Askara combines integrated systems, real-time visibility, automation, data, security, and professional support so each solution can grow with the business.
        </p>
        <a class="btn btn--primary" :href="companyContact.whatsappHref" target="_blank" rel="noopener noreferrer">Consult Your Industry Solution</a>
      </div>
      <div class="partner-pillar-grid" aria-label="Technology partner value pillars">
        <article v-for="pillar in technologyPartnerPillars" :key="pillar.title" class="partner-pillar">
          <span aria-hidden="true">{{ pillar.icon }}</span>
          <h4>{{ pillar.title }}</h4>
          <p>{{ pillar.description }}</p>
        </article>
      </div>
    </aside>
  </section>
</template>

<script setup lang="ts">
import { companyContact, industries, technologyPartnerPillars } from '~/data/company'
</script>
