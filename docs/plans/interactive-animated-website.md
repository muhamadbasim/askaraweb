# Askara Interactive Animated Website Plan

## Goal

Build a premium interactive website for **PT Askara Digital Technology** based on the company profile design references in `docs/design/references/company-profile/`.

The target experience should feel modern and interactive like a WebGL microsite, but remain suitable for a professional technology company: fast, accessible, SEO-friendly, and maintainable.

## Design Source

Primary design documentation:

- `docs/design/company-profile-reference.md`

Reference image folder:

- `docs/design/references/company-profile/`

## Recommended Stack

Recommended implementation stack:

- **Nuxt 4 / Vue 3 / TypeScript** for the website foundation.
- **CSS animations + GSAP** for most transitions.
- **Optional Three.js** only for decorative premium hero/background effects.

Why not canvas-only:

- The previously reviewed WebGL example was visually impressive but weak in accessibility and semantic content.
- Askara should keep real HTML headings, links, buttons, service cards, team cards, and contact content.
- Any canvas/WebGL layer should be progressive enhancement, not the only UI.

## Proposed Site Structure

1. **Hero**
   - Askara logo and wordmark.
   - Animated headline: `INNOVATE. TRANSFORM. ACCELERATE.`
   - Short value statement.
   - CTA buttons: `Explore Services`, `Contact Us`.
   - Diagonal navy/teal overlays and skyline/corporate glass visual.

2. **About Us**
   - About copy from slide.
   - Feature cards:
     - Business-Oriented
     - Experienced Team
     - Scalable Architecture
     - AI-Driven Innovation
   - Quote box.

3. **Vision & Mission**
   - Dark navy section.
   - Vision statement.
   - Mission bullet list.
   - Icon/divider animation.

4. **Services**
   - Six service cards:
     - Enterprise Software Development
     - Web & Mobile Apps
     - IT Consulting
     - AI & Automation
     - Cloud Infrastructure
     - Data & Business Intelligence

5. **Approach**
   - Five-step methodology timeline:
     - Discover
     - Design
     - Develop
     - Deliver
     - Support
   - Dark background with subtle digital wave / particle line animation.

6. **Values**
   - Four cards:
     - Collaboration
     - Innovation
     - Integrity
     - Excellence

7. **Team**
   - Three executive profile cards:
     - Putri Diana Oktavia — CEO
     - Muhamad Basim — CTO
     - Firman Febryan — COO
   - LinkedIn icon slots.

8. **Contact**
   - Final diagonal city CTA.
   - Contact details:
     - Deruzzi SPACE
     - Jl. Sukajadi 25, Sukajadi, Jawa Barat 40162
     - info@askaradigital.com
     - 0822-5811-2280
     - www.askaradigital.com

## Animation Plan

### Hero Animation

- Logo mark fades/slides in.
- Diagonal navy/teal panels wipe across the viewport.
- Skyline/corporate visual moves with subtle parallax.
- Headline words stagger in:
  - INNOVATE
  - TRANSFORM
  - ACCELERATE
- CTA buttons lift/fade in.

### Section Animations

- Cards reveal on scroll with subtle y-translation.
- Icon strokes animate/draw in.
- Dark sections use glowing line accents.
- Approach timeline progresses as the section enters viewport.
- Team cards use subtle hover lift or 3D tilt.

### Optional Three.js Layer

If used, keep it decorative:

- Abstract glass-building cluster.
- Teal particle/dot field.
- Mouse-based camera tilt.
- Reduced-motion fallback.
- Lazy loaded only on client.

## Accessibility Requirements

- One clear `<h1>` on the page.
- Native `<a>` and `<button>` controls.
- Visible keyboard focus states.
- All important content rendered as text, not inside canvas/image only.
- Decorative images/canvas use `aria-hidden="true"`.
- Use `prefers-reduced-motion` to disable heavy animations.
- Text contrast must remain readable over image overlays.

## Performance Requirements

- Static content should render before heavy animation assets.
- Lazy-load Three.js if used.
- Use optimized image formats for production.
- Keep design reference images in docs; do not use large slide images directly in runtime unless optimized.
- Hashed production assets should use long-term caching.

## Initial Implementation Tasks

### Phase 1 — Project Setup

1. Confirm or scaffold Nuxt/Vue project in this repo.
2. Add base folders:
   - `app/components/sections/`
   - `app/assets/css/`
   - `public/images/`
3. Add design tokens.
4. Add base layout and navigation.

### Phase 2 — Static Semantic Website

1. Build static hero.
2. Build About section.
3. Build Vision/Mission section.
4. Build Services section.
5. Build Approach section.
6. Build Values section.
7. Build Team section.
8. Build Contact section.

### Phase 3 — Motion Layer

1. Add CSS entrance animations.
2. Add scroll-triggered reveal.
3. Add hover interactions.
4. Add reduced-motion guard.

### Phase 4 — Premium Interactive Layer

1. Prototype optional Three.js hero background.
2. Add fallback if WebGL unsupported.
3. Run performance and browser QA.

### Phase 5 — QA

Run:

```bash
npm run typecheck
npm run lint
npm run build
```

Browser QA:

- Desktop layout.
- Mobile layout.
- Keyboard navigation.
- Console errors.
- Reduced motion.
- CTA links.

## Acceptance Criteria

- Site follows the company profile visual identity.
- All sections from the profile are represented.
- Website has premium motion/interactivity but remains corporate.
- Content is semantic and accessible.
- Build passes.
- No blank canvas-only experience.
