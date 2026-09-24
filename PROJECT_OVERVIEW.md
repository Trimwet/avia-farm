# AVIA FARM — Project Overview

> **Field & Farm Operations** — field visit requests, season calendar, live work queue
> Repo root: `C:\Users\MAFUYAI\Documents\AVIA FARM`
> Rebranded from MediQ: 2026-09-24. Last full technical survey: 2026-09-19 (see git history of this file for the MediQ-era detail).

---

## 1. What is AVIA FARM?

AVIA FARM is farm operations software built on the MediQ codebase (React + Vite + TanStack Router + Tailwind + Supabase). It covers:

- **Dashboard** — real-time overview of field visits, work queue status, farm activity, analytics/charts
- **Field visits** — request, approve/reject, manage lifecycle (`pending → booked → arrived → in_progress → completed / no_show / cancelled / rejected`)
- **Work queue** — live queue: call next, start job, complete, mark left, with Supabase Realtime
- **Growers / Agronomists / Crew / Equipment & sheds** — directories + status management
- **Public visit requests without signup** — grower requests as `pending`, then creates password account; farm approves to `booked` before check-in/queue
- **Grower portal** (`/patient` route, "Grower Portal" label) — own visits scoped by email, change-password, sign-out
- **Notifications** — in-app (+ email via Resend in the Supabase era)
- **Multi-tenancy** — farms (formerly clinics) + members, slug-based routing, create-farm flow
- **Landing page, Google Calendar sync**

**Core product rule:** nothing reaches the work queue before farm approval. Self-service requests are `pending` until approved.

### What changed in the rebrand (Phase 1)

| Area | Before (MediQ) | Now (AVIA FARM) |
|---|---|---|
| Palette | Cool blue/slate (oklch, 264° hue) | Warm cream/charcoal + terracotta `#D97757` (Claude-inspired) |
| Radius | `0.625rem` | `0.75rem` (softer) |
| Charts | Blue/green/purple set | Terracotta / field green / harvest amber / dry clay / rain slate |
| Brand strings | Hard-coded "MediQ" everywhere | `src/config/brand.ts` (`BRAND`) single source |
| Logo/favicons | `mediq-logo*.png`, medical favicon | `avia-logo*.svg`, `avia-mark.svg`, sprout-in-terracotta mark |
| Manifest | none | `public/manifest.webmanifest`, `theme-color #D97757` |
| `/book` page | "Book an appointment" | "Request a field visit" |
| `/patient` page | "My appointments" | "Grower portal" |
| Landing | Waiting-room photo hero, medical copy | CSS/SVG field-rows hero, farm voice throughout |
| Doctor public page | "Our Expert Doctors", medical bios | "Our Agronomists", agronomy specialisms |
| FAQ/About/Contact/Pricing | Clinic copy | Farm copy, `aviafarm.ng` contacts |
| Accent swatches | MediQ Blue + cool set | Terracotta (default) + clay/harvest/olive/rose/stone |
| Storage keys | `mediq_*`, `mediq-*`, `mediq_user`, `mediq_facility`, `mediq_gcal_token`… | `avia_*`, `avia-*` with **one-time legacy read-through migration** (`src/lib/storage-migration.ts`, `getCookieMigrated`) |
| GCal event tagging | `mediqId` extended property | writes `aviaId` + `mediqId`, lookup checks both |
| Package name | `mediq-admin` | `avia-farm-admin` |

**Deliberately NOT changed in Phase 1** (so the data model and RBAC stay stable):

- Internal identifiers: `appointments`, `doctors`, `patients`, `rooms`, `clinics`, `clinicId`, routes (`/admin/*`, `/book`, `/patient`), RBAC permission strings, database schema, Supabase tables.
- Sidebar labels for staff modules (Appointments/Schedule/Queue/Patients/Doctors/Staff/Rooms/Notifications) — they get remapped when the farm data model lands (Phase 2).
- `thisisjustarandomstring` access-token cookie name.

### Roles (unchanged mechanics)

| Role | Access (enforced in UI via `src/config/rbac.ts` + server-side via RLS) |
|------|--------------------------------------------------------------------------|
| `admin` | Full access to every permission |
| `front_desk` | Dashboard, book/manage visits, manage queue, manage growers |
| `doctor` (→ future `agronomist`) | Dashboard, view-only visits/queue/growers (own rows) |
| `patient` (→ future `grower`) | Own visits only, request without signup |

---

## 2. Repository Layout

```
AVIA FARM/
├── README.md                   # Top-level overview (this app)
├── PROJECT_OVERVIEW.md         # This file
├── avia-farm-admin/            # *** Working app: admin/staff dashboard ***
│   ├── src/
│   │   ├── config/brand.ts     # NEW — single source of brand strings
│   │   ├── lib/storage-migration.ts  # NEW — mediq_* → avia_* read-through
│   │   ├── components/         # Reusable UI (layout/, ui/: shadcn/ui)
│   │   ├── features/           # Domain modules: appointments, auth, booking, check-in,
│   │   │                       # dashboard, doctors, landing, notifications, patient,
│   │   │                       # patients, queue, rooms, schedule, settings, staff
│   │   ├── routes/             # TanStack Router file-based routes (_authenticated, _public, book.tsx, patient.tsx…)
│   │   ├── data/               # repos.ts (interfaces) + hooks.ts (react-query) + mock/ (zustand) + index.ts (swap point)
│   │   ├── stores/             # auth-store.ts, facility-store.ts (zustand + cookies)
│   │   ├── config/             # rbac.ts, fonts.ts
│   │   ├── lib/                # supabase.ts, utils.ts, google-calendar.ts, clinic-context.tsx, cookies.ts…
│   │   ├── styles/             # theme.css (warm oklch tokens), index.css
│   ├── public/images/          # avia-logo*.svg, avia-mark.svg, favicons, manifest
│   ├── package.json            # name: avia-farm-admin
├── supabase/                   # Backend-as-a-Service config (23 migrations, edge functions)
├── sample-hospital/            # Legacy demo/prototype (untouched by rebrand)
├── docs/                       # architecture.md, reports/, mediq-data-inventory.md
```

