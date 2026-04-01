'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Youtube } from 'lucide-react';

import { siteConfig } from '@/data/site-config';
import { footerNav } from '@/data/navigation';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
  { icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
];

const footerColumns = [
  { title: 'Solutions', links: footerNav.solutions },
  { title: 'Company', links: footerNav.company },
  { title: 'Resources', links: footerNav.resources },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div className="max-w-md">
              <h3 className="text-lg font-semibold">Stay up to date</h3>
              <p className="mt-1 text-sm text-primary-foreground/70">
                Get the latest insights on automation, analytics, and cloud
                transformation delivered to your inbox.
              </p>
            </div>
            <form
              className="flex w-full max-w-sm gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/30"
              />
              <Button
                type="submit"
                variant="secondary"
                className="shrink-0"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm font-medium text-primary-foreground/80">
              {siteConfig.tagline}
            </p>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              {siteConfig.description}
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          {footerColumns.map(({ title, links }) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-primary-foreground/10" />
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-sm text-primary-foreground/60 md:flex-row md:justify-between">
          <p>&copy; 2024 {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-primary-foreground"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href="/terms"
              className="transition-colors hover:text-primary-foreground"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
