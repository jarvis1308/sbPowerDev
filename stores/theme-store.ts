import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface BrandColors {
  primary: string;
  secondary: string;
  accent: string;
}

export interface ThemePreset {
  id: string;
  name: string;
  description: string;
  inspiration: string;
  colors: {
    light: BrandColors & {
      background: string;
      foreground: string;
      card: string;
      cardForeground: string;
      muted: string;
      mutedForeground: string;
      border: string;
      ring: string;
    };
    dark: BrandColors & {
      background: string;
      foreground: string;
      card: string;
      cardForeground: string;
      muted: string;
      mutedForeground: string;
      border: string;
      ring: string;
    };
  };
  preview: {
    primaryHex: string;
    secondaryHex: string;
    accentHex: string;
    darkBgHex: string;
    lightBgHex: string;
  };
}

export const DEFAULT_PRESETS: ThemePreset[] = [
  {
    id: 'obsidian-ember',
    name: 'Obsidian Ember',
    description: 'Dark premium palette with warm amber accents. Signals cutting-edge technology and premium quality.',
    inspiration: 'Vercel, Linear, Raycast',
    colors: {
      light: {
        primary: '24 10% 10%',
        secondary: '25 95% 53%',
        accent: '31 96% 61%',
        background: '40 20% 98%',
        foreground: '24 10% 10%',
        card: '0 0% 100%',
        cardForeground: '24 10% 10%',
        muted: '30 10% 95%',
        mutedForeground: '24 5% 45%',
        border: '30 8% 90%',
        ring: '25 95% 53%',
      },
      dark: {
        primary: '40 6% 90%',
        secondary: '31 96% 61%',
        accent: '25 95% 53%',
        background: '24 10% 4%',
        foreground: '40 6% 90%',
        card: '24 8% 8%',
        cardForeground: '40 6% 90%',
        muted: '24 6% 12%',
        mutedForeground: '24 5% 55%',
        border: '24 5% 15%',
        ring: '31 96% 61%',
      },
    },
    preview: {
      primaryHex: '#0C0A09',
      secondaryHex: '#F97316',
      accentHex: '#FB923C',
      darkBgHex: '#0C0A09',
      lightBgHex: '#FAFAF9',
    },
  },
  {
    id: 'arctic-sapphire',
    name: 'Arctic Sapphire',
    description: 'Deep navy with electric sky blue. The enterprise trust palette — confident and established.',
    inspiration: 'Stripe, Atlassian, IBM',
    colors: {
      light: {
        primary: '222 47% 11%',
        secondary: '199 89% 48%',
        accent: '174 72% 51%',
        background: '210 40% 98%',
        foreground: '222 47% 11%',
        card: '0 0% 100%',
        cardForeground: '222 47% 11%',
        muted: '214 20% 95%',
        mutedForeground: '215 16% 47%',
        border: '214 20% 90%',
        ring: '199 89% 48%',
      },
      dark: {
        primary: '210 40% 92%',
        secondary: '199 89% 60%',
        accent: '174 72% 55%',
        background: '222 47% 7%',
        foreground: '210 40% 92%',
        card: '222 40% 10%',
        cardForeground: '210 40% 92%',
        muted: '222 30% 14%',
        mutedForeground: '215 20% 55%',
        border: '222 20% 18%',
        ring: '199 89% 60%',
      },
    },
    preview: {
      primaryHex: '#0F172A',
      secondaryHex: '#0EA5E9',
      accentHex: '#2DD4BF',
      darkBgHex: '#0F172A',
      lightBgHex: '#F8FAFC',
    },
  },
  {
    id: 'midnight-violet',
    name: 'Midnight Violet',
    description: 'Deep violet with bright purple accents and rose-gold CTAs. Says "we\'re building the future."',
    inspiration: 'Framer, Midjourney, Notion',
    colors: {
      light: {
        primary: '263 60% 25%',
        secondary: '263 90% 58%',
        accent: '340 72% 69%',
        background: '270 20% 98%',
        foreground: '260 33% 10%',
        card: '0 0% 100%',
        cardForeground: '260 33% 10%',
        muted: '265 15% 95%',
        mutedForeground: '260 10% 45%',
        border: '265 15% 90%',
        ring: '263 90% 58%',
      },
      dark: {
        primary: '263 50% 90%',
        secondary: '263 90% 66%',
        accent: '340 72% 69%',
        background: '260 33% 5%',
        foreground: '263 50% 90%',
        card: '260 28% 8%',
        cardForeground: '263 50% 90%',
        muted: '260 20% 12%',
        mutedForeground: '260 15% 55%',
        border: '260 15% 16%',
        ring: '263 90% 66%',
      },
    },
    preview: {
      primaryHex: '#2E1065',
      secondaryHex: '#8B5CF6',
      accentHex: '#E879A8',
      darkBgHex: '#0F0A1A',
      lightBgHex: '#FAF9FB',
    },
  },
  {
    id: 'carbon-emerald',
    name: 'Carbon Emerald',
    description: 'Deep charcoal-green with emerald accents. Distinctive and growth-focused.',
    inspiration: 'Robinhood, Mercury, Wise',
    colors: {
      light: {
        primary: '156 22% 10%',
        secondary: '160 84% 39%',
        accent: '38 92% 50%',
        background: '150 15% 98%',
        foreground: '156 22% 8%',
        card: '0 0% 100%',
        cardForeground: '156 22% 8%',
        muted: '150 10% 95%',
        mutedForeground: '156 10% 42%',
        border: '150 10% 90%',
        ring: '160 84% 39%',
      },
      dark: {
        primary: '150 15% 90%',
        secondary: '160 72% 50%',
        accent: '38 92% 55%',
        background: '156 22% 4%',
        foreground: '150 15% 90%',
        card: '155 18% 7%',
        cardForeground: '150 15% 90%',
        muted: '155 14% 12%',
        mutedForeground: '150 10% 50%',
        border: '155 10% 16%',
        ring: '160 72% 50%',
      },
    },
    preview: {
      primaryHex: '#0A0F0D',
      secondaryHex: '#10B981',
      accentHex: '#F59E0B',
      darkBgHex: '#0A0F0D',
      lightBgHex: '#F7FAF8',
    },
  },
  {
    id: 'slate-electric',
    name: 'Slate & Electric',
    description: 'Neutral zinc base with electric blurple accent and coral CTAs. The safest yet most sophisticated choice.',
    inspiration: 'Stripe, Vercel, Supabase, Cal.com',
    colors: {
      light: {
        primary: '240 6% 10%',
        secondary: '239 84% 67%',
        accent: '350 89% 60%',
        background: '0 0% 98%',
        foreground: '240 6% 10%',
        card: '0 0% 100%',
        cardForeground: '240 6% 10%',
        muted: '240 5% 96%',
        mutedForeground: '240 4% 46%',
        border: '240 6% 90%',
        ring: '239 84% 67%',
      },
      dark: {
        primary: '0 0% 93%',
        secondary: '239 84% 70%',
        accent: '350 89% 63%',
        background: '240 6% 4%',
        foreground: '0 0% 93%',
        card: '240 5% 7%',
        cardForeground: '0 0% 93%',
        muted: '240 4% 12%',
        mutedForeground: '240 4% 55%',
        border: '240 4% 16%',
        ring: '239 84% 70%',
      },
    },
    preview: {
      primaryHex: '#09090B',
      secondaryHex: '#6366F1',
      accentHex: '#F43F5E',
      darkBgHex: '#09090B',
      lightBgHex: '#FAFAFA',
    },
  },
];

