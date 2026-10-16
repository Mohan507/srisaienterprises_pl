# Sri Sai Enterprises — Construction & Engineering Website

A full, production-ready marketing site for **Sri Sai Enterprises**, built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, React Hook Form, and lucide-react icons.

## Features

- **Home page** — hero, about/stats, services grid, featured projects, why-us + process timeline, testimonials carousel, CTA banner, footer
- **Contact page** (`/contact`) — fully validated form built with `react-hook-form`, submitting to a real Next.js API route
- **API route** (`/api/contact`) — server-side validation, ready to wire up to email (Resend/SendGrid), a CRM, or a database
- Responsive, accessible (visible focus states, semantic markup, reduced-motion support), mobile nav
- Enterprise-friendly structure: components are isolated, typed, and easy to extend

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Project structure

```
app/
  layout.tsx          Root layout, global metadata
  globals.css         Tailwind + design tokens (colors, blueprint grid texture)
  page.tsx            Home page composition
  contact/page.tsx     Contact page
  api/contact/route.ts Contact form API endpoint
components/
  Header.tsx           Sticky nav + mobile menu
  Hero.tsx
  About.tsx
  Services.tsx
  Projects.tsx
  WhyUsProcess.tsx
  Testimonials.tsx
  CtaBanner.tsx
  Footer.tsx
  ContactForm.tsx       react-hook-form powered contact form
```

## Customizing

- **Brand name / copy**: search for "Sri Sai Enterprises" across `components/` and `app/` to rebrand.
- **Colors**: edit the `@theme` block in `app/globals.css` (`--color-navy`, `--color-amber`, etc).
- **Fonts**: this build uses the system font stack so it works fully offline. To use Google Fonts (Space Grotesk + Inter, as designed), restore the `next/font/google` imports in `app/layout.tsx` once you have network access — see the commented note at the top of that file.
- **Images**: currently pulled from Unsplash by URL. Replace with your own project photography in `public/images` and swap the `src` values.
- **Contact form backend**: `app/api/contact/route.ts` currently logs submissions to the server console. Plug in an email service (Resend, SendGrid) or database call where indicated.

## Production build

```bash
npm run build
npm run start
```
