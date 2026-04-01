import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-bold font-display text-primary mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Page Not Found
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
