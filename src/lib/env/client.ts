import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

/** Default until a personal domain is in place. A recruiter reads a vercel.app
 *  address as a side project, so this is worth replacing. */
const DEFAULT_SITE_URL = 'https://roncoder-beta.vercel.app'

const env = createEnv({
   client: {
      NEXT_PUBLIC_SITE_URL: z.string().url().default(DEFAULT_SITE_URL),
      NEXT_PUBLIC_GITHUB_USERNAME: z.string().min(1),
   },
   experimental__runtimeEnv: {
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
      NEXT_PUBLIC_GITHUB_USERNAME: process.env.NEXT_PUBLIC_GITHUB_USERNAME,
   },
})

export default env
