import { Information } from '../util-types'

/** Years of experience displayed. Reference value of the resume and LinkedIn profile.
 *  Increment manually (next update: 2027). */
export const EXPERIENCE_YEARS = 6

/** Projects delivered to date. PROJECTS only lists the ones showcased with screenshots. */
export const COMPLETED_PROJECTS_COUNT = 13
export const INFORMATIONS: Information[] = [
   {
      id: 'name',
      label: { fr: 'Nom', en: 'Name' },
      value: { fr: 'Ronald Tchuekou', en: 'Ronald Tchuekou' },
      isLong: false,
   },
   {
      id: 'phone',
      label: { fr: 'Téléphone', en: 'Phone' },
      value: { fr: '(+237) 658 172 868', en: '(+237) 658 172 868' },
      isLong: false,
   },
   {
      id: 'experience',
      label: { fr: 'Expérience', en: 'Experience' },
      value: { fr: `${EXPERIENCE_YEARS} ans et plus`, en: `${EXPERIENCE_YEARS}+ years` },
      isLong: false,
   },
   {
      id: 'email',
      label: { fr: 'Email', en: 'Email' },
      value: { fr: 'ronaldtchuekou@gmail.com', en: 'ronaldtchuekou@gmail.com' },
      isLong: false,
      link: 'mailto: ronaldtchuekou@gmail.com',
   },
   {
      id: 'language',
      label: { fr: 'Langue', en: 'Language' },
      value: {
         fr: 'Français (langue maternelle), anglais (professionnel)',
         en: 'French (native), English (professional)',
      },
      isLong: false,
   },
   {
      id: 'github',
      label: { fr: 'Github', en: 'Github' },
      value: { fr: 'https://github.com/ronald-tchuekou', en: 'https://github.com/ronald-tchuekou' },
      isLong: true,
      link: 'https://github.com/ronald-tchuekou',
   },
   {
      id: 'linked_in',
      label: { fr: 'LinkedIn', en: 'LinkedIn' },
      value: { fr: 'https://www.linkedin.com/in/ronaldtchuekou', en: 'https://www.linkedin.com/in/ronaldtchuekou' },
      isLong: true,
      link: 'https://www.linkedin.com/in/ronaldtchuekou',
   },
] as const
