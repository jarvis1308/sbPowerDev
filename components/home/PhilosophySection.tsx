'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Sparkles, Handshake, Trophy } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// ════════════════════════════════════════
// DATA
// ════════════════════════════════════════

interface PhilosophyValue {
  id: string;
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  color: string;
  colorLight: string;
}

const VALUES: PhilosophyValue[] = [
  {
    id: 'simplicity',
    number: '01',
    icon: Lightbulb,
    title: 'Simplicity',
    description:
      'We untangle complex IT challenges into clear, elegant solutions that your team can own and maintain. No vendor lock-in, no black boxes.',
    stat: '40%',
    statLabel: 'less complexity in every solution',
    color: '#6366f1',
    colorLight: '#818cf8',
  },
  {
    id: 'innovation',
    number: '02',
    icon: Sparkles,
    title: 'Innovation',
    description:
      'Cutting-edge Microsoft technologies that give you a competitive edge. Power Platform, Azure AI, and the latest cloud tools — always the best fit.',
    stat: '2x',
    statLabel: 'faster delivery with modern tools',
    color: '#10b981',
    colorLight: '#34d399',
  },
  {
    id: 'partnership',
    number: '03',
    icon: Handshake,
    title: 'Partnership',
    description:
      'An extension of your team from day one through long-term support. Your challenges are our challenges — we don\'t disappear after delivery.',
    stat: '98%',
    statLabel: 'client retention rate',
    color: '#0ea5e9',
    colorLight: '#38bdf8',
  },
  {
    id: 'excellence',
    number: '04',
    icon: Trophy,
    title: 'Excellence',
    description:
      'Every solution meets the highest standards of quality, security, and performance. Systems that simply work, always.',
    stat: '99.97%',
    statLabel: 'uptime across managed solutions',
    color: '#f43f5e',
    colorLight: '#fb7185',
  },
];

const VALUE_IDS = VALUES.map((v) => v.id);
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const AUTO_ROTATE_INTERVAL = 2000;
const RESUME_DELAY = 1000;

// ════════════════════════════════════════
// AUTO-ROTATION HOOK
// ════════════════════════════════════════

function useAutoRotate(
  ids: string[],
  setActiveId: React.Dispatch<React.SetStateAction<string>>,
  isPaused: boolean,
) {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopRotation = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startRotation = useCallback(() => {
    stopRotation();
    intervalRef.current = setInterval(() => {
      setActiveId((prev) => {
        const idx = ids.indexOf(prev);
        return ids[(idx + 1) % ids.length];
      });
    }, AUTO_ROTATE_INTERVAL);
  }, [ids, setActiveId, stopRotation]);

  useEffect(() => {
    if (isPaused) {
      stopRotation();
    } else {
      startRotation();
    }
    return stopRotation;
  }, [isPaused, startRotation, stopRotation]);
}

// ════════════════════════════════════════
// DESKTOP PANEL
// ════════════════════════════════════════

