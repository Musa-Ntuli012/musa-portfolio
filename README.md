# Musa Ntuli — Portfolio

Vite + React + TypeScript + Tailwind, with Firebase Auth and Firestore
powering an admin panel for project CRUD, and a CV page with an
embedded viewer and download button.

## Design system

Cormorant Garamond (display), Montserrat (body), DM Mono (labels and
data), no border radius, no drop shadows. Same tokens as the Kyvrex
studio site.

Light and dark are both built in and switch automatically with the
visitor's device setting (`prefers-color-scheme`), no toggle and no
stored preference. All colour is driven by CSS variables in
`src/index.css`, so the dark palette is the same one from the first
draft and the light palette was built to keep contrast readable
against a cream background (the raw gold accent gets deepened to a
bronze in light mode for that reason, solid gold buttons stay a fixed
colour with fixed dark text in both modes).

Icons throughout (contact methods, repo links, admin actions, CV
download) come from `lucide-react`, thin stroke, no fill, matching the
rest of the type driven aesthetic.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a Firebase project at console.firebase.google.com. Enable:
   - **Authentication** → Sign in method → Email/Password
   - **Firestore Database** → start in production mode

3. In Authentication → Users, manually add yourself as the one admin
   user (email and password). Do not enable public sign up, this site
   treats any signed in user as the admin.

4. Copy `.env.example` to `.env.local` and fill in the values from
   Firebase console → Project settings → your web app config.

5. Deploy the security rules in `firestore.rules` from the Firebase
   console (Firestore → Rules) or with the Firebase CLI:
   ```
   firebase deploy --only firestore:rules
   ```

6. Run locally:
   ```
   npm run dev
   ```

7. Sign in at `/admin/login` (also reachable from a small "Admin" link
   in the site footer), then click "Load starter projects" once to
   seed Firestore with the seven projects already on the site. From
   then on:
   - **Projects tab** — add, edit, delete, and reorder projects, all
     live in Firestore
   - **Site content tab** — edit the hero tagline, the three about
     paragraphs, and the contact intro line, also live in Firestore,
     with a sensible fallback baked in if that document does not
     exist yet

## The CV box

The uploaded CV lives at `public/cv/Musa_Ntuli_CV.pdf` and is served
as a static file, so the download button works immediately with no
Firebase setup. To let the admin panel replace the CV file without a
redeploy, the next step is to add Firebase Storage: enable Storage in
the console, add an upload control to the admin panel, and point the
CV page at the Storage download URL instead of the static path. That
was left out of this first pass to keep the setup to Auth and
Firestore only, as asked.

## Deploying

Any static host works (Vercel, Netlify, Firebase Hosting). Build with:
```
npm run build
```
and deploy the `dist/` folder. Remember to set the same environment
variables in your hosting provider's dashboard.

## Standards followed

Deny by default Firestore rules, no hardcoded secrets, generic auth
error messages to the user, server side (Firebase) validation of the
admin session, and client side validation as a courtesy layer only.
