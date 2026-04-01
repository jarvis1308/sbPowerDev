import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  badge?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  badge,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-10 max-w-2xl space-y-3',
        align === 'center' && 'mx-auto text-center',
        align === 'left' && 'text-left'
      )}
    >
      {badge && (
        <Badge variant="secondary" className="mb-2">
          {badge}
        </Badge>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
