---
name: "neubrutalist-fun-site"
description: "Creates React+Vite meme token sites with Neubrutalist Pop design. Use for token websites with animations, PFP generator, and pump.fun integration."
---

# Neubrutalist Site

Create meme token landing pages with React+Vite and Neubrutalist Pop design.

## Quick Start

1. Get token: `https://api.dexscreener.com/latest/dex/tokens/<CA>`
2. Choose palette:
   - Pop-Art: `#FFC700` + `#F0F0F0`
   - Manga: `#0A0A0A` + `#F5F2EC`
   - Money: `#00FF00` + `#0D0D0D`
   - Hyper: `#FF4D00` + `#FAF3E0`
3. Setup: `npx -y create-vite@latest ./ --template react`
4. Install: `npm install react-icons`

## Core CSS

```css
:root {
  --ink: #111111;
  --paper: #FAF3E0;
  --primary: #FF4D00;
  --shadow: 8px 8px 0px var(--ink);
}

.container { max-width: 1200px; margin: 0 auto; }
.btn-nb:hover { transform: translate(-4px,-4px); animation: shake 0.35s; }
```

## Components

**App order:** `Cursor Navbar Hero Tokenomics Lore HowToBuy PfpGenerator Footer`

### 1. Navbar
- Sticky bar with `.container`
- Links: Info, Tokenomics, Lore, HowToBuy, PFP
- BUY button: `<a className="btn-nb">`

### 2. Hero
- Grid `1fr 1fr` (text left, mascot right)
- Mascot: `width: 550px; max-width: 100%`
- Boop counter + audio
- Two CTAs: BUY + CHART

### 3. Tokenomics
- Dark bg with dots
- 4 cards: Supply, Tax, Liquidity, Mint

### 4. Lore
- Grid `1fr 1fr` (image left, points right)
- Chapters: `[{emoji,title,text}]`
- CTA: "🚀 JOIN LEGEND" → pump.fun

### 5. HowToBuy
- 2×2 grid of steps
- Links → `https://pump.fun/<CA>`

### 6. PFP Generator
- Grid `1fr 1fr` (upload left, prompt right)
- Upload zone with preview
- Textarea + suggestions
- Default: mascot CDN URL

### 7. Footer
- Dark footer with links
- Pump.fun, DexScreener, Twitter, Info
- Disclaimer + CA

## PFP API

**URL:** `https://meme-generator.trungvudev.xyz/api/generate`
**Header:** `X-API-KEY: <key>`

```javascript
// Form
if (imageFile) formData.append('image', imageFile);
else formData.append('image', MASCOT_URL);

// Request
const res = await fetch(API_URL, {
  method: 'POST',
  headers: { 'X-API-KEY': API_KEY },
  body: formData
});

// Handle
if (!res.ok) throw new Error(`Error ${res.status}`);
const blob = await res.blob();
const imageUrl = URL.createObjectURL(blob);
```

**Notes:**
- Field: `image` (not `image_url`)
- Don't fetch CDN to blob (CORS)
- Success = binary image

## When to Use

For:
- Meme token sites
- Neubrutalist Pop design
- AI PFP generator
- pump.fun integration
- Responsive token pages

## Files

```
src/
├── App.jsx
├── index.css
└── components/
    ├── Cursor.jsx
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── Tokenomics.jsx
    ├── Lore.jsx
    ├── HowToBuy.jsx
    ├── PfpGenerator.jsx
    └── Footer.jsx
```

## Deps

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.12.0"
  }
}
```