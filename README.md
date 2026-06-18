# Om Kumar Education

A modern, conversion-focused landing page for ICSE Class 9 & 10 Computer
Applications classes, built with Next.js 15 (App Router), Tailwind CSS,
Framer Motion and Lucide icons. The visual signature is a small animated
Java "terminal" in the hero and code-comment style section labels
(`// why-students-choose-us.java`) that tie the design back to the subject
the site is teaching.

## Tech stack

- Next.js 15 (App Router)
- Tailwind CSS 3 (light/dark theme via `next-themes`)
- Framer Motion for scroll and load animations
- Lucide React icons
- React Hook Form + Zod for the registration form
- MongoDB (via Mongoose) for storing community sign-ups
- `react-hot-toast` for success/error toasts

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the environment example and fill in your real values:

   ```bash
   cp .env.local.example .env.local
   ```

   - `MONGODB_URI` — your MongoDB Atlas (or self-hosted) connection string.
   - `NEXT_PUBLIC_WHATSAPP_LINK` — your real WhatsApp community invite link.
     Visitors are redirected here right after a successful sign-up.

3. Run the dev server:

   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000`.

4. Build for production:

   ```bash
   npm run build
   npm run start
   ```

## Project structure

```
app/
  layout.js          SEO metadata, fonts, theme + toast providers
  page.js             Assembles every section in order
  globals.css         Design tokens, base styles, reduced-motion support
  robots.js, sitemap.js
  api/register/route.js   Validates + saves sign-ups to MongoDB
components/
  Navbar.jsx, Hero.jsx, About.jsx, Features.jsx, Topics.jsx,
  Resources.jsx, Batch.jsx, Journey.jsx, Register.jsx, FAQ.jsx,
  Contact.jsx, Footer.jsx
  ui/SectionHeading.jsx, ui/FeatureCard.jsx, ui/Skeleton.jsx
lib/
  mongodb.js          Cached Mongoose connection for serverless
  validation.js        Shared Zod schema (used by both form + API route)
models/
  Student.js          Mongoose schema for a sign-up
```

## Notes for going live

- Replace the placeholder teacher photos in `Hero.jsx` and `About.jsx`
  (currently Unsplash stock images) with real photos.
- Update the Instagram/YouTube links in `Contact.jsx` and the email address
  if needed.
- The free resource "Download" buttons in `Resources.jsx` currently link to
  `#` as requested — point them at real PDF/file URLs when ready.
- Dark mode is toggled from the navbar (sun/moon icon). `next-themes` stores
  the chosen theme in `localStorage` automatically, so a visitor's preference
  is remembered on their next visit.
