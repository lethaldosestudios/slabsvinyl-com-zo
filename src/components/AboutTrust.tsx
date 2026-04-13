'use client';

import Image from 'next/image';
import Link from 'next/link';

const thumbnails = [
  '/assets/placeholder-01.jpg',
  '/assets/placeholder-02.jpg',
  '/assets/placeholder-03.jpg',
  '/assets/placeholder-04.jpg',
];

export default function AboutTrust() {
  return (
    <section
      className="bg-cream w-full"
      style={{ padding: 'clamp(4rem,8vw,8rem) clamp(1.5rem,5vw,5rem)' }}
    >
      <div className="mx-auto" style={{ maxWidth: '1280px' }}>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-16">

          {/* ── Left column: Brand Statement ── */}
          <div>
            {/* Overline */}
            <p
              className="font-display font-semibold uppercase text-slabs-text-faint mb-4"
              style={{ fontSize: '10px', letterSpacing: '0.12em' }}
            >
              ABOUT SLABS
            </p>

            {/* Heading */}
            <h2
              className="font-serif font-normal text-slabs-text mb-6"
              style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', lineHeight: '1.18' }}
            >
              Dead stock. Factory sealed. Straight to you.
            </h2>

            {/* Paragraph 1 */}
            <p
              className="font-sans text-slabs-text-muted mb-4"
              style={{ fontSize: '14px', lineHeight: '1.7', maxWidth: '55ch' }}
            >
              Slabs sources dead stock wholesale inventory — factory-sealed records
              that never made it to a retail shelf. Every item in the catalog is new
              condition. No used. No graded. No exceptions.
            </p>

            {/* Paragraph 2 */}
            <p
              className="font-sans text-slabs-text-muted mb-10"
              style={{ fontSize: '14px', lineHeight: '1.7', maxWidth: '55ch' }}
            >
              The inventory is drawn from soul, funk, R&amp;B, hip-hop, jazz, Latin,
              gospel, blues, reggae, electronic, and world. Curated by ear, not by
              algorithm.
            </p>

            {/* CTA */}
            <Link
              href="/about"
              className="group inline-flex items-center font-display uppercase text-slabs-text-muted hover:text-slabs-text transition-colors duration-[320ms]"
              style={{ fontSize: '12px', letterSpacing: '0.06em', gap: '6px' }}
            >
              <span>Our story</span>
              <span
                className="inline-block transition-all duration-[320ms] group-hover:translate-x-1"
                style={{ display: 'inline-block' }}
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>

          {/* ── Right column: 2×2 image grid ── */}
          <div className="grid grid-cols-2 gap-3">
            {thumbnails.map((src, i) => (
              <div key={i} className="relative w-full" style={{ aspectRatio: '1/1' }}>
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 45vw, 200px"
                />
              </div>
            ))}
          </div>

        </div>

        {/* ── Trust line (full width, below columns) ── */}
        <div
          className="mt-8 pt-8"
          style={{ borderTop: '1px solid rgba(20,19,19,0.08)' }}
        >
          <p
            className="font-display uppercase text-slabs-text-faint"
            style={{ fontSize: '11px', letterSpacing: '0.06em' }}
          >
            All Slabs records are factory sealed and new condition. Dead stock. No exceptions.
          </p>
        </div>

      </div>
    </section>
  );
}
