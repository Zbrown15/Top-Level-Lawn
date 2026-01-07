# Top Level Lawn

A Next.js project with TypeScript and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Project Structure

- `app/` - Next.js App Router directory
  - `layout.tsx` - Root layout component
  - `page.tsx` - Home page
  - `globals.css` - Global styles with Tailwind CSS
  - `components/` - React components (Header, Footer)
- `public/` - Static assets
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `next.config.js` - Next.js configuration
- `netlify.toml` - Netlify deployment configuration

## Deployment to Netlify

This project is configured for easy deployment to Netlify:

1. **Connect your repository to Netlify:**
   - Go to [Netlify](https://www.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository

2. **Build settings (automatically configured):**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 20 (specified in `.nvmrc`)

3. **The `netlify.toml` file handles:**
   - Build configuration
   - Next.js plugin setup
   - Node version specification
   - NPM flags for dependency installation

4. **Deploy:**
   - Netlify will automatically detect the configuration and deploy
   - The site will be live after the build completes

No additional configuration needed - just connect your repository and deploy!

