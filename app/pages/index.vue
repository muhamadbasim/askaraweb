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
          <a href="#about">About</a>
          <a href="#vision">Vision</a>
          <a href="#services">Services</a>
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

    <section id="about" class="about section-frame" aria-labelledby="about-title">
      <div class="section-heading">
        <p class="eyebrow">About Us</p>
        <h2 id="about-title"><span>About</span> <em>Us</em></h2>
      </div>
      <div class="about__layout">
        <div>
          <p class="section-copy">
            PT Askara Digital Technology is a technology partner dedicated to delivering intelligent
            digital solutions that help organizations innovate, transform, and grow in the digital era.
          </p>
          <blockquote class="quote-card">
            <p>We bridge technology and business to create sustainable value and long-term impact.</p>
          </blockquote>
        </div>
        <div class="feature-grid" aria-label="Askara strengths">
          <article v-for="feature in features" :key="feature.title" class="feature-card">
            <span class="feature-card__icon" aria-hidden="true">{{ feature.icon }}</span>
            <h3>{{ feature.title }}</h3>
          </article>
        </div>
      </div>
    </section>

    <section id="vision" class="vision section-frame section-frame--dark" aria-labelledby="vision-title">
      <span class="digital-wave" aria-hidden="true" />
      <div class="section-heading section-heading--dark">
        <p class="eyebrow">Vision & Mission</p>
        <h2 id="vision-title"><span>Purposeful</span> <em>Innovation</em></h2>
      </div>
      <div class="vision__grid">
        <article class="vision-card vision-card--primary">
          <span class="vision-card__icon" aria-hidden="true">✦</span>
          <p class="eyebrow">Our Vision</p>
          <h3>Leading digital technology partner</h3>
          <p>
            To be a leading digital technology partner recognized for innovation,
            excellence, and measurable impact.
          </p>
        </article>
        <article class="vision-card">
          <span class="vision-card__icon" aria-hidden="true">▤</span>
          <p class="eyebrow">Our Mission</p>
          <ul class="mission-list">
            <li v-for="mission in missions" :key="mission">{{ mission }}</li>
          </ul>
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

    <section id="team" class="team section-frame" aria-labelledby="team-title">
      <div class="section-heading">
        <p class="eyebrow">Our Team</p>
        <h2 id="team-title"><span>Leadership</span> <em>Team</em></h2>
      </div>
      <div class="team-grid">
        <article v-for="member in team" :key="member.name" class="team-card">
          <div class="team-card__avatar" aria-hidden="true">{{ member.initials }}</div>
          <p class="eyebrow">{{ member.role }}</p>
          <h3>{{ member.name }}</h3>
          <span class="team-card__link" aria-label="LinkedIn profile slot">
            LinkedIn slot
          </span>
        </article>
      </div>
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
        <span>Deruzzi SPACE</span>
        <span>Jl. Sukajadi 25, Sukajadi, Jawa Barat 40162</span>
        <a href="mailto:info@askaradigital.com">info@askaradigital.com</a>
        <a href="tel:+6282258112280">0822-5811-2280</a>
        <a href="https://www.askaradigital.com">www.askaradigital.com</a>
      </address>
    </section>
  </main>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

let motionContext: gsap.Context | undefined
let sectionObserver: IntersectionObserver | undefined

onMounted(() => {
  if (!import.meta.client) return

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    document.documentElement.classList.add('motion-reduced')
    return
  }

  motionContext = gsap.context(() => {
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

    heroTimeline
      .from('.topbar', { autoAlpha: 0, y: -18, duration: 0.7 })
      .from('.hero .eyebrow', { autoAlpha: 0, y: 18, duration: 0.55 }, '-=0.25')
      .from('#hero-title span', { autoAlpha: 0, yPercent: 110, duration: 0.78, stagger: 0.12 }, '-=0.2')
      .from('.hero__lead', { autoAlpha: 0, y: 22, duration: 0.62 }, '-=0.32')
      .from('.hero__actions .btn', { autoAlpha: 0, y: 18, duration: 0.5, stagger: 0.08 }, '-=0.28')
      .from('.hero__visual', { autoAlpha: 0, x: 42, rotate: 1.5, duration: 0.85 }, '-=0.68')
      .from('.diagonal', { scaleY: 0, transformOrigin: 'bottom center', duration: 0.62, stagger: 0.1 }, '-=0.58')

    const sections = gsap.utils.toArray<HTMLElement>('.section-frame:not(.hero)')
    const revealSelector =
      '.section-heading, .section-copy, .quote-card, .feature-card, .vision-card, .service-card, .timeline__item, .value-card, .team-card, .contact-card'

    sections.forEach((section) => {
      gsap.set(section.querySelectorAll(revealSelector), { autoAlpha: 0, y: 34 })
    })

    sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const section = entry.target as HTMLElement
          const targets = section.querySelectorAll(revealSelector)

          gsap.to(targets, {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
            ease: 'power3.out',
            stagger: 0.08,
          })

          sectionObserver?.unobserve(section)
        })
      },
      { rootMargin: '0px 0px -20% 0px', threshold: 0.14 },
    )

    sections.forEach((section) => sectionObserver?.observe(section))

    gsap.to('.digital-wave', {
      yPercent: -5,
      xPercent: 2,
      duration: 5.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  })

})

onUnmounted(() => {
  sectionObserver?.disconnect()
  motionContext?.revert()
})

const features = [
  { title: 'Business-Oriented', icon: '▣' },
  { title: 'Experienced Team', icon: '◇' },
  { title: 'Scalable Architecture', icon: '▤' },
  { title: 'AI-Driven Innovation', icon: '✦' },
]

const missions = [
  'Deliver innovative and reliable digital solutions.',
  'Empower businesses through technology and data.',
  'Build long-term partnerships based on trust and value.',
  'Continuously innovate to create sustainable growth.',
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

const values = [
  {
    title: 'Collaboration',
    icon: '◎',
    description: 'We believe in the power of teamwork and strong partnerships.',
  },
  {
    title: 'Innovation',
    icon: '✦',
    description: 'We continuously explore new ideas to deliver better solutions.',
  },
  {
    title: 'Integrity',
    icon: '◇',
    description: 'We act with honesty, transparency, and responsibility.',
  },
  {
    title: 'Excellence',
    icon: '▣',
    description: 'We are committed to delivering the highest quality in everything we do.',
  },
]

const team = [
  { name: 'Putri Diana Oktavia', role: 'CEO', initials: 'PD' },
  { name: 'Muhamad Basim', role: 'CTO', initials: 'MB' },
  { name: 'Firman Febryan', role: 'COO', initials: 'FF' },
]
</script>
