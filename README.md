# RyderWebsite

Personal site / portfolio for Ryder Sitcawich. A calm, gallery-like site to
introduce who I am, show selected work, and link out.

## Stack

- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS with design tokens in `tailwind.config.ts`
- Content authored locally as typed data in `content/` — no CMS, no backend
- Deploy target: Vercel

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Quality gates

```bash
npm run typecheck  # tsc --noEmit
npm run lint       # ESLint (next lint)
npm run build      # production build — must pass before "done"
npm run format     # Prettier
```

## Where things live

- `app/page.tsx` — home (hero, selected work, experience, about)
- `app/work/[slug]/page.tsx` — per-project case studies (statically generated)
- `content/projects.ts` — project case-study data
- `content/experience.ts` — work history
- `content/site.ts` — profile, intro, social links
- `components/` — shared UI (header, footer, cards)
- `public/Ryder_Sitcawich_Resume.pdf` — résumé

To add or edit a project, edit `content/projects.ts`; a route is generated
automatically from each entry's `slug`.
