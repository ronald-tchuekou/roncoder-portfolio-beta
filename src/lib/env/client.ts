import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

const env = createEnv({
   client: {
      NEXT_PUBLIC_DISCORD_WEBHOOK: z.string().min(1),
      NEXT_PUBLIC_BASE_LINK: z.string().min(1),
      NEXT_PUBLIC_GITHUB_USERNAME: z.string().min(1),
   },
   experimental__runtimeEnv: {
      NEXT_PUBLIC_DISCORD_WEBHOOK: process.env.NEXT_PUBLIC_DISCORD_WEBHOOK,
      NEXT_PUBLIC_BASE_LINK: process.env.NEXT_PUBLIC_BASE_LINK,
      NEXT_PUBLIC_GITHUB_USERNAME: process.env.NEXT_PUBLIC_GITHUB_USERNAME,
   },
})

export default env
