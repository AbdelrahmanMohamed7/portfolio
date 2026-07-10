---
name: Abdelrahman Mohamed Portfolio
description: A practical, evidence-led portfolio for thoughtful frontend and full-stack engineering.
colors:
  soft-chalk: "#f4efe5"
  canvas-off-white: "#f7f5ef"
  surface-white: "#ffffff"
  structural-ink: "#151412"
  structural-ink-deep: "#0f0f0e"
  structural-surface: "#171715"
  measured-teal: "#0f766e"
  measured-teal-deep: "#115e59"
  teal-ink: "#16423c"
  teal-wash: "#eef3f1"
  teal-wash-active: "#e1eee9"
  evidence-amber: "#d9a441"
  amber-ink: "#b06b00"
  amber-muted: "#87651f"
  warm-hover: "#fffaf0"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "3rem / 3.75rem / 4.5rem"
    fontWeight: 900
    lineHeight: 1.02
  headline:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1.875rem / 2.25rem"
    fontWeight: 900
    lineHeight: 1.25
  title:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1.25rem / 1.5rem"
    fontWeight: 600
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1rem / 1.125rem"
    fontWeight: 400
    lineHeight: "1.75rem / 2rem"
  label:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.75rem / 0.875rem"
    fontWeight: 700
    letterSpacing: "0.14em / 0.18em / 0.22em"
rounded:
  subtle: "0.125rem"
  pill: "9999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "1.5rem"
  xl: "2rem"
  section: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.measured-teal}"
    textColor: "{colors.surface-white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.5rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.measured-teal-deep}"
    textColor: "{colors.surface-white}"
  button-secondary:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.structural-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.5rem"
    height: "3rem"
  project-card:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.structural-ink}"
    rounded: "{rounded.subtle}"
    padding: "1.5rem"
  technology-chip:
    backgroundColor: "{colors.teal-wash}"
    textColor: "{colors.teal-ink}"
    rounded: "{rounded.pill}"
    padding: "0.375rem 0.75rem"
---

# Design System: Abdelrahman Mohamed Portfolio

## 1. Overview

**Creative North Star: "The Engineer's Workbench"**

The current interface resembles a well-kept workbench: practical artifacts are placed in view, labels make them easy to inspect, and structure takes priority over decoration. Soft Chalk supports long-form browsing while Structural Ink creates decisive dark bands; Measured Teal handles action and Evidence Amber highlights technical signals.

The system is practical and approachable, with a hybrid depth model: sections stay flat and structural while interactive controls and project surfaces lift lightly in response. Its strongest existing qualities are direct project imagery, compact technical tags, clear section contrast, and a responsive maximum-width layout. It must evolve toward PRODUCT.md's evidence-led case-study narrative without becoming a generic template or an AI-generated landing page.

**Key Characteristics:**

- Evidence-forward project imagery and repository access.
- Warm neutral canvases contrasted with near-black structural sections.
- Teal actions, amber signals, square content surfaces, and pill controls.
- Compact mobile-first spacing inside a centered `max-w-6xl` frame.
- Restrained translation and shadow changes on hover.

**The Evidence Before Ornament Rule.** Screenshots and technical decisions must command more attention than decorative treatments.

**Current-state risk.** The implementation uses many one-off Tailwind color literals rather than shared CSS tokens. Treat the frontmatter as an inventory of the current palette, not proof that the code already has a centralized token architecture.

## 2. Colors

Soft Chalk and Structural Ink form the dominant working surfaces; Measured Teal marks actions, while Evidence Amber calls attention to supporting technical signals.

### Primary

- **Measured Teal:** Primary actions, selection color, interactive emphasis, and project-title hover states. The deeper variant is reserved for hover feedback.

### Secondary

- **Evidence Amber:** Metrics, dark-section labels, and technical icon surfaces. Amber Ink and Amber Muted currently support labels on light backgrounds.

### Neutral

- **Soft Chalk:** Main page and screenshot-gallery background.
- **Canvas Off-white:** Global fallback canvas and light hover fill.
- **Surface White:** Project cards, secondary actions, and high-contrast controls.
- **Structural Ink:** Primary text, profile panel, and dark interactive states.
- **Structural Ink Deep / Structural Surface:** Contact-section background and its inner panel.

**The Two-Signal Rule.** Measured Teal communicates action; Evidence Amber communicates supporting evidence. Never use both as competing calls to action in the same cluster.

**Current-state risks.** Several text colors use opacity over variable backgrounds (`black/58`, `white/60`, `white/62`, `white/68`, and `white/70`). These combinations require measured WCAG 2.2 AA verification and must not be assumed compliant. Amber label variants also require contrast checks on Soft Chalk and white. The three near-white surfaces and three near-black surfaces are visually close enough to create accidental inconsistency if their roles are not enforced.

## 3. Typography

**Display Font:** System UI sans-serif stack
**Body Font:** System UI sans-serif stack
**Label Font:** System UI sans-serif stack

**Character:** A single native sans-serif stack carries the interface through weight and scale. It renders immediately without a web-font request, avoids font-loading layout shifts, and preserves a direct, platform-familiar voice.

### Hierarchy

- **Display** (900, 3rem–4.5rem, 1.02): Hero statement only.
- **Headline** (900, 1.875rem–2.25rem, tight): Major section headings.
- **Title** (600–900, 1.25rem–1.5rem): Project and skill-group names.
- **Body** (400, 1rem–1.125rem, 1.75rem–2rem): Descriptions and narrative copy; keep prose at 65–75 characters per line.
- **Label** (600–700, 0.75rem–0.875rem, 0.14em–0.22em tracking): Navigation, tags, and short category labels.

