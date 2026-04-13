'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Menu, X, Disc, Archive } from 'lucide-react';

interface NavProps {
  cartCount: number;
  currentPath: string;
  transparent?: boolean;
}

export default function Nav({ cartCount, currentPath, transparent = false }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animateItems, setAnimateItems] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => setAnimateItems(true), 50);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = '';
      setAnimateItems(false);
    }
  }, [mobileMenuOpen]);

  const isTransparent = transparent && !scrolled;
  const headerBgClass = isTransparent ? 'bg-transparent' : 'bg-slabs-surface border-b border-slabs-border';
  const wordmarkColor = isTransparent ? 'text-slabs-text' : 'text-slabs-text';
  const iconColor = isTransparent ? 'text-slabs-text-muted' : 'text-slabs-text-muted';

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/collections' },
    { label: 'Crate', path: '/crate' },
    { label: 'Journal', path: '/journal' },
    { label: 'About', path: '/about' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 h-[60px] transition-colors duration-fast ease-analog ${headerBgClass}`}>
        <div className="max-w-content mx-auto px-[clamp(1.5rem,5vw,5rem)] h-full flex items-center justify-between">
          
          {/* Mobile Menu Trigger */}
          <button 
            className={`md:hidden p-2 -ml-2 ${iconColor} transition-colors duration-fast ease-analog`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 stroke-[1.5px]" />
          </button>

          {/* Wordmark */}
          <Link href="/" className={`font-serif italic text-[28px] font-normal leading-none ${wordmarkColor} transition-colors duration-fast ease-analog`}>
            SLABS
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <Link 
                  key={link.path}
                  href={link.path} 
                  className={`relative group overflow-hidden py-1 transition-colors duration-fast ease-analog ${iconColor}`}
                >
                  <span className="block font-display text-ui-nav">{link.label}</span>
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-forest transition-transform duration-fast ease-analog ${
                      isActive ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'
                    }`} 
                  />
                </Link>
              );
            })}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button aria-label="Search" className={`hidden md:block p-2 ${iconColor} transition-colors duration-fast ease-analog`}>
              <Search className="w-5 h-5 stroke-[1.5px]" />
            </button>
            <button aria-label="Cart" className={`hidden md:block p-2 -mr-2 relative ${iconColor} transition-colors duration-fast ease-analog`}>
              <ShoppingBag className="w-5 h-5 stroke-[1.5px]" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 bg-amber text-ink font-sans text-[10px] font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            
            {/* Mobile Empty Placeholder for alignment if needed, or hide desktop icons on mobile */}
            <div className="md:hidden w-10"></div>
          </div>

        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-ink flex flex-col md:hidden">
          <button 
            className="absolute top-6 right-6 text-cream/60 p-2 hover:text-cream transition-colors duration-fast ease-analog"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6 stroke-[1.5px]" />
          </button>

          <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6 pb-[56px]">
            {navLinks.map((link, index) => (
              <Link 
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-serif italic text-[36px] font-normal text-cream transition-all duration-std ease-analog ${
                  animateItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Bottom Bar */}
          <div className="fixed bottom-0 left-0 w-full h-[56px] bg-ink border-t border-dark-border flex items-center justify-around px-4">
            <Link href="/shop" onClick={() => setMobileMenuOpen(false)} className="flex flex-col items-center justify-center h-full gap-1 text-cream/60 hover:text-cream transition-colors duration-fast ease-analog">
              <Disc className="w-5 h-5 stroke-[1.5px]" />
              <span className="font-display text-[9px] uppercase tracking-[0.12em]">Shop</span>
            </Link>
            <Link href="/crate" onClick={() => setMobileMenuOpen(false)} className="flex flex-col items-center justify-center h-full gap-1 text-cream/60 hover:text-cream transition-colors duration-fast ease-analog">
              <Archive className="w-5 h-5 stroke-[1.5px]" />
              <span className="font-display text-[9px] uppercase tracking-[0.12em]">Crate</span>
            </Link>
            <button className="flex flex-col items-center justify-center h-full gap-1 text-cream/60 hover:text-cream transition-colors duration-fast ease-analog">
              <Search className="w-5 h-5 stroke-[1.5px]" />
              <span className="font-display text-[9px] uppercase tracking-[0.12em]">Search</span>
            </button>
            <button className="flex flex-col items-center justify-center h-full gap-1 text-cream/60 hover:text-cream transition-colors duration-fast ease-analog relative">
              <ShoppingBag className="w-5 h-5 stroke-[1.5px]" />
              <span className="font-display text-[9px] uppercase tracking-[0.12em]">Cart</span>
              {cartCount > 0 && (
                <span className="absolute top-1 right-2 flex items-center justify-center w-[14px] h-[14px] bg-amber text-ink font-sans text-[9px] font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}