'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Phone, Star } from 'lucide-react';
import Link from 'next/link';

// ════════════════════════════════════════
// DATA
// ════════════════════════════════════════

const PROCESS_STEPS = [
  { number: '1', title: 'Schedule a call', description: 'Pick a time that works for you' },
  { number: '2', title: 'Discovery session', description: 'We learn your challenges and goals' },
  { number: '3', title: 'Custom proposal', description: 'Tailored solution within 5 business days' },
];

const STATS = [
  { value: 98, suffix: '%', label: 'Satisfaction' },
  { value: 150, suffix: '+', label: 'Projects' },
  { value: 6, suffix: '+', label: 'Industries' },
];

const TESTIMONIAL = {
  quote:
    'sbPowerDev transformed our operations. What used to take days now happens in minutes. Their team felt like an extension of ours.',
  name: 'Rajesh Kumar',
  title: 'CTO, BioGen Europe',
  initials: 'RK',
};

const PARTNERS = [
  { name: 'Microsoft', label: 'Partner', initial: 'M', color: '#0078d4' },
  { name: 'DocuSign', label: 'Partner', initial: 'D', color: '#ff5722' },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ════════════════════════════════════════
// ANIMATED COUNTER
// ════════════════════════════════════════

function AnimatedStat({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => {
      const start = performance.now();
      const duration = 1500;
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * value));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-xl lg:text-2xl font-extrabold text-foreground tracking-tight">
        {count}
        {suffix}
      </div>
      <div className="text-[10px] text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}

// ════════════════════════════════════════
// MAIN COMPONENT
// ════════════════════════════════════════

export default function PartnerCTA() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="rounded-3xl overflow-hidden bg-card border border-border shadow-sm"
        >
          {/* Animated gradient strip */}
          <div
            className="h-[3px]"
            style={{
              background:
                'linear-gradient(90deg, hsl(var(--secondary)), hsl(var(--accent)), hsl(var(--secondary) / 0.6), hsl(var(--secondary)))',
              backgroundSize: '200% 100%',
              animation: 'gradientShift 4s linear infinite',
            }}
          />

          <div className="flex flex-col lg:flex-row">
            {/* ═══ LEFT SIDE — Conversion Content ═══ */}
            <div className="flex-1 p-8 md:p-10 lg:p-12">
              {/* Eyebrow badge */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/[0.08] border border-secondary/[0.12] mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_6px_hsl(var(--secondary))]" />
                <span className="text-[11px] font-bold tracking-[0.06em] uppercase text-secondary">
                  Let&apos;s Build Together
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
                className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-foreground tracking-[-0.03em] leading-[1.12] mb-4"
              >
                Ready to Transform
                <br />
                Your{' '}
                <span className="relative inline-block">
                  <span className="relative z-[2]">Business?</span>
                  <span className="absolute bottom-[2px] -left-1 -right-1 h-[35%] bg-gradient-to-r from-secondary to-secondary/60 rounded z-[1] opacity-20" />
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
                className="text-[15px] leading-relaxed text-muted-foreground max-w-md mb-8"
              >
                Partner with Microsoft & DocuSign certified experts to accelerate
                your digital transformation. From discovery to delivery in weeks,
                not months.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
                className="flex flex-col sm:flex-row gap-3 mb-8"
              >
                <Link
                  href="/contact"
                  className="
                    inline-flex items-center justify-center gap-2
                    px-7 py-3.5 rounded-xl
                    bg-secondary text-secondary-foreground
                    text-[14px] font-semibold
                    shadow-[0_4px_16px_hsl(var(--secondary)/0.25)]
                    hover:shadow-[0_8px_28px_hsl(var(--secondary)/0.35)]
                    hover:-translate-y-0.5
                    transition-all duration-200
                  "
                >
                  <Phone className="w-4 h-4" />
                  Schedule a Free Call
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/solutions"
                  className="
                    inline-flex items-center justify-center
                    px-7 py-3.5 rounded-xl
                    bg-transparent text-foreground
                    text-[14px] font-medium
                    border border-border
                    hover:bg-muted hover:border-border/80
                    transition-all duration-200
                  "
                >
                  Explore Solutions
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45, ease: EASE }}
                className="flex flex-wrap gap-3"
              >
                {PARTNERS.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex items-center gap-2.5 px-3.5 py-2 rounded-[10px] bg-muted/50 border border-border"
                  >
                    <div
                      className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-extrabold text-white"
                      style={{ backgroundColor: partner.color }}
                    >
                      {partner.initial}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-foreground leading-none">
                        {partner.name}
                      </div>
                      <div className="text-[9px] text-muted-foreground font-medium tracking-[0.04em] uppercase mt-0.5">
                        {partner.label}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ═══ RIGHT SIDE — Proof Panel ═══ */}
            <div className="lg:w-[380px] flex-shrink-0 p-8 md:p-10 lg:py-12 lg:px-10 bg-secondary/[0.03] dark:bg-secondary/[0.04] border-t lg:border-t-0 lg:border-l border-border flex flex-col">
              {/* Process steps */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              >
                <h3 className="text-[11px] font-bold tracking-[0.1em] uppercase text-secondary mb-5">
                  What happens next
                </h3>

                <div className="space-y-4">
                  {PROCESS_STEPS.map((step, i) => (
                    <div key={step.number} className="flex gap-3 items-start">
                      <div
                        className={`
                          w-7 h-7 rounded-lg flex-shrink-0
                          flex items-center justify-center
                          text-xs font-bold
                          ${i === 0
                            ? 'bg-secondary text-secondary-foreground'
                            : 'bg-muted/80 text-muted-foreground border border-border'
                          }
                        `}
                      >
                        {step.number}
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-foreground leading-tight">
                          {step.title}
                        </div>
                        <div className="text-[11px] text-muted-foreground">
                          {step.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Divider */}
              <div className="h-px bg-border my-6" />

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
                className="flex justify-between mb-6"
              >
                {STATS.map((stat, i) => (
                  <AnimatedStat
                    key={stat.label}
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    delay={200 + i * 120}
                  />
                ))}
              </motion.div>

              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
                className="p-4 rounded-xl bg-card/60 dark:bg-white/[0.03] border border-border"
              >
                <div className="flex gap-0.5 mb-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="w-3 h-3 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-xs leading-relaxed text-muted-foreground italic mb-3">
                  &ldquo;{TESTIMONIAL.quote}&rdquo;
                </p>

                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center text-[9px] font-bold text-secondary-foreground">
                    {TESTIMONIAL.initials}
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-foreground leading-none">
                      {TESTIMONIAL.name}
                    </div>
                    <div className="text-[9px] text-muted-foreground mt-0.5">
                      {TESTIMONIAL.title}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </section>
  );
}
