# Blueprint — Askara Web

## 1. Visi Implementasi

Askara Web dibangun sebagai **single-page interactive company profile** dengan fondasi semantic HTML, Nuxt/Vue, dan styling corporate premium. Semua konten inti harus dapat dibaca, diindex, dan diakses walaupun layer animasi belum aktif.

Inspirasi visual berasal dari company profile Askara: navy + teal, diagonal geometry, corporate skyline/glass-building, dot grid, dark technology sections, dan headline uppercase.

## 2. Prinsip Arsitektur

1. **Content-first**  
   Konten profil perusahaan selalu menjadi layer utama.

2. **Progressive enhancement**  
   CSS animation, GSAP, dan optional Three.js hanya memperkaya pengalaman, bukan menggantikan konten.

3. **Component-ready**  
   Walaupun saat ini halaman utama masih sederhana, struktur harus mudah dipecah menjadi komponen section.

4. **Deploy-safe**  
   Build harus aman untuk Cloudflare Pages dan menghindari stale chunk/cache mismatch.

5. **Documentation-driven**  
   PRD, Blueprint, Tech Stack, design reference, dan Kanban menjadi sumber koordinasi kerja.

## 3. Struktur Repository Saat Ini

```text
askaraweb/
├── app/
│   ├── app.vue
│   ├── error.vue
│   ├── assets/
│   │   └── css/
│   │       └── main.css
│   ├── components/
│   │   ├── DecorativeHeroCanvas.client.vue
│   │   └── sections/
│   │       ├── HeroSection.vue
│   │       ├── AboutSection.vue
│   │       ├── VisionMissionSection.vue
│   │       ├── ServicesSection.vue
│   │       ├── WhyAskaraSection.vue
│   │       ├── IndustriesSection.vue
│   │       ├── ApproachSection.vue
│   │       ├── ValuesSection.vue
│   │       ├── TeamSection.vue
│   │       └── ContactSection.vue
│   ├── data/
│   │   └── company.ts
│   └── pages/
│       └── index.vue
├── docs/
│   ├── design/
│   │   ├── company-profile-reference.md
│   │   └── references/company-profile/
│   └── plans/
│       └── interactive-animated-website.md
├── public/
│   └── images/
│       ├── brand/
│       ├── references/hero-cover.jpg
│       └── team/
├── dist/                    # Generated production build output
├── nuxt.config.ts
├── package.json
├── tsconfig.json
├── PRD.md
├── BLUEPRINT.md
└── TECHSTACK.md
```

## 4. Recommended Target Structure

Ketika fitur bertambah, refactor halaman utama ke struktur berikut:

```text
app/
├── components/
│   ├── layout/
│   │   ├── SiteHeader.vue
│   │   └── SiteFooter.vue
│   ├── sections/
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── VisionMissionSection.vue
│   │   ├── ServicesSection.vue
│   │   ├── WhyAskaraSection.vue
│   │   ├── IndustriesSection.vue
│   │   ├── ApproachSection.vue
│   │   ├── ValuesSection.vue
│   │   ├── TeamSection.vue
│   │   └── ContactSection.vue
│   └── ui/
│       ├── BrandMark.vue
│       ├── SectionHeading.vue
│       ├── AppButton.vue
│       └── RevealCard.vue
├── composables/
│   ├── useReducedMotion.ts
│   └── useScrollReveal.ts
├── data/
│   ├── company.ts
│   ├── services.ts
│   ├── approach.ts
│   ├── values.ts
│   └── team.ts
├── assets/
│   └── css/
│       ├── main.css
│       ├── tokens.css
│       ├── base.css
│       └── animations.css
└── pages/
    └── index.vue
```

## 5. Page Composition

Target urutan section:

1. `HeroSection`
2. `AboutSection`
3. `VisionMissionSection`
4. `ServicesSection`
5. `WhyAskaraSection`
6. `IndustriesSection`
7. `ApproachSection`
8. `ValuesSection`
9. `TeamSection`
10. `ContactSection`

Saat ini `index.vue` hanya menjadi page composer dan static semantic company profile sudah dipisah ke section components:

- Hero
- About + quote box
- Vision & Mission
- Services
- Why Askara conversion proof points
- Industries Served sector positioning
- Approach
- Values
- Team
- Contact

Catatan implementasi terbaru:

- Static content utama sudah dipindahkan ke `app/data/company.ts`.
- Section utama sudah dipisah ke `app/components/sections/`.
- Conversion content (`whyAskara`, `industries`, `technologyPartnerPillars`, WhatsApp CTA) berada di `app/data/company.ts` agar CTA/contact funnel dan section baru tetap terpusat.
- `IndustriesSection.vue` sekarang menjadi website-native adaptation dari infographic solusi transformasi digital: 10 industry cards, capability chips, business-impact panels, dan `One Technology Partner` CTA strip. Konten penting tetap HTML text, bukan gambar brochure statis.
- Hero memiliki optional decorative WebGL canvas via `DecorativeHeroCanvas.client.vue`; canvas ini hanya progressive enhancement, `aria-hidden`, client-only, dan tidak aktif saat `prefers-reduced-motion` atau WebGL tidak tersedia.

