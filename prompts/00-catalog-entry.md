# SLABS — COMPONENT PROMPT: CATALOG ENTRY
## Standalone reusable component · slabsvinyl.com

Using the design system defined in the Master Build Prompt, build the `<CatalogEntry />` card component. This is the atomic product card used throughout the site — New Arrivals grid, search results, collection pages, and anywhere a record appears as a browseable item.

---

## What to Build

A single reusable React component that renders one vinyl record as a catalog card. The card shows album art with a two-column spec block below. It is never a buy button — it is a ledger entry.

> **Note:** The vinyl disc slide-out animation belongs on the Product Detail Page (PDP) only, where the record is displayed solo. In grid context the disc emerges into the adjacent card — do not implement it here.

---

## Card Structure

```
┌─────────────────────────────────┐
│       [ALBUM ART — square]      │  ← full-width, aspect-ratio 1/1
├──────────────┬──────────────────┤
│ 001          │ MARVIN GAYE      │
│ SOUL         │ WHAT'S GOING ON  │
│              │ TAMLA · 1971     │
│              │ T 310L           │
└──────────────┴──────────────────┘
```

---

## Image Container

- `position: relative`, `overflow: hidden`
- The entire image area is wrapped in an `<a>` linking to `/products/[slug]` — the **only** interactive element on the card

---

## Album Sleeve

- `aspect-ratio: 1/1`, `overflow: hidden`
- `img`: `object-fit: cover`, `w-full h-full`

---

## Spec Block

- `display: grid`, `grid-template-columns: 56px 1fr`
- `padding: 10px 12px 12px`
- `border-top: 1px solid` divider alpha (`slabs-border`)

**Left column (56px fixed)**
- `border-right: 1px solid` divider alpha, `padding-right: 8px`
- Font: `font-display`, 11px, `font-weight: 400`, `tracking-[0.04em]`, uppercase
- Color: `text-slabs-text-faint`
- Two lines: index number (e.g. `001`) + genre (e.g. `SOUL`)

**Right column**
- `padding-left: 10px`
- Font: `font-display`, 11px, `font-weight: 400`, `tracking-[0.04em]`, uppercase
- **All four lines same size and weight — NO typographic hierarchy**
- Artist name: `text-slabs-text` (`#141313`)
- Title, Label · Year, Cat. No.: `text-slabs-text-muted` (`#4E4843`)
- Each line: `display: block`

---

## Card Container

- `border: 1px solid` `slabs-border`, `bg-slabs-surface`
- `cursor: default` — the card itself is **not** a link
- Hover: `translateY(-3px)`, shadow `0 4px 16px rgba(20,19,19,0.08)`, `transition 200ms ease-analog`

---

## Sold-Out State

- `filter: saturate(0.7)` on the sleeve `img`
- Status label text `"Gone"` rendered in the spec block:
  - Font: `font-display`, 10px, `font-weight: 600`, `tracking-[0.10em]`, uppercase
  - Color: `text-wax`
  - No background, no border, no pill — plain text only

---

## Props

```ts
interface CatalogEntryProps {
  index: string;          // "001"
  genre: string;          // "Soul"
  artist: string;         // "Marvin Gaye"
  title: string;          // "What's Going On"
  label: string;          // "Tamla"
  year: string;           // "1971"
  catalogNumber: string;  // "T 310L"
  imageUrl: string;       // absolute or relative URL
  slug: string;           // "marvin-gaye-whats-going-on"
  inStock: boolean;       // false → sold-out state
}
```

---

## Mock Data (8 records — for dev/Storybook use)

```ts
export const mockRecords: CatalogEntryProps[] = [
  { index:"001", genre:"Soul",    artist:"Marvin Gaye",     title:"What's Going On",       label:"Tamla",       year:"1971", catalogNumber:"T 310L",    slug:"marvin-gaye-whats-going-on",         inStock:true  },
  { index:"002", genre:"Funk",    artist:"James Brown",     title:"Sex Machine",            label:"King",        year:"1970", catalogNumber:"KSD 1115",  slug:"james-brown-sex-machine",            inStock:true  },
  { index:"003", genre:"Jazz",    artist:"Miles Davis",     title:"Kind of Blue",           label:"Columbia",    year:"1959", catalogNumber:"CL 1355",   slug:"miles-davis-kind-of-blue",           inStock:true  },
  { index:"004", genre:"R&B",     artist:"Aretha Franklin", title:"Young Gifted and Black", label:"Atlantic",    year:"1972", catalogNumber:"SD 7213",   slug:"aretha-franklin-young-gifted-black", inStock:true  },
  { index:"005", genre:"Reggae",  artist:"Burning Spear",   title:"Marcus Garvey",          label:"Island",      year:"1975", catalogNumber:"ILPS 9377", slug:"burning-spear-marcus-garvey",        inStock:false },
  { index:"006", genre:"Latin",   artist:"Celia Cruz",      title:"Tremendo Cache",         label:"Vaya",        year:"1975", catalogNumber:"VS-63",     slug:"celia-cruz-tremendo-cache",          inStock:true  },
  { index:"007", genre:"Gospel",  artist:"Mahalia Jackson", title:"How I Got Over",         label:"Columbia",    year:"1976", catalogNumber:"PC 34073",  slug:"mahalia-jackson-how-i-got-over",     inStock:true  },
  { index:"008", genre:"Hip-Hop", artist:"Eric B. & Rakim", title:"Paid in Full",           label:"4th & B'way", year:"1987", catalogNumber:"MCA-42248", slug:"eric-b-rakim-paid-in-full",          inStock:true  },
]
```

---

## Do Not

- No vinyl disc element, no slide-out animation — disc animation is PDP-only
- No buy button, add-to-cart, or price anywhere on the card
- No overlay, badge, or tooltip on the album art
- No centered text — spec block is always left-aligned
- No colored card backgrounds on any state (hover, sold-out, etc.)
- No border-radius anywhere on the card
