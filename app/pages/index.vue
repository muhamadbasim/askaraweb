<template>
  <main class="site-shell">
    <section class="hero section-frame" aria-labelledby="hero-title">
      <div class="hero__backdrop" aria-hidden="true">
        <span class="orb orb--one" />
        <span class="orb orb--two" />
        <span class="dot-grid" />
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
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
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
            <a class="btn btn--ghost" href="#contact">Let’s Connect</a>
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

    <section class="about section-frame" aria-labelledby="about-title">
      <div class="section-heading">
        <p class="eyebrow">About Us</p>
        <h2 id="about-title"><span>About</span> <em>Us</em></h2>
      </div>
      <p class="section-copy">
        PT Askara Digital Technology is a technology partner dedicated to delivering intelligent
        digital solutions that help organizations innovate, transform, and grow in the digital era.
      </p>
      <div class="feature-grid" aria-label="Askara strengths">
        <article v-for="feature in features" :key="feature.title" class="feature-card">
          <span class="feature-card__icon" aria-hidden="true">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
        </article>
      </div>
    </section>

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

    <section id="approach" class="approach section-frame section-frame--dark" aria-labelledby="approach-title">
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

    <section id="contact" class="contact section-frame" aria-labelledby="contact-title">
      <div>
        <p class="eyebrow">Let’s Connect</p>
        <h2 id="contact-title"><span>Build the future</span> <em>together</em></h2>
        <p class="section-copy">
          Let’s build the future of your business together with smart digital solutions.
        </p>
      </div>
      <address class="contact-card">
        <a href="mailto:info@askaradigital.com">info@askaradigital.com</a>
        <a href="tel:+6282258112280">0822-5811-2280</a>
        <a href="https://www.askaradigital.com">www.askaradigital.com</a>
        <span>Deruzzi SPACE, Jl. Sukajadi 25, Sukajadi, Jawa Barat 40162</span>
      </address>
    </section>
  </main>
</template>

<script setup lang="ts">
const features = [
  { title: 'Business-Oriented', icon: '▣' },
  { title: 'Experienced Team', icon: '◇' },
  { title: 'Scalable Architecture', icon: '▤' },
  { title: 'AI-Driven Innovation', icon: '✦' },
]

const services = [
  {
    title: 'Enterprise Software Development',
    icon: '</>',
    description: 'Custom software solutions to drive innovation and growth.',
  },
  {
    title: 'Web & Mobile Apps',
    icon: '▱',
    description: 'Scalable and intuitive applications built for exceptional user experiences.',
  },
  {
    title: 'AI & Automation',
    icon: 'AI',
    description: 'Intelligent automation to optimize processes and accelerate results.',
  },
  {
    title: 'Cloud Infrastructure',
    icon: '☁',
    description: 'Secure, scalable, and reliable cloud solutions that power your business.',
  },
  {
    title: 'Data & Business Intelligence',
    icon: '↗',
    description: 'Transform data into actionable insights to make smarter business decisions.',
  },
  {
    title: 'IT Consulting',
    icon: '◎',
    description: 'Strategic advisory and technology consulting to achieve your goals.',
  },
]

const approach = [
  { number: '01', title: 'Discover', description: 'Understand business needs and challenges.' },
  { number: '02', title: 'Design', description: 'Craft the right solution and user experience.' },
  { number: '03', title: 'Develop', description: 'Build with quality, agility, and best practices.' },
  { number: '04', title: 'Deliver', description: 'Implement solutions that drive real impact.' },
  { number: '05', title: 'Support', description: 'Provide ongoing optimization and support.' },
]
</script>
