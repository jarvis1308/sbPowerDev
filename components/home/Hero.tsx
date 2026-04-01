'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// ════════════════════════════════════════════════
// ANIMATION CONFIG
// ════════════════════════════════════════════════

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

const fadeScale = (delay: number) => ({
  initial: { opacity: 0, scale: 0.92, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

// ════════════════════════════════════════════════
// IMMERSIVE BACKGROUND
// ════════════════════════════════════════════════

function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Base gradient using theme colors */}
      <div className="absolute inset-0 bg-background" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Large animated gradient orb — top right (secondary color) */}
      <motion.div
        animate={{
          x: [0, 30, -10, 0],
          y: [0, -20, 15, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full blur-[120px] opacity-[0.12] dark:opacity-[0.15]"
        style={{ background: 'hsl(var(--secondary))' }}
      />

      {/* Large animated gradient orb — bottom left (accent color) */}
      <motion.div
        animate={{
          x: [0, -20, 25, 0],
          y: [0, 20, -10, 0],
          scale: [1, 0.95, 1.08, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-40 -left-20 w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.10] dark:opacity-[0.12]"
        style={{ background: 'hsl(var(--accent))' }}
      />

      {/* Smaller floating orb — center left (secondary) */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-[15%] w-[300px] h-[300px] rounded-full blur-[100px] opacity-[0.08] dark:opacity-[0.10]"
        style={{ background: 'hsl(var(--secondary))' }}
      />

      {/* Smaller floating orb — center right (accent) */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 right-[10%] w-[250px] h-[250px] rounded-full blur-[100px] opacity-[0.06] dark:opacity-[0.08]"
        style={{ background: 'hsl(var(--accent))' }}
      />

      {/* Radial vignette for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 75%)',
          opacity: 0.4,
        }}
      />
    </div>
  );
}

// ════════════════════════════════════════════════
// FLOATING UI CARD: Power BI Dashboard
// ════════════════════════════════════════════════

function DashboardCard() {
  const bars = [40, 65, 45, 80, 55, 90, 70, 85];
  return (
    <motion.div
      {...fadeScale(0.5)}
      className="absolute top-[120px] left-6 xl:left-10 w-[210px] xl:w-[220px] hidden lg:block"
      style={{ zIndex: 5 }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="rounded-2xl bg-muted p-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] ring-1 ring-border -rotate-3"
      >
        <div className="flex justify-between items-center mb-2.5">
          <span className="text-[10px] font-semibold tracking-wider uppercase" style={{ color: 'hsl(var(--secondary))' }}>
            Power BI Dashboard
          </span>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
        </div>

        {/* Mini bar chart */}
        <div className="flex items-end gap-1 h-[52px] mb-2.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm transition-all"
              style={{
                height: `${h}%`,
                background:
                  i === 5
                    ? 'hsl(var(--secondary))'
                    : i === 7
                      ? 'hsl(var(--secondary) / 0.7)'
                      : 'hsl(var(--secondary) / 0.15)',
              }}
            />
          ))}
        </div>

        <div className="flex justify-between text-[10px]">
          <span className="text-muted-foreground">Revenue</span>
          <span className="text-emerald-400 font-semibold">+24.5%</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ════════════════════════════════════════════════
// FLOATING UI CARD: Automation Workflow
// ════════════════════════════════════════════════

function AutomationCard() {
  const steps = [
    { emoji: '📥', label: 'Form Submitted', color: 'hsl(var(--secondary))' },
    { emoji: '⚡', label: 'Power Automate', color: 'hsl(var(--warning))' },
    { emoji: '✅', label: 'Auto-Approved', color: 'hsl(var(--success))' },
  ];

  return (
    <motion.div
      {...fadeScale(0.6)}
      className="absolute bottom-[160px] left-8 xl:left-14 w-[195px] xl:w-[200px] hidden lg:block"
      style={{ zIndex: 5 }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="rounded-2xl bg-card p-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-border rotate-2"
      >
        <span className="text-[10px] font-semibold tracking-wider uppercase" style={{ color: 'hsl(var(--secondary))' }}>
          Workflow
        </span>
        <div className="flex flex-col gap-2 mt-2.5">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-[12px]"
                style={{ background: s.color.replace(')', ' / 0.12)') }}
              >
                {s.emoji}
              </div>
              <span className="text-[11px] font-medium text-card-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ════════════════════════════════════════════════
// FLOATING UI CARD: Azure Cloud Status
// ════════════════════════════════════════════════

function CloudCard() {
  return (
    <motion.div
      {...fadeScale(0.7)}
      className="absolute top-[130px] right-6 xl:right-12 w-[175px] xl:w-[185px] hidden lg:block"
      style={{ zIndex: 5 }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="rounded-2xl bg-card p-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-border -rotate-1"
      >
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-8 h-8 rounded-[10px] bg-info/10 flex items-center justify-center text-sm">
            ☁️
          </div>
          <div>
            <div className="text-[11px] font-semibold text-card-foreground">Azure Cloud</div>
            <div className="text-[10px] text-emerald-500 font-medium">● All systems live</div>
          </div>
        </div>
        <div className="bg-muted rounded-md px-2.5 py-1.5 flex justify-between text-[10px]">
          <span className="text-muted-foreground">Uptime</span>
          <span className="text-card-foreground font-semibold">99.97%</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ════════════════════════════════════════════════
// FLOATING UI CARD: Analytics Chart
// ════════════════════════════════════════════════

function AnalyticsCard() {
  return (
    <motion.div
      {...fadeScale(0.8)}
      className="absolute bottom-[170px] right-6 xl:right-10 w-[200px] xl:w-[210px] hidden lg:block"
      style={{ zIndex: 5 }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="rounded-2xl bg-muted p-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] ring-1 ring-border rotate-1"
      >
        <div className="flex items-center gap-2 mb-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-[12px]"
            style={{ background: 'hsl(var(--secondary) / 0.15)' }}
          >
            📊
          </div>
          <div>
            <div className="text-[11px] font-semibold text-foreground">Data Analytics</div>
            <div className="text-[10px]" style={{ color: 'hsl(var(--secondary))' }}>Live Insights</div>
          </div>
        </div>

        {/* SVG line chart */}
        <svg width="100%" height="36" viewBox="0 0 180 36" className="block">
          <defs>
            <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 32 L20 26 L40 28 L60 18 L80 20 L100 10 L120 13 L140 6 L160 8 L180 3"
            fill="none"
            stroke="hsl(var(--secondary))"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M0 32 L20 26 L40 28 L60 18 L80 20 L100 10 L120 13 L140 6 L160 8 L180 3 L180 36 L0 36Z"
            fill="url(#heroChartFill)"
          />
        </svg>

        <div className="flex justify-between text-[10px] mt-1.5">
          <span className="text-muted-foreground">Processing Time</span>
          <span className="text-emerald-400 font-semibold">↓ 73%</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ════════════════════════════════════════════════
// SMALL FLOATING BADGE
// ════════════════════════════════════════════════

function FloatingBadge({
  emoji,
  label,
  className,
  delay,
}: {
  emoji: string;
  label: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className={`absolute hidden xl:flex items-center gap-1.5 bg-card rounded-full px-3 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)] ring-1 ring-border ${className}`}
      style={{ zIndex: 6 }}
    >
      <span className="text-[12px]">{emoji}</span>
      <span className="text-[11px] font-semibold text-card-foreground">{label}</span>
    </motion.div>
  );
}

// ════════════════════════════════════════════════
// ANIMATED STAT COUNTER
// ════════════════════════════════════════════════

function StatPill({ value, label, delay }: { value: string; label: string; delay: number }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!visible || isNaN(numericValue)) return;
    const start = performance.now();
    const duration = 1600;
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * numericValue));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, numericValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE }}
      className="flex items-center gap-3 px-5 py-3 bg-card/60 backdrop-blur-sm rounded-xl border border-border"
    >
      <span className="text-2xl font-extrabold text-foreground tracking-tight">
        {count}{suffix}
      </span>
      <span className="text-xs text-muted-foreground leading-tight max-w-[100px]">{label}</span>
    </motion.div>
  );
}

// ════════════════════════════════════════════════
// MAIN HERO COMPONENT
// ════════════════════════════════════════════════

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex flex-col">

      {/* ── Immersive background ── */}
      <HeroBackground />

      {/* ── Floating product cards (LEFT ZONE) ── */}
      <DashboardCard />
      <AutomationCard />

      {/* ── Floating product cards (RIGHT ZONE) ── */}
      <CloudCard />
      <AnalyticsCard />

      {/* ── Floating badges (in the gaps, xl only) ── */}
      <FloatingBadge emoji="⚡" label="Power Automate" className="top-[290px] left-[260px]" delay={0.9} />
      <FloatingBadge emoji="🛡️" label="99.97% Uptime" className="top-[220px] right-[240px]" delay={1.0} />
      <FloatingBadge emoji="📈" label="+24% Efficiency" className="bottom-[290px] left-[240px]" delay={1.1} />

      {/* ════════════════════════════════════════ */}
      {/* CENTER CONTENT — SACRED ZONE            */}
      {/* Nothing floats into this area            */}
      {/* ════════════════════════════════════════ */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-20 lg:py-0">
        <div className="max-w-[640px] mx-auto">

          {/* Eyebrow badge */}
          <motion.div
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card shadow-sm mb-7"
          >
            <span
              className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase"
              style={{
                background: 'hsl(var(--secondary))',
                color: 'hsl(var(--secondary-foreground))',
              }}
            >
              Microsoft Partner
            </span>
            <span className="text-[13px] text-muted-foreground font-medium">
              IT Infrastructure On Steroids
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="text-[clamp(40px,6vw,76px)] font-[850] leading-[1.05] tracking-[-0.04em] text-foreground"
          >
            Subtle &{' '}
            <span className="relative inline-block">
              <span className="relative z-[2]">Powerful</span>
              {/* Animated highlight bar */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
                className="absolute bottom-[4px] -left-1.5 -right-1.5 h-[35%] rounded z-[1] origin-left"
                style={{
                  background: `linear-gradient(90deg, hsl(var(--accent)), hsl(var(--accent) / 0.7))`,
                }}
              />
              {/* Glow under highlight */}
              <motion.span
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
                className="absolute bottom-0 -left-3 -right-3 h-[50%] rounded-full blur-xl z-[0] origin-left opacity-30 dark:opacity-40"
                style={{ background: 'hsl(var(--accent))' }}
              />
            </span>
            <br />
            Development,{' '}
            <span style={{ color: 'hsl(var(--secondary))' }}>Always!</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.4)}
            className="mt-6 text-[17px] leading-relaxed text-muted-foreground max-w-[500px] mx-auto"
          >
            We are the technology layer powering businesses across
            6 industries to automate, analyze, and scale with confidence.
          </motion.p>

          {/* CTA */}
          <motion.div
            {...fadeUp(0.55)}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <button
              className="px-8 py-3.5 rounded-xl text-[15px] font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.18)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-200"
              style={{
                background: 'hsl(var(--secondary))',
                color: 'hsl(var(--secondary-foreground))',
              }}
            >
              Start Delivering Today
            </button>
            <button className="px-8 py-3.5 bg-card text-foreground rounded-xl text-[15px] font-medium border border-border hover:bg-muted transition-all duration-200">
              Book a Consultation
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-10 flex items-center justify-center gap-2 text-[13px] text-muted-foreground font-medium"
          >
            <div className="w-6 h-6 rounded-full border-[1.5px] border-border flex items-center justify-center animate-bounce">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 2v6M2.5 5.5L5 8l2.5-2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            Scroll Down
          </motion.div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="relative z-20 flex flex-wrap justify-center gap-3 px-6 lg:px-12 pb-8">
        <StatPill value="98%" label="Client Satisfaction" delay={900} />
        <StatPill value="6+" label="Industries Served" delay={1000} />
        <StatPill value="150+" label="Projects Delivered" delay={1100} />
        <StatPill value="100%" label="Certified Pros" delay={1200} />
      </div>
    </section>
  );
}
