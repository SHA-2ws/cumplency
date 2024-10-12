// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [react(), tailwind()],
  redirects: 
    {
       '/': {
        destination: '/birthdays',
        status: 302,
       }
    }
  ,
  output: 'server',
  adapter: vercel(),
});