# XUpload - TikTok Developer App Landing Page

This is a minimal, production-ready landing page for the **XUpload** TikTok developer application. It is built with Next.js, Tailwind CSS, and TypeScript.

## Project Structure

- `app/page.tsx`: The main landing page.
- `app/privacy/page.tsx`: The Privacy Policy page.
- `app/terms/page.tsx`: The Terms of Service page.
- `app/components/`: Reusable components (Header, Footer, Logo).
- `app/globals.css`: Tailwind configuration and global styles.

## Setup & Deployment

### 1. Run Locally

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### 2. Deploy to Vercel

The easiest way to deploy is to use [Vercel](https://vercel.com/new).

1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Import the project into Vercel.
3.  Vercel will detect Next.js and deploy automatically.

## Configuration for TikTok Developer Portal

When registering your app in the TikTok for Developers portal, use the following URL paths (replace `https://your-domain.com` with your actual Vercel deployment URL):

- **Home Page URL:** `https://your-domain.com/`
- **Privacy Policy URL:** `https://your-domain.com/privacy`
- **Terms of Service URL:** `https://your-domain.com/terms`

## Customization

### Changing the Contact Email

Open the following files and search for `contact@example.com` to replace it with your actual support email:

- `app/page.tsx`
- `app/privacy/page.tsx`
- `app/terms/page.tsx`

### Replacing the Logo

The current logo is a simple SVG component located at `app/components/Logo.tsx`.

To replace it:
1.  Open `app/components/Logo.tsx`.
2.  Replace the `<svg>...</svg>` content with your own SVG code.
3.  Ensure you keep the `className` prop passed to your new SVG to maintain responsive sizing and coloring.