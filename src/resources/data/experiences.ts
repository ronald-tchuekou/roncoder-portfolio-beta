import { Experience } from '../util-types'
export const EXPERIENCES_LIST: Experience[] = [
   {
      id: '01',
      title: {
         fr: 'Développeur Senior Full-Stack',
         en: 'Senior Full-Stack Developer',
      },
      company: 'AGYL TECH',
      date: { fr: 'Oct 2023 - Présent', en: 'Oct 2023 - Now' },
      description: {
         fr: 'Développement de plusieurs applications web et mobiles pour des clients locaux et internationaux.',
         en: 'Development of several web and mobile applications for local and international clients.',
      },
      tasks: [
         {
            fr: 'Planification des taches (sprints) pour un projet donné.',
            en: 'Planning tasks (sprints) for a given project.',
         },
         {
            fr: 'Conception de modèles de données pour les applications clients et internes.',
            en: 'Designing data models for client and internal applications.',
         },
         {
            fr: 'Analyse du besoin client et proposition de solutions techniques.',
            en: 'Analyzing client needs and proposing technical solutions.',
         },
         {
            fr: "Conception et réalisation d'API (REST, GraphQL) pour les applications web et mobiles.",
            en: 'Designing and implementing APIs (REST, GraphQL) for web and mobile applications.',
         },
         {
            fr: "Conception et réalisation d'applications web et mobiles, respectivement en React Native (Expo) et NextJs/Angular, suivant les normes et conventions de l'entreprise.",
            en: 'Designing and implementing web and mobile applications, respectively in React Native (Expo) and NextJs/Angular, following company standards and conventions.',
         },
         {
            fr: 'Mise en place de tests unitaires et fonctionnels pour les applications développées.',
            en: 'Setting up unit and functional tests for developed applications.',
         },
         {
            fr: 'Mise en place de pipelines CI/CD pour les applications développées.',
            en: 'Setting up CI/CD pipelines for developed applications.',
         },
         {
            fr: 'Maintenance et évolution des applications développées.',
            en: 'Maintaining and evolving developed applications.',
         },
         {
            fr: 'Collaboration avec des équipes internes et externes pour la réalisation des projets.',
            en: 'Collaborating with internal and external teams for project completion.',
         },
         {
            fr: 'Gestion et administration des serveurs de développement et de production.',
            en: 'Managing and administering development and production servers.',
         },
         {
            fr: 'Veille technologique et proposition de nouvelles technologies pour les projets.',
            en: 'Technology watch and proposing new technologies for projects.',
         },
      ],
      keywords: [],
   },
   {
      id: '02',
      title: {
         fr: 'Développeur Junior Front-End',
         en: 'Junior Front-End Developer',
      },
      company: 'AGYL TECH',
      date: { fr: 'Oct 2021 - Nov 2022', en: 'Oct 2021 - Nov 2022' },
      description: {
         fr: 'Développement de plusieurs applications web pour des clients locaux.',
         en: 'Development of several web applications for local clients.',
      },
      tasks: [
         {
            fr: "Conception et réalisation d'applications web en Angular, suivant les normes et conventions de l'entreprise.",
            en: 'Designing and implementing web applications in Angular, following company standards and conventions.',
         },
         {
            fr: 'Mise en place de tests unitaires et fonctionnels pour les applications développées.',
            en: 'Setting up unit and functional tests for developed applications.',
         },
         {
            fr: 'Maintenance et évolution des applications développées.',
            en: 'Maintaining and evolving developed applications.',
         },
         {
            fr: 'Réalisation de plusieurs POC pour des clients potentiels.',
            en: 'Creating several POCs for potential clients.',
         },
         {
            fr: 'Collaboration avec des équipes internes pour la réalisation des projets.',
            en: 'Collaborating with internal teams for project completion.',
         },
      ],
      keywords: [],
   },
   {
      id: '03',
      title: {
         fr: 'Développeur Front-End',
         en: 'Front-End Developer',
      },
      company: 'DC Corp',
      date: { fr: 'Mai 2018 - Nov 2021', en: 'May 2018 - Nov 2021' },
      description: {
         fr: 'Développement de plusieurs applications web pour des clients locaux.',
         en: 'Development of several web applications for local clients.',
      },
      tasks: [
         {
            fr: "Conception et réalisation d'applications web en React, suivant les normes et conventions de l'entreprise.",
            en: 'Designing and implementing web applications in React, following company standards and conventions.',
         },
         {
            fr: 'Conception de prototypes pour des clients potentiels.',
            en: 'Designing prototypes for potential clients.',
         },
         {
            fr: 'Maintenance et évolution des applications développées.',
            en: 'Maintaining and evolving developed applications.',
         },
         {
            fr: 'Conception et réalisation des landing pages pour des clients locaux et internationaux.',
            en: 'Designing and implementing landing pages for local and international clients.',
         },
      ],
      keywords: [],
   },
] as const
