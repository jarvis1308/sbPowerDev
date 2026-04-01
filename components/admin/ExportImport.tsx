'use client';

import { useState, useRef } from 'react';
import { useThemeStore } from '@/stores/theme-store';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Download,
  Copy,
  RotateCcw,
  FileJson,
  Check,
} from 'lucide-react';
import { toast } from 'sonner';

export function ExportImport() {
  const { exportTheme, importTheme, resetToDefault, getActiveColors, mode } =
    useThemeStore();
  const [importText, setImportText] = useState('');
  const [resetOpen, setResetOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    const json = exportTheme();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sbpowerdev-theme-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Theme exported successfully');
  };

  const handleImportText = () => {
    if (!importText.trim()) {
      toast.error('Please paste theme JSON first');
      return;
    }
    const success = importTheme(importText);
    if (success) {
      setImportText('');
      toast.success('Theme imported successfully');
    } else {
      toast.error('Invalid JSON format');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      const success = importTheme(text);
      if (success) {
        toast.success(`Imported theme from ${file.name}`);
      } else {
        toast.error('Invalid JSON file');
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleCopyCSS = async () => {
    const colors = getActiveColors();
    const cssVars = `/* sbPowerDev Theme CSS Variables */
/* Light Mode */
:root {
  --primary: ${colors.light.primary};
  --secondary: ${colors.light.secondary};
  --accent: ${colors.light.accent};
  --background: ${colors.light.background};
  --foreground: ${colors.light.foreground};
  --card: ${colors.light.card};
  --card-foreground: ${colors.light.cardForeground};
  --muted: ${colors.light.muted};
  --muted-foreground: ${colors.light.mutedForeground};
  --border: ${colors.light.border};
  --ring: ${colors.light.ring};
}

/* Dark Mode */
[data-theme="dark"] {
  --primary: ${colors.dark.primary};
  --secondary: ${colors.dark.secondary};
  --accent: ${colors.dark.accent};
  --background: ${colors.dark.background};
  --foreground: ${colors.dark.foreground};
  --card: ${colors.dark.card};
  --card-foreground: ${colors.dark.cardForeground};
  --muted: ${colors.dark.muted};
  --muted-foreground: ${colors.dark.mutedForeground};
  --border: ${colors.dark.border};
  --ring: ${colors.dark.ring};
}

/* Theme Mode: ${mode} */`;

    try {
      await navigator.clipboard.writeText(cssVars);
      setCopied(true);
      toast.success('CSS variables copied to clipboard');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy to clipboard');
    }
  };

  const handleReset = () => {
    resetToDefault();
    setResetOpen(false);
    toast.success('Theme reset to defaults');
  };

  return (
    <div className="space-y-8">
      {/* Export */}
      <div className="space-y-3">
        <div>
          <h4 className="text-sm font-medium">Export Theme</h4>
          <p className="text-xs text-muted-foreground mt-0.5">
            Download your current theme configuration as a JSON file.
          </p>
        </div>
        <Button onClick={handleExport} className="w-full sm:w-auto">
          <Download className="h-4 w-4 mr-2" />
          Export Theme JSON
        </Button>
      </div>

      {/* Import */}
      <div className="space-y-3 border-t pt-6">
        <div>
          <h4 className="text-sm font-medium">Import Theme</h4>
          <p className="text-xs text-muted-foreground mt-0.5">
            Paste theme JSON or upload a file to apply a saved theme.
          </p>
        </div>

        <div className="space-y-2">
          <Label className="text-xs text-muted-foreground">
            Paste JSON
          </Label>
          <Textarea
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            placeholder='{"mode": "system", "activePresetId": "slate-electric", ...}'
            className="font-mono text-xs min-h-[100px]"
          />
          <Button
            onClick={handleImportText}
            variant="secondary"
            size="sm"
            disabled={!importText.trim()}
          >
            <FileJson className="h-4 w-4 mr-2" />
            Apply JSON
          </Button>
        </div>

        <div className="space-y-2">
          <Label className="text-xs text-muted-foreground">
            Or upload a file
          </Label>
          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json,application/json"
              onChange={handleFileUpload}
              className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 file:cursor-pointer cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Copy CSS */}
      <div className="space-y-3 border-t pt-6">
        <div>
          <h4 className="text-sm font-medium">Copy CSS Variables</h4>
          <p className="text-xs text-muted-foreground mt-0.5">
            Copy the current theme as CSS custom properties.
          </p>
        </div>
        <Button
          onClick={handleCopyCSS}
          variant="outline"
          className="w-full sm:w-auto"
        >
          {copied ? (
            <Check className="h-4 w-4 mr-2 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 mr-2" />
          )}
          {copied ? 'Copied!' : 'Copy CSS Variables'}
        </Button>
      </div>

      {/* Reset */}
      <div className="space-y-3 border-t pt-6">
        <div>
          <h4 className="text-sm font-medium text-destructive">
            Reset to Defaults
          </h4>
          <p className="text-xs text-muted-foreground mt-0.5">
            Restore the default &quot;Slate &amp; Electric&quot; theme. This cannot be undone.
          </p>
        </div>
        <Dialog open={resetOpen} onOpenChange={setResetOpen}>
          <DialogTrigger asChild>
            <Button variant="destructive" className="w-full sm:w-auto">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset to Defaults
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Reset Theme to Defaults?</DialogTitle>
              <DialogDescription>
                This will reset all color customizations to the default
                &quot;Slate &amp; Electric&quot; preset. Any unsaved custom
                configurations will be lost.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="ghost"
                onClick={() => setResetOpen(false)}
              >
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleReset}>
                Yes, Reset Theme
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
