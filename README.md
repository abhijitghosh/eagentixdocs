# Eagentix Documentation (`doc.eagentix.com`)

Official user guides, studio walkthroughs, and tool references for the [Eagentix Platform](https://eagentix.com).

## Development

```bash
# Install dependencies
npm install

# Start local preview server (hot reloading)
npm run docs:dev

# Build static production bundle
npm run docs:build

# Preview built site locally
npm run docs:preview
```

## Deployment to `doc.eagentix.com`

Deploys the static VitePress bundle to the Hostinger server over SSH:

```bash
bash deploy_docs.sh
```

## Project Structure

- `docs/index.md` — Branded homepage with hero and feature cards
- `docs/getting-started/` — Platform architecture, workspace isolation, integrations
- `docs/studios/seo-studio/` — Comprehensive 6-pillar SEO Studio user guides & campaign tracking
- `docs/reference/` — Living catalog of allowlisted skills, tools, and schemas
- `docs/.vitepress/` — VitePress config, local search, brand colors, and assets
