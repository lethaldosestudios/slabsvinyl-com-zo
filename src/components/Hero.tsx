'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Request animation frame ensures the initial state is rendered
    // before the mounted state flips to true, triggering the CSS transitions.
    const timer = requestAnimationFrame(() => {
      setMounted(true);
    });
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Call once on mount to handle initial scroll position
    handleScroll();
    
    return () => {
      cancelAnimationFrame(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-paper pt-[60px] flex items-center justify-center overflow-hidden">
      {/* Inline styles for custom chevron animation */}
      <style>{`
        @keyframes bounce-chevron {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        .animate-bounce-chevron {
          animation: bounce-chevron 2000ms infinite ease-in-out;
        }
      `}</style>

      <div className="flex flex-col items-center justify-center text-center">
        
        {/* Wordmark */}
        <div 
          className={`mb-10 transition-all duration-crate ease-analog delay-0 ${
            mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.01]'
          }`}
        >
          <Image 
            src="/assets/wordmark-slabs-fuzzy.jpg" 
            alt="Slabs Vinyl Supply"
            width={560}
            height={200}
            className="w-[clamp(280px,40vw,560px)] h-auto border-none shadow-none filter-none"
          />
        </div>

        {/* Tagline */}
        <p 
          className={`font-display font-normal text-ui-h5 text-slabs-text-muted tracking-[0.04em] mb-10 transition-all duration-[400ms] ease-analog delay-[400ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          Deep archive. New condition. No filler.
        </p>

        {/* CTA Pair */}
        <div 
          className={`flex items-center justify-center gap-3 transition-all duration-[400ms] ease-analog delay-[700ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          {/* Button 1 — "Shop" */}
          <Link 
            href="/shop"
            className="border border-slabs-text font-display text-ui-label font-semibold uppercase tracking-[0.08em] px-8 py-3 transition-colors duration-fast ease-analog hover:bg-slabs-text hover:text-cream"
          >
            Shop
          </Link>

          {/* Button 2 — "Dig the Crates" */}
          <Link 
            href="/crate"
            className="border border-slabs-border font-display text-ui-label font-semibold uppercase tracking-[0.08em] px-8 py-3 text-slabs-text-muted transition-colors duration-fast ease-analog hover:border-slabs-text-muted hover:text-slabs-text"
          >
            Dig the Crates
          </Link>
        </div>

      </div>

      {/* Scroll Chevron */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-std ease-analog ${
          scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <ChevronDown 
          className="w-5 h-5 text-slabs-text-faint animate-bounce-chevron" 
        />
      </div>

    </section>
  );
}
