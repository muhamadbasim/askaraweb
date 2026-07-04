# Product Requirements Document (PRD) — Askara Web

## 1. Ringkasan Produk

**Askara Web** adalah website company profile interaktif untuk **PT Askara Digital Technology**. Website ini menjadi kanal utama untuk memperkenalkan identitas perusahaan, layanan digital, pendekatan kerja, nilai perusahaan, tim, dan kontak bisnis secara profesional.

Arah pengalaman yang ditargetkan adalah website corporate premium dengan inspirasi microsite interaktif/WebGL, namun tetap **semantic, SEO-friendly, accessible, cepat, dan mudah dikembangkan**.

## 2. Tujuan

1. Menampilkan profil PT Askara Digital Technology secara jelas dan kredibel.
2. Mengkomunikasikan slogan utama: **INNOVATE. TRANSFORM. ACCELERATE.**
3. Menjelaskan layanan digital Askara kepada calon klien.
4. Menyediakan jalur kontak yang mudah diakses.
5. Menjadi foundation yang rapi untuk pengembangan fitur baru di phase berikutnya.
6. Menghadirkan visual navy + teal corporate technology sesuai company profile.

## 3. Target Pengguna

| Pengguna | Kebutuhan Utama |
|---|---|
| Calon klien / decision maker | Memahami kredibilitas, layanan, dan cara menghubungi Askara |
| Partner bisnis | Melihat positioning, nilai, dan kemampuan teknologi Askara |
| Talent / calon anggota tim | Mengenal perusahaan, budaya, dan tim eksekutif |
| Internal Askara | Memiliki website company profile yang bisa terus dikembangkan |

## 4. Positioning Produk

Askara Web harus terasa seperti:

- **Corporate technology website**, bukan landing page generik.
- **Premium dan interaktif**, tetapi tidak mengorbankan aksesibilitas.
- **Content-first**, bukan canvas/WebGL-only.
- **Maintainable**, sehingga fitur baru dapat ditambahkan tanpa merombak struktur besar.

## 5. Konten Utama

### 5.1 Hero

- Brand: **ASKARA DIGITAL TECHNOLOGY**
- Headline: **Innovate. Transform. Accelerate.**
- Value statement: empowering businesses through intelligent digital solutions.
- CTA:
  - Explore Services
  - Let’s Connect
- Visual: skyline / corporate glass building dengan diagonal navy-teal overlays.

### 5.2 About Us

Copy utama:

> PT Askara Digital Technology is a technology partner dedicated to delivering intelligent digital solutions that help organizations innovate, transform, and grow in the digital era.

Supporting quote:

> We bridge technology and business to create sustainable value and long-term impact.

Feature points:

- Business-Oriented
- Experienced Team
- Scalable Architecture
- AI-Driven Innovation

### 5.3 Vision & Mission

Vision:

> To be a leading digital technology partner recognized for innovation, excellence, and measurable impact.

Mission:

- Deliver innovative and reliable digital solutions.
- Empower businesses through technology and data.
- Build long-term partnerships based on trust and value.
- Continuously innovate to create sustainable growth.

### 5.4 Services

- Enterprise Software Development
- Web & Mobile Apps
- IT Consulting
- AI & Automation
- Cloud Infrastructure
- Data & Business Intelligence

### 5.5 Approach

Metodologi 5 tahap:

1. Discover — Understand business needs and challenges.
2. Design — Craft the right solution and user experience.
3. Develop — Build with quality, agility, and best practices.
4. Deliver — Implement solutions that drive real impact.
5. Support — Provide ongoing optimization and support.

### 5.6 Values

- Collaboration
- Innovation
- Integrity
- Excellence

### 5.7 Team

- Putri Diana Oktavia — CEO
- Muhamad Basim — CTO
- Firman Febryan — COO

### 5.8 Contact

- Location: Deruzzi SPACE
- Address: Jl. Sukajadi 25, Sukajadi, Jawa Barat 40162
- Email: info@askaradigital.com
- Phone: 0822-5811-2280
- Website: www.askaradigital.com

## 6. Kebutuhan Fungsional

