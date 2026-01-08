# Project Memory

## Environment
- **IDE**: GitHub Codespaces (VS Code in browser)
- **Port Forwarding**: Automatic via Codespaces; access via PORTS panel or `*.app.github.dev` URLs
- **Server Actions**: Requires `allowedDevOrigins` with exact Codespaces hostname in `next.config.ts` (wildcards don't work)

## Tech Stack
- **Framework**: Next.js 16.1.1 (App Router, Turbopack)
- **Database**: PostgreSQL via Neon
- **ORM**: Prisma 7.2.0 (requires driver adapters)
- **Styling**: Tailwind CSS 4

## Prisma Configuration
- Uses `@prisma/adapter-pg` driver adapter (required for Prisma 7)
- Client generated to `app/generated/prisma/`
- Singleton pattern in `lib/prisma.ts` for hot-reload safety
- Import from `@/app/generated/prisma/client`

## Commands
- `npm run dev` - Start development server (port 3000)
- `npx prisma generate` - Regenerate Prisma client
- `npx prisma db push` - Push schema changes to database
