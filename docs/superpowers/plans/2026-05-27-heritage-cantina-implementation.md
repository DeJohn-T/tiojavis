# Heritage Cantina Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the approved Heritage Cantina direction to the Tio Javi's restaurant site.

**Architecture:** Use the existing React/Vite page structure and CSS files. Centralize brand color and font decisions in `src/styles/global.css`, then let page-specific styles refine surfaces, menu rhythm, photos, and mobile behavior without changing routes or menu data.

**Tech Stack:** React 19, Vite 8, CSS modules-by-file, Google Fonts, in-app browser verification.

---

## File Structure

- Modify `src/styles/global.css`: brand palette, font imports, font utility classes, shared button/label feel.
- Modify `src/components/Nav.css`: navy glass surface, logo-aware active states, mobile overlay polish.
- Modify `src/components/Footer.css`: navy footer surface and warmer branded typography.
- Modify `src/pages/Home.css`: subtle navy overlays, brighter photo treatment, stronger menu rows and CTA accents.
- Modify `src/pages/Menu.css`: main dinner/lunch/bar menu system, hero/tab polish, section rhythm, photo breaks, tequila block, mobile layout.
- Modify `src/pages/Bar.css`: keep beer grid aligned with the new menu styling.
- Modify `src/pages/Visit.css`, `src/pages/Catering.css`, and `src/pages/Reservations.css`: replace direct old font references and align supporting pages with shared navy/brand tokens.
- Do not modify `src/pages/Home.jsx`, `src/pages/Bar.jsx`, `src/components/Footer.jsx`, or menu data unless a build/lint failure requires it, because those files already contain user changes.

## Task 1: Global Brand Tokens And Fonts

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Replace the Google font import**

Use:

```css
@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Bree+Serif&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;1,9..144,300;1,9..144,400;1,9..144,600&display=swap');
```

- [ ] **Step 2: Replace the root palette and add font variables**

Set the main tokens to deep navy-black surfaces, cream text, ember/gold action accents, and tiny teal details:

```css
--void: #070a10;
--surface: #0d1628;
--surface-2: #111d33;
--surface-3: #192642;
--navy: #111d3a;
--navy-deep: #071225;
--teal: #15868d;
--teal-light: #29a2a8;
--ember: #c7652c;
--ember-light: #df7a35;
--ember-dim: rgba(199, 101, 44, 0.3);
--gold: #e4a93f;
--gold-light: #f3bd58;
--cream: #f2ead8;
--font-body: 'Alegreya Sans', sans-serif;
--font-display: 'Fraunces', serif;
--font-accent: 'Bree Serif', serif;
```

- [ ] **Step 3: Update global font utilities**

Make `body`, `.alfa`, `.cormorant`, and `.section-kicker` use the variables:

```css
body { font-family: var(--font-body); }
.alfa { font-family: var(--font-accent); }
.cormorant { font-family: var(--font-display); }
.section-kicker { font-family: var(--font-body); color: var(--gold); }
```

- [ ] **Step 4: Run checks**

Run: `npm run lint`

Expected: PASS or only pre-existing lint output unrelated to CSS.

## Task 2: Navigation And Footer Brand Surfaces

**Files:**
- Modify: `src/components/Nav.css`
- Modify: `src/components/Footer.css`

- [ ] **Step 1: Update nav surfaces**

Use navy glass values:

```css
.nav {
  background: linear-gradient(to bottom, rgba(7,18,37,0.86) 0%, rgba(7,18,37,0.22) 72%, transparent 100%);
}
.nav.scrolled,
.nav.nav--open {
  background: rgba(7,18,37,0.96);
  border-bottom-color: rgba(21,134,141,0.22);
}
```

- [ ] **Step 2: Update nav type and active states**

Replace direct `DM Sans` references with `var(--font-body)`. Active links should use gold with a tiny teal text-shadow, and reserve buttons should keep ember.

- [ ] **Step 3: Update mobile menu overlay**

Use navy instead of plain black:

```css
.nav-mobile {
  background:
    linear-gradient(180deg, rgba(7,18,37,0.98), rgba(7,10,16,0.99)),
    var(--navy-deep);
}
```

- [ ] **Step 4: Update footer**

Set `.footer` to a navy-deep background, use `var(--font-display)` for the wordmark, `var(--font-body)` for column heads, and teal/gold borders where useful. Keep the existing social/link content intact.

- [ ] **Step 5: Browser check**

Open `http://127.0.0.1:5173/` and `http://127.0.0.1:5173/visit`.

Expected: nav is readable over photos, the logo remains full color, and footer no longer reads as generic black.

## Task 3: Menu Page Rhythm And Photo Integration

**Files:**
- Modify: `src/pages/Menu.css`
- Modify: `src/pages/Bar.css`

- [ ] **Step 1: Update menu hero**

Make `.menu-hero` a navy structural band with a clearer photo, not a blurry black wall:

