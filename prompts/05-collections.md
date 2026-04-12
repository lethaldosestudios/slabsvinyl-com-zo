# SLABS — SECTION PROMPT 05: COLLECTIONS
## Paste after the Master Build Prompt · slabsvinyl.com

Editorial 3-card grid. One large card left, two smaller stacked right. Dark surface cards on light background.

---

## Grid
- Desktop: `grid-cols-3`, large card `grid-row: span 2`
- Mobile: single column

## Collection Card
- `bg-ink`, full-bleed art with gradient overlay
- Hover: bg image `scale(1.01)` only — text stays fixed
- Content bottom-left: collection name (`font-serif` italic) + descriptor (`font-sans` 13px) + record count

## Mock Data
```ts
const collections = [
  { slug:"late-night-funk",     name:"Late Night Funk",       descriptor:"Slow burns and deep pocket grooves",       count:31, size:"large" },
  { slug:"soul-club-1968-1975", name:"Soul Club 1968-75",     descriptor:"Atlantic, Stax, Motown. The golden run.",   count:48, size:"small" },
  { slug:"rare-reggae",         name:"Rare Reggae Pressings", descriptor:"Jamaican pressings, UK exports, hard find", count:17, size:"small" },
]
```

## Do Not
- No light-colored cards
- No border on cards
- No "Shop Collection" button — full card is the CTA
