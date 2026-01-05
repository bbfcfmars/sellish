# Sellish Web (placeholder)

## Fast path
1) `npm install`
2) `npm run dev`
3) Deploy on Vercel (import this repo)

## Configure links
Set env vars in Vercel Project Settings → Environment Variables:

- NEXT_PUBLIC_APP_STORE_URL="https://apps.apple.com/..."   (required)
- NEXT_PUBLIC_PLAY_STORE_URL="https://play.google.com/..." (optional)

## Email capture (recommended)
Use Formspree (fast + free tier):
1) Create a Formspree form
2) Copy the form id (looks like `xkndabcd`)
3) Set:
- NEXT_PUBLIC_FORMSPREE_ID="xkndabcd"

Without Formspree, the site falls back to saving emails in the visitor's browser only (placeholder mode).
