# Ronald Tchuekou Portfolio

A modern, multilingual portfolio website built with Next.js 16, React 19, and TypeScript. Features a clean, responsive design with internationalization support for English and French languages.

![Portfolio Preview](public/profile_3.webp)

## 🚀 Features

- **🌐 Multilingual Support**: Full internationalization with English and French translations
- **🎨 Modern UI/UX**: Clean, responsive design with smooth animations using Framer Motion
- **🌓 Theme Support**: Light and dark mode with persistent theme selection
- **📱 Responsive Design**: Mobile-first approach with optimized layouts for all devices
- **🔧 Contact Form**: Integrated contact form with Discord webhook notifications
- **📊 GitHub Integration**: Display GitHub contribution stats and repository stars
- **📄 Resume Downloads**: Automatic resume downloads in multiple languages
- **🗺️ SEO-Ready Sitemap**: Automated sitemap generation for every locale and dynamic route
- **🖼️ Project Gallery**: Interactive project showcase with image galleries
- **⚡ Performance Optimized**: Built with Next.js app router and optimized images

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with [tw-animate-css](https://www.npmjs.com/package/tw-animate-css)
- **Components**: Custom UI components built with [Radix UI](https://www.radix-ui.com/) primitives
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Environment Variables**: Type-safe with [@t3-oss/env-nextjs](https://env.t3.gg/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 📁 Project Structure

```
roncoder-portfolio/
├── lang/                       # Static translation dictionaries
├── public/                     # Static assets (images, resumes, verification files)
├── src/
│   ├── app/                    # Next.js App Router entrypoint
│   │   ├── [locale]/           # Locale-aware pages and layouts
│   │   │   ├── layout.tsx      # Root layout per locale
│   │   │   ├── page.tsx        # Landing page
│   │   │   ├── contact/        # Contact page route
│   │   │   ├── projects/       # Projects listing and detail routes
│   │   │   ├── resume/         # Resume sections
│   │   │   ├── expertises/     # Expertise page
│   │   │   └── legal/          # Legal notice
│   │   ├── api/
│   │   │   └── github/         # Serverless GitHub helpers
│   │   │       ├── contributions/route.ts
│   │   │       └── stars/route.ts
│   │   ├── favicon.ico         # Favicon served by Next.js
│   │   ├── robots.ts           # Dynamic robots.txt generator
│   │   └── sitemap.ts          # Locale-aware sitemap generator
│   ├── components/             # Reusable UI building blocks
│   │   ├── home/               # Homepage sections
│   │   ├── projects/           # Projects cards & modals
│   │   ├── resume/             # Resume section widgets, candidate card
│   │   ├── expertises/         # Expertise listings
│   │   └── ui/                 # Design system primitives (Radix based)
│   ├── hooks/                  # Shared React hooks
│   ├── i18n/                   # next-intl configuration
│   ├── lib/                    # Runtime helpers (env, stores, utils)
│   ├── resources/              # Typed content data & schemas
│   ├── services/               # Server-side integrations (GitHub, contact)
│   └── styles/                 # Global styles and tokens
├── tsconfig.json               # Path aliases and TypeScript config
└── package.json                # Dependencies and scripts
```

## 🚦 Getting Started

### Prerequisites

- Node.js 22+
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ronald-tchuekou/roncoder-portfolio-beta.git
cd roncoder-portfolio-beta
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
# Copy the example env file (you'll need to create this)
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
# Base URL for the website
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# GitHub username for stats
NEXT_PUBLIC_GITHUB_USERNAME=your_github_username

# GitHub token for API access (server-side only, read:user scope is enough)
GITHUB_TOKEN=your_github_token

# Discord webhook for the contact form (server side only, never expose it with NEXT_PUBLIC_)
DISCORD_WEBHOOK=your_discord_webhook_url
```

## 📜 Available scripts

| Script | What it does |
| --- | --- |
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | ESLint over the whole repository |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm format` | Prettier write |
| `pnpm smoke` | Playwright smoke run over both locales, screenshots in `test-results/` |
| `pnpm images:convert` | Convert the images under `public/` to WebP |

## ✍️ Adding content

**A project**: append an entry to `src/resources/data/projects.tsx`. Required fields come from the
`Project` type in `src/resources/util-types.ts`: `platform` (`web`, `mobile` or `confidential`),
`role`, `context`, `contributions`, `result`, `featured` and `order`. Drop the images under
`public/projects/<id>/` and reference them with `image` and `gallery`. Only web projects with a
reachable link get a preview route.

**An experience**: append an entry to `src/resources/data/experiences.ts` with a unique `id` and a
`sortDate` in `YYYY-MM` form; the list sorts itself by date, most recent first. Detail pages are
generated from the list, so nothing else to register.

**A certification**: same shape, in `src/resources/data/educations.ts`.

Every text field is a `Record<LocaleType, string>`: French and English are both mandatory. House
style forbids em dashes and en dashes; write "Oct 2023 à Déc 2025" / "Oct 2023 to Dec 2025".

## 📄 Resume PDFs

`public/resumes/` holds `ronald-tchuekou-resume-fr.pdf` and `ronald-tchuekou-resume-en.pdf`. They are
declared once in `src/resources/data/resumes.ts`, which every download button reads. See
`public/resumes/README.md` for the rules a replacement file must satisfy, including the page count to
update there.

### Development

Run the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

Build for production:
```bash
pnpm build
# or
npm run build
# or
yarn build
```

Run the production build:
```bash
pnpm start
# or
npm start
# or
yarn start
```

## 🔧 Configuration

### Internationalization

The app supports English and French. To add a new language:

1. Add language files in the `lang/` directory
2. Update the `routing.ts` file in `src/i18n/`
3. Add the locale to the `locales` array

### Adding Projects

Projects data is stored in `src/resources/data/projects.tsx`. Add new projects by updating this file with:
- Project title and description
- Tech stack used
- Project images (store in `public/projects/`)
- Project links (GitHub, live demo)

### Customizing Themes

Theme configuration can be modified in:
- `src/providers/theme-provider.tsx` for theme logic
- `src/styles/style.css` for CSS variables
- Tailwind configuration for color schemes

### GitHub Integration

The GitHub counters use the GitHub GraphQL API via dedicated API routes. Make sure to:

- Set `NEXT_PUBLIC_GITHUB_USERNAME` to the profile you want to display
- Provide a `GITHUB_TOKEN` with access to the GraphQL API (a classic token with `read:user` permission is sufficient)
- The token is used only server-side through the `/api/github/*` routes

### SEO & Sitemap

- Configure `NEXT_PUBLIC_SITE_URL` with your production URL (e.g. `https://your-domain.com`)
- The sitemap automatically includes every static page, locale-prefixed route, and dynamic page (projects, educations, experiences)
- The generated sitemap is available at `/sitemap.xml` and the robots file at `/robots.txt`

## 🌐 API Routes

The portfolio ships with lightweight, server-side API routes that proxy GitHub data for the frontend counters. They are implemented in `src/app/api/github/*` and rely on the shared `GithubService` for caching and error handling.

| Route | Method | Description | Response |
| --- | --- | --- | --- |
| `/api/github/contributions` | GET | Fetches the total contributions for `NEXT_PUBLIC_GITHUB_USERNAME` over the last 12 months. | `{ "contributions": number }` |
| `/api/github/stars` | GET | Aggregates the star count across all public repositories for the configured user. | `{ "stars": number }` |

### Authentication & Rate Limits
- Both routes require a valid `GITHUB_TOKEN` set in the environment to avoid GitHub's anonymous rate limits.
- Tokens are read only on the server through `src/services/github.service.ts`; they never leave the backend.

### Example Usage

```ts
const response = await fetch('/api/github/stars', { next: { revalidate: 3600 } })
const { stars } = await response.json()
```

You can call these endpoints from other clients (CLI tools, dashboards, etc.) as long as the deployment is configured with the same environment variables.

## 📝 Key Features Implementation

### Contact Form
The contact form uses Discord webhooks to send notifications:
- Form validation with Zod schema
- React Hook Form for form handling
- Discord webhook integration for notifications
- Success/error feedback with toast notifications

### GitHub Integration
Displays GitHub statistics:
- Contribution count from GitHub API
- Repository star count
- Cached responses for performance

### Resume Downloads
Automatic PDF downloads based on selected language:
- Stored in `/public/resumes/`
- Named format: `ronald-tchuekou-resume-{locale}.pdf`

### Project Gallery
Interactive image galleries for projects:
- React Slick carousel implementation
- Lazy loading for performance
- Responsive image sizing

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted with Docker

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ronald Tchuekou**

- LinkedIn: [@ronald-tchuekou](https://www.linkedin.com/in/ronald-tchuekou)
- GitHub: [@ronald-tchuekou](https://github.com/ronald-tchuekou)
- Portfolio: [roncoder-beta.vercel.app](https://roncoder-beta.vercel.app)

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Built with ❤️ by Ronald Tchuekou