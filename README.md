<div align="center">

# AVIA FARM

**Field & Farm Operations — field visit requests, season calendar, live work queue**

[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com)

</div>

---

## Overview

AVIA FARM is a farm operations platform for managing field visit requests, a live work queue, and day-to-day farm activity. Built on the MediQ codebase, for farms and growers in Nigeria and beyond.

### Features

- **Dashboard** — Real-time overview of field visits, work queue status, and farm activity
- **Field Visits** — Request, approve/reject, and manage the visit lifecycle (`pending → booked → arrived → in_progress → completed`)
- **Work Queue** — Live queue: call next, start job, complete, mark left, with Supabase Realtime
- **Growers, Agronomists & Crew** — Directories and status management
- **Public Visit Requests** — Growers request without signup; the farm approves before check-in
- **Grower Portal** — Own visits scoped by email, change password, sign out
- **Multi-tenancy** — Farms + members, slug-based routing, create-farm flow
- **Notifications** — In-app plus email reminders via Resend
- **Dark Mode** — Full light/dark theme support

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, TypeScript, Vite |
| UI Components | shadcn/ui, Tailwind CSS |
| Routing | TanStack Router |
| State | TanStack Query, Zustand |
| Database | Supabase (PostgreSQL, RLS, Realtime) |
| Charts | Recharts |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
git clone https://github.com/Trimwet/avia-farm.git
cd avia-farm/avia-farm-admin
npm install
cp .env.example .env   # VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, VITE_GOOGLE_CLIENT_ID
```

### Development

```bash
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000)

### Build

```bash
npm run build
```

---

## Project Structure

```
avia-farm-admin/
├── public/images/          # Logo, favicons, manifest
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── layout/         # Sidebar, header, navigation
│   │   └── ui/             # shadcn/ui components
│   ├── config/             # brand.ts (single source of brand strings), rbac.ts
│   ├── features/           # Feature modules
│   │   ├── auth/           # Sign-in, sign-up, forgot password
│   │   ├── dashboard/      # Dashboard with stats, charts, check-ins
│   │   └── settings/       # Account settings
│   ├── routes/             # TanStack Router file-based routes
│   ├── styles/             # Theme variables, global CSS
│   └── lib/                # Utilities, Supabase client, storage migration
└── package.json
```

---

## Roles

| Role | Access |
|------|--------|
| Farm Admin | Full dashboard access |
| Front Desk | Check-ins, work queue management |
| Agronomist | Work queue, field visits |
| Grower | Request visits, view own schedule |

---

## Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your branch and open a PR

---

## License

MIT

---

<div align="center">

Built by [Trimwet](https://github.com/Trimwet)

</div>
