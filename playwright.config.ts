import { defineConfig, devices } from '@playwright/test'

const baseURL = process.env.SMOKE_BASE_URL ?? 'http://localhost:3000'

export default defineConfig({
   testDir: './tests',
   outputDir: './test-results',
   fullyParallel: true,
   reporter: [['list']],
   use: { baseURL, trace: 'off' },
   projects: [
      { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
      { name: 'mobile', use: { ...devices['Pixel 7'] } },
      { name: 'dark', use: { ...devices['Desktop Chrome'], colorScheme: 'dark' } },
   ],
   webServer: process.env.SMOKE_BASE_URL
      ? undefined
      : {
           command: 'pnpm build && pnpm start',
           url: 'http://localhost:3000',
           reuseExistingServer: true,
           timeout: 240_000,
        },
})