---

## 3. Technology (unchanged by the rebrand)

| Layer | Tech |
|---|---|
| UI | React 19 + TypeScript 6, Vite 8, Tailwind CSS 4, shadcn/ui (RTL-adapted), Radix primitives, lucide-react icons |
| Routing | TanStack Router (file-based, auto code-splitting, longest-prefix permission guard) |
| Data | TanStack Query 5 + zustand 5; typed repositories in `src/data/repos.ts` with mock implementations in `src/data/mock/` (single swap point: `src/data/index.ts`) |
| Backend | Supabase (Postgres 17, Auth, RLS, Realtime, Deno edge functions: `invite-staff`, `send-appointment-reminders`) |
| Forms | react-hook-form + zod |
| Tests | Vitest 4 browser mode (Playwright chromium), 15 test files |
| Tooling | ESLint 10, Prettier 3, Knip, Commitizen; deploy: Vercel/Netlify |

Design tokens: `src/styles/theme.css` — everything in oklch. Light: cream paper `oklch(0.982 0.005 95.1)` background, charcoal `oklch(0.236 0.002 67.7)` foreground, terracotta primary `oklch(0.672 0.131 38.8)`. Dark: soft charcoal `oklch(0.268 0.004 106.6)` background, bone foreground, terracotta lightened via `color-mix`. The `--user-accent` runtime override still works — accent swatches in Settings → Appearance set it.

---

## 4. Architecture & Data Flow (unchanged)

```
Pages/Features → src/data/hooks.ts (react-query) → src/data/repos.ts (typed interfaces)
  → src/data/mock/ (zustand + localStorage + latency) OR Supabase impl
  → src/data/index.ts (single swap point — UI never changes)
```

Booking flow: visitor fills `/book` ("Request a field visit") → `book_appointment` RPC → `pending` → farm approves → `booked` → check-in → `queue_entries` (waiting→called→in_room→done/left). Grower signs in later → `/patient` ("Grower portal") scoped by email.

---

## 5. Getting Started

```bash
cd avia-farm-admin
npm install
cp .env.example .env   # VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, VITE_GOOGLE_CLIENT_ID
npm run dev            # → 127.0.0.1:3000
npm run build          # tsc -b && vite build → dist/
npm test               # vitest browser mode
```

**Verification status after the rebrand (2026-09-24):** `tsc -b` clean, `vite build` succeeds, test suite at parity with the pre-rebrand baseline (4 pre-existing failures in `config-drawer.test.tsx` + `search-provider.test.tsx` — verified identical before and after the rebrand), lint error count unchanged from baseline (pre-existing issues in files the rebrand did not touch).

---

## 6. Roadmap

### Phase 2 — Farm data model (next)
- Rename internal domain: `appointments → field_visits`, `doctors → agronomists`, `patients → growers`, `rooms → equipment_sheds`, `clinics → farms`; new entities: `fields`, `blocks`, `seasons`, `tasks`.
- Remap remaining sidebar/staff labels per the agreed table (Appointments→Farm Tasks, Schedule→Season Calendar, Queue→Work Queue, Patients→Fields, Doctors→Agronomists, Staff→Farm Crew, Rooms→Equipment & Sheds, Notifications→Alerts).
- Decide the Queue question: relabel only (current reading) vs remove the Queue page.
- Supabase migration for the renames + view compatibility layer.

### Phase 3 — AI backend (`avia-backend/`)
Port the MedBot architecture (`C:\Users\MAFUYAI\Documents\med bot`):
- Filesystem-first agent folders (`agents/<name>/instructions.md` + `tools/`)
- Markdown+YAML knowledge graph with embeddings
- **Deterministic rule layer that computes the verdict in plain code** (LLM only explains/formats)
- Service-level fallbacks at every step, SSE-streamed chat
- Frontend: per-portal component folders + one typed API client (MediQ's existing structure already matches)

### Phase 4 — Free-tier field data
- Open-Meteo (weather/soil, 10k calls/day, no key), NASA POWER (historical climate)
- Sentinel-2 NDVI/NDWI via Element 84 / Planetary Computer (COGs), TiTiler tiles
- MapLibre GL JS map, Ollama or Groq free tier for natural-language features
- Hosting: Oracle Cloud Always Free / Fly.io / Vercel free tiers → $0/month MVP

---

## 7. Credits & License

- **MIT License.**
- Upstream: [shadcn-admin](https://github.com/satnaing/shadcn-admin) by [@satnaing](https://github.com/satnaing) (Vite + shadcn/ui + TanStack Router template). Template sponsor: Clerk.
- MediQ-era history (supabase migrations inventory, security audit reports, pitch accounts, data inventory) is preserved in git history and `docs/`.
