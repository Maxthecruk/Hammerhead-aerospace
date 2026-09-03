# AGENTS.md

AI agent reference for the Hammerhead Aerospace project.

## Project Overview

A single-page marketing website for Hammerhead Aerospace, a student rocketry club. Built with TanStack Start, deployed on Netlify.

## Architecture

All site content lives in `src/routes/index.tsx` as a single component-based page with inline sections. There is no CMS or database — all data (members, launches, sponsors, history) is hardcoded in arrays within the component.

## Key Files

| File | Purpose |
|------|---------|
| `src/routes/index.tsx` | Main page — all sections (hero, about, history, members, launches, sponsors, contact, footer) |
| `src/routes/__root.tsx` | Root HTML shell, sets page title and meta |
| `src/styles.css` | Global styles, CSS variables for the space/blue color theme |
| `vite.config.ts` | Vite + TanStack Start + Netlify plugin config |
| `netlify.toml` | Netlify build settings |

## Sections (in order)

1. **Hero** — full-viewport, dark blue starfield, orbit rings, nav, CTA buttons
2. **Stats strip** — members count, launches, altitude record, years active
3. **About** — club description + disciplines cards
4. **History** — alternating timeline of milestones (2018–2024)
5. **Members** — leadership grid + team leads grid + join CTA
6. **Launches** — flight log cards with status badges
7. **Sponsors** — tiered sponsor display (Platinum / Gold / Supporting)
8. **Contact** — email contacts + social media links
9. **Footer** — logo + copyright

## Design System

Colors are CSS custom properties in `src/styles.css`:
- `--space-darkest`: `#010b1a` (background)
- `--space-glow`: `#64b5f6` (primary highlight/accent)
- `--space-accent`: `#2196f3` (labels, links)
- `--hammerhead-gold`: `#c8a850` (platinum sponsor tier)

Reusable CSS classes: `.glow-text`, `.border-glow`, `.nav-link`, `.btn-primary`, `.btn-secondary`, `.section-label`, `.space-card`, `.space-divider`

## Conventions

- All styles are inline `style` props or CSS classes from `styles.css` — no Tailwind utility classes used directly in JSX (Tailwind is imported for reset/base only)
- The SVG logo (`HammerheadLogo`) and star field (`StarField`) are rendered as inline React components
- No external image assets are used — all decorations are SVG/CSS

## Updating Content

To update club data, edit the arrays directly in `src/routes/index.tsx`:
- Members: search for `Sofia Reyes` to find the leadership array
- Launches: search for `HH-1` to find the flight log array
- Sponsors: search for `AeroTech Industries` to find the sponsors arrays
- History: search for `2018` to find the timeline array
- Stats: search for `Active Members` to find the stats strip array
