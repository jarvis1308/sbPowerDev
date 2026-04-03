'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { industries, type Industry } from '@/data/industries';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const AUTO_ROTATE_MS = 7000;
const RESUME_DELAY_MS = 1500;

// ════════════════════════════════════════════════
// FEATURED CARD (large)
// ════════════════════════════════════════════════

function FeaturedCard({ industry }: { industry: Industry }) {
  return (
    <motion.div
      key={industry.id}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease: EASE }}
      className="h-full"
    >
      <Link
        href={`/industries/${industry.slug}`}
        className="group relative flex flex-col h-full rounded-2xl overflow-hidden border-2 transition-shadow duration-300 bg-card dark:bg-white/[0.03] hover:shadow-xl dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
        style={{ borderColor: `${industry.color}25` }}
      >
        {/* Top accent gradient bar */}
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(90deg, ${industry.color}, ${industry.colorLight})`,
          }}
        />

        {/* Giant watermark emoji */}
        <span className="absolute -top-2 -right-2 text-[130px] lg:text-[150px] leading-none select-none pointer-events-none opacity-[0.035] dark:opacity-[0.055]">
          {industry.emoji}
        </span>

        <div className="relative z-10 flex flex-col flex-1 p-6 lg:p-8">
          {/* Icon bubble */}
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 border"
            style={{
              background: `${industry.color}10`,
              borderColor: `${industry.color}18`,
            }}
          >
            {industry.emoji}
          </div>

          <h3 className="text-xl lg:text-2xl font-extrabold text-foreground tracking-tight mb-3">
            {industry.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-md">
            {industry.fullDesc}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {industry.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2.5 py-1 rounded-md border"
                style={{
                  background: `${industry.color}08`,
                  borderColor: `${industry.color}15`,
                  color: industry.color,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex-1" />

          {/* Stat + CTA */}
          <div className="flex items-end justify-between pt-4 border-t border-border">
            <div>
              <div
                className="text-3xl lg:text-4xl font-black tracking-tight"
                style={{
                  background: `linear-gradient(135deg, ${industry.color}, ${industry.colorLight})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {industry.stat}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {industry.statLabel}
              </div>
            </div>

            <span
              className="text-sm font-semibold flex items-center gap-1.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
              style={{ color: industry.color }}
            >
              View details
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 8h10m0 0l-4-4m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ════════════════════════════════════════════════
// SMALL CARD
// ════════════════════════════════════════════════

