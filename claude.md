# CLAUDE.md

## Project

Personal website / portfolio for Ryder. A calm, gallery-like site to introduce
who I am, show selected work, and link out. Content-driven and mostly static.
Optimize for taste, performance, and accessibility over feature count.

## Stack

- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS for styling; design tokens defined in `tailwind.config.ts`
- Content authored locally as MDX / typed data files — no CMS, no backend, no database
- Deploy target: Vercel

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build (must pass before "done")
- `npm run lint` — ESLint
- `npm run typecheck` — `tsc --noEmit`
- `npm run format` — Prettier

## Conventions

- TypeScript strict; never use `any` — model real types.
- React Server Components by default. Add `'use client'` only when a component
  needs state, effects, or browser APIs, and keep those leaves small.
- Tailwind utility-first. Reach for the design tokens below rather than ad-hoc
  hex values. Extract a component when a class string repeats 3+ times.
- Semantic HTML, real heading order, alt text on every image, visible focus
  states, color contrast that passes WCAG AA. Accessibility is not optional.
- Colocate components with the route that uses them; promote to `components/`
  only when shared.
- No new dependency without a one-line justification first.

## Design language

The site should feel like a quiet gallery: clean, minimal, uncluttered, with
generous whitespace. The discipline is **one** chromatic color — navy — over an
otherwise neutral grayscale foundation. Navy is the single accent and carries
the identity; it's used consistently for section labels, links, buttons, focus
states, and small detail (dots, accent borders). Everything else is neutral.
Resist adding a second accent color.

Palette (define as Tailwind tokens):
- `paper` background, clean off-white just off neutral — `#F6F6F3`
- `surface` cards / raised surfaces, pure white — `#FFFFFF`
- `ink` primary text, near-black with a faint cool undertone — `#181A20`
- `line` near-black for hairline borders/detail (always at low opacity) — `#1B1D24`
- `navy` the single accent (labels, links, buttons, focus, detail) — `#1E3A63`

Type:
- Display/headings: a refined serif (e.g. Fraunces or a transitional serif).
- Body/UI: a clean humanist sans (e.g. Inter or similar).
- Comfortable line length (~65ch), relaxed line-height, restrained weights.

Motion: subtle. Gentle fades/transforms on scroll-in are fine; nothing flashy.

## How I want you to work

- Use plan mode for anything beyond a trivial change. Show the plan and wait
  for a go-ahead before editing files.
- Make small, reviewable changes with clear commit messages — I review every diff.
- Run `npm run typecheck` and `npm run lint` before telling me a task is done.
- Ask before introducing new top-level architecture, routing patterns, or libraries.
- When you're unsure about design or copy, propose 2 options rather than guessing.

## Out of scope

- No GraphQL / Relay — this site is static content. (Relay practice belongs on a
  separate data-driven project.)
- No analytics, auth, or CMS unless I explicitly ask.