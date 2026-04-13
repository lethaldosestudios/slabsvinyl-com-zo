"use client";
import { useState, useEffect, useRef } from 'react';
import CrateCard from './CrateCard';

interface CrateRecord {
  artist: string;
  title: string;
  label: string;
  year: string;
  price: string;
}

const crateRecords: CrateRecord[] = [
  { artist: "Marvin Gaye",     title: "What's Going On",        label: "Tamla",   year: "1971", price: "$22.99" },
  { artist: "Aretha Franklin", title: "Young, Gifted and Black", label: "Atlantic", year: "1972", price: "$24.99" },
  { artist: "Fela Kuti",       title: "Zombie",                  label: "Coconut", year: "1977", price: "$34.99" },
  { artist: "Cymande",         title: "Second Time Round",       label: "Janus",   year: "1973", price: "$44.99" },
  { artist: "Roy Ayers",       title: "Everybody Loves the Sunshine", label: "Polydor", year: "1976", price: "$28.99" },
  { artist: "Minnie Riperton", title: "Perfect Angel",           label: "Epic",    year: "1974", price: "$19.99" },
];

export default function FromTheCrates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollTop = containerRef.current.scrollTop;
      const cardHeight = window.innerHeight;
      const index = Math.round(scrollTop / cardHeight);
      setCurrentIndex(Math.max(0, Math.min(index, crateRecords.length - 1)));
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!containerRef.current) return;
      const delta = e.deltaY > 0 ? 1 : -1;
      setCurrentIndex(prev => {
        const next = prev + delta;
        return Math.max(0, Math.min(next, crateRecords.length - 1));
      });
      containerRef.current.scrollTo({
        top: crateRecords.length * window.innerHeight * (currentIndex / (crateRecords.length - 1)),
        behavior: 'smooth'
      });
    };

    containerRef.current?.addEventListener('scroll', handleScroll);
    containerRef.current?.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      containerRef.current?.removeEventListener('scroll', handleScroll);
      containerRef.current?.removeEventListener('wheel', handleWheel);
    };
  }, [currentIndex]);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      setIsDragging(true);
      setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const currentX = e.touches[0].clientX;
      const diff = currentX - startX;
      setTranslateX(diff);
    };

    const handleTouchEnd = () => {
      if (!isDragging) return;
      setIsDragging(false);
      const threshold = 50;
      if (Math.abs(translateX) > threshold) {
        if (translateX < 0) {
          setCurrentIndex(prev => Math.min(prev + 1, crateRecords.length - 1));
        } else {
          setCurrentIndex(prev => Math.max(prev - 1, 0));
        }
      }
      setTranslateX(0);
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, translateX]);

  useEffect(() => {
    if (!containerRef.current) return;
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
    }
    const scrollTo = currentIndex * window.innerHeight;
    const start = containerRef.current.scrollTop;
    const change = scrollTo - start;
    const duration = 600;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      containerRef.current.scrollTop = start + change * easeProgress;
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(step);
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <section
      ref={containerRef}
      className="relative h-[100vh] overflow-hidden bg-paper"
    >
      <div
        className="absolute inset-0 flex flex-col"
        style={{ height: `${crateRecords.length * 100}vh` }}
      >
        {crateRecords.map((record, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full h-[100vh] ${index === currentIndex ? 'z-10' : 'z-0'}`}
          >
            <CrateCard
              artist={record.artist}
              title={record.title}
              label={record.label}
              year={record.year}
              price={record.price}
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 text-cream/60 text-[11px] font-display uppercase tracking-[0.06em]">
        <span>Swipe to navigate</span>
        <div className="w-3 h-3 bg-cream/40 rounded-full"></div>
        <span>{currentIndex + 1}/{crateRecords.length}</span>
        <div className="w-3 h-3 bg-cream/40 rounded-full"></div>
      </div>
    </section>
  );
}
