import { expect, test } from '@playwright/test'

const PAGES = ['/', '/expertises', '/projects', '/resume', '/contact', '/legal'] as const
const LOCALES = ['', '/fr'] as const

/** A raw next-intl key leaks as `namespace.key` when a translation is missing. */
const RAW_KEY = /\b(home|header|contact|projects|resume|expertises|legal|common)\.[a-z0-9_]+\b/i

/** Vercel Analytics only serves its script from the Vercel edge, so a local run
 *  always logs a 404 for it. It says nothing about the pages themselves. */
const KNOWN_LOCAL_NOISE = [/_vercel\/insights/, /Failed to load resource: the server responded with a status of 404/]

for (const locale of LOCALES) {
   for (const path of PAGES) {
      const url = `${locale}${path}`.replace(/\/$/, '') || '/'

      test(`${url} renders without raw keys or console errors`, async ({ page }, testInfo) => {
         const errors: string[] = []
         page.on('console', (message) => {
            if (message.type() !== 'error') return
            const text = message.text()
            if (KNOWN_LOCAL_NOISE.some((pattern) => pattern.test(text))) return
            errors.push(text)
         })
         page.on('pageerror', (error) => errors.push(error.message))

         const response = await page.goto(url, { waitUntil: 'networkidle' })
         expect(response?.status(), `HTTP status for ${url}`).toBeLessThan(400)

         await expect(page.locator('h1')).toHaveCount(1)

         const body = (await page.locator('body').innerText()) ?? ''
         expect(body, `raw translation key on ${url}`).not.toMatch(RAW_KEY)

         await page.screenshot({
            path: `test-results/${testInfo.project.name}${url.replace(/\//g, '_')}.png`,
            fullPage: true,
         })

         expect(errors, `console errors on ${url}`).toEqual([])
      })
   }
}
