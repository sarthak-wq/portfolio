# Design system — Darkroom

This portfolio was redesigned with the Hallmark skill in the **Darkroom** theme (a full redesign, 2026‑10‑30). This file locks the system so any new page or section matches. The machine-readable tokens live in [`src/tokens.css`](src/tokens.css); the base rules the floor decided live in [`src/base.css`](src/base.css); page styles live in [`src/index.css`](src/index.css), whose first line is the Hallmark stamp.

## The idea

A print room with the lights off. A warm print‑black ground, fibre‑white ink, hairline extra‑condensed capitals over Barlow, zero radius, one amber safelight. The owner's own photographs are the material, shown in full colour (a deliberate departure from Darkroom's usual black‑and‑white treatment, at the owner's request); the type carries the rest. The argument: a developer who sees like a photographer — the same eye for composition in systems and in light.

## Colour (OKLCH, tokens only — never a literal)

- **Paper** `--color-paper` 12.5% · wells `--color-paper-2` 16% · `--color-paper-3` 20.5%. Depth is lightness, never a glow or a shadow.
- **Ink** `--color-ink` 92% · secondary `--color-ink-2` 80% · `--color-muted` 64% (labels, captions, dates).
- **Accent** `--color-accent` amber (hue 58). It is a **signal, not a fill**: the one primary action, a focus ring, a hover underline, a selected plate. Never an amber band, head, or wash. Posture: restrained (accent under ~5% of any screen).
- **Rule** `--color-rule` 29% — 1px hairlines do the dividing; no card borders.

## Type

- **Display** — Sofia Sans Extra Condensed, uppercase. 200 for the hero, section heads and figures; 400 for item titles (`h3`) and controls. Line‑height ~1.0.
- **Body** — Barlow 400 at 16–17px, 1.55. Barlow 300 only at lead size and above.
- **Labels / captions / dates / nav links** — Barlow, a step smaller, sentence case, untracked, `--color-muted`. Never tracked caps, never mono.
- **Weights in running use: three** — Sofia 200, Barlow 300, Barlow 400. Do not add a fourth.

## Surfaces & layout

- One container (`.container`, max 1440, 64px gutters). Twelve columns, 32px gaps. Zero radius everywhere; one shadow at most (the theme uses none).
- Surface ladder: whitespace → hairline → tinted well (`--color-paper-2`). No card‑in‑card. Vary the seam from section to section.
- Sections use the spacing tokens (`--section-gap*`); never a raw length — every value is a `--space-*` or `--text-*` token.

## Photographs

- The owner's own, shown in full colour, zero radius, no frame drawn. Big or not at all. (Darkroom's default `.mono` deep black‑and‑white treatment is intentionally not applied here.)
- The hero is one photograph full‑bleed (LCP: eager, `fetchpriority="high"`); every other image is lazy.
- Captions are facts (the place), in the label style. Never an emoji as an icon.

## Motion

Still as a print. One quiet reveal (`[data-reveal]`, fade + 8px rise, `transform`/`opacity` only), visible by default, collapsed under `prefers-reduced-motion`. No parallax, no hover scale on images; hover feedback lives on the container.

## Chrome

- **Nav** — edge‑aligned: wordmark left, the real destinations and one amber *Email me* right; a single‑column panel under 60rem.
- **Footer** — a mast colophon: the wordmark, one line, the real links, the year.

## Icons

One library: **lucide-react**, `currentColor`, aligned to the text. (`react-icons`, `antd`, and `framer-motion` are no longer used by the page.)

## Floor held

OKLCH tokens only; `:focus-visible` on every control; `prefers-reduced-motion` fallback; `overflow-x: clip`; no invented facts; no tracked‑caps labels or eyebrows; no purple→blue gradient. Waived on the record: `39b` (photo plates are images the visitor opens, not text controls). Verify any new page with:

```
node .agents/skills/hallmark/scripts/sloplint.mjs <files> --genre atmospheric --render --url http://localhost:3000/
```
