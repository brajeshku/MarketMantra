# MarketMantra

Responsive landing page for **Market Mantra WealthOrbit**. The current scope is
a front-end prototype built from the supplied visual reference.

## Technology

- Next.js App Router 16 and React 19
- TypeScript
- Tailwind CSS 4 with a small custom global design system
- Radix UI Slot and Class Variance Authority for the reusable button

## Project layout

~~~text
public/                  Static assets, including the supplied brand logo
src/
  app/
    globals.css          Global styles, design tokens, and responsive rules
    layout.tsx           Root HTML shell and site metadata
    page.tsx             Home route composition
  components/
    sections/            Server-rendered page sections
    contact-form.tsx     Client component for form preview state
    site-header.tsx      Client component for mobile navigation
    site-footer.tsx      Site footer
    course-card.tsx      Reusable course card and artwork
    ui/button.tsx        Reusable button primitive
  data/
    site-content.ts      Typed course, navigation, index, and contact content
  lib/
    utils.ts             Class-name merge helper
~~~

## Run locally

Use the Node.js version in .nvmrc, then run:

~~~sh
npm install
npm run dev
~~~

Open http://localhost:3000.

## Current prototype limits

- The index figures are illustrative sample values, not live market data.
- The enquiry form only displays a local confirmation. It does not send or
  store submissions.
- Course names, prices, durations, contact details, testimonials, and institute
  copy should be confirmed by Market Mantra before launch.
- There is no API, authentication, payment, advice, or market-data integration.
