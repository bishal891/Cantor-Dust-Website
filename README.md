# Cantor Dust — Portfolio Site

React + Vite site for [Cantor Dust](https://www.cantordust.org), with a dynamic About page driven by JSON.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About & team |
| `/services` | Services |
| `/physicalai` | Physical AI |
| `/generalconsulting` | General consulting |
| `/insights` | Insights |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
  components/     Header, Footer, Layout, etc.
  data/
    aboutData.json   About page people & copy (edit this)
    aboutData.js     Loads JSON and resolves image keys
    siteData.js      Nav, contact, insights, home content
    wixMedia.js      Image URLs (keys used in aboutData.json)
  pages/            Home, About, Services, Insights, …
  index.css         Global styles
public/             Static assets (logo, section backgrounds)
```

## About page — editing `aboutData.json`

Content is grouped into three categories: **leadership**, **partners**, and **team**. Each person can include:

| Field | Purpose |
|-------|---------|
| `name` | Display name |
| `role` | Job title (shown under photo) |
| `image` | Key from `wixMedia.js` (`founder`, `diwas`, `sagar`, …) |
| `text` | Array of paragraph strings (one string per paragraph) |
| `portfolio` | URL — clicking the photo opens this site |
| `linkedin` | URL — shows a single **LinkedIn** button under the photo |
| `links` | Object of extra buttons: label → URL |

### Example person

```json
{
  "name": "Diwas Kunwar",
  "role": "Senior AI Engineer",
  "image": "diwas",
  "portraitShape": "square",
  "portfolio": "https://diwaskunwar.info.np/",
  "text": [
    "First paragraph of bio.",
    "Second paragraph."
  ],
  "links": {
    "LinkedIn": "https://www.linkedin.com/in/diwas-kunwar/",
    "GitHub": "https://github.com/diwaskunwar"
  }
}
```

### Layout options (`layout` object)

- `reverse: true` — photo on the right
- `preline: true` — preserve line breaks in bio text
- `showName: false` — hide name under photo (e.g. founder when the section heading already shows the name)

### Adding a team member

1. Add their image key in `wixMedia.js` if needed.
2. Add an object to the correct `items` array in `aboutData.json` (under `leadership`, `partners`, or `team` → `groups`).
3. Use `"layout": "profile"` for photo-left, bio-right rows (seniors and junior analysts).

**Note:** JSON does not support `"""` triple quotes. Use a `text` array with one quoted string per paragraph.

Other site copy (nav, home, insights) lives in `src/data/siteData.js`. Team headshots use keys defined in `src/data/wixMedia.js`.

Optional: run `bash scripts/download-images.sh` to fetch images from the Wix CDN into `public/images/`.

## Tech stack

- React 19
- React Router 7
- Vite 8
