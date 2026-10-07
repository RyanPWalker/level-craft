# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project

Marketing website for **Level Craft Construction** ("Level Craft" for short), a residential and commercial construction company. It is a single-page Next.js site, statically exported and hosted on GitHub Pages.

## Commands

```bash
yarn install   # install deps (Yarn 4 via Corepack — run `corepack enable` once)
yarn dev       # dev server at http://localhost:3000
yarn build     # static export to ./out — run this to verify changes
yarn start     # serve ./out locally
```

There is no test suite or linter yet. `yarn build` (which type-checks) is the verification step.

To reproduce the production build with the GitHub Pages path prefix:

```bash
NEXT_PUBLIC_BASE_PATH=/level-craft yarn build
```

## Layout

- `app/layout.tsx`: root layout and site metadata (title, description)
- `app/page.tsx`: the whole homepage. Content (services, process steps, values) lives in arrays at the top of the file.
- `app/globals.css`: all styles. Plain CSS, with design tokens as custom properties on `:root`.
- `app/components/PixelArt.tsx`: renders a pixel-art `Sprite` (rows of characters plus a palette) as a crisp SVG
- `app/components/sprites.ts`: all pixel art (grass block, hero construction scene, service icons)
- `app/components/GrassStrip.tsx`: full-width repeating grass-block divider
- `app/icon.svg`: favicon (the grass block)
- `public/`: static assets, copied as-is into `out/`
- `next.config.ts`: static export config and `basePath`
- `.github/workflows/deploy.yml`: builds and deploys to GitHub Pages on push to `master`

## Hard constraints: static export on GitHub Pages

`output: "export"` means there is **no server at runtime**. Do not add:

- API routes / Route Handlers that need a request, Server Actions, middleware, or rewrites/redirects/headers in `next.config.ts`
- `cookies()`, `headers()`, or anything else that forces dynamic rendering
- Dynamic routes without `generateStaticParams`
- `next/image` optimization (it's disabled through `images.unoptimized`)

Forms must post to a third-party service (e.g. Formspree) or use `mailto:`.

### Base path

The site is served from `/level-craft/`, not `/`. `basePath` is set from `NEXT_PUBLIC_BASE_PATH` (empty locally).

- Use `next/link` for internal page links. It applies `basePath` automatically.
- Plain `<a href="/...">`, CSS `url(/...)`, and raw `<img src="/...">` do **not** get the prefix and will break in production. Prefix them with `process.env.NEXT_PUBLIC_BASE_PATH`, or use relative/hash links.
- Hash links (`#services`) are fine.

## Design theme

The owner named the company with his gamer kids in mind (think Minecraft), so the site has a **light** pixel-art/gaming flavor. It is still a professional site whose job is to win construction, renovation, and HVAC customers. Keep the gaming touches as accents, never at the expense of clarity or credibility.

- Fonts: **Jersey 10** (`--font-display`) for h1/h2 and buttons; **Silkscreen** (`--font-label`) for the logo, eyebrows, and small uppercase badges; **Inter** (`--font-sans`) for everything else, including h3 and body copy. Don't put long text in pixel fonts.
- Avoid Pixelify Sans and similar fonts. Its "C" reads as "O" and its "5" as "S".
- New pixel art goes in `sprites.ts` and renders with `<PixelArt>`. Don't use raster images. Keep icons around 12×12.
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

## Content placeholders

These are placeholders, not real business info. Don't present them as real:

- Phone `(555) 555-5555` and email `info@levelcraft.com` in `app/page.tsx`
- Marketing copy for services and values is generic
