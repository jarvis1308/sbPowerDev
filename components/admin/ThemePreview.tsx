'use client';

import { Button } from '@/components/ui/button';
import { useThemeStore } from '@/stores/theme-store';

function MiniHero() {
  return (
    <div className="rounded-xl bg-gradient-to-br from-primary to-primary/70 p-6 text-primary-foreground">
      <h3 className="text-lg font-bold mb-1">Build Powerful Solutions</h3>
      <p className="text-sm opacity-90 mb-4">
        Accelerate development with sbPowerDev platform.
      </p>
      <div className="flex gap-2">
        <button className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-md hover:bg-white/30 transition-colors">
          Get Started
        </button>
        <button className="bg-white text-primary text-xs font-medium px-3 py-1.5 rounded-md">
          Learn More
        </button>
      </div>
    </div>
  );
}

function ButtonRow() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button size="sm" className="h-8 text-xs">
        Primary
      </Button>
      <Button size="sm" variant="secondary" className="h-8 text-xs">
        Secondary
      </Button>
      <Button
        size="sm"
        className="h-8 text-xs bg-accent text-accent-foreground hover:bg-accent/90"
      >
        Accent
      </Button>
      <Button size="sm" variant="outline" className="h-8 text-xs">
        Outline
      </Button>
      <Button size="sm" variant="ghost" className="h-8 text-xs">
        Ghost
      </Button>
    </div>
  );
}

function MiniCards() {
  const cards = [
    { title: 'Analytics', desc: 'Track your metrics in real-time' },
    { title: 'Automation', desc: 'Streamline your workflow' },
    { title: 'Integration', desc: 'Connect all your tools' },
  ];

  return (
    <div className="grid grid-cols-3 gap-2">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-lg border bg-card p-3 space-y-1"
        >
          <div className="h-2 w-6 rounded-full bg-secondary/60" />
          <h4 className="text-xs font-semibold text-card-foreground">
            {card.title}
          </h4>
          <p className="text-[10px] text-muted-foreground leading-tight">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export function ThemePreview() {
  const { getActiveColors, getActivePreset } = useThemeStore();
  const colors = getActiveColors();
  const preset = getActivePreset();

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        Live preview of UI elements using your current theme
        {preset ? ` ("${preset.name}")` : ' (Custom)'}.
        All elements respond to color changes in real-time.
      </p>

      {/* Hero */}
      <div>
        <h4 className="text-sm font-medium mb-2">Hero Section</h4>
        <MiniHero />
      </div>

      {/* Buttons */}
      <div>
        <h4 className="text-sm font-medium mb-2">Button Variants</h4>
        <ButtonRow />
      </div>

      {/* Cards */}
      <div>
        <h4 className="text-sm font-medium mb-2">Card Components</h4>
        <MiniCards />
      </div>

      {/* Side-by-side comparison */}
      <div>
        <h4 className="text-sm font-medium mb-2">Mode Comparison</h4>
        <div className="flex gap-3">
          <div
            className="flex-1 rounded-lg border p-4 space-y-2"
            style={{
              backgroundColor: `hsl(${colors.light.background})`,
              color: `hsl(${colors.light.foreground})`,
              borderColor: `hsl(${colors.light.border})`,
            }}
          >
            <p className="text-xs font-semibold opacity-70 uppercase tracking-wider">
              Light Mode
            </p>
            <div
              className="h-3 w-3/4 rounded"
              style={{ backgroundColor: `hsl(${colors.light.secondary})` }}
            />
            <div className="h-2 w-full rounded" style={{ backgroundColor: `hsl(${colors.light.muted})` }} />
            <div className="h-2 w-5/6 rounded" style={{ backgroundColor: `hsl(${colors.light.muted})` }} />
            <div className="flex gap-1.5 pt-1">
              <div
                className="h-5 w-12 rounded text-[9px] flex items-center justify-center font-medium"
                style={{ backgroundColor: `hsl(${colors.light.primary})`, color: 'white' }}
              >
                Button
              </div>
              <div
                className="h-5 w-12 rounded border text-[9px] flex items-center justify-center font-medium"
                style={{
                  borderColor: `hsl(${colors.light.secondary})`,
                  color: `hsl(${colors.light.secondary})`,
                }}
              >
                Outline
              </div>
              <div
                className="h-5 w-12 rounded text-[9px] flex items-center justify-center font-medium"
                style={{ backgroundColor: `hsl(${colors.light.accent})`, color: 'white' }}
              >
                Accent
              </div>
            </div>
          </div>

          <div
            className="flex-1 rounded-lg border p-4 space-y-2"
            style={{
              backgroundColor: `hsl(${colors.dark.background})`,
              color: `hsl(${colors.dark.foreground})`,
              borderColor: `hsl(${colors.dark.border})`,
            }}
          >
            <p className="text-xs font-semibold opacity-70 uppercase tracking-wider">
              Dark Mode
            </p>
            <div
              className="h-3 w-3/4 rounded"
              style={{ backgroundColor: `hsl(${colors.dark.secondary})` }}
            />
            <div className="h-2 w-full rounded" style={{ backgroundColor: `hsl(${colors.dark.muted})` }} />
            <div className="h-2 w-5/6 rounded" style={{ backgroundColor: `hsl(${colors.dark.muted})` }} />
            <div className="flex gap-1.5 pt-1">
              <div
                className="h-5 w-12 rounded text-[9px] flex items-center justify-center font-medium"
                style={{ backgroundColor: `hsl(${colors.dark.primary})`, color: `hsl(${colors.dark.background})` }}
              >
                Button
              </div>
              <div
                className="h-5 w-12 rounded border text-[9px] flex items-center justify-center font-medium"
                style={{
                  borderColor: `hsl(${colors.dark.secondary})`,
                  color: `hsl(${colors.dark.secondary})`,
                }}
              >
                Outline
              </div>
              <div
                className="h-5 w-12 rounded text-[9px] flex items-center justify-center font-medium"
                style={{ backgroundColor: `hsl(${colors.dark.accent})`, color: 'white' }}
              >
                Accent
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current values reference */}
      <div className="rounded-lg border bg-muted/30 p-4">
        <h4 className="text-sm font-medium mb-2">Active Color Values</h4>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs font-mono">
          {(['light', 'dark'] as const).map((themeMode) => (
            <div key={themeMode} className="space-y-1">
              <p className="font-sans font-medium text-muted-foreground capitalize mb-1.5">
                {themeMode}
              </p>
              {(['primary', 'secondary', 'accent', 'background', 'foreground', 'muted', 'border'] as const).map((key) => {
                const value = colors[themeMode][key as keyof typeof colors.light];
                return (
                  <div key={key} className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full border border-border/50 shrink-0"
                      style={{ backgroundColor: `hsl(${value})` }}
                    />
                    <span className="text-muted-foreground">{key}:</span>
                    <span>{value}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
