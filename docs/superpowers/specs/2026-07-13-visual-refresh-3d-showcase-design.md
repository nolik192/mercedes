# Mercedes-Benz Landing Page — Visual Refresh & 3D Showcase

## Purpose

Second iteration on the existing landing page (see [`2026-07-11-mercedes-landing-page-design.md`](2026-07-11-mercedes-landing-page-design.md)). Two changes:

1. Re-curate all five car photos — the current set reads as amateur/tuner-culture stock rather than premium editorial photography.
2. Add a new interactive 3D Model Showcase section featuring a rotatable Mercedes-AMG GT.

## 1. Image Re-Curation

Replace all five images (hero, S-Class, EQS, G-Class, AMG GT) with a stricter curation pass:

- **Reject**: visibly modified/lowered cars, aftermarket wheels, graffiti or cluttered urban backdrops, tuner-culture staging, low lighting quality
- **Prefer**: clean architecture, studio-adjacent, or minimalist outdoor settings; consistent moody/low-key grading across the set so the five images read as one cohesive shoot
- **Sources**: Unsplash and Pexels (free, real photography of actual Mercedes-Benz vehicles, downloaded locally into `src/assets/cars/`, not hot-linked)
- **Process**: search multiple candidates per image, visually inspect each before committing (as done in the previous iteration), verify the vehicle model matches what's claimed in copy

This has an inherent ceiling — free stock will not match actual manufacturer press photography — but should get meaningfully closer to the "official brand" feel than the current set.

## 2. 3D Model Showcase (new section)

**Placement**: new full-width section inserted between Hero and Model Showcase in `App.jsx`. Same dark theme as the rest of the page (`bg-mb-black`), consistent section padding/typography treatment with Heritage.

**Tech stack**: [`@google/model-viewer`](https://modelviewer.dev/) web component.
- Registered via a side-effect import, dynamically imported only when the section scrolls near-viewport (matches existing lazy-loading/performance discipline) rather than bundled into the initial JS payload
- Chosen over hand-rolled `react-three-fiber` because it is purpose-built for single-product turntable interactions: built-in constrained orbit controls, built-in loading/poster states, built-in lighting/exposure controls — less custom code and less risk of an amateur-looking lighting rig

**3D asset**: Mercedes-AMG GT model, CC-BY licensed, sourced from Sketchfab (175k triangles, static mesh, no rigging needed). Before shipping:
- Run through a GLTF optimizer (Draco/mesh compression, e.g. `gltf-transform optimize` or `gltfpack`) to bring file size down to a web-reasonable target (aim for low single-digit MB; raw Sketchfab exports are typically far larger)
- Store the optimized `.glb` in `public/models/`
- Add a visible attribution credit near the section (creator name + "CC BY 4.0" + link to the Sketchfab source), satisfying the license requirement

**Interaction**: horizontal-only turntable rotation.
- `min-camera-orbit` / `max-camera-orbit` locked at eye-level (phi fixed), so drag only changes azimuth — no pitch, no free orbit
- `touch-action: pan-y` so a touch-drag on the model doesn't hijack page scroll on mobile
- Zoom disabled to keep the interaction simple and constrained
- **No auto-rotate by default.** The model starts static; a one-time subtle "drag to rotate" hint uses `model-viewer`'s built-in `interaction-prompt`. This keeps rotation entirely user-initiated, consistent with the rest of the site's restrained motion philosophy, and avoids any `prefers-reduced-motion` concerns since nothing animates without a deliberate drag

**Loading UX**: the section reserves its aspect-ratio space up front (no layout shift) and shows a poster/placeholder while the `.glb` streams in, consistent with the existing performance guidelines already applied elsewhere on the page.

## Explicitly Out of Scope

- 3D models for the other three vehicles (S-Class, EQS, G-Class) — photography only for those, per the original spec
- AR viewing mode (model-viewer supports it, but not requested)
- Auto-rotating/ambient animation on the 3D model
- Free-orbit (vertical) camera movement

## Implementation Notes

- The GLTF optimization step (Draco/mesh compression) happens once at asset-prep time, not at runtime
- `@google/model-viewer` is a web component; in React/Vite it's used directly as a custom JSX element (`<model-viewer>`) after the side-effect import registers it — no wrapper library needed
