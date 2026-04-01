import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { ThemeScript } from '@/components/theme/ThemeScript';
import { Header } from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';
import CommandMenu from '@/components/shared/CommandMenu';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'sbPowerDev — Subtle & Powerful Development',
    template: '%s | sbPowerDev',
  },
  description:
    'IT Services & Consulting — Business Process Automation, Data Analytics, Cloud Transformation. Microsoft & DocuSign Partner. Singapore & India.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sbpowerdev.com'
  ),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'sbPowerDev',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <CommandMenu />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
