# London Prime Cleaning — website

Marketing site for a Greater London commercial and residential cleaning company.

> Placeholder brand name. Run a project-wide find-and-replace when the real trading name is confirmed.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Phosphor icons
- Content in `src/content/` (services, projects, testimonials, blog)

## Run locally

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If this folder lives under **Pictures** (OneDrive), `npm install` will crawl. `node_modules` is junctioned to `%LOCALAPPDATA%\success-cleaning-node_modules` so installs stay off OneDrive.

## Deploy on Vercel

This is a standard Next.js App Router app. Vercel detects it automatically.

1. Import the GitHub repo in [Vercel](https://vercel.com/new)
2. Framework preset: **Next.js** (auto)
3. Add environment variables (optional until you have real details):

| Name | Example |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.vercel.app` |
| `NEXT_PUBLIC_PHONE` | `+4420...` |
| `NEXT_PUBLIC_EMAIL` | `hello@yourdomain.co.uk` |
| `RESEND_API_KEY` | from Resend (leave empty for demo form) |
| `QUOTE_TO_EMAIL` | inbox for quote requests |
| `QUOTE_FROM_EMAIL` | verified Resend from-address |

The quote API lives at `/api/quote` and runs as a Vercel serverless function. Do not switch the project to static export.

## Form delivery

The quote form posts to `/api/quote`.

- Without `RESEND_API_KEY` the API logs the payload and still shows a success state (demo mode).
- With a Resend key, set `QUOTE_TO_EMAIL` and `QUOTE_FROM_EMAIL` in `.env.local`.

## Before launch

- [ ] Replace **London Prime Cleaning** with the real business name
- [ ] Real logo SVG
- [ ] Real phone and email (`src/content/site.ts` and env vars)
- [ ] Real testimonials and project photography
- [ ] Legal pages reviewed by a solicitor
- [ ] Connect Google Business Profile reviews
- [ ] Lighthouse pass (Performance, Accessibility, Best Practices, SEO 90+)

## Design

See `design-system/london-prime-cleaning/MASTER.md`. Palette is navy `#0B3D62` + teal `#1AA179` (spec override of the generated cyan system). Headings: Sora. Body: Plus Jakarta Sans.
