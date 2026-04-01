'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Cpu,
  BarChart3,
  Cloud,
  Briefcase,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';
import { solutions } from '@/data/solutions';
import SectionHeading from '@/components/shared/SectionHeading';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  BarChart3,
  Cloud,
  Briefcase,
  BookOpen,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function SolutionsGrid() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="What We Do"
          title="Solutions That Drive Results"
          subtitle="From automation to analytics, we deliver end-to-end technology solutions tailored to your business."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {solutions.map((solution) => {
            const Icon = iconMap[solution.icon] || Cpu;
            return (
              <motion.div key={solution.id} variants={cardVariants}>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className={cn(
                    'group flex h-full flex-col rounded-xl border border-border bg-card p-6',
                    'transition-all duration-300 ease-out',
                    'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:scale-[1.02]'
                  )}
                >
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 self-start">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {solution.shortDesc}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
