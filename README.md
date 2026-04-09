# Violeta Portfolio - Vue 3

Portfolio base in Vue 3 + Vite with Bootstrap 5 via CDN, bilingual content, theme switch, and JSON-driven data.

## Stack
- Vue 3
- Vite
- Bootstrap 5 (CDN)
- Bootstrap Icons (CDN)
- Unicons (CDN)
- Custom CSS files

## Main decisions
- All visible content lives in JSON files.
- Components use props and loops instead of hardcoded text in templates.
- Theme and language are controlled globally with localStorage.
- Structure keeps layout, sections, ui, composables, data, and styles separated.

## Project structure
```bash
src/
  assets/styles/
  components/
    layout/
    sections/
    ui/
  composables/
  data/
```

## Editable files
- `src/data/profile.json`
- `src/data/content.es.json`
- `src/data/content.en.json`

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
