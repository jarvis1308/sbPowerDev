import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { ThemeScript } from '@/components/theme/ThemeScript';
import { Toaster } from '@/components/ui/sonner';

export const metadata = {
  title: 'Theme Admin | sbPowerDev',
  description: 'Admin theme configurator for sbPowerDev',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider>
        {children}
        <Toaster />
      </ThemeProvider>
    </>
  );
}
