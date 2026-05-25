# Slabs Vinyl Supply — Project Conventions

> This file is the source of truth for project-specific naming, env vars, and architectural decisions.
> It is read by the `SHOPIFY-HEADLESS-ARCHITECT` agent via `codebase` access and by GitHub Copilot via `.github/copilot-instructions.md`.
> Do not duplicate values from here into agent files — reference this file instead.

***

## Cart

| Convention | Value |
|---|---|
| Cart ID storage key | `slabs-cart-id` |
| Storage mechanism | HTTP-only cookie (set via Next.js API route) |
| Cookie set in | `app/api/cart/create/route.ts` |
| Cart context provider | `src/components/CartProvider.tsx` |
| Cart ID read from | `cookies().get('slabs-cart-id')` (server) / cookie util (client) |

***

## Storefront API

| Convention | Value |
|---|---|
| Store domain env var | `SHOPIFY_STORE_DOMAIN` |
| Storefront access token env var | `SHOPIFY_STOREFRONT_ACCESS_TOKEN` |
| API version | `2024-10` (update here when bumping) |
| Data layer entry point | `lib/shopify.ts` |
| Fetch wrapper export | `fetchStorefront<T>(query, variables?, options?)` |

***

## Metafields

Product metafields used in this project. All are namespace `custom` unless noted.

| Field | Namespace | Key | Type | Used On |
|---|---|---|---|---|
| Catalog number | `custom` | `catalog_number` | `single_line_text_field` | PDP, CatalogEntry card |
| Record label | `custom` | `record_label` | `single_line_text_field` | PDP, CatalogEntry card |
| Release year | `custom` | `release_year` | `number_integer` | PDP, CatalogEntry card |
| Genre | `custom` | `genre` | `single_line_text_field` | CatalogEntry card, filters |
| Pressing info | `custom` | `pressing_info` | `multi_line_text_field` | PDP only |
| Sonic Lineage | `custom` | `sonic_lineage` | `json` | Sonic Lineage section |

> **Note:** Validate these keys against the live store definition via `mcp/shopify-dev-mcp` before writing queries. Keys here are the intended definitions — confirm they exist before use.

***

## Next.js File Conventions

| Role | Path |
|---|---|
| Storefront fetch wrapper | `lib/shopify.ts` |
| GraphQL query fragments | `lib/fragments/` |
| Typed GraphQL operations | `lib/queries/` |
| TypeScript Storefront types | `lib/types/storefront.ts` |
| Cart API routes | `app/api/cart/[action]/route.ts` |
| Cart context | `src/components/CartProvider.tsx` |
| Product page | `app/products/[handle]/page.tsx` |
| Collection page | `app/collections/[handle]/page.tsx` |

***

## Environment Variables

Required in `.env.local` (never committed):

```bash
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-public-storefront-token
```

***

## Design System Reference

Design tokens, typography, color palette, and component rules live in:

- `design-system/slabs-design-system-v2.md` — colors, spacing, border-radius rules, motion
- `design-system/typography-design-system.md` — font roles, size scale, Tailwind classes
- `tailwind.config.js` — canonical token names; always use these, never Tailwind defaults

The `SHOPIFY-HEADLESS-ARCHITECT` agent does not enforce design tokens. The `codebase` tool will surface `tailwind.config.js` and the design system files when writing UI-adjacent code.
