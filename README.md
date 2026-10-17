# CO2-Footprint

Webseite für eine (fiktive) Klimaschutzorganisation, die CO2-Emissionen von Unternehmen und Ländern in einer Tabelle zeigt.

Live-Version: https://annihug.github.io/co2-footprint/

Das Projekt ist im Rahmen meines Studiums an der IU Internationale Hochschule entstanden (Kurs Programmierung von Webanwendungsoberflächen). Alle Unternehmen und Werte sind ausgedacht.

## Funktionen

- Tabelle lässt sich nach Land und Unternehmen filtern und per Klick auf die Spaltenköpfe sortieren
- responsives Layout für Desktop, Tablet und Smartphone
- Umschaltung zwischen Deutsch und Arabisch, bei Arabisch wechselt die Seite auf rechts-nach-links und das Menü auf die rechte Seite
- auf Barrierefreiheit geachtet (Kontrast, Bedienung per Tastatur, Hinweise für Screenreader)
- Eingaben in den Filterfeldern werden nur als Text angezeigt, eingeschleuster Code wird nicht ausgeführt
- keine Cookies und kein Tracking

## Technik

- Bootstrap 5.3 (mit RTL-Version für Arabisch)
- Vue.js 3
- beide Bibliotheken werden über jsDelivr eingebunden, mit festen Versionen und integrity-Prüfwert
- gehostet über GitHub Pages

Man braucht keinen Build-Prozess, die Seite läuft direkt im Browser.

## Ordnerstruktur

```
co2-footprint/
├── index.html
├── css/style.css
├── js/
│   ├── data.js      (Emissionsdaten)
│   ├── app.js       (Vue: Filtern und Sortieren)
│   └── sprache.js   (Sprachumschaltung)
└── img/logo.svg
```

## Lokal starten

Repository klonen und `index.html` im Browser öffnen, oder in VS Code mit Live Server starten.

```bash
git clone https://github.com/annihug/co2-footprint.git
```

## Getestet

- in Chrome (auch Geräteemulation) und auf dem iPhone
- nur mit Tastatur bedient
- XSS-Test mit `<script>alert(1)</script>` und `<img src=x onerror=alert(1)>` im Filterfeld
- Lighthouse mobil: Performance 96, Accessibility 100, Best Practices 100, SEO 100

## Lizenz

MIT
