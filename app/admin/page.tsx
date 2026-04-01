'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useThemeStore } from '@/stores/theme-store';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { ColorPicker } from '@/components/admin/ColorPicker';
import { PresetGrid } from '@/components/admin/PresetGrid';
import { TypographyControls } from '@/components/admin/TypographyControls';
import { ThemePreview } from '@/components/admin/ThemePreview';
import { ExportImport } from '@/components/admin/ExportImport';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Palette, Layers, Type, Eye, Download, Lock } from 'lucide-react';
import { toast } from 'sonner';

const ADMIN_PASSPHRASE =
  process.env.NEXT_PUBLIC_ADMIN_PASSPHRASE || 'sbpowerdev-admin-2024';
const AUTH_KEY = 'admin-auth';

const COLOR_KEYS = ['primary', 'secondary', 'accent', 'background', 'foreground', 'card', 'cardForeground', 'muted', 'mutedForeground', 'border', 'ring'] as const;

const COLOR_LABELS: Record<string, string> = {
  primary: 'Primary',
  secondary: 'Secondary',
  accent: 'Accent',
  background: 'Background',
  foreground: 'Foreground',
  card: 'Card',
  cardForeground: 'Card Text',
  muted: 'Muted',
  mutedForeground: 'Muted Text',
  border: 'Border',
  ring: 'Ring / Focus',
};

const tabConfig: Record<
  string,
  { title: string; description: string; icon: typeof Palette }
> = {
  presets: {
    title: 'Presets',
    description: 'Choose from 5 curated premium color palettes',
    icon: Layers,
  },
  colors: {
    title: 'Colors',
    description: 'Fine-tune individual colors for light and dark modes',
    icon: Palette,
  },
  typography: {
    title: 'Typography',
    description: 'Configure fonts and text styles',
    icon: Type,
  },
  preview: {
    title: 'Preview',
    description: 'See how your theme looks on UI components',
    icon: Eye,
  },
  export: {
    title: 'Export / Import',
    description: 'Save, share, or restore theme configurations',
    icon: Download,
  },
};

function ColorsPanel() {
  const { getActiveColors, setCustomColor } = useThemeStore();
  const colors = getActiveColors();

  const handleChange = useCallback(
    (themeMode: 'light' | 'dark', key: string, value: string) => {
      setCustomColor(themeMode, key, value);
      toast.success('Theme updated');
    },
    [setCustomColor]
  );

  return (
    <div className="space-y-8">
      {/* Light Mode */}
      <div>
        <h3 className="text-base font-semibold mb-1">Light Mode Colors</h3>
        <p className="text-sm text-muted-foreground mb-4">
          These colors are used when the site is in light mode.
        </p>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
          {COLOR_KEYS.map((key) => (
            <ColorPicker
              key={`light-${key}`}
              label={COLOR_LABELS[key] || key}
              value={colors.light[key as keyof typeof colors.light] || '0 0% 50%'}
              onChange={(v) => handleChange('light', key, v)}
            />
          ))}
        </div>
      </div>

      {/* Dark Mode */}
      <div className="border-t pt-6">
        <h3 className="text-base font-semibold mb-1">Dark Mode Colors</h3>
        <p className="text-sm text-muted-foreground mb-4">
          These colors are used when the site is in dark mode.
        </p>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
          {COLOR_KEYS.map((key) => (
            <ColorPicker
              key={`dark-${key}`}
              label={COLOR_LABELS[key] || key}
              value={colors.dark[key as keyof typeof colors.dark] || '0 0% 50%'}
              onChange={(v) => handleChange('dark', key, v)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isAuthed, setIsAuthed] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [passphrase, setPassphrase] = useState('');
  const [authError, setAuthError] = useState('');

  const initialTab = searchParams.get('tab') || 'presets';
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const stored = sessionStorage.getItem(AUTH_KEY);
    if (stored === 'true') {
      setIsAuthed(true);
    }
    setAuthChecked(true);
  }, []);

  const handleAuth = () => {
    if (passphrase === ADMIN_PASSPHRASE) {
      sessionStorage.setItem(AUTH_KEY, 'true');
      setIsAuthed(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect passphrase. Please try again.');
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', tab);
    router.replace(`/admin?${params.toString()}`, { scroll: false });
  };

  if (!authChecked) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-muted-foreground text-sm">
          Loading...
        </div>
      </div>
    );
  }

  if (!isAuthed) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Dialog open={true}>
          <DialogContent
            className="sm:max-w-md"
            onPointerDownOutside={(e) => e.preventDefault()}
            onEscapeKeyDown={(e) => e.preventDefault()}
          >
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Admin Access
              </DialogTitle>
              <DialogDescription>
                Enter the admin passphrase to access the theme configurator.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-3 pt-2">
              <Input
                type="password"
                placeholder="Enter passphrase..."
                value={passphrase}
                onChange={(e) => {
                  setPassphrase(e.target.value);
                  setAuthError('');
                }}
                onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
                autoFocus
              />
              {authError && (
                <p className="text-sm text-destructive">{authError}</p>
              )}
              <div className="flex justify-end gap-2">
                <Button variant="ghost" onClick={() => router.push('/')}>
                  Cancel
                </Button>
                <Button onClick={handleAuth}>Unlock</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  const currentTab = tabConfig[activeTab] || tabConfig.presets;
  const TabIcon = currentTab.icon;

  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar activeTab={activeTab} onTabChange={handleTabChange} />

      <main className="md:ml-[260px] min-h-screen">
        <div className="md:hidden h-[105px]" />

        <header className="sticky top-0 md:top-0 z-30 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <TabIcon className="h-5 w-5 text-secondary" />
              <div>
                <h1 className="text-lg font-semibold">{currentTab.title}</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  {currentTab.description}
                </p>
              </div>
            </div>
            <Badge
              variant="secondary"
              className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse" />
              All changes are live
            </Badge>
          </div>
        </header>

        <div className="p-6 max-w-4xl">
          {activeTab === 'presets' && <PresetGrid />}
          {activeTab === 'colors' && <ColorsPanel />}
          {activeTab === 'typography' && <TypographyControls />}
          {activeTab === 'preview' && <ThemePreview />}
          {activeTab === 'export' && <ExportImport />}
        </div>
      </main>
    </div>
  );
}
