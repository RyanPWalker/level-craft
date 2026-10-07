# Level Craft Construction

Marketing site for Level Craft Construction, built with Next.js (static export) and hosted on GitHub Pages.

## Development

```bash
corepack enable  # once, provides the pinned Yarn version
yarn install
yarn dev         # http://localhost:3000
yarn build       # static output in ./out
```

## Deployment

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

One-time setup: in the repo on GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

The site is served at `https://<user>.github.io/level-craft/`. If you add a custom domain, remove `NEXT_PUBLIC_BASE_PATH` from the workflow.
