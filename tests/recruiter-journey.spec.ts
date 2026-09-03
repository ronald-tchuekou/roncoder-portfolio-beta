import { expect, test } from '@playwright/test'

/**
 * The journey of a recruiter who arrives cold on the background page, from a
 * search result or a LinkedIn link, and never sees the home page. Each step has
 * to hold without a detour or a scroll hunt.
 *
 * The contact form is filled but never submitted: a real submission posts to the
 * Discord webhook. Send one by hand after a deploy.
 */
test('a recruiter can qualify and get in touch without a detour', async ({ page }, testInfo) => {
   // 1. Land straight on the background page.
   await page.goto('/fr/resume', { waitUntil: 'networkidle' })
   expect(page.url()).toContain('/fr/resume')

   // 2. The candidate card answers the first questions.
   const card = page.locator('dl').first()
   await expect(card).toBeVisible()
   const cardText = await card.innerText()
   for (const needle of ['Senior Frontend Engineer', 'NAFASI', 'TypeScript', 'Douala', 'UTC+1']) {
      expect(cardText, `candidate card should mention ${needle}`).toContain(needle)
   }
   if (testInfo.project.name === 'desktop') {
      const box = await card.boundingBox()
      expect(box?.y ?? Number.MAX_SAFE_INTEGER, 'candidate card should sit above the fold').toBeLessThan(900)
   }

   // 3. Take the resume away.
   const download = page.waitForEvent('download')
   await page
      .getByRole('link', { name: /CV en français/i })
      .first()
      .click()
   expect((await download).suggestedFilename()).toBe('ronald-tchuekou-resume-fr.pdf')

   // 4. Open a project and find the role and the stores on it.
   await page.goto('/fr/projects', { waitUntil: 'networkidle' })
   await page.getByRole('link', { name: /Lafya/i }).first().click()
   await page.waitForURL(/\/projects\/lafya$/)
   const projectBody = await page.locator('main').innerText()
   expect(projectBody, 'the project page should state the role held').toMatch(/Développeur mobile/i)
   expect(projectBody, 'a mobile project should link both stores').toMatch(/App Store/i)
   expect(projectBody).toMatch(/Google Play/i)

   // 5. Reach the contact form and fill it, without sending.
   await page.goto('/fr/contact', { waitUntil: 'networkidle' })
   await page.locator('input[name="firstName"]').fill('Camille')
   await page.locator('input[name="lastName"]').fill('Durand')
   await page.locator('input[name="email"]').fill('camille.durand@example.com')
   await page.locator('input[name="company"]').fill('Example SAS')
   await page.locator('input[name="jobTitle"]').fill('Senior Frontend Engineer')
   await page.locator('textarea[name="message"]').fill('Poste en full remote, disponible pour en parler.')
   await expect(page.getByRole('button', { name: /envoyer/i })).toBeEnabled()

   // The direct email stays available for a recruiter who will not fill a form.
   await expect(page.locator('a[href="mailto:ronaldtchuekou@gmail.com"]').first()).toBeVisible()
})
