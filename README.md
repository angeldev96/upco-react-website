# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# upco-react-website

Small React + Vite + Tailwind scaffold for migrating the Utila Power Company site from WordPress.

Quick start

1. Install dependencies (add `react-router-dom` if not installed):

```pwsh
npm install
npm install react-router-dom@6
npm run dev
```

What I added

- `src/components` Header/Footer
- `src/layouts/Layout.jsx`
- `src/pages` Home/About/Services/Contact
- Routing wiring in `src/App.jsx`

Next steps

- Replace placeholder copy and assets with real content from the WordPress site.
- Add SEO metadata per page and a sitemap.
- Implement forms handling (Netlify Functions, API, or SMTP).
