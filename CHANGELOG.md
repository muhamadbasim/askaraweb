# Changelog — Askara Web

All notable Askara Web changes are tracked here. Version changes follow SemVer where practical:

- **Major**: large redesign or breaking architecture/deployment change.
- **Minor**: new visible feature, new phase, or substantial enhancement.
- **Patch**: bug fix, copy polish, metadata, or small visual refinement.

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
