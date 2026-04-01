'use client';

import { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const TYPOGRAPHY_KEY = 'sbpowerdev-typography';

interface TypographySettings {
  fontFamily: string;
  baseFontSize: number;
  headingWeight: number;
}

const defaultSettings: TypographySettings = {
  fontFamily: 'Inter',
  baseFontSize: 16,
  headingWeight: 700,
};

const fontOptions = [
  { value: 'Inter', label: 'Inter' },
  { value: 'Space Grotesk', label: 'Space Grotesk' },
  { value: 'DM Sans', label: 'DM Sans' },
  { value: 'Outfit', label: 'Outfit' },
];

const weightOptions = [
  { value: 500, label: 'Medium (500)' },
  { value: 600, label: 'Semi Bold (600)' },
  { value: 700, label: 'Bold (700)' },
];

function loadSettings(): TypographySettings {
  if (typeof window === 'undefined') return defaultSettings;
  try {
    const stored = localStorage.getItem(TYPOGRAPHY_KEY);
    return stored ? { ...defaultSettings, ...JSON.parse(stored) } : defaultSettings;
  } catch {
    return defaultSettings;
  }
}

export function TypographyControls() {
  const [settings, setSettings] = useState<TypographySettings>(defaultSettings);

  useEffect(() => {
    setSettings(loadSettings());
  }, []);

  const update = (partial: Partial<TypographySettings>) => {
    const next = { ...settings, ...partial };
    setSettings(next);
    localStorage.setItem(TYPOGRAPHY_KEY, JSON.stringify(next));
  };

  return (
    <div className="space-y-8">
      {/* Font Family */}
      <div className="space-y-2.5">
        <Label className="text-sm font-medium">Font Family</Label>
        <Select
          value={settings.fontFamily}
          onValueChange={(v) => update({ fontFamily: v })}
        >
          <SelectTrigger className="w-full max-w-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {fontOptions.map((f) => (
              <SelectItem key={f.value} value={f.value}>
                {f.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Base Font Size */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Base Font Size</Label>
          <span className="text-sm text-muted-foreground font-mono">
            {settings.baseFontSize}px
          </span>
        </div>
        <Slider
          min={14}
          max={18}
          step={1}
          value={[settings.baseFontSize]}
          onValueChange={([v]) => update({ baseFontSize: v })}
          className="max-w-xs"
        />
        <div className="flex justify-between text-xs text-muted-foreground max-w-xs">
          <span>14px</span>
          <span>18px</span>
        </div>
      </div>

      {/* Heading Weight */}
      <div className="space-y-2.5">
        <Label className="text-sm font-medium">Heading Weight</Label>
        <div className="flex gap-2">
          {weightOptions.map((w) => (
            <button
              key={w.value}
              onClick={() => update({ headingWeight: w.value })}
              className={cn(
                'rounded-lg border px-4 py-2 text-sm transition-colors',
                settings.headingWeight === w.value
                  ? 'border-primary bg-primary/10 text-primary font-medium'
                  : 'border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
              )}
            >
              {w.label}
            </button>
          ))}
        </div>
      </div>

      {/* Preview */}
      <div className="border-t pt-6">
        <Label className="text-sm font-medium mb-4 block">Live Preview</Label>
        <div
          className="rounded-xl border bg-card p-6 space-y-3"
          style={{ fontFamily: settings.fontFamily, fontSize: `${settings.baseFontSize}px` }}
        >
          <h1
            style={{ fontWeight: settings.headingWeight }}
            className="text-2xl text-foreground"
          >
            Heading Level 1
          </h1>
          <h2
            style={{ fontWeight: settings.headingWeight }}
            className="text-xl text-foreground"
          >
            Heading Level 2
          </h2>
          <h3
            style={{ fontWeight: settings.headingWeight }}
            className="text-lg text-foreground"
          >
            Heading Level 3
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            This is a paragraph of body text demonstrating the selected font family,
            base size, and default weight. The quick brown fox jumps over the lazy
            dog. Great ideas come from teams who build with purpose and clarity.
          </p>
          <p className="text-sm text-muted-foreground">
            Small text at {settings.baseFontSize - 2}px equivalent.
            <span className="font-mono ml-2 text-xs bg-muted px-1.5 py-0.5 rounded">
              font-mono code snippet
            </span>
          </p>
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          Note: Typography settings are saved locally and will be applied in a future update.
        </p>
      </div>
    </div>
  );
}
