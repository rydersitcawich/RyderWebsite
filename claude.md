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

The site should feel like a quiet gallery: warm, natural, uncluttered, with
generous whitespace and a few deliberate accents. Aesthetic direction is
Japandi meets understated American workwear (think natural oak/walnut, linen,
woodblock prints, ceramics).

Palette (define as Tailwind tokens):
- `cream` background, warm off-white — `#F5F1EA`
- `paper` slightly lighter surface — `#FAF8F4`
- `ink` primary text, warm near-black — `#211C16`
- `oak` warm mid-brown — `#8B6F47`
- `walnut` deep brown — `#4F3F2E`
- `olive` muted sage-green — `#74795B`
- `terracotta` single warm accent (links, highlights) — `#BC6A4C`
- `frame` near-black for hairline borders/detail — `#1A1A1A`

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