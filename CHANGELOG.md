# Changelog — Askara Web

All notable Askara Web changes are tracked here. Version changes follow SemVer where practical:

- **Major**: large redesign or breaking architecture/deployment change.
- **Minor**: new visible feature, new phase, or substantial enhancement.
- **Patch**: bug fix, copy polish, metadata, or small visual refinement.

## v0.4.0 — 2026-07-05

### Added

- Website-native `Industry Solutions` showcase adapted from the comprehensive digital transformation infographic.
- 10 detailed solution tracks covering manufacturing ERP, education, clinic/beauty, hotel, restaurant, laundry, outsourcing, franchise, BPR/fintech, and AI digital employee use cases.
- Capability chips and business-impact panels for each industry solution card.
- `One Technology Partner` CTA strip with six trust pillars: integration, real-time accuracy, automation, data-driven decisions, security/reliability, and professional support.

### Changed

- Expanded `Why Askara` from four conversion points into six trust indicators aligned with enterprise grade, AI-powered, scalable, custom, deployable, and long-term partnership positioning.
- Updated release metadata and visible version badge to `v0.4.0 · Industry Solutions`.
- Corrected the phone CTA href source while keeping the public formatted label unchanged.

### Verified

- `npm run typecheck` passed.
- `npm run build` passed.
- `git diff --check` passed.
- Browser QA verified one `<h1>`, 10 industry cards, 60 capability chips, 10 benefit panels, 6 partner pillars, 6 Why Askara cards, valid contact CTA hrefs, `v0.4.0 · Industry Solutions` badge, and no console errors.
- Desktop and mobile screenshots captured under `qa/screenshots/` for visual proof.

## v0.3.0 — 2026-07-05

### Added

- WhatsApp consultation CTA in the hero and contact funnel.
- `Why Askara` conversion proof section with business-first differentiators.
- `Industries Served` section for client-facing sector positioning.

### Changed

- Strengthened contact copy around consultation and measurable delivery.
- Expanded homepage navigation for Why Askara and Industries anchors.
- Updated release metadata and visible version badge to `v0.3.0 · Conversion Polish`.

### Verified

- `npm run typecheck` passed.
- `npm run build` passed.
- Browser QA verified new sections, CTA links, loaded team images, and no console errors.

## v0.2.2 — 2026-07-05

### Changed

- Hardened scroll-reveal behavior so section content remains visible by default and animates progressively when scrolled into view.
- Improved mobile headline sizing to avoid edge clipping on narrow devices.
- Loaded executive portrait assets eagerly so visual proof/full-page captures include team imagery reliably.
- Corrected the phone CTA `tel:` link while keeping the formatted phone label readable.
- Captured desktop, tablet, and mobile responsive QA screenshots for visual proof.

### Verified

- `npm run typecheck` passed.
- `npm run build` passed.
- Responsive screenshot capture covered desktop `1440px`, tablet `834px`, and mobile `390px` widths.
- Browser QA verified no console errors and live version badge renders correctly.

## v0.2.1 — 2026-07-05

### Changed

- Deferred decorative Three.js startup until the hero canvas is near viewport and the browser is idle or reaches a safe timeout.
- Skipped WebGL decoration on compact mobile viewports to keep mobile page load lighter.
- Updated release metadata and visible version badge to `v0.2.1 · Performance Polish`.

### Verified

- `npm run typecheck` passed.
- `npm run build` passed.
- Browser smoke verified no console errors and the release badge renders correctly.

## v0.2.0 — 2026-07-05

### Added

- Phase 4 premium decorative WebGL hero layer using client-only Three.js.
- Navy/teal particle-grid motif behind the hero content.
- Runtime fallback for unsupported WebGL.
- Reduced-motion guard that skips decorative WebGL for users who prefer reduced motion.
- Subtle visible site version badge in the contact section.

### Changed

- Updated `PRD.md`, `BLUEPRINT.md`, and `TECHSTACK.md` to mark Phase 4 WebGL layer as active/done.
- Added `@types/three` for TypeScript verification.

### Verified

- `npm run typecheck` passed.
- `npm run build` passed.
- Browser smoke verified on `askara.basim.id` and Cloudflare deploy preview.
- Live browser console showed no JavaScript errors after the WebGL fallback fix.

## v0.1.0 — 2026-07-04

### Added

- Initial Nuxt/Vue/TypeScript foundation.
- Static semantic company profile sections.
- Motion layer with GSAP, scroll reveal, hover polish, and reduced-motion handling.
- Team portraits extracted into runtime assets.
- SEO/social metadata, favicon/app icons, and Open Graph preview image.
- Cloudflare Pages deployment setup for Askara Web.
