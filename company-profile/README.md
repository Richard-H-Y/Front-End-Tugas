# Harris Studios - Company Profile (Next.js)

## Menjalankan
```
npm install
npm run dev
```

## Struktur folder
```
app/            -> routing & layout (page.tsx, layout.tsx, not-found.tsx)
  about/        -> /about
  games/        -> /games
    [slug]/     -> dynamic route /games/:slug
  team/         -> /team
    [slug]/     -> dynamic route /team/:slug
  contact/      -> /contact
components/     -> reusable components (Navbar, Footer, Button, GameCard, TeamCard, ...)
lib/data.ts     -> data games & team
styles/         -> CSS Module (button, navbar, footer, card, hero)
public/images/  -> logo, cover game, foto tim
```
