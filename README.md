# Hammerhead Aerospace

Website for the Hammerhead Aerospace student rocketry club. Features a space-themed blue design with sections for club history, members, launch log, and sponsors.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS variables |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at http://localhost:3000 (or port 8888 via Netlify CLI).

With Netlify CLI (recommended for full Netlify feature emulation):

```bash
netlify dev
```

## Build

```bash
npm run build
```

Output goes to `dist/client/`.