function SmallCard({
  industry,
  onHover,
  isNext,
}: {
  industry: Industry;
  onHover: (id: string) => void;
  isNext: boolean;
}) {
  return (
    <div onMouseEnter={() => onHover(industry.id)} className="h-full">
      <Link
        href={`/industries/${industry.slug}`}
        className="group relative flex flex-col h-full rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer bg-card/80 dark:bg-white/[0.02] border-border dark:border-white/[0.06] hover:border-secondary/30 hover:shadow-md dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
      >
        {/* Next-in-rotation hint bar */}
        {isNext && (
          <div
            className="h-0.5 w-full opacity-40"
            style={{ background: industry.color }}
          />
        )}

        <div className="relative z-10 flex flex-col flex-1 p-4 lg:p-5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-3 border"
            style={{
              background: `${industry.color}08`,
              borderColor: `${industry.color}12`,
            }}
          >
            {industry.emoji}
          </div>

          <h3 className="text-sm font-bold text-foreground mb-1 leading-snug">
            {industry.title}
          </h3>
          <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
            {industry.shortDesc}
          </p>

          <div className="flex-1" />

          <div className="mt-3 flex items-baseline gap-1.5">
            <span
              className="text-lg font-extrabold"
              style={{
                background: `linear-gradient(135deg, ${industry.color}, ${industry.colorLight})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {industry.stat}
            </span>
            <span className="text-[10px] text-muted-foreground">
              {industry.statLabel}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

// ════════════════════════════════════════════════
// PROGRESS DOTS
// ════════════════════════════════════════════════

function ProgressDots({
  activeId,
  isPaused,
  onHover,
  rotationKey,
}: {
  activeId: string;
  isPaused: boolean;
  onHover: (id: string) => void;
  rotationKey: number;
}) {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {industries.map((ind) => {
        const isActive = ind.id === activeId;
        return (
          <div
            key={ind.id}
            onMouseEnter={() => onHover(ind.id)}
            className="relative cursor-pointer overflow-hidden"
            style={{
              width: isActive ? 32 : 8,
              height: 8,
              borderRadius: 4,
              background: isActive
                ? `${ind.color}25`
                : 'hsl(var(--foreground) / 0.08)',
              transition: 'all 400ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            {isActive && !isPaused && (
              <div
                key={rotationKey}
                className="absolute inset-0 rounded-full"
                style={{
                  background: ind.color,
                  animation: `progressFill ${AUTO_ROTATE_MS}ms linear forwards`,
                  transformOrigin: 'left',
                }}
              />
            )}
            {isActive && isPaused && (
              <div
                className="absolute inset-0 rounded-full"
                style={{ background: ind.color }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ════════════════════════════════════════════════
// MAIN SECTION
// ════════════════════════════════════════════════

export default function IndustriesSection() {
  const [activeId, setActiveId] = useState(industries[0].id);
  const [isHovering, setIsHovering] = useState(false);
  const [rotationKey, setRotationKey] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeIndex = industries.findIndex((i) => i.id === activeId);
  const nextIndex = (activeIndex + 1) % industries.length;
  const activeIndustry = industries[activeIndex];
  const smallIndustries = industries.filter((i) => i.id !== activeId);

  // Bump rotationKey when active changes to restart progress bar
  const prevActiveRef = useRef(activeId);
  useEffect(() => {
    if (prevActiveRef.current !== activeId) {
      prevActiveRef.current = activeId;
      setRotationKey((k) => k + 1);
    }
  }, [activeId]);

  // Auto-rotation
  const startRotation = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveId((prev) => {
        const idx = industries.findIndex((i) => i.id === prev);
        return industries[(idx + 1) % industries.length].id;
      });
    }, AUTO_ROTATE_MS);
  }, []);

  const stopRotation = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isHovering) {
      stopRotation();
    } else {
      startRotation();
    }
    return stopRotation;
  }, [isHovering, startRotation, stopRotation]);

  const handleGridEnter = useCallback(() => {
    if (resumeRef.current) {
      clearTimeout(resumeRef.current);
      resumeRef.current = null;
    }
    setIsHovering(true);
  }, []);

  const handleGridLeave = useCallback(() => {
    resumeRef.current = setTimeout(
      () => setIsHovering(false),
      RESUME_DELAY_MS,
    );
  }, []);

  const handleCardHover = useCallback((id: string) => setActiveId(id), []);

  useEffect(() => {
    return () => {
      if (resumeRef.current) clearTimeout(resumeRef.current);
    };
  }, []);

  // Featured alternates sides: even index = left, odd = right
  const isLeftFeatured = activeIndex % 2 === 0;

  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-background overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, hsl(var(--foreground) / 0.04) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, hsl(var(--foreground) / 0.03) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-secondary/10 text-[11px] font-bold tracking-[0.12em] uppercase text-secondary mb-4">
            Industries
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-foreground tracking-[-0.03em] leading-tight">
            Expertise Across{' '}
            <span className="bg-gradient-to-r from-secondary to-secondary/70 bg-clip-text text-transparent">
              Sectors
            </span>
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Deep domain knowledge combined with Microsoft technology expertise to
            solve industry-specific challenges.
          </p>
        </motion.div>

        {/* ═══ DESKTOP BENTO GRID (>= 1024px) ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="hidden lg:grid grid-cols-3 grid-rows-[1fr_1fr_auto] gap-3"
          style={{ minHeight: 440 }}
          onMouseEnter={handleGridEnter}
          onMouseLeave={handleGridLeave}
        >
          {/* Featured — 2col x 2row */}
          <div
            className="row-span-2"
            style={{
              gridColumn: isLeftFeatured ? '1 / 3' : '2 / 4',
              gridRow: '1 / 3',
            }}
          >
            <AnimatePresence mode="wait">
              <FeaturedCard key={activeId} industry={activeIndustry} />
            </AnimatePresence>
          </div>

          {/* First 2 small cards — stack vertically on the opposite side */}
          {smallIndustries.slice(0, 2).map((ind, i) => (
            <div
              key={ind.id}
              style={{
                gridColumn: isLeftFeatured ? '3 / 4' : '1 / 2',
                gridRow: `${i + 1} / ${i + 2}`,
              }}
            >
              <SmallCard
                industry={ind}
                onHover={handleCardHover}
                isNext={ind.id === industries[nextIndex].id}
              />
            </div>
          ))}

          {/* Bottom 2 small cards — fill the third row */}
          {smallIndustries.slice(2).map((ind, i) => (
            <div
              key={ind.id}
              style={{
                gridColumn: `${i + 1} / ${i + 2}`,
                gridRow: '3 / 4',
              }}
            >
              <SmallCard
                industry={ind}
                onHover={handleCardHover}
                isNext={ind.id === industries[nextIndex].id}
              />
            </div>
          ))}
        </motion.div>

        {/* ═══ TABLET (768px – 1023px) ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="hidden md:grid lg:hidden grid-cols-2 gap-3"
          onMouseEnter={handleGridEnter}
          onMouseLeave={handleGridLeave}
        >
          <div className="col-span-2">
            <AnimatePresence mode="wait">
              <FeaturedCard key={activeId} industry={activeIndustry} />
            </AnimatePresence>
          </div>
          {smallIndustries.map((ind) => (
            <SmallCard
              key={ind.id}
              industry={ind}
              onHover={handleCardHover}
              isNext={ind.id === industries[nextIndex].id}
            />
          ))}
        </motion.div>

        {/* ═══ MOBILE (< 768px) — static list, no animations ═══ */}
        <div className="md:hidden flex flex-col gap-3">
          {industries.map((ind) => (
            <Link
              key={ind.id}
              href={`/industries/${ind.slug}`}
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-secondary/30 transition-colors"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 border"
                style={{ background: `${ind.color}10`, borderColor: `${ind.color}18` }}
              >
                {ind.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-foreground">{ind.title}</h3>
                <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">{ind.shortDesc}</p>
              </div>
              <span
                className="text-base font-extrabold flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${ind.color}, ${ind.colorLight})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {ind.stat}
              </span>
            </Link>
          ))}
        </div>

        {/* Progress dots */}
        <div onMouseEnter={handleGridEnter} onMouseLeave={handleGridLeave}>
          <ProgressDots
            activeId={activeId}
            isPaused={isHovering}
            onHover={handleCardHover}
            rotationKey={rotationKey}
          />
        </div>
      </div>

      <style jsx global>{`
        @keyframes progressFill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}
