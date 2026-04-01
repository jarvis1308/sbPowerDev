import type { Metadata } from 'next';
import { Linkedin, Mail, Quote } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import PartnerCTA from '@/components/shared/PartnerCTA';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Meet the Founder',
  description:
    'Meet Shashank Beeraka, founder and CEO of sbPowerDev — a Microsoft technology expert passionate about helping mid-market businesses transform digitally.',
};

export default function FounderPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Meet the{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Founder
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              The vision and leadership behind sbPowerDev.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-5">
            {/* Photo placeholder */}
            <div className="md:col-span-2">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-4xl font-bold text-primary">
                      SB
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Photo placeholder
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold">Shashank Beeraka</h2>
              <p className="mt-1 text-lg font-medium text-primary">
                Founder & CEO
              </p>
              <div className="mt-2 flex gap-3">
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:shashank@sbpowerdev.com"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-8 space-y-4 text-muted-foreground">
                <p>
                  Shashank Beeraka is a Microsoft technology specialist with
                  over a decade of experience in enterprise solutions, business
                  process automation, and cloud transformation. He founded
                  sbPowerDev in 2019 with a clear mission: to bring
                  enterprise-grade Microsoft solutions to mid-market businesses
                  that were underserved by large consulting firms.
                </p>
                <p>
                  Before starting sbPowerDev, Shashank held senior consulting
                  roles at leading technology firms across Asia, where he led
                  Power Platform implementations, Azure migrations, and data
                  analytics programs for Fortune 500 clients. These experiences
                  gave him deep insight into what enterprises need — and what
                  mid-market companies were missing.
                </p>
                <p>
                  A certified Microsoft professional across multiple platforms,
                  Shashank combines hands-on technical expertise with strategic
                  business acumen. He is passionate about using technology to
                  solve real business problems and believes that every
                  organization, regardless of size, deserves access to
                  world-class digital solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Vision Statement */}
      <AnimatedSection className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mx-auto max-w-3xl border-primary/20">
            <CardContent className="p-8 md:p-12">
              <Quote className="mb-4 h-10 w-10 text-primary/30" />
              <blockquote className="text-lg font-medium leading-relaxed md:text-xl">
                &ldquo;I started sbPowerDev because I saw a gap — mid-market
                businesses had the ambition to transform digitally but lacked
                partners who truly understood their constraints and goals. We
                exist to fill that gap with integrity, deep expertise, and a
                genuine commitment to outcomes over hours billed.&rdquo;
              </blockquote>
              <p className="mt-6 font-semibold text-primary">
                — Shashank Beeraka, Founder & CEO
              </p>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      <PartnerCTA />
    </>
  );
}
