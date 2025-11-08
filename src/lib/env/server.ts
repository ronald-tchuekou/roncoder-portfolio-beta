import { createEnv } from '@t3-oss/env-nextjs'
import z from 'zod'

const env = createEnv({
   server: {
      GITHUB_TOKEN: z.string().min(1),
   },
   experimental__runtimeEnv: process.env,
})

export default env
