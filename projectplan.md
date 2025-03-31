# Waiting List Application Project Plan

## Core Technologies

* **Frontend:** Next.js 15 (App Router), React 18, TypeScript, Tailwind CSS 4
* **Backend:** NestJS 11, TypeScript
* **API Layer:** tRPC
* **Infrastructure/Services:** Firebase (Auth, Firestore/Realtime Database), Vercel

## Overall Plan Phases

### Phase 1: Foundation & Project Setup

* **Goal:** Initialize projects, configure core integrations, and set up the development environment.
* **Key Activities:**
  * Initialize Next.js project (App Router, TypeScript, Tailwind CSS).
  * Initialize NestJS project (TypeScript).
  * Set up a Firebase project: Enable Authentication (Email/Password or Social) and Firestore (or Realtime Database) for data storage.
  * Integrate tRPC: Set up the tRPC server within NestJS and the tRPC client within Next.js for type-safe API communication.
  * Basic Environment Setup: Configure `.env` files for local development (Firebase credentials, etc.).
  * Initial Vercel Setup: Connect repository to Vercel for future deployments (even if just placeholder initially).
* **Potential Prompt Areas:** Project initialization commands, tRPC router/client setup, Firebase SDK integration (client & admin), basic Tailwind configuration.

### Phase 2: Core User Authentication & Subscription

* **Goal:** Implement basic user signup/login and store user data upon initial subscription (without points/referrals yet).
* **Key Activities:**
  * Design Firestore/RTDB Schema: Define the structure for the `users` collection (e.g., `userId`, `email`, `createdAt`).
  * Implement Firebase Authentication: Set up signup/login flows on the Next.js frontend using the Firebase Auth SDK.
  * Create NestJS/tRPC Endpoint: Define a tRPC procedure (`user.subscribe`) handled by a NestJS service.
  * Backend Logic: When a user signs up via Firebase Auth, trigger the `user.subscribe` procedure to create a corresponding user document in Firestore/RTDB.
  * Frontend Form: Build the basic subscription form UI in Next.js/React.
* **Potential Prompt Areas:** Firebase Auth UI integration (using libraries or custom), Firestore data modeling, NestJS service/controller structure for user creation, tRPC procedure definition, connecting frontend form state to tRPC mutation.

### Phase 3: Referral Code Generation & Tracking

* **Goal:** Generate unique referral codes for users and link new signups to their referrers.
* **Key Activities:**
  * Update Data Schema: Add `referralCode` (unique) and `referredByCode` (optional) fields to the `users` collection.
  * Backend Logic (NestJS Service):
    * Implement a robust function to generate unique, user-friendly referral codes upon user creation.
    * Modify the subscription logic:
      * Generate and save the new user's `referralCode`.
      * If a valid `referral_code` is passed during signup (from URL param), find the referring user and store the code (or referrer's `userId`) in the new user's `referredByCode` field.
  * Frontend Logic (Next.js):
    * Read potential referral code from URL parameters (`?ref=CODE123`).
    * Pass the referral code (if present) to the `user.subscribe` tRPC procedure.
    * Display the user's *own* referral code and shareable link after successful signup.
* **Potential Prompt Areas:** Unique code generation algorithms, Firestore query for checking code uniqueness, updating NestJS services, handling URL parameters in Next.js App Router, updating tRPC procedures/input schemas.

### Phase 4: Points System Implementation

* **Goal:** Award points for initial signups and successful referrals.
* **Key Activities:**
  * Update Data Schema: Add a `points` field (number) to the `users` collection.
  * Define Point Rules: Establish constants for points awarded (e.g., `POINTS_SIGNUP`, `POINTS_REFERRAL_BONUS`, `POINTS_REFERRED_BONUS`).
  * Backend Logic (NestJS Service):
    * Modify subscription logic: Calculate and assign initial points based on whether the user was referred or not.
    * Referral Point Awarding: When a referred user signs up, *atomically* increment the referrer's `points` (using Firebase Transactions is crucial here).
  * Frontend Display: Show the user's current points total.
* **Potential Prompt Areas:** Implementing Firebase Transactions in NestJS, structuring point calculation logic, updating data models, displaying dynamic data on the frontend.

### Phase 5: Frontend UI/UX Refinement & Features

* **Goal:** Build out the user interface, ensuring a good user experience, and potentially add features like a leaderboard.
* **Key Activities:**
  * Tailwind Styling: Apply consistent and responsive styling to all components (forms, displays, navigation).
  * User Dashboard/Status View: Create a page/component where logged-in users can see their email, points, and referral link. (Requires a tRPC query like `user.getStatus`).
  * Leaderboard (Optional):
    * Create a NestJS/tRPC endpoint (`waitlist.getLeaderboard`) to fetch users sorted by points (limit results).
    * Build a frontend component to display the leaderboard.
  * Improve User Feedback: Add loading states, success/error messages for interactions.
* **Potential Prompt Areas:** Tailwind CSS component styling, creating protected routes/pages in Next.js, fetching user-specific data, Firestore querying/indexing for leaderboards, implementing loading/error states with tRPC hooks.

### Phase 6: Testing, Optimization & Deployment

* **Goal:** Ensure application correctness, performance, and deploy to production.
* **Key Activities:**
  * Testing: Implement unit/integration tests for NestJS services and potentially end-to-end tests (e.g., using Playwright or Cypress) for critical user flows.
  * Validation: Add input validation on both frontend (basic) and backend (robust) using libraries like Zod (integrates well with tRPC).
  * Security Review: Ensure Firebase security rules are configured correctly (e.g., users can only update their own data, read necessary public data).
  * Optimization: Check Firestore query performance, potentially add indexes.
  * Deployment Configuration: Set up Vercel environment variables (production Firebase keys). Configure Vercel deployment settings for the Next.js frontend and potentially deploying the NestJS backend as Vercel Serverless Functions.
  * Final Deployment & Monitoring.
* **Potential Prompt Areas:** Writing tests with Jest/Vitest, setting up Zod validation with tRPC, configuring Firebase security rules, optimizing Firestore queries, Vercel deployment configurations for Next.js/NestJS monorepo or separate deployments.

This overall plan provides a roadmap. Each phase and key activity can now be broken down into smaller, specific tasks suitable for detailed planning and generating prompts for Cursor AI. 