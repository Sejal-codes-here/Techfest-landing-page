# Techfest IIT Bombay — Landing Page Concept
### Theme: *An Aetherial Renaissance*

A single-purpose, animated landing page concept for Techfest, IIT Bombay's annual science & technology festival. Built as a fan/concept redesign inspired by the official 2026–27 theme ("An Aetherial Renaissance") — merging Renaissance-manuscript aesthetics with a cosmic, astrolabe-driven visual language. No 3D assets used; all visuals are SVG, CSS, and 2D Canvas.

## 🚀 Getting Started

No build tools or dependencies required.

1. Download/save `index.html`, `style.css`, and `script.js` into the same folder.
2. Open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari).
3. That's it — no npm install, no server needed.

Optional: run a local server for smoother font/asset loading:
```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000
```

---

## 🎨 Design System

| Token | Value | Use |
|---|---|---|
| `--void` | `#05060a` | Primary background |
| `--void-2` | `#0c0e1a` | Secondary/panel background |
| `--gold` | `#c9a24d` | Primary accent (gold leaf) |
| `--gold-bright` | `#e6c877` | Highlights, headline gradient |
| `--ember` | `#c1552e` | Secondary accent (eyebrows, CTA emphasis) |
| `--ivory` | `#f1ead9` | Primary text |
| `--mist` / `--mist-dim` | `#8a92b3` / `#565c7c` | Body / muted text |

**Typography**
- Display: `Cormorant Garamond` (serif, Renaissance manuscript feel)
- Body: `Space Grotesk` (modern geometric sans)
- Utility/data: `JetBrains Mono` (stats, labels, eyebrows)

Fonts are loaded via Google Fonts CDN in `index.html` — no local font files needed.

---

## ✨ Key Features

- **Signature astrolabe motif** — a rotating, hand-built SVG instrument (concentric rings, tick marks, compass points) behind the hero headline, generated partly via JS (`script.js` draws 72 tick marks programmatically).
- **2D starfield canvas** — lightweight ambient particle animation, no libraries.
- **Scroll-reveal system** — sections fade/rise into view via `IntersectionObserver`.
- **Marquee** — auto-scrolling strip of past Techfest speakers/dignitaries.
- **Fully responsive** — mobile-first grid breakpoints for stats, domain cards, and footer.
- **Accessibility-conscious** — respects `prefers-reduced-motion`, visible focus states via native `:hover`/`:focus` on links and buttons.

No 3D engines (Three.js, WebGL) are used anywhere — every visual is SVG, CSS, or Canvas 2D.

---

## 🛠️ Customization Guide

| Want to change... | Edit... |
|---|---|
| Colors / theme palette | `:root` variables at the top of `style.css` |
| Copy / section text | Directly in `index.html` |
| Competition cards | `.domain-card` blocks inside `#domains` |
| Workshop tags | `.chip` elements inside `#workshops` |
| Speaker marquee names | `.marquee-track span` elements inside `#legacy` |
| Astrolabe ring speed | `.ring-1`, `.ring-2`, `.ring-3` animation durations in `style.css` |
| Star density/speed | `resize()` and `draw()` functions in `script.js` |
| Register link destination | `href="https://techfest.org"` in the CTA section |

---

## ⚠️ Notes & Attribution

- This is an **unofficial concept design**, not the live techfest.org site. Statistics (attendee counts, prize pool, years running) are drawn from publicly available press coverage and official social channels as of August 2026 — verify against techfest.org before using for anything official.
- Speaker names in the marquee reference real public figures who have spoken at past editions, cited factually (not quoted).
- Social links in the footer are placeholders (`#`) — replace with actual Techfest social URLs before deploying.
- Google Fonts is the only external dependency (CDN-loaded); everything else is self-contained.

---

## 📄 License

Free to use, modify, and extend for personal, academic, or fan-project purposes. Not affiliated with or endorsed by IIT Bombay or the official Techfest organizing committee.
