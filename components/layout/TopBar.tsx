import { Phone, Mail, Linkedin, Twitter, Youtube } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

export function TopBar() {
  return (
    <div className="hidden md:flex w-full bg-primary text-primary-foreground">
      <div className="container mx-auto flex items-center justify-between px-4 py-1.5 text-xs">
        {/* Left: phone numbers */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${siteConfig.phones.singapore.replace(/\s/g, '')}`}
            className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
          >
            <Phone className="h-3 w-3" />
            <span>SG: {siteConfig.phones.singapore}</span>
          </a>
          <a
            href={`tel:${siteConfig.phones.india.replace(/\s/g, '')}`}
            className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
          >
            <Phone className="h-3 w-3" />
            <span>IN: {siteConfig.phones.india}</span>
          </a>
        </div>

        {/* Right: social links + email */}
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-3.5 w-3.5" />
          </a>
          <a
            href={siteConfig.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
            aria-label="Twitter"
          >
            <Twitter className="h-3.5 w-3.5" />
          </a>
          <a
            href={siteConfig.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
            aria-label="YouTube"
          >
            <Youtube className="h-3.5 w-3.5" />
          </a>
          <span className="mx-1 h-3 w-px bg-primary-foreground/30" />
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
          >
            <Mail className="h-3 w-3" />
            <span>{siteConfig.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
