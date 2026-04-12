# SLABS — SECTION PROMPT 04: FROM THE CRATES
## Paste after the Master Build Prompt · slabsvinyl.com

Full-viewport scroll-hijacked card stack. 6 curated records. Desktop scroll / mobile swipe advances cards. Each card: front (album art) + back (metadata + buy).

---

## Card Front
- Full-bleed album art, gradient overlay bottom 45%
- Artist: `font-serif`, `clamp(2.5rem,4vw,4rem)`, `text-cream`
- Title: `font-serif` italic, `clamp(1.5rem,2.5vw,2.5rem)`, `text-cream/75`

## Card Back
- `bg-ink`, two columns desktop (55/45), single column mobile
- Left: track listing — `font-sans`, 13px, `text-cream/70`
- Right: metadata grid — `font-display`, 11px, uppercase, `tracking-[0.06em]`
- Sonic Lineage: amber artist names (`text-dark-accent`) → filter links
- Price: `font-serif` italic, `text-display-sm`, `text-dark-accent`
- CTA: `"Grab it"` — `bg-forest text-cream`

## Navigation
- Desktop: scroll within pinned section
- Mobile: horizontal swipe
- Transition: 600ms, current exits left, next enters from right

## Mock Data
```ts
const crateRecords = [
  { artist:"Marvin Gaye",     title:"What's Going On",        label:"Tamla",   year:"1971", price:"$22.99" },
  { artist:"Aretha Franklin", title:"Young, Gifted and Black", label:"Atlantic",year:"1972", price:"$24.99" },
  { artist:"Fela Kuti",       title:"Zombie",                  label:"Coconut", year:"1977", price:"$34.99" },
  { artist:"Cymande",         title:"Second Time Round",       label:"Janus",   year:"1973", price:"$44.99" },
  { artist:"Roy Ayers",       title:"Everybody Loves the Sunshine", label:"Polydor", year:"1976", price:"$28.99" },
  { artist:"Minnie Riperton", title:"Perfect Angel",           label:"Epic",    year:"1974", price:"$19.99" },
]
```

## Do Not
- No autoplay
- No buy button on card front
- No parallax
