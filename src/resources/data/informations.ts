import { Information } from '../util-types'

/** First professional experience (see experiences.ts). Years of experience are derived from it. */
export const CAREER_START_YEAR = 2018

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
      value: { fr: "5 ans d'expérience", en: '5 years of experience' },
      isLong: false,
   },
   {
      id: 'origin',
      label: { fr: 'Nationalité', en: 'Nationality' },
      value: { fr: 'Camerounaise', en: 'Cameroonian' },
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
      value: { fr: 'Français / English', en: 'French / English' },
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
      value: { fr: 'https://linkedin.com/in/ronald-tchuekou', en: 'https://linkedin.com/in/ronald-tchuekou' },
      isLong: true,
      link: 'https://linkedin.com/in/ronald-tchuekou',
   },
] as const
