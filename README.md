# [Clarify | Landing Page](https://clarify-page.vercel.app)

Landing page for a mobile app that supports blind individuals, developed with Next.js, Tailwind CSS, and Framer Motion to highlight accessibility and Clarify’s brand.

### Technologies Used:

- **Framework:** [Next.js](https://nextjs.org/) - Used for building the application with server-side rendering and static site generation.
- **Styling:** [TailwindCSS](https://tailwindcss.com/) - A CSS framework for rapid and flexible design.
- **Internationalization:** [Next-intl](https://next-intl-docs.vercel.app/) - Implemented to handle multiple languages and improve global accessibility.
- **Motion Effects:** [Framer Motion](https://www.framer.com/motion/) - Used to add smooth and interactive animations to the user interface.
- **Dynamic Themes:** [Next Themes](https://github.com/pacocoursey/next-themes) - For support of dark and light themes, enhancing visual accessibility.
- **Icons:** [Radix UI Icons](https://icons.radix-ui.com/) - Icons used to enhance user experience and navigation.
- **Class Management:** [Class Variance Authority](https://cva.style/) and [clsx](https://github.com/lukeed/clsx) - Used to manage Tailwind classes and style variations efficiently.
- **Optimization and Analytics:** [Vercel Analytics](https://vercel.com/analytics) - To monitor performance and improve user experience on the landing page.
- **Hosting:** [Vercel](https://vercel.com/) - High-performance hosting for Next.js applications, with continuous deployment and scalability.

### Scripts:

- **Development:** `npm run dev` - Starts the application in development mode.
- **Build:** `npm run build` - Compiles the application for production.
- **Production:** `npm run start` - Starts the application in production mode.
- **Lint:** `npm run lint` - Analyzes and fixes code errors according to ESLint rules.

### Runtime and verification

Use Node.js 24.22.2 or a newer patched 24.x LTS release (see .nvmrc).
Install the locked dependencies with npm ci.

- npm run typecheck generates Next.js route types and checks TypeScript.
- npm run lint runs ESLint separately from the production build.
- npm run build compiles the production app.
- npm run test:smoke checks Spanish and English pages, localized metadata,
  language detection/preferences, 404 responses and compiled assets. Start
  npm start first, or set SMOKE_BASE_URL for another local port.
- npm audit --omit=dev checks production dependencies.

The update migrates Next.js, React, next-intl request/navigation APIs, async
locale parameters, proxy routing and the ESLint configuration. The language
switch preserves the query string and the current hash when clicked.

The complete audit still flags the ESLint plugins that use minimatch 3.x under
[GHSA-g3hv-75wg-m249](https://github.com/isaacs/minimatch/security/advisories/GHSA-g3hv-75wg-m249).
The npm range includes all versions below 11.0.1, while the upstream report
describes 10.2.6 preprocessing with optimizationLevel >= 2, which does not
exist in 3.x. Track this discrepancy until the plugins or advisory are updated.
The TypeScript parser uses an override to patched minimatch 11.x; a global
override would break the legacy callable API used by the other plugins.
