'use client';

import Link from 'next/link';

interface Collection {
  slug: string;
  name: string;
  descriptor: string;
  count: number;
  imageUrl: string;
  size: 'large' | 'small';
}

const collections: Collection[] = [
  { slug: 'late-night-funk',     name: 'Late Night Funk',         descriptor: 'Slow burns and deep pocket grooves',        count: 31, imageUrl: '/assets/collection-funk.jpg',    size: 'large' },
  { slug: 'soul-club-1968-1975', name: 'Soul Club 1968–75',       descriptor: 'Atlantic, Stax, Motown. The golden run.',    count: 48, imageUrl: '/assets/collection-soul.jpg',    size: 'small' },
  { slug: 'rare-reggae',         name: 'Rare Reggae Pressings',   descriptor: 'Jamaican pressings, UK exports, hard to find', count: 17, imageUrl: '/assets/collection-reggae.jpg', size: 'small' },
];

function CollectionCard({ collection, large }: { collection: Collection; large?: boolean }) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className={`group relative block overflow-hidden bg-ink ${
        large ? 'row-span-2' : ''
      }`}
      style={large ? { minHeight: '480px' } : {}}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[320ms] ease-analog group-hover:scale-[1.01]"
        style={{
          backgroundImage: `url(${collection.imageUrl})`,
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(20,19,19,0.92) 0%, rgba(20,19,19,0.30) 60%, transparent 100%)',
        }}
      />

      {/* Aspect ratio spacer (mobile / non-large) */}
      {!large && <div className="aspect-[4/3]" />}
      {large && <div className="aspect-[3/4] md:block hidden" />}

      {/* Card content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <p
          className="font-serif italic font-normal text-cream mb-2"
          style={{ fontSize: large ? '28px' : '20px' }}
        >
          {collection.name}
        </p>
        <p className="font-sans text-cream/65 mb-4 truncate" style={{ fontSize: '13px', lineHeight: '1.5' }}>
          {collection.descriptor}
        </p>
        <span className="font-display uppercase tracking-[0.06em] text-cream/50 group-hover:text-cream/80 transition-colors duration-[320ms]" style={{ fontSize: '11px' }}>
          <span className="inline-block transition-transform duration-[320ms] group-hover:translate-x-1">
            {collection.count} records →
          </span>
        </span>
      </div>
    </Link>
  );
}

export default function FeaturedCollections() {
  const [large, ...small] = collections;

  return (
    <section
      className="bg-paper"
      style={{ padding: 'clamp(4rem,8vw,8rem) clamp(1.5rem,5vw,5rem)' }}
    >
      <div className="mx-auto" style={{ maxWidth: '1280px' }}>
        {/* Section header */}
        <p className="font-display text-[10px] font-semibold uppercase tracking-[0.12em] text-slabs-text-faint mb-3">
          FROM THE COLLECTION
        </p>
        <h2 className="font-serif italic text-display-sm font-normal text-slabs-text mb-10">
          From the collection.
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large card — left column, spans 2 rows */}
          <CollectionCard collection={large} large />

          {/* Two small cards — right two columns stacked */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {small.map((col) => (
              <CollectionCard key={col.slug} collection={col} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
