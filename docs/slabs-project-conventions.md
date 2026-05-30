# Slabs Project Conventions

> Read this before writing any Shopify integration code, env var references, metafield keys, or file paths.
> This is the single source of truth for naming and structure conventions across the repo.

---

## Environment Variables

All env vars live in `.env.local` (never committed — listed in `.gitignore`).
For Render deploys, set these in the Render dashboard under **Environment**.

| Variable | Description |
|---|---|
| `SHOPIFY_STOREFRONT_API_URL` | Full Storefront API endpoint — `https://{store}.myshopify.com/api/2024-01/graphql.json` |
| `SHOPIFY_STOREFRONT_ACCESS_TOKEN` | Public Storefront API access token (read-only) |
| `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` | Store domain without protocol — `{store}.myshopify.com` |

- Never prefix server-only vars with `NEXT_PUBLIC_`
- `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` is the only client-safe var — used for constructing image URLs
- Do not add new env vars without updating this file

---

## File Paths

### Shopify API Layer

| Path | Purpose |
|---|---|
| `lib/shopify.ts` | Core GraphQL fetch utility — all Storefront API requests go through here |
| `lib/queries/products.ts` | Product and variant GraphQL query strings |
| `lib/queries/collections.ts` | Collection GraphQL query strings |
| `lib/queries/cart.ts` | Cart create, add, update, remove mutation strings |
| `types/shopify.ts` | TypeScript interfaces for all Storefront API response shapes |

### Pages

| Path | Purpose |
|---|---|
| `src/app/page.tsx` | Homepage — all 8 sections |
| `src/app/shop/page.tsx` | Full catalog with filter strip |
| `src/app/products/[handle]/page.tsx` | Product Detail Page (PDP) |
| `src/app/cart/page.tsx` | Cart page (fallback if no drawer) |

### Components

| Path | Purpose |
|---|---|
| `src/components/CatalogEntry.tsx` | Product grid card |
| `src/components/CrateCard.tsx` | From the Crates carousel card |
| `src/components/FilterStrip.tsx` | Ledger-style filter row for shop page |
| `src/components/CartDrawer.tsx` | Slide-in cart drawer |
| `src/components/Nav.tsx` | Sticky header / mobile overlay |

### Assets

- All album art lives in `public/assets/` — filenames match catalog index (e.g. `001-kendrick-tpab.jpg`)
- Wordmark and brand assets live in `public/assets/brand/`

---

## Shopify Metafield Conventions

Metafields are defined on the **Product** object in Shopify Admin.

| Namespace | Key | Type | Purpose |
|---|---|---|---|
| `slabs` | `catalog_index` | `single_line_text_field` | 3-digit display index (e.g. `001`) |
| `slabs` | `genre` | `single_line_text_field` | Genre label (e.g. `Hip-Hop`, `Jazz`) |
| `slabs` | `catalog_number` | `single_line_text_field` | Label catalog number (e.g. `TDE-002`) |
| `slabs` | `pressing_notes` | `multi_line_text_field` | Free-text pressing details shown on PDP |
| `slabs` | `sonic_lineage` | `json` | Lineage data — `{ influences: [], descendants: [] }` |

- All custom metafields use the `slabs` namespace — never use `custom` or `global`
- Metafield keys are `snake_case`
- Query metafields via `metafield(namespace: "slabs", key: "...")` in product GraphQL queries

---

## Cart Conventions

- Cart state is managed client-side using React Context (no Zustand until explicitly approved)
- Cart ID is stored in `localStorage` under the key `slabs-cart-id`
- Cart is created via Shopify `cartCreate` mutation on first item add
- Checkout hands off to Shopify-hosted checkout via `cart.checkoutUrl`
- No custom checkout — Shopify-hosted only

---

## Naming Conventions

### TypeScript
- Interfaces: `PascalCase` prefixed with `Shopify` for API types (e.g. `ShopifyProduct`, `ShopifyCart`)
- Local/UI types: `PascalCase` without prefix (e.g. `CatalogEntryProps`)
- GraphQL query functions: `camelCase` verb-noun (e.g. `getProductByHandle`, `getCollectionProducts`)

### GraphQL
- Query/mutation names: `PascalCase` (e.g. `GetProductByHandle`, `CartCreate`)
- Fragment names: `PascalCase` + `Fragment` suffix (e.g. `ProductCardFragment`)

### Components
- All component files: `PascalCase.tsx`
- All component exports: default named export matching filename

### CSS / Tailwind
- Use only token names from `tailwind.config.js` — never raw hex, never default Tailwind palette names
- Custom class names (buttons, labels): `kebab-case` prefixed with `btn-` or `link-` (e.g. `btn-primary`, `link-arrow`)

---

## What Does NOT Live Here

- Design tokens → `tailwind.config.js`
- Component specs → `design-system/slabs-design-system-v2.md`
- Typography rules → `design-system/typography-design-system.md`
- Section build specs → `prompts/01-nav.md` through `prompts/08-footer.md`

---

*slabsvinyl.com · Project Conventions v1.0 · May 2026*
