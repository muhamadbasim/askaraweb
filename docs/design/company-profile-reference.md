# Askara Company Profile Design Reference

This folder stores the source visual references for the Askara interactive website.

## Reference Images

| File | Slide | Purpose |
|---|---|---|
| `references/company-profile/01-cover-company-profile.jpg` | Company Profile Cover | Hero direction, skyline, diagonal navy/teal geometry, headline rhythm |
| `references/company-profile/02-about-us.jpg` | About Us | About content, reception/office visual, feature cards, quote box |
| `references/company-profile/03-vision-mission.jpg` | Vision & Mission | Dark section style, icon + divider structure, mission bullets |
| `references/company-profile/04-services.jpg` | Our Services | Services grid, two-column layout, icons, skyscraper accent |
| `references/company-profile/05-approach-dark.jpg` | Our Approach | Dark methodology timeline, glowing digital wave, 5-step process |
| `references/company-profile/06-values.jpg` | Our Values | Values cards, white section, circular icon badges |
| `references/company-profile/07-contact.jpg` | Contact | Contact CTA, diagonal city overlay, footer slogan |
| `references/company-profile/08-team.jpg` | Our Team | Team profile cards, LinkedIn affordance, executive layout |
| `references/company-profile/09-approach-dark-alt.jpg` | Our Approach Alt | Alternate/reference copy of dark methodology slide |

## Brand Direction

### Identity

- Company: **PT Askara Digital Technology**
- Brand text: **ASKARA DIGITAL TECHNOLOGY**
- Slogan: **INNOVATE. TRANSFORM. ACCELERATE.**
- Website shown in reference: **www.askaradigital.com**

### Palette

Use these approximate tokens as initial implementation values:

```css
:root {
  --askara-navy: #071B3A;
  --askara-navy-deep: #031126;
  --askara-teal: #12AFA4;
  --askara-teal-bright: #19C7B7;
  --askara-green: #2FBF8F;
  --askara-white: #FFFFFF;
  --askara-light-gray: #EEF3F7;
  --askara-line: #D8E1E8;
  --askara-text: #15243A;
}
```

### Typography

- Bold uppercase headings.
- Navy first word + teal/green emphasized second word.
- Wide letter spacing for the ASKARA wordmark.
- Clean corporate sans-serif style.

Recommended fonts:

```css
--font-heading: 'Montserrat', 'Inter', system-ui, sans-serif;
--font-body: 'Inter', system-ui, sans-serif;
```

### Visual Motifs

- Diagonal navy/teal geometric overlays.
- Corporate glass skyscraper imagery.
- Modern reception/office environment.
- Teal dot-grid accent pattern.
- Faint curved gray technical line patterns.
- Circular teal icon badges.
- Thin divider lines between cards/items.
- Dark navy sections for vision/mission and approach.
- Glowing digital wave or particle landscape for methodology section.

## Website Content Extracted from Slides

### About

> PT Askara Digital Technology is a technology partner dedicated to delivering intelligent digital solutions that help organizations innovate, transform, and grow in the digital era.

Quote:

> We bridge technology and business to create sustainable value and long-term impact.

Feature points:

- Business-Oriented
- Experienced Team
- Scalable Architecture
- AI-Driven Innovation

### Vision

> To be a leading digital technology partner recognized for innovation, excellence, and measurable impact.

### Mission

- Deliver innovative and reliable digital solutions
- Empower businesses through technology and data
- Build long-term partnerships based on trust and value
- Continuously innovate to create sustainable growth

### Services

- Enterprise Software Development — Custom software solutions to drive innovation and growth.
- Web & Mobile Apps — Scalable and intuitive applications built for exceptional user experiences.
- IT Consulting — Strategic advisory and technology consulting to achieve your goals.
- AI & Automation — Intelligent automation to optimize processes and accelerate results.
- Cloud Infrastructure — Secure, scalable, and reliable cloud solutions that power your business.
- Data & Business Intelligence — Transform data into actionable insights to make smarter business decisions.

### Approach

1. Discover — Understand business needs and challenges.
2. Design — Craft the right solution and user experience.
3. Develop — Build with quality, agility, and best practices.
4. Deliver — Implement solutions that drive real impact.
5. Support — Provide ongoing optimization and support.

### Values

- Collaboration — We believe in the power of teamwork and strong partnerships.
- Innovation — We continuously explore new ideas to deliver better solutions.
- Integrity — We act with honesty, transparency, and responsibility.
- Excellence — We are committed to delivering the highest quality in everything we do.

### Contact

- Location: Deruzzi SPACE
- Address: Jl. Sukajadi 25, Sukajadi, Jawa Barat 40162
- Email: info@askaradigital.com
- Phone: 0822-5811-2280
- Website: www.askaradigital.com

## Animation Translation Notes

The website should feel interactive like a premium WebGL microsite, but keep the corporate deck’s clarity and accessibility.

Suggested animation mapping:

- Cover slide → animated hero with diagonal wipe and skyline parallax.
- About slide → office/reception visual reveal with feature cards floating in.
- Vision/Mission slide → dark section with icon pulse and divider draw animation.
- Services slide → service cards reveal in two-column grid, icons animate on hover.
- Approach slide → horizontal timeline that progresses on scroll; digital wave background animates subtly.
- Values slide → icon badges reveal with stagger and hover lift.
- Team slide → profile cards with subtle 3D tilt and LinkedIn link affordance.
- Contact slide → final CTA with city overlay and animated diagonal panel.

## Accessibility Rules

- Do not make the site canvas-only.
- Keep all content in semantic HTML.
- Buttons and links must be native controls.
- WebGL/Three.js, if used, must be decorative or have an HTML fallback.
- Respect `prefers-reduced-motion`.
- Ensure visible keyboard focus styles.