function DesktopPanel({
  value,
  isActive,
  onHover,
}: {
  value: PhilosophyValue;
  isActive: boolean;
  onHover: (id: string) => void;
}) {
  const Icon = value.icon;

  return (
    <div
      onMouseEnter={() => onHover(value.id)}
      className="relative overflow-hidden cursor-pointer rounded-2xl flex flex-col"
      style={{
        flex: isActive ? 4 : 1,
        minWidth: 80,
        height: 320,
        transition: 'flex 550ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Light mode card bg */}
      <div
        className="absolute inset-0 dark:hidden rounded-2xl"
        style={{
          background: isActive ? '#ffffff' : '#fafafa',
          border: isActive ? `2px solid ${value.color}20` : '1.5px solid #f0f0f0',
          borderTop: isActive ? `3px solid ${value.color}` : '1.5px solid #f0f0f0',
          boxShadow: isActive
            ? `0 8px 32px ${value.color}10, 0 2px 8px rgba(0,0,0,0.04)`
            : 'none',
          borderRadius: 16,
          transition: 'all 550ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />

      {/* Dark mode card bg */}
      <div
        className="absolute inset-0 hidden dark:block rounded-2xl"
        style={{
          background: isActive ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
          border: isActive ? `2px solid ${value.color}30` : '1.5px solid rgba(255,255,255,0.06)',
          borderTop: isActive ? `3px solid ${value.color}` : '1.5px solid rgba(255,255,255,0.06)',
          boxShadow: isActive ? `0 8px 32px ${value.color}12` : 'none',
          backdropFilter: 'blur(12px)',
          borderRadius: 16,
          transition: 'all 550ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />

      {/* Watermark number */}
      <div
        className="absolute top-2 right-3 select-none pointer-events-none text-foreground"
        style={{
          fontSize: 90,
          fontWeight: 900,
          lineHeight: 1,
          opacity: isActive ? 0.03 : 0,
          transition: 'opacity 400ms ease',
        }}
      >
        {value.number}
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col h-full"
        style={{
          padding: isActive ? '22px 24px' : '22px 16px',
          transition: 'padding 550ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* Icon */}
        <div
          className="flex items-center justify-center"
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: `${value.color}10`,
            border: `1px solid ${value.color}15`,
            marginBottom: isActive ? 16 : 12,
            transition: 'margin 550ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <Icon size={20} color={value.color} strokeWidth={1.8} />
        </div>

        {/* Title */}
        <h3
          className="font-bold text-foreground"
          style={{
            fontSize: isActive ? 18 : 14,
            marginBottom: isActive ? 10 : 0,
            transition: 'all 550ms cubic-bezier(0.22, 1, 0.36, 1)',
            whiteSpace: isActive ? 'normal' : 'nowrap',
          }}
        >
          {value.title}
        </h3>

        {/* Description — phase 2 reveal (120ms delay) */}
        <div
          style={{
            overflow: 'hidden',
            maxHeight: isActive ? 200 : 0,
            opacity: isActive ? 1 : 0,
            transition:
              'max-height 450ms cubic-bezier(0.22,1,0.36,1), opacity 400ms ease',
            transitionDelay: isActive ? '120ms' : '0ms',
          }}
        >
          <p className="text-[13.5px] leading-relaxed text-muted-foreground max-w-[360px]">
            {value.description}
          </p>
        </div>

        <div className="flex-1" />

        {/* Stat — phase 3 reveal (180ms delay) */}
        <div
          style={{
            overflow: 'hidden',
            maxHeight: isActive ? 100 : 0,
            opacity: isActive ? 1 : 0,
            transition:
              'max-height 450ms cubic-bezier(0.22,1,0.36,1), opacity 400ms ease',
            transitionDelay: isActive ? '180ms' : '0ms',
          }}
        >
          <div className="border-t border-border pt-3.5 mt-3.5">
            <span
              className="text-[28px] font-extrabold tracking-tight"
              style={{
                background: `linear-gradient(135deg, ${value.color}, ${value.colorLight})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {value.stat}
            </span>
            <div className="text-xs text-muted-foreground mt-0.5">
              {value.statLabel}
            </div>
          </div>
        </div>

        {/* Inactive: small colored bar */}
        {!isActive && (
          <div
            className="mt-auto"
            style={{
              width: 28,
              height: 3,
              borderRadius: 2,
              background: `${value.color}25`,
            }}
          />
        )}
      </div>

      {/* Inactive hover glow */}
      {!isActive && (
        <div
          className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: 80,
            height: 40,
            borderRadius: '50%',
            background: value.color,
            opacity: 0.04,
            filter: 'blur(20px)',
          }}
        />
      )}
    </div>
  );
}

// ════════════════════════════════════════
// MOBILE CARD (vertical accordion)
// ════════════════════════════════════════

function MobileCard({
  value,
  isActive,
  onToggle,
}: {
  value: PhilosophyValue;
  isActive: boolean;
  onToggle: () => void;
}) {
  const Icon = value.icon;

  return (
    <div
      onClick={onToggle}
      className="rounded-2xl border border-border overflow-hidden cursor-pointer transition-colors duration-300"
      style={{
        background: isActive ? 'hsl(var(--card))' : 'hsl(var(--card) / 0.7)',
        borderTopWidth: isActive ? 3 : 1,
        borderTopColor: isActive ? value.color : 'hsl(var(--border))',
        borderTopStyle: 'solid',
      }}
    >
      <div className="flex items-center gap-3 p-4">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${value.color}10` }}
        >
          <Icon size={18} color={value.color} strokeWidth={1.8} />
        </div>
        <h3 className="flex-1 text-sm font-bold text-foreground">{value.title}</h3>
        <span className="text-xs font-bold text-muted-foreground/40">
          {value.number}
        </span>
        <motion.svg
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-4 h-4 text-muted-foreground flex-shrink-0"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </div>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4">
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {value.description}
              </p>
              <div className="border-t border-border pt-3 flex items-baseline gap-2">
                <span
                  className="text-xl font-extrabold"
                  style={{
                    background: `linear-gradient(135deg, ${value.color}, ${value.colorLight})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {value.stat}
                </span>
                <span className="text-xs text-muted-foreground">
                  {value.statLabel}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ════════════════════════════════════════
// PROGRESS DOT (auto-rotate countdown)
// ════════════════════════════════════════

function ProgressDot({
  value,
  isActive,
  isPaused,
  onHover,
  rotationKey,
}: {
  value: PhilosophyValue;
  isActive: boolean;
  isPaused: boolean;
  onHover: (id: string) => void;
  rotationKey: number;
}) {
  return (
    <div
      onMouseEnter={() => onHover(value.id)}
      className="relative cursor-pointer"
      style={{
        width: isActive ? 32 : 6,
        height: 6,
        borderRadius: 3,
        background: isActive ? `${value.color}30` : 'hsl(var(--foreground) / 0.1)',
        transition: 'all 400ms cubic-bezier(0.22, 1, 0.36, 1)',
        overflow: 'hidden',
      }}
    >
      {isActive && !isPaused && (
        <div
          key={rotationKey}
          className="absolute inset-0 rounded-full"
          style={{
            background: value.color,
            animation: `progressFill ${AUTO_ROTATE_INTERVAL}ms linear forwards`,
            transformOrigin: 'left',
          }}
        />
      )}
      {isActive && isPaused && (
        <div
          className="absolute inset-0 rounded-full"
          style={{ background: value.color }}
        />
      )}
    </div>
  );
}

// ════════════════════════════════════════
// MAIN SECTION
// ════════════════════════════════════════

export default function PhilosophySection() {
  const [activeId, setActiveId] = useState<string>(VALUE_IDS[0]);
  const [isHovering, setIsHovering] = useState(false);
  const [rotationKey, setRotationKey] = useState(0);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Bump rotationKey whenever activeId changes so the progress bar restarts
  const prevActiveRef = useRef(activeId);
  useEffect(() => {
    if (prevActiveRef.current !== activeId) {
      prevActiveRef.current = activeId;
      setRotationKey((k) => k + 1);
    }
  }, [activeId]);

  useAutoRotate(VALUE_IDS, setActiveId, isHovering);

  const handleContainerMouseEnter = useCallback(() => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
    setIsHovering(true);
  }, []);

  const handleContainerMouseLeave = useCallback(() => {
    resumeTimerRef.current = setTimeout(() => {
      setIsHovering(false);
    }, RESUME_DELAY);
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const handlePanelHover = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  const handleMobileToggle = useCallback((id: string) => {
    setActiveId((prev) => (prev === id ? VALUE_IDS[0] : id));
  }, []);

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
            Our Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-foreground tracking-[-0.03em] leading-tight">
            Untangling IT Challenges
            <br className="hidden sm:block" />
            {' '}with{' '}
            <span className="bg-gradient-to-r from-secondary to-secondary/70 bg-clip-text text-transparent">
              Simplicity
            </span>
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground max-w-md mx-auto leading-relaxed">
            Four principles that guide every project, every decision, and every
            line of code.
          </p>
        </motion.div>

        {/* DESKTOP: Expanding accordion panels */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="hidden md:flex gap-2.5 lg:gap-3"
          onMouseEnter={handleContainerMouseEnter}
          onMouseLeave={handleContainerMouseLeave}
        >
          {VALUES.map((value) => (
            <DesktopPanel
              key={value.id}
              value={value}
              isActive={activeId === value.id}
              onHover={handlePanelHover}
            />
          ))}
        </motion.div>

        {/* MOBILE: Vertical accordion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="md:hidden flex flex-col gap-3"
        >
          {VALUES.map((value) => (
            <MobileCard
              key={value.id}
              value={value}
              isActive={activeId === value.id}
              onToggle={() => handleMobileToggle(value.id)}
            />
          ))}
        </motion.div>

        {/* Navigation dots with progress indicator */}
        <div
          className="hidden md:flex justify-center gap-2 mt-8"
          onMouseEnter={handleContainerMouseEnter}
          onMouseLeave={handleContainerMouseLeave}
        >
          {VALUES.map((value) => (
            <ProgressDot
              key={value.id}
              value={value}
              isActive={activeId === value.id}
              isPaused={isHovering}
              onHover={handlePanelHover}
              rotationKey={rotationKey}
            />
          ))}
        </div>
      </div>

      {/* Progress fill keyframes */}
      <style jsx global>{`
        @keyframes progressFill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}
