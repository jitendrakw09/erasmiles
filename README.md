<h1 align="center">🦷 erasmiles – Dental Platform with AI Voice Agent 🦷</h1>

![Demo App](/public/screenshot-for-readme.png)

Highlights:

- 🏠 Modern Landing Page with gradients & images
- 🔐 Authentication via Clerk (Google, GitHub, Email & Password)
- 🔑 Email Verification (6-digit code)
- 📅 Appointment Booking System
- 🦷 3-Step Booking Flow (Dentist → Service & Time → Confirm)
- 📩 Email Notifications for Bookings (Resend)
- 📊 Admin Dashboard for Managing Appointments
- 🗣️ AI Voice Agent powered by Vapi (Pro Plans only)
- 💳 Subscription Payments with Clerk (Free + 2 Paid Plans)
- 🧾 Automatic Invoices via Email
- 💸 Smart Subscription Upgrades (pay only the difference)
- 📂 PostgreSQL for Data Persistence
- 🎨 Styling with Tailwind CSS + Shadcn
- ⚡ Data Fetching with TanStack Query
- 🤖 CodeRabbit for PR Optimizations
- 🧑‍💻 Git & GitHub Workflow (branches, PRs, merges)
- 🚀 Deployment on Sevalla (free-tier friendly)

---

## 🧪 .env Setup

1. Copy `.env.example` to `.env.local` for local development.
2. For production, add the same keys in your hosting provider environment settings.
3. Use production values in production (for example `pk_live_...`, `sk_live_...`).

```bash
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DB_NAME?schema=public

NEXT_PUBLIC_VAPI_ASSISTANT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
NEXT_PUBLIC_VAPI_API_KEY=public_key_xxxxxxxxxxxxxxxxxxxxx

ADMIN_EMAIL=admin@example.com

RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
```

## 🚀 Deploy (Render)

If you are deploying this on Render, this is the easiest order to do things:

1. Create a new **Web Service** from this GitHub repo.
2. Build command: `npm install && npm run build`
3. Start command: `npm run start`
4. Add all variables from `.env.example` in Render -> Environment.
5. Set `NEXT_PUBLIC_APP_URL` to your real Render URL (example: `https://erasmiles.onrender.com`).
6. Use a PostgreSQL connection string with SSL, for example:
   `postgresql://USER:PASSWORD@HOST:5432/DB_NAME?schema=public&sslmode=require`
7. Save and deploy.

After first deploy, run Prisma schema sync once against production DB:

```bash
npx prisma db push
```

If login or email fails after deploy, first check Clerk keys and Resend key in Render env settings before touching code.

## Alternate: Vercel

1. Push your code to GitHub.
2. Import the repository into Vercel.
3. Add all environment variables from `.env.example` in Vercel Project Settings -> Environment Variables.
4. Set `NEXT_PUBLIC_APP_URL` to your deployed domain.
5. Deploy.

## ✅ Pre-Deploy Check

Run this locally before deploying:

```bash
npm install
npm run build

```

## Run the app

```bash
npm install
npm run dev
```
