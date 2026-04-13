'use client';

import Link from 'next/link';

export default function SonicLineage() {
  return (
    <section
      className="bg-plum w-full"
      style={{ padding: 'clamp(4rem,8vw,8rem) clamp(1.5rem,5vw,5rem)' }}
    >
      <div className="mx-auto" style={{ maxWidth: '1280px' }}>

        {/* Decorative rule */}
        <div
          className="mb-12"
          style={{ borderTop: '1px solid rgba(239,238,234,0.12)' }}
        />

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-16">

          {/* ── Left column: Quote ── */}
          <div>
            {/* Overline */}
            <p
              className="font-display font-semibold uppercase text-cream/40 mb-6"
              style={{ fontSize: '10px', letterSpacing: '0.12em' }}
            >
              SONIC LINEAGE
            </p>

            {/* Pull quote */}
            <p
              className="font-serif italic font-normal text-cream mb-6"
              style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', lineHeight: '1.06' }}
            >
              From Motown to MPC.
            </p>

            {/* Sub-quote */}
            <p
              className="font-serif font-normal text-cream/60"
              style={{ fontSize: '24px', lineHeight: '1.3' }}
            >
              Every record in the archive carries its lineage.
            </p>
          </div>

          {/* ── Right column: Explanation ── */}
          <div className="flex flex-col justify-end">
            {/* Body paragraph */}
            <p
              className="font-sans text-cream/65 mb-8"
              style={{
                fontSize: '14px',
                lineHeight: '1.7',
                maxWidth: '55ch',
              }}
            >
              The PRODUCER_NOTE field maps each record&apos;s place in music history —
              who influenced the artist, and who they went on to influence. It&apos;s
              how you find Cymande when you&apos;re looking for De La Soul source
              material. It&apos;s how collectors follow threads.
            </p>

            {/* Text CTA */}
            <Link
              href="/about/sonic-lineage"
              className="group inline-flex items-center gap-2 font-display uppercase text-cream/60 hover:text-cream/90 transition-colors duration-[320ms]"
              style={{ fontSize: '12px', letterSpacing: '0.06em' }}
            >
              <span>How sonic lineage works</span>
              <span
                className="inline-block transition-all duration-[320ms] group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
