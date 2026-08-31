# SoulSpace

A safe space for your mind.

Marketing site for SoulSpace — a professional psychological counselling centre
offering online and offline counselling.

Built with **React 18 + Vite**, plain **CSS3** (no Tailwind, no Bootstrap, no
Next.js), and a component-based architecture.

---

## Running locally

Requires Node.js 18 or newer.

```bash
npm install     # install dependencies
npm run dev     # start the dev server → http://localhost:5173
```

Other scripts:

```bash
npm run build   # production build into dist/
npm run preview # serve the production build locally
```

---

## Folder structure

```
SoulSpace/
├─ index.html                  Page shell, SEO meta tags, font links
├─ package.json
├─ vite.config.js
└─ src/
   ├─ main.jsx                 Entry point (imports global.css first)
   ├─ App.jsx                  Shell: skip link, Navbar, Home, Footer
   │
   ├─ pages/
   │  └─ Home.jsx              Assembles every section in reading order
   │
   ├─ components/
   │  ├─ Navbar.jsx            Sticky nav, dropdowns, hamburger menu
   │  ├─ HeroSection.jsx       Hero + breathing ambient field
   │  ├─ AboutSection.jsx      Introduction / About SoulSpace
   │  ├─ ServiceCards.jsx      Find Your Space. Find Your Support.
   │  ├─ ConcernCards.jsx      What Can We Help You With?
   │  ├─ ConcernIcon.jsx       Abstract line marks for the concern cards
   │  ├─ WhySoulSpace.jsx      Why SoulSpace? — icon cards
   │  ├─ HowItWorks.jsx        01–04 timeline
   │  ├─ Professionals.jsx     Profile cards with portrait carousels
   │  ├─ SessionInfo.jsx       What Happens In A Session?
   │  ├─ CounsellingDetail.jsx Shared layout for Online + Offline sections
   │  ├─ PrivacySection.jsx    Your Privacy Matters
   │  ├─ JournalSection.jsx    SoulSpace Journal + article cards
   │  ├─ AssessmentSection.jsx A Few Minutes For Yourself
   │  ├─ FinalCTA.jsx          You Are Allowed To Ask For Help.
   │  ├─ FAQ.jsx               Accordion
   │  ├─ SafetyNotice.jsx      Emergency / scope notice
   │  ├─ Footer.jsx
   │  │
   │  ├─ ImageCarousel.jsx     Reusable carousel (see below)
   │  ├─ LazyImage.jsx         Lazy image + graceful fallback
   │  ├─ Section.jsx           Standard section shell
   │  ├─ Button.jsx            Button / link primitive
   │  └─ Reveal.jsx            Scroll-reveal wrapper
   │
   ├─ hooks/
   │  ├─ useInView.js              IntersectionObserver wrapper
   │  └─ usePrefersReducedMotion.js
   │
   ├─ data/
   │  ├─ content.js            All written copy
   │  └─ images.js             All image sources
   │
   └─ styles/
      ├─ global.css            Tokens, reset, buttons, cards, grids, motion
      └─ <Component>.css       One stylesheet per component
```

---

## Replacing the images

Every image on the site is referenced from **`src/data/images.js`** — no
component hardcodes a URL. To swap the placeholders for real photography:

1. Put your files in `public/images/`
2. Point the `src` at them, e.g. `src: "/images/hero-1.jpg"`
3. Update the `alt` text so it describes the new photograph

If an image ever fails to load, `LazyImage` renders an on-brand gradient panel
in its place, so the layout never collapses.

---

## The carousel

`ImageCarousel` is used for the hero, the counselling environment, each
professional's portraits, the online and offline sections, and the journal.

```jsx
<ImageCarousel
  images={heroImages}     // [{ src, alt }]
  aspect="4 / 5"          // CSS aspect-ratio for the frame
  shape="organic"         // "organic" | "rounded" | "portrait"
  interval={7000}         // ms between slides
  autoPlay                // default true
  showArrows              // default true
  showDots                // default true
  eager                   // prioritise slide 1 (above the fold)
  label="…"               // accessible name for the carousel
/>
```

It auto-advances, supports arrows, dots, touch/pointer swiping and left/right
arrow keys. Autoplay pauses on hover, on focus, while the carousel is off
screen, and whenever the visitor prefers reduced motion. Only the current
slide and its neighbours mount their images.

---

## Design notes

**Typography** — *Fraunces* for display (a soft optical serif, used with its
`SOFT` and `WONK` axes) paired with *Karla* for body text.

**Palette** — white ground, lavender `#E9D8FD`, soft pink `#FBCFE8`, text
`#3B304A`, muted text `#6B6475`. Two darker derived tints (`--lavender-600`,
`--pink-600`) carry small text and icons at accessible contrast.

**Motion** — the ambient field in the hero, echoed in the closing call to
action and the eyebrow dots, breathes on a 10-second cycle: roughly four
seconds expanding and six settling, the pacing used in grounding exercises.
Everything else is restrained — scroll reveals, hover lifts, and a timeline
that draws itself once.

**Accessibility** — semantic landmarks and heading order, a skip link, visible
focus rings, ARIA on the carousel, accordion and navigation, and full
`prefers-reduced-motion` support.

---

## Placeholder links

This is a single-page build, so the navigation and buttons point at in-page
anchors. Items that would become their own pages in production — Privacy
Policy, Terms, Contact, individual professional profiles and journal articles
— currently resolve to their related section. Point them at real routes when
those pages exist.
