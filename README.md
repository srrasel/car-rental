This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Authentication

This project uses [Auth.js v5](https://authjs.dev) for authentication with the following features:
- Role-based access control (Admin/Customer)
- JWT-based sessions
- Protected routes with middleware
- Sign in/out functionality

### Test Credentials
- **Admin**: `admin@rental.com` / `admin123`
- **Customer**: `customer@rental.com` / `customer123`

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
AUTH_SECRET=your-secure-random-secret-here
```

For production deployment, set these in your hosting platform's environment variables.

## Deploy on Vercel

### 1. Connect Repository
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository

### 2. Configure Environment Variables
In Vercel dashboard, go to your project settings and add:

```
AUTH_SECRET=your-secure-random-secret-here
```

### 3. Deploy
Vercel will automatically detect it's a Next.js project and deploy it. No additional configuration files are needed.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Auth.js Documentation](https://authjs.dev) - learn about authentication.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
