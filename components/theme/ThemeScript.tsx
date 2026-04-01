export function ThemeScript() {
  const script = `
    (function() {
      try {
        var stored = JSON.parse(localStorage.getItem('sbpowerdev-theme') || '{}');
        var state = stored.state || {};
        var mode = state.mode || 'system';
        var resolved = mode;
        if (mode === 'system') {
          resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        document.documentElement.setAttribute('data-theme', resolved);

        var presetArr = [
          {id:'obsidian-ember',l:{p:'24 10% 10%',s:'25 95% 53%',a:'31 96% 61%',bg:'40 20% 98%',fg:'24 10% 10%',m:'30 10% 95%',mf:'24 5% 45%',b:'30 8% 90%',r:'25 95% 53%',c:'0 0% 100%',cf:'24 10% 10%'},d:{p:'40 6% 90%',s:'31 96% 61%',a:'25 95% 53%',bg:'24 10% 4%',fg:'40 6% 90%',m:'24 6% 12%',mf:'24 5% 55%',b:'24 5% 15%',r:'31 96% 61%',c:'24 8% 8%',cf:'40 6% 90%'}},
          {id:'arctic-sapphire',l:{p:'222 47% 11%',s:'199 89% 48%',a:'174 72% 51%',bg:'210 40% 98%',fg:'222 47% 11%',m:'214 20% 95%',mf:'215 16% 47%',b:'214 20% 90%',r:'199 89% 48%',c:'0 0% 100%',cf:'222 47% 11%'},d:{p:'210 40% 92%',s:'199 89% 60%',a:'174 72% 55%',bg:'222 47% 7%',fg:'210 40% 92%',m:'222 30% 14%',mf:'215 20% 55%',b:'222 20% 18%',r:'199 89% 60%',c:'222 40% 10%',cf:'210 40% 92%'}},
          {id:'midnight-violet',l:{p:'263 60% 25%',s:'263 90% 58%',a:'340 72% 69%',bg:'270 20% 98%',fg:'260 33% 10%',m:'265 15% 95%',mf:'260 10% 45%',b:'265 15% 90%',r:'263 90% 58%',c:'0 0% 100%',cf:'260 33% 10%'},d:{p:'263 50% 90%',s:'263 90% 66%',a:'340 72% 69%',bg:'260 33% 5%',fg:'263 50% 90%',m:'260 20% 12%',mf:'260 15% 55%',b:'260 15% 16%',r:'263 90% 66%',c:'260 28% 8%',cf:'263 50% 90%'}},
          {id:'carbon-emerald',l:{p:'156 22% 10%',s:'160 84% 39%',a:'38 92% 50%',bg:'150 15% 98%',fg:'156 22% 8%',m:'150 10% 95%',mf:'156 10% 42%',b:'150 10% 90%',r:'160 84% 39%',c:'0 0% 100%',cf:'156 22% 8%'},d:{p:'150 15% 90%',s:'160 72% 50%',a:'38 92% 55%',bg:'156 22% 4%',fg:'150 15% 90%',m:'155 14% 12%',mf:'150 10% 50%',b:'155 10% 16%',r:'160 72% 50%',c:'155 18% 7%',cf:'150 15% 90%'}},
          {id:'slate-electric',l:{p:'240 6% 10%',s:'239 84% 67%',a:'350 89% 60%',bg:'0 0% 98%',fg:'240 6% 10%',m:'240 5% 96%',mf:'240 4% 46%',b:'240 6% 90%',r:'239 84% 67%',c:'0 0% 100%',cf:'240 6% 10%'},d:{p:'0 0% 93%',s:'239 84% 70%',a:'350 89% 63%',bg:'240 6% 4%',fg:'0 0% 93%',m:'240 4% 12%',mf:'240 4% 55%',b:'240 4% 16%',r:'239 84% 70%',c:'240 5% 7%',cf:'0 0% 93%'}}
        ];

        var presetId = state.activePresetId || 'obsidian-ember';
        var custom = state.customColors;
        var el = document.documentElement;

        if (custom && presetId === 'custom') {
          var cc = custom[resolved] || custom.light;
          if (cc.primary) el.style.setProperty('--primary', cc.primary);
          if (cc.secondary) el.style.setProperty('--secondary', cc.secondary);
          if (cc.accent) el.style.setProperty('--accent', cc.accent);
          if (cc.background) el.style.setProperty('--background', cc.background);
          if (cc.foreground) el.style.setProperty('--foreground', cc.foreground);
          if (cc.muted) el.style.setProperty('--muted', cc.muted);
          if (cc.mutedForeground) el.style.setProperty('--muted-foreground', cc.mutedForeground);
          if (cc.border) el.style.setProperty('--border', cc.border);
          if (cc.card) el.style.setProperty('--card', cc.card);
          if (cc.cardForeground) el.style.setProperty('--card-foreground', cc.cardForeground);
          if (cc.ring) el.style.setProperty('--ring', cc.ring);
          el.style.setProperty('--input', cc.border || '');
          el.style.setProperty('--popover', cc.background || '');
          el.style.setProperty('--popover-foreground', cc.foreground || '');
        } else {
          var found = null;
          for (var i = 0; i < presetArr.length; i++) {
            if (presetArr[i].id === presetId) { found = presetArr[i]; break; }
          }
          if (found) {
            var c = resolved === 'dark' ? found.d : found.l;
            el.style.setProperty('--primary', c.p);
            el.style.setProperty('--secondary', c.s);
            el.style.setProperty('--accent', c.a);
            el.style.setProperty('--background', c.bg);
            el.style.setProperty('--foreground', c.fg);
            el.style.setProperty('--muted', c.m);
            el.style.setProperty('--muted-foreground', c.mf);
            el.style.setProperty('--border', c.b);
            el.style.setProperty('--ring', c.r);
            el.style.setProperty('--card', c.c);
            el.style.setProperty('--card-foreground', c.cf);
            el.style.setProperty('--input', c.b);
            el.style.setProperty('--popover', c.bg);
            el.style.setProperty('--popover-foreground', c.fg);
          }
        }
      } catch(e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
