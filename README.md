# Next.js App Router + Edge Runtime SSR Example

An example blog site that uses

- Next.js 13
- App Router
- Server Component
- Edge Runtime
- Server Side Rendering
- Styled Components

## Deploy to Cloudflare Pages

To build app for Cloudflare Pages:

```
yarn build:cloudflare-pages
```

To deploy built app:

```
wrangler pages deploy ./.vercel/output/static --project-name <Your_Pages_Project_Name>
```

Reference: https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/
