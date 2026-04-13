import Link from 'next/link';
import CatalogEntry, { mockRecords } from './CatalogEntry';

export default function NewArrivals() {
  return (
    <section className="bg-paper py-[clamp(4rem,8vw,8rem)]">
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,5rem)]">
        {/* Section Header */}
        <div className="text-left mb-10">
          <div className="font-display text-ui-over font-semibold uppercase tracking-[0.12em] text-slabs-text-faint mb-3">
            NEW ARRIVALS
          </div>
          <h2 className="font-serif italic text-display-sm font-normal text-slabs-text">
            Just dropped.
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockRecords.slice(0, 8).map((record) => (
            <CatalogEntry key={record.index} {...record} />
          ))}
        </div>

        {/* Section Footer */}
        <div className="mt-8 text-right">
          <Link 
            href="/collections/new-arrivals" 
            className="group inline-flex items-center font-display text-[12px] uppercase tracking-[0.06em] text-slabs-text-muted hover:text-slabs-text transition-colors duration-200"
          >
            <span>View all new arrivals</span>
            <span className="ml-1 group-hover:ml-[10px] transition-all duration-200 ease-analog">&rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}