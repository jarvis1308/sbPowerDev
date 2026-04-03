'use client';

import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

// ════════════════════════════════════════
// DATA
// ════════════════════════════════════════

const SOLUTIONS = [
  {
    icon: '⚡',
    title: 'Business Process Automation',
    desc: 'Eliminate manual workflows. We build intelligent automation that saves thousands of hours annually.',
    color: '#818cf8',
    stat: '73% faster',
    href: '/solutions/business-process-automation',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    desc: 'Transform raw data into strategic decisions with real-time dashboards and AI-powered insights.',
    color: '#34d399',
    stat: '3x ROI',
    href: '/solutions/data-analytics',
  },
  {
    icon: '☁️',
    title: 'Cloud Transformation',
    desc: 'Migrate, modernize, and scale with Azure and AWS. Zero downtime, infinite possibilities.',
    color: '#38bdf8',
    stat: '99.97% uptime',
    href: '/solutions/cloud-transformation',
  },
  {
    icon: '🧠',
    title: 'Technology Consulting',
    desc: 'The right technology, implemented properly. We guide your digital strategy from vision to execution.',
    color: '#f472b6',
    stat: '150+ projects',
    href: '/solutions/technology-consulting',
  },
] as const;

// Symmetric orbital positions — snug around the orb without overlapping
// Orb outer ring = 150px radius. Card max-width = 210px (half = 105px).
// Card center at 265px → inner edge at 160px → 10px clearance from ring.
const ORBITAL_POSITIONS: { x: number; y: number; float: { y: number[]; x: number[] }; duration: number }[] = [
  { x: -265, y: -150, float: { y: [0, -12, 0], x: [0, 5, 0] }, duration: 7 },    // top-left
  { x: 265, y: -150, float: { y: [0, -10, 0], x: [0, -5, 0] }, duration: 8 },    // top-right
  { x: -265, y: 150, float: { y: [0, -11, 0], x: [0, -4, 0] }, duration: 9 },    // bottom-left
  { x: 265, y: 150, float: { y: [0, -10, 0], x: [0, 6, 0] }, duration: 7.5 },    // bottom-right
];

const EASE = [0.22, 1, 0.36, 1] as const;

// ════════════════════════════════════════
// STAR FIELD (dark mode only)
// ════════════════════════════════════════

