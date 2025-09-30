# WatchNow (Mock) — Static "Sketchy" Video Portal

**Wichtig:** Diese Demo enthält **keine** Gewaltinhalte. Thumbnails kommen von `picsum.photos`, Videos sind harmlose Sample-Clips (Big Buck Bunny, MDN-Flower, etc.).

## So nutzt du das Portal

1. **Lokal testen:** Öffne `index.html` per Doppelklick im Browser.
2. **Eigene Videos einbinden:** Öffne `script.js` und ersetze in `ITEMS` die `src`-URLs durch deine Dateien oder Streams (achte auf harmlose Inhalte).
3. **Design anpassen:** Farben/Look in `styles.css` ändern. UI ist absichtlich „sketchy“ (Not secure, REC/LIVE-Badges, Warnbanner).
4. **Rechtliches/Ethik:** Keine realen Opfer, keine Gewaltclips. Dieses Mock dient nur dem Look im Film (z. B. als Spiegelung in den Augen).

## Online bereitstellen (kostenlos)

### Variante A: GitHub Pages
1. GitHub-Repo erstellen, alle Dateien hochladen.
2. In den Repo-Einstellungen **Pages** aktivieren und den Branch `main` + Root auswählen.
3. Nach wenigen Minuten ist die Seite unter `https://DEIN_NAME.github.io/DEIN_REPO` erreichbar.

### Variante B: Netlify
1. Auf netlify.com einloggen → „New site from Git“.
2. Repo wählen, Build-Command leer lassen, Publish-Directory: Root.
3. Deploy. Du bekommst eine zufällige Subdomain, die du umbenennen kannst.

### Variante C: Vercel
1. Auf vercel.com → „New Project“.
2. Repo importieren, Framework: „Other“, Build: none, Output: Root.
3. Deploy. Subdomain wird erstellt.

## Hinweise fürs Set
- Stelle die Bildschirmhelligkeit hoch.
- Für deutliche Reflexion: starker Kontrast (rotes „REC“, dunkler Hintergrund).
- Im Zweifelsfall Browser-Zoom auf 125–175%.

## SEO/Privatsphäre
`<meta name="robots" content="noindex,nofollow">` ist gesetzt, damit Crawler die Seite nicht indexieren.