## 6. Data Model

### 6.1 Company

```ts
export interface CompanyProfile {
  name: string
  legalName: string
  slogan: string
  description: string
  quote: string
  contact: {
    location: string
    address: string
    email: string
    phone: string
    website: string
  }
}
```

### 6.2 Service

```ts
export interface ServiceItem {
  title: string
  icon: string
  description: string
}
```

### 6.3 Conversion Proof / Industry

```ts
export interface ConversionProof {
  metric: string
  title: string
  description: string
}

export interface IndustryItem {
  title: string
  icon: string
  description: string
}

export interface IndustrySolution {
  title: string
  subtitle: string
  icon: string
  accent: string
  description: string
  capabilities: string[]
  benefits: string[]
}
```

### 6.4 Approach

```ts
export interface ApproachStep {
  number: string
  title: string
  description: string
}
```

### 6.5 Value

```ts
export interface ValueItem {
  title: string
  icon: string
  description: string
}
```

### 6.6 Team

```ts
export interface TeamMember {
  name: string
  role: string
  image?: string
  linkedinUrl?: string
}
```

## 7. Visual System

### 7.1 Brand Tokens

Core tokens saat ini berada di `app/assets/css/main.css`:

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
--font-heading: 'Montserrat', 'Inter', system-ui, sans-serif;
--font-body: 'Inter', system-ui, sans-serif;
```

### 7.2 Motif Visual

- Diagonal navy/teal panel.
- Corporate glass-building image.
- Teal dot grid.
- Circular icon badge.
- Dark navy section untuk Vision/Mission dan Approach.
- Subtle glow / radial gradient.
- Thin line divider.

### 7.3 Motion Direction

Motion harus terasa premium dan corporate:

- Headline stagger reveal.
- Diagonal wipe pada hero.
- Card reveal on scroll.
- Hover lift halus pada cards.
- Timeline progress animation.
- Decorative particle/digital wave untuk Approach.

Hindari:

- Motion terlalu playful/game-like.
- Animasi blocking yang membuat konten lama muncul.
- WebGL sebagai satu-satunya UI.

## 8. Accessibility Blueprint

Checklist untuk setiap section:

- Heading section menggunakan urutan logis.
- Elemen interaktif memakai `<a>` atau `<button>`.
- `aria-labelledby` untuk section utama.
- Decorative visual menggunakan `aria-hidden="true"` bila tidak informatif.
- Image penting memiliki alt text deskriptif.
- Focus state terlihat.
- Layout tetap usable di keyboard navigation.
- Reduced motion mengurangi transisi berat.

## 9. Deployment Blueprint

Target deployment:

- Platform: **Cloudflare Pages**
- Nitro preset: `cloudflare_pages`
- Output deploy: `dist`
- Project name: `askaraweb`
- Desired custom domain: `askara.basim.id`

Command utama:

```bash
npm run typecheck
npm run build
npx wrangler pages deploy dist --project-name askaraweb
```

Catatan penting:

- Jangan klaim deploy sukses tanpa output Wrangler/live HTTP check.
- Jangan ubah DNS destruktif tanpa approval eksplisit.
- Build assets menggunakan commit SHA melalui `app.buildAssetsDir` untuk mengurangi stale chunk issue.

## 10. Quality Gates

Sebelum pekerjaan dianggap selesai:

```bash
npm run typecheck
npm run build
```

Jika ada perubahan UI besar, lakukan juga:

- Browser check desktop.
- Browser check mobile/tablet.
- Console error check.
- Reduced motion check jika motion layer berubah.
- CTA link check.

## 11. Kanban Workflow

Board resmi: `askara-web`

Gunakan Kanban untuk phase/fitur baru:

```bash
hermes kanban --board askara-web list
hermes kanban --board askara-web create "Phase X: nama pekerjaan" --body "..."
hermes kanban --board askara-web complete <task_id>
```

Saat menyelesaikan task, laporan minimal berisi:

- Apa yang berubah.
- File yang diubah.
- Hasil `npm run typecheck` dan `npm run build`.
- Commit SHA/push status.
- Kanban task ID/status.

## 12. Extension Points untuk Fitur Baru

| Jenis fitur | Lokasi yang disarankan |
|---|---|
| Section baru | `app/components/sections/` + data di `app/data/` |
| UI reusable | `app/components/ui/` |
| Motion reusable | `app/composables/` atau `app/assets/css/animations.css` |
| Konten statis | `app/data/` |
| Gambar publik runtime | `public/images/` |
| Referensi desain non-runtime | `docs/design/references/` |
| Dokumentasi planning | `docs/plans/` atau root docs |

## 13. Next Recommended Work

1. Review Phase 3 motion layer in browser across desktop/mobile and continue polish if needed.
2. Prepare Phase 4 optional decorative WebGL/Three.js layer only if performance and accessibility remain healthy.
