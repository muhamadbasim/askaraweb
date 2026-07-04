# Tech Stack — Askara Web

## 1. Ringkasan

Askara Web menggunakan stack modern berbasis **Nuxt 4, Vue 3, TypeScript, dan Cloudflare Pages**. Stack ini dipilih agar website company profile tetap cepat, SEO-friendly, maintainable, dan siap ditingkatkan dengan motion/premium interactive layer.

## 2. Runtime & Framework

| Layer | Teknologi | Status | Catatan |
|---|---|---|---|
| App framework | Nuxt 4 | Active | Menggunakan `future.compatibilityVersion: 4` |
| UI framework | Vue 3 | Active | Composition API via `<script setup>` |
| Language | TypeScript | Active | Typecheck via `nuxt typecheck` |
| Rendering/deploy preset | Nitro `cloudflare_pages` | Active | Output build ke `dist` |
| Package manager | npm | Active | Menggunakan `package-lock.json` bila tersedia |

## 3. Styling & Design System

| Kebutuhan | Teknologi/Pendekatan | Status |
|---|---|---|
| Base styling | Plain CSS | Active |
| Design tokens | CSS custom properties di `main.css` | Active |
| Responsive layout | CSS Grid, Flexbox, media queries | Active |
| Font loading | `@nuxtjs/google-fonts` | Active |
| Heading font | Montserrat | Active |
| Body font | Inter | Active |
| Motion safety | `prefers-reduced-motion` CSS guard + GSAP runtime guard | Active |

Token brand utama:

```css
--askara-navy: #071b3a;
--askara-navy-deep: #031126;
--askara-teal: #12afa4;
--askara-teal-bright: #19c7b7;
--askara-green: #2fbf8f;
--askara-white: #ffffff;
--askara-light-gray: #eef3f7;
--askara-line: #d8e1e8;
--askara-text: #15243a;
```

## 4. Animation & Interactive Layer

| Teknologi | Status | Penggunaan yang Direkomendasikan |
|---|---|---|
| CSS transitions/animations | Active | Hover lift, nav underline, timeline accent, diagonal accents |
| GSAP | Active | Hero stagger, reveal tweens, decorative wave drift |
| IntersectionObserver | Active | Scroll reveal trigger without blocking semantic content |
| Three.js | Active | Client-only decorative hero particle/grid layer; semantic content remains primary |

Rules:

- Jangan membuat website canvas-only.
- GSAP dipakai setelah konten semantic lengkap untuk progressive enhancement.
- Three.js harus lazy-loaded client-side jika digunakan, dan dekorasi hero ditunda sampai konten awal masuk viewport + browser idle/timeout.
- Semua motion harus punya fallback/reduced-motion behavior via CSS media query dan runtime `matchMedia` guard.
- Canvas/WebGL bersifat dekoratif (`aria-hidden`) dan harus di-skip ketika WebGL tidak tersedia, viewport mobile ringkas, atau reduced-motion aktif.

## 5. Deployment & Hosting

| Area | Teknologi | Status |
|---|---|---|
| Hosting target | Cloudflare Pages | Active |
| Deploy CLI | Wrangler | Installed |
| Build output | `dist` | Active |
| Project name | `askaraweb` | Active |
| Custom domain target | `askara.basim.id` | Target |
| Runtime preset | `cloudflare_pages` | Active |

Deploy command:

```bash
npm run typecheck
npm run build
npx wrangler pages deploy dist --project-name askaraweb
```

Package script tersedia:

```bash
npm run cf:deploy
```

Catatan: `npm run cf:deploy` menjalankan build dan deploy, tetapi tetap disarankan menjalankan `npm run typecheck` sebelum deploy.

## 6. Current Package Scripts

Dari `package.json`:

```json
{
  "dev": "nuxt dev",
  "build": "nuxt build",
  "generate": "nuxt generate",
  "preview": "nuxt preview",
  "typecheck": "nuxt typecheck",
  "cf:deploy": "npm run build && wrangler pages deploy dist --project-name askaraweb"
}
```

## 7. Dependencies

Current dependencies:

