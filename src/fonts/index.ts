import localFont from 'next/font/local'

// Self-hosted variable fonts (latin subset). No request to Google Fonts at build or runtime.
export const fontSans = localFont({
   src: [
      { path: './josefin-sans-latin-wght-normal.woff2', style: 'normal', weight: '100 700' },
      { path: './josefin-sans-latin-wght-italic.woff2', style: 'italic', weight: '100 700' },
   ],
   variable: '--font-josefin',
   display: 'swap',
})

export const fontMono = localFont({
   src: './jetbrains-mono-latin-wght-normal.woff2',
   weight: '100 800',
   variable: '--font-jetbrains',
   display: 'swap',
})

export const fontSerif = localFont({
   src: './andada-pro-latin-wght-normal.woff2',
   weight: '400 840',
   variable: '--font-andada',
   display: 'swap',
})
