import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
   images: {
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
