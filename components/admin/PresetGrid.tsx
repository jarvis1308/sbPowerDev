'use client';

import { DEFAULT_PRESETS, useThemeStore } from '@/stores/theme-store';
import { Check } from 'lucide-react';
import { toast } from 'sonner';

export function PresetGrid() {
  const { activePresetId, applyPreset } = useThemeStore();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Color Presets</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Click any preset to instantly apply it. Changes are live and sync across all open tabs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {DEFAULT_PRESETS.map((preset) => {
          const isActive = activePresetId === preset.id;

          return (
            <button
              key={preset.id}
              onClick={() => {
                applyPreset(preset.id);
                toast.success(`Applied "${preset.name}" palette`);
              }}
              className={`
                relative text-left rounded-xl border p-4 transition-all duration-200
                hover:shadow-md hover:scale-[1.02] active:scale-[0.98]
                ${isActive
                  ? 'border-secondary ring-2 ring-secondary/20 bg-secondary/5'
                  : 'border-border bg-card hover:border-secondary/50'
                }
              `}
            >
              {isActive && (
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-secondary-foreground" />
                </div>
              )}

              <div className="flex gap-1.5 mb-3">
                <div
                  className="w-10 h-10 rounded-lg"
                  style={{ background: preset.preview.darkBgHex }}
                />
                <div
                  className="w-10 h-10 rounded-lg"
                  style={{ background: preset.preview.secondaryHex }}
                />
                <div
                  className="w-10 h-10 rounded-lg"
                  style={{ background: preset.preview.accentHex }}
                />
                <div
                  className="w-10 h-10 rounded-lg border border-border"
                  style={{ background: preset.preview.lightBgHex }}
                />
              </div>

              <div
                className="h-2 rounded-full mb-3"
                style={{
                  background: `linear-gradient(to right, ${preset.preview.primaryHex}, ${preset.preview.secondaryHex}, ${preset.preview.accentHex})`,
                }}
              />

              <h3 className="text-sm font-semibold text-foreground">{preset.name}</h3>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                {preset.description}
              </p>
              <p className="text-[10px] text-muted-foreground/60 mt-2 italic">
                Inspired by: {preset.inspiration}
              </p>
            </button>
          );
        })}

        {activePresetId === 'custom' && (
          <div className="relative text-left rounded-xl border border-secondary ring-2 ring-secondary/20 bg-secondary/5 p-4">
            <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-secondary-foreground" />
            </div>
            <div className="w-10 h-10 rounded-lg bg-primary mb-3" />
            <h3 className="text-sm font-semibold text-foreground">Custom</h3>
            <p className="text-xs text-muted-foreground mt-1">
              You&apos;ve customized colors from the Colors tab.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
