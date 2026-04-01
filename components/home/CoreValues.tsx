'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Sparkles, Handshake, Trophy } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { cn } from '@/lib/utils';

const values = [
  {
    title: 'Simplicity',
    description:
      'We untangle complex IT challenges into clear, elegant solutions that your team can own and maintain.',
    icon: Lightbulb,
  },
  {
    title: 'Innovation',
    description:
      'We stay ahead of the curve, leveraging cutting-edge Microsoft technologies to give you a competitive edge.',
    icon: Sparkles,
  },
  {
    title: 'Partnership',
    description:
      'We work as an extension of your team, deeply invested in your success from day one through long-term support.',
    icon: Handshake,
  },
  {
    title: 'Excellence',
    description:
      'Every solution we deliver is built to the highest standards of quality, security, and performance.',
    icon: Trophy,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function CoreValues() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Our Philosophy"
          title="Untangling IT Challenges with Simplicity"
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={cardVariants}
                className={cn(
                  'group rounded-xl border border-border bg-card p-6',
                  'transition-all duration-300 ease-out',
                  'hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5'
                )}
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
