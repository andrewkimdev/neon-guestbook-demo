# Neon Guestbook Demo

A "hello world" full-stack web app built entirely in GitHub Codespaces with Claude Code. This project demonstrates how quickly you can scaffold a working web application using AI-assisted development.

## What It Does

A simple guestbook where visitors can leave their name and a message. Entries are stored in a PostgreSQL database and displayed in reverse chronological order. The UI features a retro neon/cyberpunk aesthetic with Korean labels.

## Tech Stack

- **Next.js 16** - App Router with Server Actions
- **Prisma 7** - ORM with driver adapters
- **Neon** - Serverless PostgreSQL
- **Tailwind CSS 4** - Styling

## Getting Started

1. Set up your database connection:
   ```bash
   # Create a .env file with your Neon database URL
   DATABASE_URL="postgresql://..."
   ```

2. Initialize the database:
   ```bash
   npx prisma db push
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000 (or use the Codespaces port forwarding)

## Project Structure

```
app/
  page.tsx        # Main guestbook page
  actions.ts      # Server action for form submission
  components/     # UI components
lib/
  prisma.ts       # Database client singleton
prisma/
  schema.prisma   # Database schema
```

## One-Shot Prompt

The following prompt can be used to regenerate this project from scratch with Claude Code:

```
Create a Next.js 16 guestbook app with the following:

Tech stack:
- Next.js 16 with App Router and Turbopack
- Prisma 7 with @prisma/adapter-pg driver adapter
- PostgreSQL via Neon (DATABASE_URL env var)
- Tailwind CSS 4

Database schema:
- Single "Entry" model with: id (autoincrement), name (string), message (string), createdAt (datetime)

Features:
- Server component page that fetches all entries ordered by newest first
- Server action to add new entries with basic validation
- Form with name and message inputs
- Display entries as cards showing name, message, and formatted date

Styling:
- Neon/cyberpunk aesthetic: black background (#000000), neon green (#39ff14)
- Monospace font throughout
- Glow effects on borders and text (box-shadow with the green color)
- Korean UI labels ("네온 방명록" for title, "이름" for name, "메시지" for message, etc.)

Project structure:
- app/page.tsx - main page
- app/actions.ts - server action for form submission
- app/components/FormattedDate.tsx - client component for date formatting
- lib/prisma.ts - Prisma client singleton for hot-reload safety
- Generate Prisma client to app/generated/prisma/

Keep it simple - this is a demo, not production code.
```

## Note

This is a demo project for showcasing the GitHub Codespaces + Claude Code development workflow. It intentionally keeps things simple and is not production-ready.
