# Mercedes-Benz Landing Page — Design Spec

## Purpose

A single-page brand showcase for Mercedes-Benz: an "official-feeling" landing page that presents brand prestige and a curated lineup of flagship models. This is a portfolio/practice project, not a real business page — no backend, no real dealer/lead capture.

## Scope

One scrollable landing page. No routing, no multi-page navigation, no backend, no real form submissions.

## Tech Stack

- **Vite + React 18** — single-page app, no router
- **Tailwind CSS** — utility-first styling, custom theme extension for the brand palette
- **Motion** (npm package `motion`, `motion/react` import) — scroll-triggered reveals and hero parallax
- **Images**: real (non-staged) photos of actual Mercedes-Benz vehicles, sourced from royalty-free stock (Unsplash/Pexels), downloaded and stored locally in `src/assets/` — not hot-linked. Color-graded/treated consistently (moody, low-key) so they read as one cohesive shoot.

## Component Structure

Self-contained components composed in `App.jsx`, no shared internal state beyond scroll position:

- `Nav` — transparent-over-hero, solid black after scroll threshold; wordmark left, links right (Models, Heritage, Contact); collapses to hamburger menu on mobile
- `Hero` — full-viewport height, full-bleed background photo, dark gradient overlay, large light-weight headline, one primary CTA that smooth-scrolls to Models
- `ModelShowcase` → renders 4 `ModelCard` components (S-Class, EQS, G-Class, AMG GT), each a full-width section alternating photo left/right per model, with name, tagline, 2-3 spec highlights, and a "Configure" CTA
- `Heritage` — shorter, black-background, typography-led section with 2-3 brand-value statements
- `CTASection` — closing full-width section, headline + "Find a Dealer" button that smooth-scrolls to footer
- `Footer` — logo mark, styled (non-functional) link columns, copyright line

## Page Structure & Content Flow

1. Nav (fixed, transparent → solid on scroll)
2. Hero — full-bleed moody hero shot, headline, primary CTA
3. Model Showcase — 4 alternating-side model sections
4. Heritage — brand values, black background, typography-led
5. CTA / Closing — final photo or dark gradient, headline, "Find a Dealer" CTA
6. Footer — minimal, styled links, copyright

All CTAs perform in-page smooth-scroll to relevant sections (no dead links, no backend required).

## Visual Design System

- **Colors**: near-black (`#0a0a0a`) and white as dominant contrast pair; light silver/grey (`#c0c0c0`) for secondary text and hairline dividers; single cool electric-blue accent (~`#4fc3f7`) used sparingly for links/hover states, echoing EQ/electric sub-branding. Palette stays black/white-led — the accent is a highlight, not a base color.
- **Typography**: light-weight, wide-letter-spaced sans-serif for headlines and all-caps nav/labels (a free Google Font such as Inter or Barlow, chosen to approximate the restrained feel of Mercedes' proprietary corporate typeface without licensing it); slightly heavier weight for body copy readability.
- **Imagery treatment**: full-bleed real photos, dark gradient overlays behind text, consistent moody/low-key color grading across all sourced images.
- **Motion**: sections fade+slide in once on scroll into view (Motion's `whileInView`); hero background has a slow, subtle parallax drift; nav background transitions smoothly on scroll; buttons get a quiet hover state (underline slide or slight scale). Restrained throughout — no flashy or repeated-loop animation.

## Responsive Behavior

- Mobile: alternating photo/text model sections stack to single column (photo above text)
- Nav collapses to a hamburger menu below the desktop breakpoint
- Hero text scales down proportionally but the section remains full-bleed/full-height
- Standard Tailwind breakpoints (`sm`/`md`/`lg`) drive the responsive rules

## Explicitly Out of Scope

- Real dealer locator, configurator, or lead-capture backend
- Multi-page routing or additional models beyond the 4 flagship cars
- User accounts, e-commerce, or any persisted state
- Licensed/official Mercedes-Benz press photography (stock substitutes only)

## Implementation Note

Per user request, implementation will be handed off to the `ui-ux-pro-max` skill after this spec is approved, rather than a generic `writing-plans` implementation plan.
