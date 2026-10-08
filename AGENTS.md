# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project

Marketing website for **Level Craft Construction** ("Level Craft" for short), a residential and commercial general contractor in Orem, Utah. It is a small multi-page Next.js site, statically exported and hosted on GitHub Pages.

## Commands

```bash
yarn install   # install deps (Yarn 4 via Corepack — run `corepack enable` once)
yarn dev       # dev server at http://localhost:3000
yarn build     # static export to ./out — run this to verify changes
yarn start     # serve ./out locally
```

There is no test suite or linter yet. `yarn build` (which type-checks) is the verification step.

## Layout

- `app/site.ts`: business facts (legal name, owner, location, service area, home `county`, license, phone, Instagram, the other site's URL, Formspree endpoint) and the `servicePages` list that drives the nav and footer links
- `app/layout.tsx`: root layout, default metadata (`metadataBase`, title template), and the business JSON-LD. Its `sameAs` lists the business's profiles elsewhere (Instagram now; add Google Business Profile, Facebook, Houzz, etc. as they're created).
- `app/seo.tsx`: SEO helpers. `pageMetadata()` builds each page's title, description, canonical URL, and Open Graph/Twitter tags. `JsonLd` renders structured data.
- `app/sitemap.ts`, `app/robots.ts`: generate `sitemap.xml` and `robots.txt` at build time. The sitemap lists the home page, the contact page, and `servicePages`.
- `app/og.png/route.tsx`: generates the social share image (`/og.png`) at build time
- `app/contact/`: contact page with the estimate request form (`components/ContactForm.tsx`, a client component). The form posts to Formspree (`site.formEndpoint`); name and phone are required, email and message optional. The estimate buttons across the site link here.
- `app/page.tsx`: the homepage. Content (services, process steps, values) lives in arrays at the top of the file. Right after the hero, a "Recent Projects" section shows `components/PhotoCarousel.tsx` (auto-advancing, pauses on hover/focus, no autoplay with reduced motion) when there are photos.
- `public/gallery/`: project photos for the carousel. `app/gallery.ts` reads the folder at build time; files show in name order and alt text comes from the file name (`01-basement-family-room-orem.jpg` → "Basement family room orem"). No folder or no images means no carousel section. Resize photos to about 1600px wide before adding them.
- `app/not-found.tsx`: the 404 page (exported as `404.html`). It links to the same path on the other site (`site.otherSiteUrl`, via `components/OtherSiteLink.tsx`). That's the only place the two sites link to each other.
- `components/LeadSourceTracker.tsx` (rendered in the layout) remembers how a visitor arrived (a `utm_source` tag, a referring site, or "direct") in sessionStorage, and the contact form sends it as hidden `source` and `landing_page` fields, so Formspree emails show where each lead came from. QR codes and printed materials should use `?utm_source=...` links.
- `app/home-renovation/`, `app/hvac/`, `app/commercial/`: service landing pages, to be built out further for SEO and targeting. Each currently renders the shared `ServicePage` template with its own content and `metadata`. A page defines a `page` object (path with trailing slash, title, description), passes it to `pageMetadata()` and `ServicePage`, which emits `Service` and `BreadcrumbList` JSON-LD. A page can diverge from the template when it needs to.
- `app/components/SiteHeader.tsx`, `NavLinks.tsx` (client component, highlights the current page), `SiteFooter.tsx`, `ContactCTA.tsx`: shared across pages. The header and footer are rendered in `app/layout.tsx`.
- `app/globals.css`: all styles. Plain CSS, with design tokens as custom properties on `:root`.
- `app/components/PixelArt.tsx`: renders a pixel-art `Sprite` (rows of characters plus a palette) as a crisp SVG
- `app/components/sprites.ts`: all pixel art (grass block, hero construction scene, service icons)
- `app/components/GrassStrip.tsx`: full-width repeating grass-block divider
- `app/icon.svg`: favicon (the grass block)
- `public/`: static assets, copied as-is into `out/`. Includes `CNAME` (custom domain `levelcraft.co`).
- `next.config.ts`: static export config
- `.github/workflows/deploy.yml`: builds and deploys to GitHub Pages on push to `master`

## Hard constraints: static export on GitHub Pages

`output: "export"` means there is **no server at runtime**. Do not add:

