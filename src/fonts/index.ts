import localFont from 'next/font/local'

// Self-hosted variable fonts (latin subset). No request to Google Fonts at build or runtime.
// The italic face is not used anywhere in the interface, so it is not declared:
// it was a 31 KB download on every page for nothing.
export const fontSans = localFont({
   src: './josefin-sans-latin-wght-normal.woff2',
   weight: '100 700',
   variable: '--font-josefin',
   display: 'swap',
})

// Mono and serif are accents, not body copy: preloading all three families cost
// about 100 KB on the critical path for no visible gain.
export const fontMono = localFont({
   src: './jetbrains-mono-latin-wght-normal.woff2',
   weight: '100 800',
   variable: '--font-jetbrains',
   display: 'swap',
   preload: false,
})

export const fontSerif = localFont({
   src: './andada-pro-latin-wght-normal.woff2',
   weight: '400 840',
   variable: '--font-andada',
   display: 'swap',
   preload: false,
})
