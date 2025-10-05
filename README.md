# Luxury Real Estate Landing (Next.js)

This is a ready-to-deploy Next.js project for the landing page created for:
**Phạm Nguyễn Nam Anh** — Vinhomes & MasteriseHome consultant, Hhome Design & Hhome Care.

## What you must update before deploying
1. **Google Form URL & entry IDs**
   - Open `pages/index.js` and replace `GOOGLE_FORM_URL` with your real Google Form `formResponse` endpoint.
   - Replace the `entry.XXXXX` keys in the `formBody` object with the actual entry IDs from your Google Form.

2. **Contact details** (if you want to change further)
   - Hotline and email already set to: `0865.967.565` and `Namanhphamnguyen120697@gmail.com`.

## How to run locally
1. Install Node.js (v18+ recommended).
2. Install dependencies:
   ```
   npm install
   ```
3. Run the dev server:
   ```
   npm run dev
   ```
4. Open http://localhost:3000

## How to deploy (recommended)
### Vercel (best for Next.js)
1. Create a GitHub repository and push this project.
2. Go to https://vercel.com and import the repository.
3. Vercel auto-detects Next.js and deploys.
4. (Optional) Set environment variables on Vercel if you prefer to store GOOGLE_FORM_URL securely.

### Netlify
Netlify supports Next.js via the adapter; Vercel is simpler. If you prefer Netlify, follow Netlify docs for Next.js.

## Notes
- Tailwind CSS is not pre-configured in this zip. If you want Tailwind, follow Next.js + Tailwind setup:
  https://tailwindcss.com/docs/guides/nextjs
- The project uses `framer-motion` and `lucide-react`. They are listed in package.json.
