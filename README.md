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
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Environment Variables**: Type-safe with [@t3-oss/env-nextjs](https://env.t3.gg/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 📁 Project Structure

```
roncoder-portfolio/
├── @/                          # UI components library
│   ├── components/ui/          # Reusable UI components
│   ├── hooks/                  # Custom React hooks
│   └── lib/                    # Utilities
├── lang/                       # Translation files (JSON)
│   ├── contact/               # Contact page translations
│   ├── header/                # Header translations
│   ├── home/                  # Home page translations
│   ├── projects/              # Projects page translations
│   ├── resume/                # Resume page translations
│   └── services/              # Services page translations
├── public/                     # Static assets
│   ├── certificates/          # Certificate images
│   ├── projects/              # Project screenshots
│   └── resumes/               # PDF resumes
├── src/
│   ├── app/                   # Next.js app directory
│   │   └── [locale]/          # Dynamic locale routing
│   ├── components/            # React components
│   │   ├── contact/           # Contact form components
│   │   ├── header/            # Header components
│   │   ├── home/              # Home page components
│   │   ├── modals/            # Modal components
│   │   ├── motions/           # Animation wrappers
│   │   ├── projects/          # Project components
│   │   ├── providers/         # Context providers
│   │   ├── resume/            # Resume components
│   │   └── services/          # Services components
│   ├── i18n/                  # Internationalization config
│   ├── lib/                   # Library code
│   │   ├── env/               # Environment variables
│   │   └── stores/            # Zustand stores
│   ├── resources/             # Data and resources
│   │   └── data/              # Static data files
│   ├── services/              # API services
│   └── styles/                # Global styles
└── configuration files...
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
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
# Discord webhook for contact form
NEXT_PUBLIC_DISCORD_WEBHOOK=your_discord_webhook_url

# Base URL for the website
NEXT_PUBLIC_BASE_LINK=http://localhost:3000

# GitHub username for stats
NEXT_PUBLIC_GITHUB_USERNAME=your_github_username

# GitHub token for API access (server-side only)
GITHUB_TOKEN=your_github_token
```

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

- Configure `NEXT_PUBLIC_BASE_LINK` with your production URL (e.g. `https://your-domain.com`)
- The sitemap automatically includes every static page, locale-prefixed route, and dynamic page (projects, educations, experiences)
- The generated sitemap is available at `/sitemap.xml` and the robots file at `/robots.txt`

## 🌐 API Routes

The project exposes API routes that power parts of the UI:

| Route | Method | Description |
| --- | --- | --- |
| `/api/github/contributions` | GET | Returns the total GitHub contributions for the configured user |
| `/api/github/stars` | GET | Returns the sum of GitHub stars across the configured user's repositories |

These routes are consumed by the home page counters and can be reused by external clients if needed.

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

- LinkedIn: [@ronald-tchuekou](https://linkedin.com/in/ronald-tchuekou)
- GitHub: [@ronald-tchuekou](https://github.com/ronald-tchuekou)
- Portfolio: [roncoder-beta.vercel.app](https://roncoder-beta.vercel.app)

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Built with ❤️ by Ronald Tchuekou