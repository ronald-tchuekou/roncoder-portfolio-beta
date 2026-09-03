import { LocaleType } from '@src/i18n/routing'
import { ImageResponse } from 'next/og'

export const alt = 'Ronald Tchuekou, Senior Frontend Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const COPY: Record<LocaleType, { role: string; tagline: string }> = {
   fr: {
      role: 'Senior Frontend Engineer, Full Stack',
      tagline: '6 ans et plus. Disponible en télétravail.',
   },
   en: {
      role: 'Senior Frontend Engineer, Full Stack',
      tagline: '6+ years. Available for remote work.',
   },
}

const STACK = ['TypeScript', 'React', 'Next.js', 'Angular', 'React Native', 'Node.js']

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
   const locale = ((await params).locale as LocaleType) ?? 'fr'
   const copy = COPY[locale] ?? COPY.fr

   return new ImageResponse(
      (
         <div
            style={{
               width: '100%',
               height: '100%',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               padding: '80px',
               background: '#0b0b0f',
               color: '#fafafa',
            }}
         >
            <div style={{ fontSize: 30, color: '#a1a1aa', letterSpacing: 2 }}>{copy.role.toUpperCase()}</div>
            <div style={{ fontSize: 88, fontWeight: 700, marginTop: 16 }}>Ronald Tchuekou</div>
            <div style={{ fontSize: 34, color: '#a1a1aa', marginTop: 20 }}>{copy.tagline}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 44 }}>
               {STACK.map((item) => (
                  <div
                     key={item}
                     style={{
                        fontSize: 26,
                        padding: '10px 22px',
                        borderRadius: 999,
                        border: '1px solid #3f3f46',
                        color: '#e4e4e7',
                     }}
                  >
                     {item}
                  </div>
               ))}
            </div>
         </div>
      ),
      size
   )
}