| Package | Tujuan |
|---|---|
| `nuxt` | Framework utama |
| `vue` | UI framework |
| `vue-router` | Routing Vue/Nuxt |
| `@nuxtjs/google-fonts` | Loading Inter dan Montserrat |
| `gsap` | Motion/animation layer |
| `three` | Client-only decorative hero 3D/WebGL layer |

Current dev dependencies:

| Package | Tujuan |
|---|---|
| `typescript` | TypeScript compiler/tooling |
| `vue-tsc` | Vue/Nuxt type checking |
| `@types/node` | Node type definitions |
| `@types/three` | TypeScript declarations for Three.js decorative layer |
| `wrangler` | Cloudflare Pages deploy CLI |

## 8. Nuxt Configuration Highlights

File: `nuxt.config.ts`

Key config:

```ts
export default defineNuxtConfig({
  compatibilityDate: '2026-07-03',
  future: {
    compatibilityVersion: 4,
  },
  modules: ['@nuxtjs/google-fonts'],
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: 'cloudflare_pages',
  },
  routeRules: {
    '/': { prerender: true },
  },
})
```

Stale asset mitigation:

- `app.buildAssetsDir` memakai commit SHA (`git rev-parse --short=12 HEAD`) atau env deployment SHA.
- Tujuannya mengurangi cache mismatch setelah Cloudflare deploy.

## 9. Browser & Platform Support

Target minimum:

- Modern Chromium browsers.
- Safari modern.
- Firefox modern.
- Mobile browser modern.

Layout harus dicek untuk:

- Desktop wide.
- Tablet landscape/portrait.
- Mobile narrow.

## 10. Quality & Verification Tools

Wajib sebelum menyatakan pekerjaan selesai:

```bash
npm run typecheck
npm run build
```

Opsional sesuai perubahan:

```bash
npm run dev
npm run preview
```

Browser verification:

- Visual smoke test.
- Console error check.
- Responsive check.
- CTA/link check.
- Reduced motion check untuk fitur motion.

## 11. Code Style Direction

- Gunakan Vue SFC dengan `<script setup lang="ts">`.
- Gunakan data arrays typed ketika dipindah ke `app/data/`.
- Hindari hard-coded konten tersebar di banyak komponen tanpa alasan.
- Section besar sebaiknya dipisah ke `app/components/sections/`.
- UI pattern reusable masuk ke `app/components/ui/`.
- Jangan menambahkan dependency baru tanpa alasan jelas.

## 12. Dependency Decision Log

| Dependency | Keputusan | Alasan |
|---|---|---|
| Nuxt | Keep | SEO, SSR/static/prerender, Cloudflare-friendly |
| Vue | Keep | Component model stabil dan cocok untuk interactive UI |
| TypeScript | Keep | Safety untuk scale fitur |
| GSAP | Keep | Motion premium lebih mudah dan robust |
| Three.js | Keep active but progressive | Dipakai untuk decorative hero canvas; tetap lazy/client-only dengan reduced-motion/WebGL fallback |
| Tailwind CSS | Not used currently | Plain CSS cukup untuk brand-specific custom design |

## 13. Adding New Technology

Sebelum menambah library baru, cek:

1. Apakah kebutuhan bisa diselesaikan dengan CSS/Vue/Nuxt existing?
2. Apakah library menambah bundle besar?
3. Apakah kompatibel dengan Cloudflare Pages?
4. Apakah accessible dan punya reduced-motion strategy?
5. Apakah perlu dicatat di `TECHSTACK.md` dan PRD?

## 14. Versioning & Release Notes

- Current version is tracked in `package.json`, `package-lock.json`, `app/data/release.ts`, and `CHANGELOG.md`.
- Every meaningful Askara web change should bump the version, update `CHANGELOG.md`, commit, push to GitHub, and deploy/verify Cloudflare Pages.
- Visible site version is rendered subtly in the contact section from `app/data/release.ts`.

## 15. Environment Notes

Local workspace:

```text
/home/ubuntu/app-askara-web
```

Repository:

```text
https://github.com/muhamadbasim/askaraweb
```

Kanban board:

```text
askara-web
```
