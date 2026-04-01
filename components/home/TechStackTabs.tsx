'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { technologies } from '@/data/technologies';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import SectionHeading from '@/components/shared/SectionHeading';
import { cn } from '@/lib/utils';

export default function TechStackTabs() {
  const [activeTab, setActiveTab] = useState(technologies[0]?.id ?? 'collaboration');

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Technology"
          title="Our Technology Stack"
          subtitle="We leverage the best of the Microsoft ecosystem and beyond to build solutions that scale."
        />

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="mx-auto max-w-4xl"
        >
          <TabsList className="mb-8 flex h-auto w-full flex-wrap justify-center gap-1 bg-transparent p-0">
            {technologies.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-medium transition-all',
                  'data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md',
                  'data-[state=inactive]:bg-muted data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:bg-muted/80'
                )}
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            {technologies.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                forceMount
                className={cn(
                  activeTab === category.id ? 'block' : 'hidden'
                )}
              >
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {category.tools.map((tool, i) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className={cn(
                        'rounded-xl border border-border bg-card p-5',
                        'transition-all duration-300',
                        'hover:border-primary/30 hover:shadow-sm'
                      )}
                    >
                      <h4 className="mb-1 text-sm font-semibold text-card-foreground">
                        {tool.name}
                      </h4>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {tool.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}
