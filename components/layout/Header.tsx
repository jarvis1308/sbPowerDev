'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { Menu, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { MobileNav } from '@/components/layout/MobileNav';
import {
  mainNav,
  type NavItem,
  type NavLink,
  type NavDropdown,
  type NavMegaMenu,
} from '@/data/navigation';

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
/*  Dropdown panel (Solutions / Industries style)                      */
/* ------------------------------------------------------------------ */

function DropdownPanel({ item }: { item: NavDropdown }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.15 }}
      className="absolute left-1/2 top-full z-50 w-[340px] -translate-x-1/2 pt-2"
    >
      <div className="rounded-lg border bg-popover p-2 shadow-lg">
        {item.children.map((child) => {
          const Icon = child.icon;
          return (
            <Link
              key={child.href}
              href={child.href}
              className="flex items-start gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-accent"
            >
              {Icon && (
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
              )}
              <div>
                <div className="text-sm font-medium leading-tight">
                  {child.label}
                </div>
                {child.description && (
                  <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                    {child.description}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mega-menu panel (Company style)                                    */
/* ------------------------------------------------------------------ */

function MegaMenuPanel({ item }: { item: NavMegaMenu }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.15 }}
      className="absolute left-1/2 top-full z-50 w-[720px] -translate-x-1/2 pt-2"
    >
      <div className="rounded-lg border bg-popover p-4 shadow-lg">
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: `repeat(${item.sections.length}, minmax(0, 1fr))`,
          }}
        >
          {item.sections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {section.title}
              </h4>
              <div className="space-y-1">
                {section.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-start gap-2.5 rounded-md px-2 py-2 transition-colors hover:bg-accent"
                    >
                      {Icon && (
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                      )}
                      <div>
                        <div className="text-sm font-medium leading-tight">
                          {link.label}
                        </div>
                        {link.description && (
                          <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                            {link.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Header                                                             */
/* ------------------------------------------------------------------ */

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = useCallback((label: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenMenu(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimerRef.current = setTimeout(() => setOpenMenu(null), 150);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300',
          scrolled
            ? 'border-b bg-background/80 shadow-sm backdrop-blur-lg'
            : 'bg-background'
        )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-bold tracking-tight text-foreground"
          >
            sb<span className="text-primary">Power</span>Dev
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => {
              if (isNavLink(item)) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                );
              }

              /* Dropdown or MegaMenu */
              const label = item.label;
              return (
                <div
                  key={label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className={cn(
                      'flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground',
                      openMenu === label && 'bg-accent text-foreground'
                    )}
                  >
                    {label}
                    <ChevronDown
                      className={cn(
                        'h-3.5 w-3.5 transition-transform duration-200',
                        openMenu === label && 'rotate-180'
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {openMenu === label && isNavDropdown(item) && (
                      <DropdownPanel item={item} />
                    )}
                    {openMenu === label && isNavMegaMenu(item) && (
                      <MegaMenuPanel item={item} />
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild className="hidden lg:inline-flex">
              <Link href="/contact">Get Started</Link>
            </Button>

            {/* Mobile hamburger */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