function StarField() {
  const stars = useMemo(
    () =>
      Array.from({ length: 40 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: Math.random() * 1.5 + 0.3,
        o: Math.random() * 0.4 + 0.1,
        d: Math.random() * 3 + 2,
        delay: Math.random() * 3,
      })),
    []
  );

  return (
    <div className="absolute inset-0 z-0 hidden dark:block">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.s,
            height: star.s,
            opacity: star.o,
            animation: `twinkle ${star.d}s ease-in-out infinite ${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// ════════════════════════════════════════
// DOT PATTERN (light mode only)
// ════════════════════════════════════════

function DotPattern() {
  return (
    <div
      className="absolute inset-0 z-0 block dark:hidden overflow-hidden"
      style={{
        backgroundImage:
          'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)',
        backgroundSize: '28px 28px',
      }}
    />
  );
}

// ════════════════════════════════════════
// FLOATING SPACE DEBRIS
// ════════════════════════════════════════

function SpaceDebris() {
  const pieces = useMemo(
    () => [
      { x: '10%', y: '18%', size: 14, animClass: 'animate-debris-1' },
      { x: '88%', y: '14%', size: 10, animClass: 'animate-debris-2' },
      { x: '7%', y: '72%', size: 18, animClass: 'animate-debris-3' },
      { x: '91%', y: '68%', size: 9, animClass: 'animate-debris-1' },
      { x: '22%', y: '44%', size: 7, animClass: 'animate-debris-2' },
      { x: '76%', y: '48%', size: 8, animClass: 'animate-debris-3' },
    ],
    []
  );

  return (
    <>
      {pieces.map((p, i) => (
        <div
          key={i}
          className={`absolute z-[1] bg-secondary/10 border border-secondary/20 dark:bg-secondary/5 dark:border-secondary/15 ${p.animClass}`}
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '3px' : '2px',
          }}
        />
      ))}
    </>
  );
}

// ════════════════════════════════════════
// CENTRAL GLOWING ORB
// ════════════════════════════════════════

function CentralOrb({ scrollYProgress }: { scrollYProgress: { get: () => number } & ReturnType<typeof useScroll>['scrollYProgress'] }) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.35]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 8]);

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 z-[3] pointer-events-none hidden md:block"
      style={{
        x: '-50%',
        y,
        scale,
        opacity,
        filter: useTransform(blur, (v) => `blur(${v}px)`),
        translateY: '-50%',
      }}
    >
      {/* Outer rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-secondary/[0.08] animate-pulse-ring" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[224px] h-[224px] rounded-full border border-secondary/[0.12] animate-pulse-ring-delayed" />

      {/* Glow aura — static on mobile to avoid blur jank */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full bg-secondary/[0.12] dark:bg-secondary/[0.15] blur-[30px] md:blur-[60px] md:animate-glow-pulse" />

      {/* The orb */}
      <div
        className="relative w-[140px] h-[140px] rounded-full animate-levitate"
        style={{
          background:
            'radial-gradient(circle at 35% 35%, hsl(var(--secondary)), hsl(var(--secondary) / 0.6) 50%, hsl(var(--secondary) / 0.3) 80%)',
          boxShadow:
            '0 0 50px hsl(var(--secondary) / 0.3), 0 0 100px hsl(var(--secondary) / 0.15), inset 0 0 25px hsl(var(--secondary) / 0.2)',
        }}
      >
        {/* Specular highlight */}
        <div
          className="absolute top-[16%] left-[20%] w-[28%] h-[28%] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.25), transparent 70%)',
          }}
        />

        {/* Logo text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[13px] font-extrabold text-white/90 tracking-tight">
            sb<span className="text-secondary-foreground/80">Power</span>
          </span>
          <span className="text-[8px] text-secondary-foreground/50 tracking-[0.12em] uppercase mt-0.5">
            Ecosystem
          </span>
        </div>
      </div>

      {/* Orbiting dots */}
      <div className="absolute top-1/2 left-1/2 w-[240px] h-[240px] -translate-x-1/2 -translate-y-1/2 animate-orbit">
        <div className="absolute -top-[3px] left-1/2 w-[6px] h-[6px] rounded-full bg-indigo-400 shadow-[0_0_10px_theme(colors.indigo.400)]" />
        <div className="absolute -bottom-[3px] left-1/2 w-[4px] h-[4px] rounded-full bg-emerald-400 shadow-[0_0_10px_theme(colors.emerald.400)]" />
        <div className="absolute top-1/2 -left-[3px] w-[5px] h-[5px] rounded-full bg-sky-400 shadow-[0_0_10px_theme(colors.sky.400)]" />
        <div className="absolute top-1/2 -right-[3px] w-[4px] h-[4px] rounded-full bg-pink-400 shadow-[0_0_10px_theme(colors.pink.400)]" />
      </div>
    </motion.div>
  );
}

// ════════════════════════════════════════
// SOLUTION CARD (orbiting around the orb)
// ════════════════════════════════════════

interface SolutionCardProps {
  solution: (typeof SOLUTIONS)[number];
  orbit: { x: number; y: number; float: { y: number[]; x: number[] }; duration: number };
  index: number;
}

function SolutionCard({ solution, orbit, index }: SolutionCardProps) {
  const isRight = orbit.x > 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 + index * 0.12, ease: EASE }}
      className="absolute z-10 hidden md:block"
      style={{
        left: '42%',
        top: '42%',
        marginLeft: orbit.x,
        marginTop: orbit.y,
        transform: 'translate(-50%, -50%)',
        width: 'clamp(190px, 18vw, 510px)',
      }}
    >
      {/* Levitation animation wrapper */}
      <motion.div
        animate={orbit.float}
        transition={{ duration: orbit.duration, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Connector line pointing toward center orb */}
        <svg
          className="absolute top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none"
          style={{
            [isRight ? 'right' : 'left']: '100%',
            width: 50,
            height: 2,
            overflow: 'visible',
          }}
        >
          <line
            x1={isRight ? 50 : 0}
            y1="1"
            x2={isRight ? 0 : 50}
            y2="1"
            stroke={solution.color}
            strokeWidth="1"
            strokeOpacity="0.2"
            strokeDasharray="4 4"
          />
          <circle
            cx={isRight ? 50 : 0}
            cy="1"
            r="2.5"
            fill={solution.color}
            fillOpacity="0.4"
          />
        </svg>

        <motion.a
          href={solution.href}
          whileHover={{ y: -6, scale: 1.03 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="
            group block p-5 rounded-2xl cursor-pointer transition-all duration-300
            bg-card/70 dark:bg-white/[0.04]
            border border-border dark:border-white/[0.06]
            hover:border-secondary/30 dark:hover:border-secondary/30
            hover:shadow-xl dark:hover:shadow-[0_16px_48px_hsl(var(--secondary)/0.1)]
            md:backdrop-blur-xl
          "
        >
          {/* Icon + Stat row */}
          <div className="flex items-start justify-between mb-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg border transition-shadow duration-300 group-hover:shadow-lg"
              style={{
                background: `${solution.color}10`,
                borderColor: `${solution.color}20`,
              }}
            >
              {solution.icon}
            </div>
            <span
              className="px-2.5 py-1 rounded-lg text-[11px] font-bold"
              style={{
                background: `${solution.color}10`,
                color: solution.color,
              }}
            >
              {solution.stat}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-[15px] font-bold text-foreground mb-1.5 leading-snug">
            {solution.title}
          </h3>

          {/* Description */}
          <p className="text-xs leading-relaxed text-muted-foreground">{solution.desc}</p>

          {/* Learn more */}
          <div className="mt-3">
            <span
              className="text-xs font-semibold flex items-center gap-1 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
              style={{ color: solution.color }}
            >
              Learn more
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7h8m0 0L8 4m3 3L8 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

// ════════════════════════════════════════
// MAIN COMPONENT
// ════════════════════════════════════════

export default function ImmersiveSolutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // For reduced motion, create a static MotionValue
  const staticProgress = useTransform(scrollYProgress, () => 0);
  const activeProgress = prefersReducedMotion ? staticProgress : scrollYProgress;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-background hidden md-block"
      style={{ minHeight: '120vh' }}
    >
      {/* ── Backgrounds ── */}
      {/* Dark mode: deep space gradient */}
      <div className="absolute inset-0 z-0 hidden dark:block bg-gradient-to-b from-[#050508] via-[#0a0a14] to-[#050508]" />
      {/* Light mode: clean subtle background */}
      <div className="absolute inset-0 z-0 block dark:hidden bg-gradient-to-b from-muted/30 via-background to-muted/30" />

      <StarField />
      <DotPattern />
      <SpaceDebris />

      {/* NO VIGNETTE / NO GRADIENT OVERLAY — keeps title and cards fully readable */}

      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center">
        {/* Section title */}
        <div className="absolute top-8 lg:top-10 left-1/2 -translate-x-1/2 text-center z-[15]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-secondary mb-2 block">
              How We Do It
            </span>
            <h2 className="text-[clamp(26px,3.5vw,40px)] font-extrabold text-foreground tracking-[-0.03em] leading-tight">
              Solutions{' '}
              <span className="bg-gradient-to-r from-secondary to-secondary/70 bg-clip-text text-transparent">
                Ecosystem
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Central orb with parallax scroll */}
        <CentralOrb scrollYProgress={activeProgress} />

        {/* Solution cards orbiting around the orb (hidden on mobile) */}
        {SOLUTIONS.map((sol, i) => (
          <SolutionCard key={sol.title} solution={sol} orbit={ORBITAL_POSITIONS[i]} index={i} />
        ))}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1, ease: EASE }}
          className="absolute bottom-7 -translate-x-1/2 z-[15]"
        >
          <a
            href="/solutions"
            className="
              mx-auto
              inline-flex items-center gap-2 px-7 py-3 rounded-xl
              text-sm font-semibold transition-all duration-300
              bg-secondary/10 text-secondary border border-secondary/20
              hover:bg-secondary hover:text-secondary-foreground
              hover:shadow-[0_8px_30px_hsl(var(--secondary)/0.25)]
            "
          >
            Explore All Solutions
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10m0 0l-4-4m4 4l-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* ── Mobile fallback — vertical card stack ── */}
      <div className="md:hidden relative z-20 px-4 pb-16 -mt-20 space-y-4">
        {SOLUTIONS.map((sol) => (
          <a
            key={sol.title}
            href={sol.href}
            className="block p-5 rounded-2xl bg-card border border-border hover:border-secondary/30 transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{ background: `${sol.color}10` }}
              >
                {sol.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground">{sol.title}</h3>
                <span className="text-[11px] font-bold" style={{ color: sol.color }}>
                  {sol.stat}
                </span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{sol.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
