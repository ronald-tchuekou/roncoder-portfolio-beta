import { expect, test } from '@playwright/test'

const LAYER = '[data-testid="background-grid"]'

test.describe('animated background', () => {
   test('is present on every page but stays out of the way', async ({ page }) => {
      for (const path of ['/fr', '/fr/projects', '/fr/resume']) {
         await page.goto(path)
         const layer = page.locator(LAYER)
         await expect(layer).toHaveCount(1)
         await expect(layer).toHaveAttribute('aria-hidden', 'true')
         expect(await layer.evaluate((e) => getComputedStyle(e).pointerEvents)).toBe('none')
      }
   })

   test('never intercepts a click meant for the content', async ({ page }) => {
      await page.goto('/fr')
      // elementFromPoint at the viewport centre must land on content, never on the layer.
      const hit = await page.evaluate(() => {
         const el = document.elementFromPoint(innerWidth / 2, innerHeight / 2)
         return el?.closest('[data-testid="background-grid"]') === null
      })
      expect(hit).toBe(true)
   })

   test('is excluded from the accessibility tree', async ({ page }) => {
      await page.goto('/fr')
      const snapshot = await page.locator('body').ariaSnapshot()
      expect(snapshot).not.toContain('background-grid')
   })

   test('keeps the texture but drops the motion under reduced motion', async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' })
      await page.goto('/fr')
      const layer = page.locator(LAYER)
      await expect(layer).toBeAttached()
      const animated = await layer.evaluate((e) =>
         [e, ...e.querySelectorAll('*')].some((n) => getComputedStyle(n).animationName !== 'none'),
      )
      expect(animated).toBe(false)
      // The grid itself must still paint: texture without movement.
      const painted = await layer.evaluate((e) =>
         [e, ...e.querySelectorAll('*')].some((n) => getComputedStyle(n).backgroundImage !== 'none'),
      )
      expect(painted).toBe(true)
   })

   test('animates when motion is allowed', async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'no-preference' })
      await page.goto('/fr')
      const animated = await page
         .locator(LAYER)
         .evaluate((e) => [e, ...e.querySelectorAll('*')].map((n) => getComputedStyle(n).animationName))
      expect(animated.filter((n) => n !== 'none').length).toBeGreaterThan(0)
   })
})
