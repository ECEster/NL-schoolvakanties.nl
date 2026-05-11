# nl-schoolvakanties.nl — Design Reference

Overzicht van de stijlkeuzes die tot zover gemaakt zijn.

---

## Fonts

| Gebruik | Font | Gewicht |
|---------|------|---------|
| Body / UI / labels / datums | **Space Mono** | 400, 700 |
| Vakantienaams (hero-banner + kaartkoppen) | **Playwrite GB J Guides** | 400 (italic beschikbaar) |

Google Fonts import:
```html
<link href="https://fonts.googleapis.com/css2?family=Playwrite+GB+J+Guides:ital@0;1&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
```

---

## Kleurenpalet

### Hoofdkleuren

| Naam | Hex | Gebruik |
|------|-----|---------|
| Sage (primair) | `#7BA891` | Primaire kleur, voorjaar, Zuid-regio, actieve tabs |
| Warm oranje | `#E07A50` | Herfst, Midden-regio, accent |
| Zacht blauw | `#6AACC4` | Zomer, Noord-regio |
| Gedempte roze | `#B07898` | Meivakantie |
| Blauwgrijs | `#6878A0` | Kerstvakantie |

### UI-kleuren

| Naam | Hex | Gebruik |
|------|-----|---------|
| Tekst (primair) | `#2A2018` | Donkerbruin, bijna-zwart |
| Tekst (secundair) | `#8A7E72` | Labels, metadata |
| Achtergrond | `#FAF7F0` | Pagina-achtergrond (warme off-white) |
| Crème | `#F0EBE0` | Card-achtergrond, hover-states |
| Wit | `#FFFFFF` | Kaarten, header |
| Rand | `#DDD5C8` | Borders overal |
| Footer | `#2A2018` | Donkere footer-achtergrond |

### Regiokleuren

| Regio | Hex |
|-------|-----|
| Noord | `#6AACC4` |
| Midden | `#E07A50` |
| Zuid | `#7BA891` |

### Kaartkoppen per vakantie

| Vakantie | Hex |
|----------|-----|
| Zomervakantie | `#6AACC4` |
| Herfstvakantie | `#E07A50` |
| Kerstvakantie | `#6878A0` |
| Voorjaarsvakantie | `#7BA891` |
| Meivakantie | `#B07898` |

---

## Design-principes

- **Stijl**: zacht · warm · illustratief — geïnspireerd op pastelinsectenkalender + kinderkalender
- **Borders**: `1.5px solid #DDD5C8` (zacht, warm) — geen harde inkt-borders
- **Rondingen**: `18px` voor kaarten, `10px` voor kleine elementen, `999px` voor pills/badges
- **Schaduwen**: zachte drop shadows (`0 2px 10px rgba(42,32,24,.08)`) — geen flat offset-schaduwen
- **Hero**: toont platte seizoenskleur per vakantie (geen foto)
- **Seizoensicoon**: lente-icoon (`images/icons_seasons/IconLenteBright.png`) boven de mini-kalender op de voorjaarkaart

---

## Bestandsstructuur

```
index.html       – HTML-structuur
script.js        – Vakantiedata + kaart/kalender rendering
style.css        – Alle styling
images/
  voorjaar.jpg   – (niet meer in gebruik in hero)
  zomer.jpg
  herfst.jpg
  kerst.jpg
  mei.jpg
  icons_seasons/
    IconLenteBright.png  – Tulp+vlinder icoon voor voorjaarkaart
```

---

## Technische notities

- Vakantietypes in JS: `zomer` · `herfst` · `kerst` · `voorjaar` · `mei`
- Regio-sleutels in JS: `noord` · `midden` · `zuidd`
- Seizoensiconen worden ingesteld via `TYPE_ICON` in `script.js`
- Kaarten worden gegenereerd door `buildCard()` en `buildCardFixed()`
