'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Home,
  Users,
  Phone,
  DollarSign,
  Cpu,
  BarChart3,
  Cloud,
  Briefcase,
  BookOpen,
  Calculator,
  Info,
  FileText,
} from 'lucide-react';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

interface CommandOption {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
}

const pages: CommandOption[] = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Info, label: 'About', href: '/about' },
  { icon: Phone, label: 'Contact', href: '/contact' },
  { icon: DollarSign, label: 'Pricing', href: '/pricing' },
  { icon: FileText, label: 'How We Work', href: '/how-we-work' },
  { icon: Users, label: 'Careers', href: '/careers' },
];

const solutions: CommandOption[] = [
  { icon: Cpu, label: 'Business Process Automation', href: '/solutions/business-process-automation' },
  { icon: BarChart3, label: 'Data Analytics', href: '/solutions/data-analytics' },
  { icon: Cloud, label: 'Cloud Transformation', href: '/solutions/cloud-transformation' },
  { icon: Briefcase, label: 'Technology Consulting', href: '/solutions/technology-consulting' },
  { icon: BookOpen, label: 'Professional Development', href: '/solutions/professional-development' },
];

const tools: CommandOption[] = [
  { icon: Calculator, label: 'ROI Calculator', href: '/tools/roi-calculator' },
];

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const navigate = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router]
  );

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Pages">
          {pages.map(({ icon: Icon, label, href }) => (
            <CommandItem key={href} onSelect={() => navigate(href)}>
              <Icon className="mr-2 h-4 w-4" />
              <span>{label}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Solutions">
          {solutions.map(({ icon: Icon, label, href }) => (
            <CommandItem key={href} onSelect={() => navigate(href)}>
              <Icon className="mr-2 h-4 w-4" />
              <span>{label}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Tools">
          {tools.map(({ icon: Icon, label, href }) => (
            <CommandItem key={href} onSelect={() => navigate(href)}>
              <Icon className="mr-2 h-4 w-4" />
              <span>{label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
