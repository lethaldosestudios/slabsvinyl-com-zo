# SLABS — SECTION PROMPT 03: NEW ARRIVALS
## Paste after the Master Build Prompt · slabsvinyl.com

Using the design system defined above, build the **New Arrivals** section for the slabsvinyl.com home page.

---

## What to Build

Product grid section showing 8 most recently added records. Includes the reusable `<CatalogEntry />` card component.

---

## Section Header

- Overline: `"NEW ARRIVALS"` — `font-display`, 10px, uppercase, `tracking-[0.12em]`, `text-slabs-text-faint`
- Heading: `"Just dropped."` — `font-serif` italic, `text-display-sm`

---

## Product Grid

- 4 col desktop / 2 col tablet / 1 col mobile, `gap-4`
- 8 `<CatalogEntry />` cards

---

## CatalogEntry Component

### Image
- `position: relative`, `overflow: visible` — CRITICAL
- Entire `<a>` links to `/products/[slug]`

### Vinyl disc
- `position: absolute`, `top: 5%`, `left: 5%`, `width: 88%`, `height: 88%`
- `z-index: 1`, `border-radius: 50%`
- Hover: `translateX(55%)`, `transition 300ms cubic-bezier(0.25,0.1,0.25,1)`

### Spec block
- `grid-template-columns: 56px 1fr`
- Font: `font-display`, 11px, uppercase, `tracking-[0.04em]`
- All four lines same size/weight — no hierarchy
- Artist: `text-slabs-text` · rest: `text-slabs-text-muted`

### Mock data
```ts
const records = [
  { index:"001", genre:"Soul",    artist:"Marvin Gaye",     title:"What's Going On",       label:"Tamla",    year:"1971", catalogNumber:"T 310L",    slug:"marvin-gaye-whats-going-on",         inStock:true  },
  { index:"002", genre:"Funk",    artist:"James Brown",     title:"Sex Machine",            label:"King",     year:"1970", catalogNumber:"KSD 1115",  slug:"james-brown-sex-machine",            inStock:true  },
  { index:"003", genre:"Jazz",    artist:"Miles Davis",     title:"Kind of Blue",           label:"Columbia", year:"1959", catalogNumber:"CL 1355",   slug:"miles-davis-kind-of-blue",           inStock:true  },
  { index:"004", genre:"R&B",     artist:"Aretha Franklin", title:"Young Gifted and Black", label:"Atlantic", year:"1972", catalogNumber:"SD 7213",   slug:"aretha-franklin-young-gifted-black", inStock:true  },
  { index:"005", genre:"Reggae",  artist:"Burning Spear",   title:"Marcus Garvey",          label:"Island",   year:"1975", catalogNumber:"ILPS 9377", slug:"burning-spear-marcus-garvey",        inStock:false },
  { index:"006", genre:"Latin",   artist:"Celia Cruz",      title:"Tremendo Cache",         label:"Vaya",     year:"1975", catalogNumber:"VS-63",     slug:"celia-cruz-tremendo-cache",          inStock:true  },
  { index:"007", genre:"Gospel",  artist:"Mahalia Jackson", title:"How I Got Over",         label:"Columbia", year:"1976", catalogNumber:"PC 34073",  slug:"mahalia-jackson-how-i-got-over",     inStock:true  },
  { index:"008", genre:"Hip-Hop", artist:"Eric B. & Rakim", title:"Paid in Full",           label:"4th & B'way", year:"1987", catalogNumber:"MCA-42248", slug:"eric-b-rakim-paid-in-full",      inStock:true  },
]
```

---

## Do Not
- No buy button anywhere on the card
- No price on the card
- No overlay on album art
- No centered spec text