**The Zero-Shift Type Rule.** Use the documented system stack unless a future named typeface is bundled locally with verified fallback metrics.

Headings use balanced wrapping and prose uses pretty wrapping. Repeated uppercase tracked labels are prohibited as generic section scaffolding.

## 4. Elevation

The system is hybrid. Page sections and most dark surfaces are flat, using color and borders for structure. Project cards, the profile panel, navigation controls, and contact panel introduce light shadows; hover states add lift with short upward translations.

### Shadow Vocabulary

- **Quiet Rest** (`0 1px 2px 0 rgb(0 0 0 / 0.05)`): Small controls and resting project cards.
- **Responsive Lift** (`0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`): Button hover feedback.
- **Feature Lift** (`0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`): Profile, contact, and hovered project surfaces, sometimes recolored with a low-opacity black shadow.

**The Flat-Until-Useful Rule.** Surfaces remain flat unless elevation clarifies interactivity or hierarchy.

Project and contact surfaces now rely on structural borders rather than wide decorative shadows. Reduced-motion preferences disable smooth scrolling, animation, transitions, and translation.

## 5. Components

### Buttons

- **Shape:** Full-pill controls with 44–48px heights and horizontal padding of 20–24px.
- **Primary:** Measured Teal with white bold label text; the header GitHub control uses Structural Ink as an alternate primary treatment.
- **Hover / Focus:** Hover darkens teal or changes Structural Ink to teal and translates upward by 2px. The global stylesheet sets an outline color, but no explicit `:focus-visible` width, offset, or style is defined.
- **Secondary:** White fill with a low-opacity black border on light backgrounds; transparent with a white border on dark backgrounds.
- **Action hierarchy:** “View my work” is primary, “Download résumé” is secondary, and “Contact me” remains persistent in navigation and the closing section.

### Chips

- **Style:** Technology chips use a pale teal fill, dark teal text, pill shape, and compact padding. Dark-section skill chips use transparent backgrounds with low-opacity white borders.
- **State:** Project chips shift to a stronger teal wash when their parent card is hovered; skill chips increase border and text contrast on group hover.

### Cards / Containers

- **Corner Style:** Project and structural surfaces are square by default; only profile and icon blocks use the subtle 2px radius.
- **Background:** White project surfaces, Structural Ink profile surface, low-opacity white skill surfaces, and Structural Surface contact panel.
- **Shadow Strategy:** Flat or Quiet Rest at rest; project surfaces currently use Feature Lift on hover.
- **Border:** One-pixel, low-opacity neutral borders define most surfaces.
- **Internal Padding:** Responsive section spacing uses 32–96px tier separation; archive rows use a denser 24px vertical rhythm.
- **Evidence hierarchy:** One asymmetric flagship leads, two supporting projects use varied compositions, and remaining projects use compact archive rows.

### Navigation

- **Style:** Sticky opaque Soft Chalk header with direct section links and a persistent Contact action.
- **Typography:** Small semibold labels with compact padding.
- **States:** Links invert to Structural Ink with white text on hover. The brand name changes to Measured Teal.
- **Mobile treatment:** Section links remain available in a horizontally scrollable navigation row with 44px minimum targets.
- **Focus:** All links receive a white inner outline with a Measured Teal outer ring so focus remains visible on light, dark, and teal surfaces.

### Project Gallery

- **Style:** Wide screenshots use one or two columns; mobile screenshots use a two- or four-column gallery. Images use fixed aspect ratios and `object-cover` inside bordered wells.
- **Behavior:** Repository access is a separate circular icon control with an accessible label.
- **Evidence behavior:** Images use `object-contain`, stable aspect ratios, descriptive captions, and responsive one-, two-, or four-column compositions. Case-study content never depends on image interaction.

## 6. Do's and Don'ts

### Do:

- **Do** make completed projects, screenshots, repositories, source quality, and explainable technical decisions the primary proof.
- **Do** structure every project as a concise case study covering the problem, role, technical approach, challenge, and result.
- **Do** use direct CTA wording: “View my work,” “Download résumé,” and “Contact me.”
- **Do** preserve the practical contrast between Soft Chalk, Structural Ink, Measured Teal, and Evidence Amber while consolidating duplicate near-neutral roles.
- **Do** preserve square project surfaces and reserve pill geometry for actions and compact tags.
- **Do** verify every opacity-based text color against its actual background at WCAG 2.2 AA.
- **Do** provide complete keyboard access, strong `:focus-visible` treatment, semantic structure, descriptive labels, large touch targets, and reduced-motion alternatives.
- **Do** keep interaction restrained and ensure every state remains understandable without hover, animation, or color alone.

### Don't:

- **Don't** make the portfolio resemble a generic portfolio template or an AI-generated landing page.
- **Don't** use excessive purple or blue gradients, glowing backgrounds, or pervasive glassmorphism.
- **Don't** create too many rounded cards or cards nested inside cards.
- **Don't** pair one-pixel card borders with wide decorative shadows; use one structural treatment.
- **Don't** create oversized empty hero sections, skill-percentage bars, decorative technology-logo clouds, typewriter effects, or excessive animation.
- **Don't** repeat tiny uppercase tracked labels above every section as default scaffolding.
- **Don't** use vague claims, copied startup-style language, invented outcomes, invented metrics, testimonials, client logos, or business results.
- **Don't** let the interface feel cluttered, gimmicky, overly corporate, or visually impressive at the expense of readability and project evidence.
- **Don't** depend on hover, animation, or color alone to reveal meaning or access an interaction.
- **Don't** treat the current hero metrics, missing mobile navigation, unverified muted text, decorative blur, or hover-only refinements as approved design-system standards.
