# Musa Ntuli Portfolio

Vite + React + TypeScript + Tailwind, with Firebase Auth and Firestore
powering an admin panel for project CRUD, and a CV page with an
embedded viewer and download button.

## Design system

Cormorant Garamond (display), Montserrat (body), DM Mono (labels and
data), on a dark charcoal and gold palette, no border radius, no drop
shadows. Same tokens as the Kyvrex studio site.

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

7. Sign in at `/admin/login`, then click "Load starter projects" once
   to seed Firestore with the seven projects already on the site. From
   then on, add, edit, and delete projects from `/admin`.

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