- API routes / Route Handlers that need a request, Server Actions, middleware, or rewrites/redirects/headers in `next.config.ts`
- `cookies()`, `headers()`, or anything else that forces dynamic rendering
- Dynamic routes without `generateStaticParams`
- `next/image` optimization (it's disabled through `images.unoptimized`)

Forms must post to a third-party service or use `mailto:`. The site uses Formspree (`site.formEndpoint`).

### Domain

The site is served from the root of the custom domain `levelcraft.co` (set by `public/CNAME`), so there is no `basePath`. This is the **main** site for SEO. The same business also runs `levelcraftconstruction.com` (repo `level-craft-professional`) with a different design. Root-relative URLs (`/hvac/`, `url(/...)`) work as-is.

- Use `next/link` for internal page links.
- Hash links (`#services`) are fine. `#contact` works on every page: content pages render `ContactCTA`, and the contact page puts it on the form section.

### SEO

- Every page exports `metadata` built with `pageMetadata()`, so it gets a canonical URL and share tags. New pages also go in `servicePages` (nav, footer, sitemap) when they are service pages.
- Titles name the service and the home county ("... in Utah County"), which helps local search. Descriptions and body copy make clear the work isn't limited to it ("in Utah County and across Utah"). Descriptions stay under about 155 characters.
- Keep structured data truthful. Leave placeholder details (an empty license number) out of JSON-LD, and keep out-of-state work out of `areaServed`.

## Design theme

The owner named the company with his gamer kids in mind (think Minecraft), so the site has a **light** pixel-art/gaming flavor. It is still a professional site whose job is to win construction, renovation, and HVAC customers. Keep the gaming touches as accents, never at the expense of clarity or credibility.

- Fonts: **Jersey 10** (`--font-display`) for h1/h2 and buttons; **Silkscreen** (`--font-label`) for the logo, eyebrows, and small uppercase badges; **Inter** (`--font-sans`) for everything else, including h3 and body copy. Don't put long text in pixel fonts. Silkscreen renders `&` poorly, so avoid it in eyebrows.
- Avoid Pixelify Sans and similar fonts. Its "C" reads as "O" and its "5" as "S".
- New pixel art goes in `sprites.ts` and renders with `<PixelArt>`. Keep icons around 12×12. The only raster images are real project photos in `public/gallery/`.
- Gaming nods in use: hero scene (tower crane lowering a plank block, hard-hat worker on the roof of a pixel house), grass-block logo and dividers, beveled "menu" buttons, hard-offset card shadows, "Level N" process steps with XP bars. Add new ones sparingly.
- Colors: dark navy (`--dark`), grass green (`--grass`, used for primary actions), gold (`--gold`) as a small highlight.

## Conventions

- TypeScript, App Router, React Server Components by default. Add `"use client"` only when interactivity requires it.
- Styling: plain CSS in `globals.css`. Reuse the existing tokens (`--grass`, `--dark`, etc.) and classes (`.container`, `.section`, `.card`, `.btn`, `.eyebrow`). Don't add Tailwind or a CSS-in-JS library unless asked.
- Keep it mobile-friendly. The existing breakpoints are `max-width: 800px` (hero stacks) and `600px` (nav links hide, single-column grid).
- Keep dependencies minimal.

## Yarn notes

- Yarn 4 is pinned through `packageManager` in `package.json`. Use `yarn`, never `npm`/`npx` (use `yarn dlx` instead).
- `nodeLinker: node-modules` (`.yarnrc.yml`). Not PnP.
- Yarn's `npmMinimalAgeGate` (1 day) refuses package versions published within the last 24 hours. If an install fails with "quarantined", pin the previous version rather than disabling the gate.
- CI runs `yarn install --immutable`, so commit `yarn.lock` whenever dependencies change.

## Business facts

These come from the owner. Keep the site's claims consistent with them.

- Owner Joaquin Harris. Based in Orem, Utah, serving all of Utah. Out-of-state projects are considered case by case: invite people to ask, don't promise.
- Licensed Utah B100 General Contractor, insured, with general liability coverage.
- Legal entity for the footer copyright: J & M Harris Enterprises, LLC. Branding is "Level Craft Construction".
- In-house work: residential remodels, additions, repairs, and improvements; commercial tenant improvements, office build-outs, and remodels; wood and metal framing; drywall; interior and exterior painting; tile; concrete (driveways, patios, walkways, pads); carpentry; full project management.
- **HVAC, plumbing, and electrical are coordinated through qualified trades, not done in-house.** Don't write copy implying Level Craft installs or repairs HVAC itself. Don't claim services not listed here, such as ground-up new construction, demolition, or 24/7 service.

## Content placeholders

Business details live in `app/site.ts`. The phone number is real. Don't treat it as a secret, since it's meant to be shown on the page.

Don't publish an email address anywhere on the site (including `mailto:` links), to keep it away from spam bots. Email-style contact goes through the contact page form.

These are still placeholders, not real business info. Don't present them as real:

- License number (`site.license.number`, empty, so it's hidden until set)
- Logo: the owner has an existing logo to provide. The grass-block logo is a stand-in.
- Process steps and some value copy are generic