// ─────────────────────────────────────────────────────────
// THEME STORE
// ─────────────────────────────────────────────────────────

interface ThemeState {
  mode: ThemeMode;
  activePresetId: string;
  customColors: {
    light: BrandColors & Record<string, string>;
    dark: BrandColors & Record<string, string>;
  } | null;
  setMode: (mode: ThemeMode) => void;
  applyPreset: (presetId: string) => void;
  setCustomColor: (
    themeMode: 'light' | 'dark',
    key: string,
    value: string
  ) => void;
  getActiveColors: () => ThemePreset['colors'];
  getActivePreset: () => ThemePreset | undefined;
  exportTheme: () => string;
  importTheme: (json: string) => boolean;
  resetToDefault: () => void;
}

const DEFAULT_PRESET_ID = 'slate-electric';

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      mode: 'system',
      activePresetId: DEFAULT_PRESET_ID,
      customColors: null,

      setMode: (mode) => set({ mode }),

      applyPreset: (presetId) => {
        const preset = DEFAULT_PRESETS.find((p) => p.id === presetId);
        if (preset) {
          set({ activePresetId: presetId, customColors: null });
        }
      },

      setCustomColor: (themeMode, key, value) => {
        const state = get();
        const currentColors = state.getActiveColors();
        const currentCustom = state.customColors || {
          light: { ...currentColors.light },
          dark: { ...currentColors.dark },
        };

        set({
          customColors: {
            ...currentCustom,
            [themeMode]: {
              ...currentCustom[themeMode],
              [key]: value,
            },
          },
          activePresetId: 'custom',
        });
      },

      getActiveColors: () => {
        const { activePresetId, customColors } = get();
        if (customColors && activePresetId === 'custom') {
          return customColors as unknown as ThemePreset['colors'];
        }
        const preset = DEFAULT_PRESETS.find((p) => p.id === activePresetId);
        return preset?.colors || DEFAULT_PRESETS[0].colors;
      },

      getActivePreset: () => {
        const { activePresetId } = get();
        return DEFAULT_PRESETS.find((p) => p.id === activePresetId);
      },

      exportTheme: () => {
        const { mode, activePresetId, customColors } = get();
        return JSON.stringify({ mode, activePresetId, customColors }, null, 2);
      },

      importTheme: (json) => {
        try {
          const parsed = JSON.parse(json);
          set({
            mode: parsed.mode || 'system',
            activePresetId: parsed.activePresetId || DEFAULT_PRESET_ID,
            customColors: parsed.customColors || null,
          });
          return true;
        } catch {
          return false;
        }
      },

      resetToDefault: () => {
        set({
          mode: 'system',
          activePresetId: DEFAULT_PRESET_ID,
          customColors: null,
        });
      },
    }),
    {
      name: 'sbpowerdev-theme',
    }
  )
);
