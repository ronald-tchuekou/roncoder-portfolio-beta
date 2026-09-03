import { expect, test } from '@playwright/test'

/**
 * The grid lines are painted over the page background, so any body text sitting on
 * `--background` reads against a slightly tinted backdrop wherever a line passes
 * under it. This measures that worst case rather than assuming it is negligible.
 */
test('grid lines do not push body text below AA', async ({ page }) => {
   await page.goto('/fr')

   const ratios = await page.evaluate(() => {
      // Computed colours come back as oklch(); a canvas resolves them to sRGB.
      const ctx = document.createElement('canvas').getContext('2d')!
      const toRgba = (color: string): [number, number, number, number] => {
         const probe = document.createElement('div')
         probe.style.color = color
         document.body.appendChild(probe)
         const computed = getComputedStyle(probe).color
         probe.remove()
         ctx.clearRect(0, 0, 1, 1)
         ctx.fillStyle = computed
         ctx.fillRect(0, 0, 1, 1)
         const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data
         return [r, g, b, a / 255]
      }

      const luminance = ([r, g, b]: number[]) => {
         const lin = (c: number) => (c / 255 <= 0.03928 ? c / 255 / 12.92 : ((c / 255 + 0.055) / 1.055) ** 2.4)
         return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b)
      }
      const contrast = (a: number[], b: number[]) => {
         const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
         return (hi + 0.05) / (lo + 0.05)
      }

      const fg = toRgba('var(--foreground)')
      const bg = toRgba('var(--background)')
      const [lr, lg, lb, la] = toRgba('var(--grid-line)')
      const overLine = [lr * la + bg[0] * (1 - la), lg * la + bg[1] * (1 - la), lb * la + bg[2] * (1 - la)]

      return { plain: contrast(fg, bg), overLine: contrast(fg, overLine) }
   })

   console.log(`contrast on background: ${ratios.plain.toFixed(2)}:1`)
   console.log(`contrast over a grid line: ${ratios.overLine.toFixed(2)}:1`)
   // Body text must clear AA even where the trame passes beneath it.
   expect(ratios.overLine).toBeGreaterThanOrEqual(4.5)
})
