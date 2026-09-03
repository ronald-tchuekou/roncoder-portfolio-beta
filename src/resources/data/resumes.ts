import { LocaleType } from '@src/i18n/routing'

/**
 * The resume PDFs, single source of truth for every download button on the site.
 * `pages` is read off the real file, never guessed, and `available` gates the
 * buttons: they stay visible and explain themselves rather than disappearing.
 * See `public/resumes/README.md` before replacing a file.
 */
export const RESUME_FILES = {
   fr: {
      labelKey: 'cv_fr_label',
      href: '/resumes/ronald-tchuekou-resume-fr.pdf',
      fileName: 'ronald-tchuekou-resume-fr.pdf',
      available: true,
      pages: 1,
   },
   en: {
      labelKey: 'cv_en_label',
      href: '/resumes/ronald-tchuekou-resume-en.pdf',
      fileName: 'ronald-tchuekou-resume-en.pdf',
      available: true,
      pages: 1,
   },
} as const satisfies Record<LocaleType, unknown>

export const RESUME_LOCALES = ['fr', 'en'] as const satisfies readonly LocaleType[]

export const resumeFor = (locale: string) => RESUME_FILES[locale === 'en' ? 'en' : 'fr']
