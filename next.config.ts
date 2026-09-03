import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const SECURITY_HEADERS = [
   { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
   { key: 'X-Content-Type-Options', value: 'nosniff' },
   { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
   { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

// Report-only for now: switch the header name to `Content-Security-Policy` once the
// browser console reports no violation on any page.
const CSP = [
   "default-src 'self'",
   "base-uri 'self'",
   "form-action 'self'",
   "object-src 'none'",
   "img-src 'self' data: https:",
   "font-src 'self' data:",
   "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://www.googletagmanager.com https://www.google-analytics.com",
   "style-src 'self' 'unsafe-inline'",
   "connect-src 'self' https://vitals.vercel-insights.com https://www.google-analytics.com https://api.github.com",
   'frame-src https:',
   "frame-ancestors 'none'",
].join('; ')

const nextConfig: NextConfig = {
   async redirects() {
      return [
         { source: '/services', destination: '/expertises', permanent: true },
         { source: '/:locale(fr|en)/services', destination: '/:locale/expertises', permanent: true },
      ]
   },
   async headers() {
      return [
         {
            source: '/:path*',
            headers: [
               ...SECURITY_HEADERS,
               { key: 'Content-Security-Policy-Report-Only', value: CSP },
               { key: 'X-Frame-Options', value: 'DENY' },
            ],
         },
         {
            // Third party sites are loaded in an iframe here, so framing must stay allowed.
            source: '/:path*/projects/preview/:project*',
            headers: [...SECURITY_HEADERS, { key: 'Content-Security-Policy-Report-Only', value: CSP }],
         },
      ]
   },
   images: {
      qualities: [25, 50, 75, 100],
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'github-readme-stats.vercel.app',
         },
      ],
   },
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
