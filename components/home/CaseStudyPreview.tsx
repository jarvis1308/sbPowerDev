'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { successStories } from '@/data/success-stories';
import SectionHeading from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function CaseStudyPreview() {
  const featured = successStories[0];

  if (!featured) return null;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Success Stories"
          title="Real Results for Real Businesses"
          subtitle="See how we have helped organizations transform their operations with tailored technology solutions."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-4xl"
        >
          <div
            className={cn(
              'relative overflow-hidden rounded-2xl border border-border bg-card',
              'border-l-4 border-l-primary'
            )}
          >
            <div className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:p-10">
              {/* Hero stat */}
              <div className="flex flex-col items-center justify-center md:min-w-[160px]">
                <span className="text-5xl font-bold text-primary md:text-6xl">
                  {featured.heroStat.value}
                </span>
                <span className="mt-2 text-center text-sm font-medium text-muted-foreground">
                  {featured.heroStat.label}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                  {featured.client}
                </p>
                <h3 className="mb-3 text-xl font-bold text-card-foreground md:text-2xl">
                  {featured.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {featured.challenge}
                </p>

                {/* Result chips */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {featured.results.slice(0, 4).map((result) => (
                    <span
                      key={result.label}
                      className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      <span className="mr-1.5 font-bold">{result.value}</span>
                      {result.label}
                    </span>
                  ))}
                </div>

                <Button asChild variant="default" size="sm">
                  <Link href={`/case-studies/${featured.slug}`}>
                    Read Full Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
