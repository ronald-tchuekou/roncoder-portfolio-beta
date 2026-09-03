import { expect, test } from '@playwright/test'

const PAGES = ['/', '/expertises', '/projects', '/resume', '/contact', '/legal', '/projects/privie'] as const

/**
 * The policy is served in report only mode, and Chrome logs every violation it
 * would have blocked as "[Report Only] Refused to ...". Reading those tells us
 * whether the policy can be switched to enforcing without breaking a page.
 */
for (const path of PAGES) {
   test(`the content security policy blocks nothing on ${path}`, async ({ page }) => {
      const violations: string[] = []
      page.on('console', (message) => {
         const text = message.text()
         // The local Vercel Analytics 404 answers with text/plain, which trips MIME
         // checking rather than the policy. It does not exist on the Vercel edge.
         if (text.includes('_vercel/insights')) return
         if (/Content Security Policy|Refused to (load|execute|apply|connect|frame)/i.test(text)) {
            violations.push(text)
         }
      })

      const response = await page.goto(path, { waitUntil: 'networkidle' })
      const headers = response?.headers() ?? {}
      expect(
         headers['content-security-policy'] ?? headers['content-security-policy-report-only'],
         `no policy served on ${path}`
      ).toBeTruthy()

      expect(violations, `policy violations on ${path}`).toEqual([])
   })
}
