import { useState } from 'react';
import Image from 'next/image';

interface CrateCardProps {
  artist: string;
  title: string;
  label: string;
  year: string;
  price: string;
  imageUrl: string;
}

export default function CrateCard({ artist, title, label, year, price, imageUrl }: CrateCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full h-full" onClick={() => setIsFlipped(f => !f)}>
      <div
        className={`absolute inset-0 w-full h-full transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isFlipped ? 'rotate-y-180' : ''}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* CARD FRONT */}
        <div
          className="absolute inset-0 w-full h-full flex flex-col items-end p-6"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Album art */}
          <Image
            src={imageUrl}
            alt={`${title} by ${artist}`}
            fill
            className="object-cover"
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(20,19,19,0.85) 0%, rgba(20,19,19,0) 45%)' }}
          />
          {/* Text */}
          <div className="relative z-10 flex flex-col items-end">
            <h2 className="font-serif text-cream font-normal text-[clamp(2.5rem,4vw,4rem)]">
              {artist}
            </h2>
            <h3 className="font-serif italic text-cream/75 text-[clamp(1.5rem,2.5vw,2.5rem)] mt-2">
              {title}
            </h3>
          </div>
        </div>

        {/* CARD BACK */}
        <div
          className="absolute inset-0 w-full h-full bg-ink flex flex-col p-6"
          style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
        >
          <div className="flex-1 flex">
            {/* LEFT: TRACK LISTING */}
            <div className="w-[55%] pr-4 flex-shrink-0">
              <p className="font-sans text-cream/70 text-[13px] leading-relaxed whitespace-pre-line">
                {`A1. Track One\nA2. Track Two\nB1. Track Three\nB2. Track Four`}
              </p>
            </div>

            {/* RIGHT: METADATA GRID */}
            <div className="w-[45%] space-y-2">
              <div className="grid grid-cols-[56px_1fr] text-[11px] font-display uppercase tracking-[0.06em] gap-y-1">
                <span className="text-cream/70">Label</span>
                <span className="text-cream">{label}</span>

                <span className="text-cream/70">Year</span>
                <span className="text-cream">{year}</span>
              </div>

              {/* SONIC LINEAGE */}
              <div className="mt-4">
                <p className="font-display text-[11px] uppercase tracking-[0.06em] text-cream/70 mb-1">
                  Sonic Lineage
                </p>
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="text-dark-accent hover:underline">
                    {artist.split(' ')[0]}
                  </a>
                  <a href="#" className="text-dark-accent hover:underline">
                    Related Artist
                  </a>
                </div>
              </div>

              {/* PRICE + CTA */}
              <div className="mt-6 flex flex-col items-start space-y-3">
                <p className="font-serif italic text-display-sm text-dark-accent">
                  {price}
                </p>
                <button className="bg-forest text-cream px-6 py-2 font-display text-[11px] uppercase tracking-[0.06em]">
                  Grab it
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