```css
.menu-hero {
  background: linear-gradient(135deg, rgba(13,22,40,0.96), rgba(7,10,16,0.92));
  border-bottom: 1px solid rgba(21,134,141,0.22);
}
.menu-hero-bg img {
  filter: brightness(0.34) saturate(0.9);
  transform: scale(1.04);
}
```

- [ ] **Step 2: Update menu tabs**

Keep sticky behavior. Make active tabs navy/gold with a teal top rule:

```css
.menu-tab-link.active {
  color: var(--gold);
  background: linear-gradient(180deg, rgba(21,134,141,0.16), rgba(228,169,63,0.06));
  box-shadow: inset 0 2px 0 var(--teal);
}
```

- [ ] **Step 3: Update menu typography**

Use `var(--font-display)` for hero/section/photo labels, `var(--font-body)` for text, and `var(--font-accent)` for prices, happy hour labels, and tequila aging labels.

- [ ] **Step 4: Improve list hierarchy**

Increase row contrast without making cards:

```css
.menu-body {
  max-width: 920px;
}
.menu-section-head {
  border-bottom-color: rgba(21,134,141,0.2);
}
.menu-item {
  border-bottom-color: rgba(242,234,216,0.08);
}
.menu-item:hover {
  background: linear-gradient(90deg, rgba(13,22,40,0.35), transparent);
}
```

- [ ] **Step 5: Improve photo breaks**

Brighten photo breaks and add a navy overlay from the top so section transitions feel intentional:

```css
.menu-photo-break img {
  filter: brightness(0.72) saturate(1.02);
}
.menu-photo-break::after {
  background: linear-gradient(to top, rgba(7,10,16,0.72), rgba(13,22,40,0.18) 58%, rgba(7,18,37,0.35));
}
```

- [ ] **Step 6: Align bar-specific styles**

In `src/pages/Bar.css`, use `var(--font-accent)` for beer prices and make beer row borders use the shared border variables.

- [ ] **Step 7: Browser check**

Open `/menu`, `/menu/lunch`, and `/bar`; scroll past the first photo break on `/menu`.

Expected: menus still scan clearly, photos feel more present, and no patterned background appears.

## Task 4: Home Page Heritage Polish

**Files:**
- Modify: `src/pages/Home.css`

- [ ] **Step 1: Update hero overlay**

Replace pure black overlay values with navy-black values while keeping the photo dominant:

```css
.h-hero-bg::after {
  background: linear-gradient(
    155deg,
    rgba(7,18,37,0.12) 0%,
    rgba(7,18,37,0.36) 35%,
    rgba(7,10,16,0.78) 72%,
    rgba(7,10,16,0.96) 100%
  );
}
```

- [ ] **Step 2: Brighten key photos**

Move heavy photo filters toward `brightness(0.68-0.76)` and `saturate(0.92-1.05)` for hero-adjacent food/bar images.

- [ ] **Step 3: Update home menu rows**

Use navy hover overlays and gold/teal accents on row hover. Do not create boxed cards.

- [ ] **Step 4: Replace direct old font references**

Change direct `Alfa Slab One` and `DM Sans` references to `var(--font-accent)` and `var(--font-body)`.

- [ ] **Step 5: Browser check**

Open `/`, scroll through the intro, menu list, happy hour, and visit sections.

Expected: page still feels cinematic, but less smoky and more connected to the logo colors.

## Task 5: Supporting Pages Font And Token Alignment

**Files:**
- Modify: `src/pages/Visit.css`
- Modify: `src/pages/Catering.css`
- Modify: `src/pages/Reservations.css`

- [ ] **Step 1: Replace direct font names**

Use `var(--font-body)`, `var(--font-display)`, and `var(--font-accent)` wherever these files directly reference the old font names.

- [ ] **Step 2: Align important surfaces**

Keep layouts unchanged. Let the global token changes carry most of the redesign, but ensure large CTA sections and form inputs still have enough contrast.

- [ ] **Step 3: Browser check**

Open `/visit`, `/catering`, and `/reservations`.

Expected: no page feels visually orphaned from the new navy/gold/cream system.

## Task 6: Final Verification

**Files:**
- Read/verify all modified files.

- [ ] **Step 1: Run lint**

Run: `npm run lint`

Expected: PASS.

- [ ] **Step 2: Run production build**

Run: `npm run build`

Expected: PASS and Vite build completes.

- [ ] **Step 3: Desktop browser pass**

Use the in-app browser at `http://127.0.0.1:5173/` and inspect `/`, `/menu`, `/menu/lunch`, `/bar`, `/visit`, `/catering`, and `/reservations`.

Expected: no text overlap, nav is readable, tabs stick correctly, menu rows scan, and the rejected wrapping-paper pattern is absent.

- [ ] **Step 4: Mobile browser pass**

Set the browser viewport near 390px wide and inspect `/`, `/menu`, `/bar`, and `/visit`.

Expected: mobile menu opens, menu tabs fit, prices do not collide with item names, and CTA buttons remain readable.
