'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import {
  mainNav,
  type NavItem,
  type NavLink,
  type NavDropdown,
  type NavMegaMenu,
} from '@/data/navigation';
import { siteConfig } from '@/data/site-config';

/* ------------------------------------------------------------------ */
/*  Type guards                                                        */
/* ------------------------------------------------------------------ */

function isNavLink(item: NavItem): item is NavLink {
  return 'href' in item;
}

function isNavDropdown(item: NavItem): item is NavDropdown {
  return 'children' in item && !('megaMenu' in item);
}

function isNavMegaMenu(item: NavItem): item is NavMegaMenu {
  return 'megaMenu' in item && item.megaMenu === true;
}

/* ------------------------------------------------------------------ */
/*  Helper: render a single nav link row                               */
/* ------------------------------------------------------------------ */

function NavLinkRow({
  link,
  onClose,
  className,
}: {
  link: NavLink;
  onClose: () => void;
  className?: string;
}) {
  const Icon = link.icon;
  return (
    <Link
      href={link.href}
      onClick={onClose}
      className={cn(
        'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent',
        className
      )}
    >
      {Icon && (
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Icon className="h-3.5 w-3.5" />
        </span>
      )}
      <span>{link.label}</span>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  MobileNav                                                          */
/* ------------------------------------------------------------------ */

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  /** Flatten all children from a mega-menu into a single link array. */
  function megaMenuLinks(item: NavMegaMenu): NavLink[] {
    return item.sections.flatMap((s) => s.links);
  }

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent side="right" className="flex w-80 flex-col gap-0 p-0">
        {/* Logo header */}
        <SheetHeader className="border-b px-5 py-4">
          <SheetTitle asChild>
            <Link
              href="/"
              onClick={onClose}
              className="font-display text-lg font-bold tracking-tight"
            >
              sb<span className="text-primary">Power</span>Dev
            </Link>
          </SheetTitle>
        </SheetHeader>

        {/* Scrollable nav area */}
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <Accordion type="multiple" className="w-full">
            {mainNav.map((item, idx) => {
              /* Simple link */
              if (isNavLink(item)) {
                return (
                  <div key={item.label} className="border-b py-1">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex w-full items-center py-3 text-sm font-medium transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              }

              /* Dropdown */
              if (isNavDropdown(item)) {
                return (
                  <AccordionItem key={item.label} value={`nav-${idx}`}>
                    <AccordionTrigger className="text-sm font-medium hover:no-underline">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-0.5">
                        {item.children.map((child) => (
                          <NavLinkRow
                            key={child.href}
                            link={child}
                            onClose={onClose}
                          />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              }

              /* Mega menu */
              if (isNavMegaMenu(item)) {
                return (
                  <AccordionItem key={item.label} value={`nav-${idx}`}>
                    <AccordionTrigger className="text-sm font-medium hover:no-underline">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-0.5">
                        {megaMenuLinks(item).map((link) => (
                          <NavLinkRow
                            key={link.href}
                            link={link}
                            onClose={onClose}
                          />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              }

              return null;
            })}
          </Accordion>
        </div>

        {/* Bottom section */}
        <div className="border-t px-5 py-4">
          <div className="flex items-center justify-between">
            <ThemeToggle />
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          <Button asChild className="mt-3 w-full">
            <Link href="/contact" onClick={onClose}>
              Get Started
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
