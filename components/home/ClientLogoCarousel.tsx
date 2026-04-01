import { clients } from '@/data/clients';
import { cn } from '@/lib/utils';

export default function ClientLogoCarousel() {
  // Duplicate list for seamless infinite scroll
  const allClients = [...clients, ...clients];

  return (
    <section className="overflow-hidden border-y border-border bg-muted/30 py-12">
      <div className="container mx-auto mb-8 px-4 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by organizations across industries
        </p>
      </div>

      <div className="group relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-marquee items-center group-hover:[animation-play-state:paused]">
          {allClients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className={cn(
                'mx-6 flex-shrink-0 rounded-lg border border-border bg-card px-8 py-4',
                'text-muted-foreground/60 transition-all duration-300',
                'hover:text-foreground hover:border-primary/30 hover:shadow-sm'
              )}
            >
              <span className="whitespace-nowrap text-sm font-semibold tracking-wide">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