| ID | Requirement | Prioritas | Status |
|---|---|---:|---|
| FR-001 | Website memiliki struktur single-page company profile | High | Done |
| FR-002 | Navigasi anchor ke Services, Approach, Contact | High | Done |
| FR-003 | Hero menampilkan brand, headline, CTA, dan visual utama | High | Done |
| FR-004 | About section dengan copy, quote box, dan feature cards | High | Done |
| FR-005 | Services section dengan 6 service cards | High | Done |
| FR-006 | Approach section dengan 5-step methodology | High | Done |
| FR-007 | Vision & Mission section | High | Done |
| FR-008 | Values section | Medium | Done |
| FR-009 | Team section | Medium | Done |
| FR-010 | Contact section dengan email, telepon, website, alamat | High | Done |
| FR-011 | Error/recovery page untuk stale chunk/cache issue | Medium | Done |
| FR-012 | Motion layer untuk entrance, scroll reveal, hover states | Medium | Done |
| FR-013 | Optional decorative Three.js/WebGL layer | Low | Pending |
| FR-014 | Reduced-motion fallback | High | Done |
| FR-015 | SEO metadata dasar | High | Done |

## 7. Kebutuhan Non-Fungsional

### 7.1 Accessibility

- Satu `<h1>` utama.
- Semua konten penting berupa HTML text, bukan hanya gambar/canvas.
- Link dan button memakai native element.
- Focus state terlihat jelas.
- Decorative canvas/WebGL harus `aria-hidden="true"`.
- Respect `prefers-reduced-motion`.
- Contrast teks harus tetap readable di atas overlay.

### 7.2 Performance

- Static content harus render sebelum animasi berat.
- Image runtime harus dioptimasi sebelum production final.
- Three.js hanya optional progressive enhancement dan lazy-loaded jika dipakai.
- Build assets menggunakan hashed path untuk menghindari stale cache.

### 7.3 SEO

- Title dan meta description jelas.
- Struktur heading berurutan.
- Konten utama indexable.
- Open Graph metadata tersedia.

### 7.4 Maintainability

- Komponen section dipisah ketika halaman makin kompleks.
- Data konten layanan/team/values bisa dipindah ke file data terpisah.
- Dokumentasi teknis dan blueprint harus diperbarui ketika ada fitur baru.

## 8. Phase Pengembangan

| Phase | Fokus | Output |
|---|---|---|
| Phase 1 | Foundation | Nuxt/Vue/TS scaffold, CSS token, layout awal, deploy Cloudflare |
| Phase 2 | Static semantic website | Semua section company profile lengkap dalam HTML semantic |
| Phase 3 | Motion layer | CSS/GSAP animations, scroll reveal, hover polish, reduced motion |
| Phase 4 | Premium interactive layer | Optional Three.js decorative hero/background, fallback, perf QA |
| Phase 5 | QA & release hardening | Typecheck, build, browser QA, accessibility, responsive, Cloudflare checks |

## 9. Acceptance Criteria

Sebuah phase/fitur dianggap selesai jika:

1. Requirement yang terkait sudah diimplementasikan.
2. Tidak ada regresi pada layout utama desktop/mobile.
3. `npm run typecheck` berhasil.
4. `npm run build` berhasil.
5. Tidak ada error console kritikal saat dicek di browser.
6. Konten tetap semantic dan dapat diakses tanpa JavaScript berat.
7. Perubahan dicatat di Git dan Kanban jika task tracking aktif.

## 10. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Website terlalu bergantung pada animasi/canvas | SEO/accessibility buruk | HTML semantic sebagai fondasi, canvas hanya dekoratif |
| Stale asset cache di Cloudflare | User melihat blank/error | Build asset dir berbasis commit SHA dan error recovery page |
| Gambar reference terlalu besar untuk runtime | Performance turun | Optimasi image sebelum production final |
| Section makin besar di satu file | Maintainability turun | Refactor ke `app/components/sections/` |
| Motion terlalu agresif | Corporate feel berkurang | Gunakan motion halus dan respect reduced motion |

## 11. Change Management

Setiap fitur baru sebaiknya menambahkan catatan berikut:

- Requirement ID baru di PRD.
- Dampak arsitektur di `BLUEPRINT.md`.
- Library/config baru di `TECHSTACK.md`.
- Task Kanban jika pekerjaan lebih dari satu langkah.
- Verifikasi nyata sebelum dinyatakan selesai.
