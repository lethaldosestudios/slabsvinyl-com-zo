'use client';

import Link from 'next/link';
import { Instagram, Music } from 'lucide-react';

const exploreLinks = [
  { label: 'Shop',        href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'Crate',       href: '/crate' },
  { label: 'New Arrivals', href: '/new-arrivals' },
];

const companyLinks = [
  { label: 'Journal', href: '/journal' },
  { label: 'About',   href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const colLabelStyle: React.CSSProperties = {
  fontSize: '10px',
  letterSpacing: '0.10em',
};

const linkStyle: React.CSSProperties = {
  fontSize: '13px',
};

export default function Footer() {
  return (
    <footer
      className="bg-ink w-full"
      style={{
        paddingTop: 'clamp(4rem,6vw,6rem)',
        paddingBottom: '2rem',
        paddingLeft: 'clamp(1.5rem,5vw,5rem)',
        paddingRight: 'clamp(1.5rem,5vw,5rem)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: '1280px' }}>

        {/* ── Main content row ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Column 1 — Brand */}
          <div>
            <p
              className="font-serif italic font-normal text-cream mb-4"
              style={{ fontSize: '24px' }}
            >
              SLABS
            </p>
            <p
              className="font-display uppercase text-cream/35 mb-6"
              style={{ fontSize: '11px', letterSpacing: '0.05em', maxWidth: '22ch' }}
            >
              Deep Archive of New-Condition Physical Media
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-cream/40 hover:text-cream/75 transition-colors duration-[160ms]"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-cream/40 hover:text-cream/75 transition-colors duration-[160ms]"
              >
                <Music size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Column 2 — Explore */}
          <div>
            <p
              className="font-display font-semibold uppercase text-cream/35 mb-4"
              style={colLabelStyle}
            >
              EXPLORE
            </p>
            <nav className="flex flex-col gap-3">
              {exploreLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="font-display font-normal text-cream/55 hover:text-cream/85 transition-colors duration-[160ms]"
                  style={linkStyle}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Company */}
          <div>
            <p
              className="font-display font-semibold uppercase text-cream/35 mb-4"
              style={colLabelStyle}
            >
              COMPANY
            </p>
            <nav className="flex flex-col gap-3">
              {companyLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="font-display font-normal text-cream/55 hover:text-cream/85 transition-colors duration-[160ms]"
                  style={linkStyle}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

        </div>

        {/* ── Divider ── */}
        <div
          className="mt-12 mb-6"
          style={{ borderTop: '1px solid rgba(239,238,234,0.10)' }}
        />

        {/* ── Bottom bar ── */}
        <div
          className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 text-center md:text-left"
        >
          <span
            className="font-display uppercase text-cream/30"
            style={{ fontSize: '11px', letterSpacing: '0.04em' }}
          >
            &copy; 2026 Slabs Vinyl Supply
          </span>
          <span
            className="font-display uppercase text-cream/30"
            style={{ fontSize: '11px', letterSpacing: '0.04em' }}
          >
            slabsvinyl.com
          </span>
          <span
            className="font-display uppercase text-cream/30"
            style={{ fontSize: '11px', letterSpacing: '0.04em' }}
          >
            All records new condition, factory sealed.
          </span>
        </div>

      </div>
    </footer>
  );
}
