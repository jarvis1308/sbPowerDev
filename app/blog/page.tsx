'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';
import SectionHeading from '@/components/shared/SectionHeading';
import PartnerCTA from '@/components/shared/PartnerCTA';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(blogPosts.map((post) => post.category)));
    return ['All', ...cats];
  }, []);

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Insights & Resources
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Expert perspectives on automation, analytics, cloud, and digital
              transformation for mid-market businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.08}>
                <Card className="group h-full transition-shadow hover:shadow-lg">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <h3 className="text-lg font-bold leading-tight group-hover:text-primary">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t pt-4">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                      >
                        Read More
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="py-12 text-center text-muted-foreground">
              No posts found in this category.
            </p>
          )}
        </div>
      </AnimatedSection>

      <PartnerCTA />
    </>
  );
}
