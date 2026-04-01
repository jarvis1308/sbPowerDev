import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';
import Breadcrumb from '@/components/shared/Breadcrumb';
import PartnerCTA from '@/components/shared/PartnerCTA';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <article className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />

          <div className="mx-auto mt-8 grid max-w-6xl gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                {post.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>

              {/* Article Body (Placeholder) */}
              <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert">
                <p className="lead text-lg text-muted-foreground">
                  {post.excerpt}
                </p>

                <h2>Introduction</h2>
                <p>
                  In today&apos;s rapidly evolving digital landscape, mid-market
                  enterprises face unique challenges when it comes to technology
                  adoption. They need the same capabilities as large enterprises
                  but with faster time-to-value and more practical budgets. This
                  article explores how businesses can navigate these challenges
                  effectively.
                </p>

                <h2>The Challenge</h2>
                <p>
                  Many organizations struggle with manual processes, siloed
                  data, and legacy systems that slow down decision-making. The
                  gap between where businesses are and where they need to be
                  continues to widen as competitors adopt modern technologies.
                </p>
                <p>
                  Understanding the root causes of these challenges is the
                  first step toward building a practical roadmap for digital
                  transformation. It requires honest assessment of current
                  capabilities, clear prioritization of business outcomes, and
                  a phased approach to implementation.
                </p>

                <h2>Our Approach</h2>
                <p>
                  At sbPowerDev, we take a pragmatic, outcomes-first approach.
                  We start with understanding your business goals, then design
                  solutions that deliver measurable value within weeks — not
                  months. Our agile methodology ensures continuous feedback and
                  course correction throughout the engagement.
                </p>

                <h2>Key Takeaways</h2>
                <ul>
                  <li>
                    Start with a clear understanding of your business outcomes,
                    not the technology.
                  </li>
                  <li>
                    Choose partners who understand mid-market constraints and
                    can deliver incrementally.
                  </li>
                  <li>
                    Invest in low-code platforms to accelerate time-to-value
                    while maintaining governance.
                  </li>
                  <li>
                    Measure success by business impact, not technical
                    complexity.
                  </li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  Digital transformation is not a destination — it is a
                  continuous journey. The organizations that thrive are those
                  that embrace change pragmatically, invest in the right
                  partnerships, and maintain a relentless focus on business
                  outcomes. We are here to help you navigate that journey.
                </p>
              </div>

              <div className="mt-12">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to all posts
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8 lg:col-span-1">
              {/* Table of Contents */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 font-bold">Table of Contents</h3>
                  <nav className="space-y-2">
                    {[
                      'Introduction',
                      'The Challenge',
                      'Our Approach',
                      'Key Takeaways',
                      'Conclusion',
                    ].map((heading) => (
                      <p
                        key={heading}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {heading}
                      </p>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Related Posts */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 font-bold">Related Posts</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.id}
                        href={`/blog/${related.slug}`}
                        className="group block"
                      >
                        <p className="text-sm font-medium leading-tight group-hover:text-primary">
                          {related.title}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {related.readTime}
                        </p>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </article>

      <PartnerCTA />
    </>
  );
}
