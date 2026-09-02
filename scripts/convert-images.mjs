// One-off: convert public/projects/** and public/certificates/** to WebP (max 1920px wide).
// Usage: node scripts/convert-images.mjs [--keep]   (--keep leaves the originals in place)
import { readdir, stat, unlink } from 'node:fs/promises'
import { extname, join } from 'node:path'
import sharp from 'sharp'

const ROOTS = ['public/projects', 'public/certificates']
const KEEP = process.argv.includes('--keep')

async function* walk(dir) {
   for (const entry of await readdir(dir, { withFileTypes: true })) {
      const p = join(dir, entry.name)
      if (entry.isDirectory()) yield* walk(p)
      else yield p
   }
}

let before = 0
let after = 0
for (const root of ROOTS) {
   for await (const file of walk(root)) {
      const ext = extname(file).toLowerCase()
      if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue
      const out = file.replace(/\.(png|jpe?g)$/i, '.webp')
      before += (await stat(file)).size
      await sharp(file).resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out)
      after += (await stat(out)).size
      if (!KEEP) await unlink(file)
      console.log(`${file} -> ${out}`)
   }
}
console.log(`\n${(before / 1e6).toFixed(1)} MB -> ${(after / 1e6).toFixed(1)} MB`)
