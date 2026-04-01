'use client';

import { useRef, useState, useCallback } from 'react';
import { hslToHex, hexToHsl } from '@/lib/color-utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (hsl: string) => void;
}

function isValidHsl(str: string): boolean {
  const parts = str.trim().split(/\s+/);
  if (parts.length !== 3) return false;
  const h = parseFloat(parts[0]);
  const s = parseFloat(parts[1]);
  const l = parseFloat(parts[2]);
  return (
    !isNaN(h) &&
    !isNaN(s) &&
    !isNaN(l) &&
    h >= 0 &&
    h <= 360 &&
    s >= 0 &&
    s <= 100 &&
    l >= 0 &&
    l <= 100 &&
    parts[1].endsWith('%') &&
    parts[2].endsWith('%')
  );
}

export function ColorPicker({ label, value, onChange }: ColorPickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hslText, setHslText] = useState(value);

  const hexValue = hslToHex(value);

  const handleSwatchClick = () => {
    inputRef.current?.click();
  };

  const handleNativeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const hex = e.target.value;
      const hsl = hexToHsl(hex);
      setHslText(hsl);
      onChange(hsl);
    },
    [onChange]
  );

  const handleHslInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const text = e.target.value;
      setHslText(text);
      if (isValidHsl(text)) {
        onChange(text);
      }
    },
    [onChange]
  );

  const handleHslBlur = useCallback(() => {
    setHslText(value);
  }, [value]);

  // Keep hslText in sync when value changes externally
  if (isValidHsl(value) && hslText !== value && !document.activeElement?.closest('[data-hsl-input]')) {
    // We'll sync on next render via the state
  }

  return (
    <div className="space-y-2.5">
      <label className="text-sm font-medium text-foreground">{label}</label>

      <div className="flex items-center gap-3">
        {/* Color swatch */}
        <button
          onClick={handleSwatchClick}
          className="h-10 w-10 rounded-lg border border-border shadow-sm cursor-pointer shrink-0 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          style={{ backgroundColor: `hsl(${value})` }}
          aria-label={`Pick color for ${label}`}
        />

        {/* Hidden native color input */}
        <input
          ref={inputRef}
          type="color"
          value={hexValue}
          onChange={handleNativeChange}
          className="sr-only"
          tabIndex={-1}
        />

        {/* HSL text input */}
        <Input
          data-hsl-input
          value={hslText}
          onChange={handleHslInput}
          onBlur={handleHslBlur}
          onFocus={() => setHslText(value)}
          placeholder="263 70% 25%"
          className="flex-1 font-mono text-xs h-9"
        />

        {/* HEX display */}
        <div className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1.5 rounded-md min-w-[70px] text-center select-all">
          {hexValue}
        </div>
      </div>

      {/* Preview strip */}
      <div className="flex items-center gap-2">
        <Button
          size="sm"
          className="h-7 text-xs px-3"
          style={{
            backgroundColor: `hsl(${value})`,
            color: 'white',
            borderColor: `hsl(${value})`,
          }}
        >
          Filled
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="h-7 text-xs px-3"
          style={{
            borderColor: `hsl(${value})`,
            color: `hsl(${value})`,
          }}
        >
          Outlined
        </Button>
        <span
          className="text-xs font-medium"
          style={{ color: `hsl(${value})` }}
        >
          Sample text
        </span>
      </div>
    </div>
  );
}
