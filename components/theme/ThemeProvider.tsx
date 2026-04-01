'use client';

import { useEffect, useCallback } from 'react';
import { useThemeStore, type ThemeMode } from '@/stores/theme-store';

function getResolvedMode(mode: ThemeMode): 'light' | 'dark' {
  if (mode === 'system') {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    return 'light';
  }
  return mode;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { mode, getActiveColors } = useThemeStore();

  const applyTheme = useCallback(() => {
    const resolved = getResolvedMode(mode);
    const root = document.documentElement;
    const colors = getActiveColors();
    const modeColors = colors[resolved];

    root.setAttribute('data-theme', resolved);

    const variableMap: Record<string, string> = {
      '--primary': modeColors.primary,
      '--secondary': modeColors.secondary,
      '--accent': modeColors.accent,
      '--background': modeColors.background,
      '--foreground': modeColors.foreground,
      '--card': modeColors.card,
      '--card-foreground': modeColors.cardForeground,
      '--popover': modeColors.background,
      '--popover-foreground': modeColors.foreground,
      '--muted': modeColors.muted,
      '--muted-foreground': modeColors.mutedForeground,
      '--border': modeColors.border,
      '--input': modeColors.border,
      '--ring': modeColors.ring,
    };

    Object.entries(variableMap).forEach(([prop, value]) => {
      root.style.setProperty(prop, value);
    });

    root.classList.add('theme-transition');
    const timer = setTimeout(() => root.classList.remove('theme-transition'), 350);
    return () => clearTimeout(timer);
  }, [mode, getActiveColors]);

  useEffect(() => {
    applyTheme();
  }, [applyTheme]);

  useEffect(() => {
    if (mode !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => applyTheme();
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [mode, applyTheme]);

  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === 'sbpowerdev-theme') {
        setTimeout(() => {
          useThemeStore.persist.rehydrate();
          applyTheme();
        }, 50);
      }
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, [applyTheme]);

  return <>{children}</>;
}
