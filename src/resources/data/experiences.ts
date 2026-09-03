import { Experience } from '../util-types'

/** Raw entries. Periods overlap, so `id` is not a chronological order:
 *  every render site must use EXPERIENCES_LIST, sorted by `sortDate` descending. */
const EXPERIENCES: Experience[] = [
   {
      id: '00',
      title: {
         fr: 'Senior Frontend Engineer et consultant CTO',
         en: 'Senior Frontend Engineer and CTO consultant',
      },
      company: 'NAFASI DIGITAL SARL',
      date: { fr: "Déc 2025 à aujourd'hui", en: 'Dec 2025 to today' },
      context: {
         fr: 'Cabinet de conseil, mission pour une autorité de supervision régionale, à distance et sur site.',
         en: 'Consulting firm, engagement for a regional supervisory authority, remote and on site.',
      },
      sortDate: '2025-12',
      description: {
         fr: "Conception, développement et supervision technique d'un outil stratégique de supervision financière pour l'Afrique centrale.",
         en: 'Design, development and technical supervision of a strategic financial supervision tool for Central Africa.',
      },
      tasks: [
         {
            fr: "Référent technique sur l'ensemble des décisions frontend et UX, en coordination avec les équipes produit et backend.",
            en: 'Technical reference for all frontend and UX decisions, in coordination with product and backend teams.',
         },
         {
            fr: "Conception des parcours utilisateurs, wireframes et maquettes haute fidélité sur Figma pour une dizaine d'écrans clés.",
            en: 'User journeys, wireframes and high fidelity Figma designs for about ten key screens.',
         },
         {
            fr: 'Définition du design system : cohérence visuelle et réutilisation des composants sur toute l’application.',
            en: 'Design system definition: visual consistency and component reuse across the application.',
         },
         {
            fr: 'Développement du frontend complet en Angular, avec une intégration fidèle des maquettes.',
            en: 'Full Angular frontend development, with faithful implementation of the designs.',
         },
         {
            fr: "Implémentation des modules métier : authentification et habilitations, demandes d'agréments et de visas, facturation, notifications, tableaux de bord et statistiques.",
            en: 'Implementation of the business modules: authentication and permissions, licence and visa requests, invoicing, notifications, dashboards and statistics.',
         },
         {
            fr: "Mise en place des pratiques de performance, d'accessibilité et de tests pour un outil utilisé par plusieurs pays.",
            en: 'Performance, accessibility and testing practices for a tool used by several countries.',
         },
      ],
      keywords: ['Angular', 'TypeScript', 'Figma', 'Design system'],
   },
   {
      id: '01',
      title: {
         fr: 'Développeur senior Full Stack',
         en: 'Senior Full Stack developer',
      },
      company: 'AGYL TECH',
      date: { fr: 'Oct 2023 à Déc 2025', en: 'Oct 2023 to Dec 2025' },
      context: {
         fr: 'Studio produit, plusieurs projets clients en parallèle.',
         en: 'Product studio, several client projects in parallel.',
      },
      sortDate: '2023-10',
      description: {
         fr: 'Conception, développement et maintenance de plateformes web et mobiles internes et clientes, de la conception technique à la mise en production.',
         en: 'Design, development and maintenance of internal and client web and mobile platforms, from technical design to production.',
      },
      tasks: [
         {
            fr: 'Plateformes SaaS développées avec Next.js, React et Node.js : plateforme de services AGYL TECH, Atelier Bigoodee, Bigoodee Résa.',
            en: 'SaaS platforms built with Next.js, React and Node.js: AGYL TECH services platform, Atelier Bigoodee, Bigoodee Résa.',
         },
         {
            fr: "Applications mobiles React Native publiées sur l'App Store et Google Play : Lafya, Les Vadrouilleurs, Zakadia.",
            en: 'React Native mobile apps published on the App Store and Google Play: Lafya, Les Vadrouilleurs, Zakadia.',
         },
         {
            fr: 'Intégration de Mistral AI en multimodal pour extraire des données structurées à partir d’images.',
            en: 'Multimodal Mistral AI integration to extract structured data from images.',
         },
         {
            fr: 'Paiement, abonnements et authentification en production avec Stripe, Paddle et Clerk.',
            en: 'Payments, subscriptions and authentication in production with Stripe, Paddle and Clerk.',
         },
         {
            fr: "Conception et réalisation d'API REST et GraphQL.",
            en: 'Design and implementation of REST and GraphQL APIs.',
         },
         {
            fr: "Administration système et infrastructure des projets déployés, mise en place de pipelines d'intégration continue.",
            en: 'System administration and infrastructure for deployed projects, continuous integration pipelines.',
         },
         {
            fr: 'Planification des sprints et résolution de problèmes techniques complexes en contexte multi projets.',
            en: 'Sprint planning and resolution of complex technical issues across several projects.',
         },
      ],
      keywords: ['Next.js', 'React Native', 'Node.js', 'Stripe', 'Mistral AI'],
   },
   {
      id: '04',
      title: {
         fr: 'Directeur technique (CTO)',
         en: 'Chief Technology Officer',
      },
      company: 'Mappeos',
      date: { fr: 'Oct 2024 à Sept 2025', en: 'Oct 2024 to Sept 2025' },
      context: {
         fr: "Startup française, encadrement de l'équipe de développement, à distance.",
         en: 'French startup, led the development team, remote.',
      },
      sortDate: '2024-10',
      description: {
         fr: 'Direction technique d’une plateforme mettant en relation particuliers et techniciens locaux partout en France.',
         en: 'Technical leadership of a platform connecting individuals with local technicians across France.',
      },
      tasks: [
         {
            fr: 'Définition de l’architecture technique et de la stack (Next.js, Express).',
            en: 'Defined the technical architecture and stack (Next.js, Express).',
         },
         {
            fr: 'Encadrement et accompagnement de l’équipe de développement, supervision des sprints, de la qualité de code et des livraisons.',
            en: 'Coached the development team, oversaw sprints, code quality and deliveries.',
         },
         {
            fr: 'Solutions techniques garantissant la montée en charge, la sécurité et la maintenabilité.',
            en: 'Technical solutions ensuring scalability, security and maintainability.',
         },
         {
            fr: 'Collaboration avec les équipes non techniques pour transformer les besoins métier en produit.',
            en: 'Worked with non technical teams to turn business needs into product.',
         },
      ],
      keywords: ['Direction technique', 'Next.js', 'Express'],
   },
   {
      id: '05',
      title: {
         fr: 'Ingénieur Full Stack et administrateur systèmes',
         en: 'Full Stack engineer and systems administrator',
      },
      company: 'Communauté urbaine de Douala',
      date: { fr: 'Nov 2021 à Fév 2024', en: 'Nov 2021 to Feb 2024' },
      context: {
         fr: 'Institution publique, plateformes internes.',
         en: 'Public institution, internal platforms.',
      },
      sortDate: '2021-11',
      description: {
         fr: "Mise en place des plateformes web et mobiles de l'institution.",
         en: "Set up the institution's web and mobile platforms.",
      },
      tasks: [
         {
            fr: 'Applications complètes en Angular, React et React Native, avec Express côté serveur.',
            en: 'Complete applications in Angular, React and React Native, with Express on the server.',
         },
         {
            fr: 'Communication en temps réel via WebSocket.',
            en: 'Real time communication with WebSocket.',
         },
         {
            fr: 'Bases de données relationnelles et NoSQL (MySQL, MongoDB) et services Firebase.',
            en: 'Relational and NoSQL databases (MySQL, MongoDB) and Firebase services.',
         },
         {
            fr: 'Administration et déploiement de l’infrastructure sur Google Cloud, configuration serveur et supervision.',
            en: 'Infrastructure administration and deployment on Google Cloud, server configuration and monitoring.',
         },
      ],
      keywords: ['Angular', 'React Native', 'Express', 'Google Cloud'],
   },
   {
      id: '02',
      title: {
         fr: 'Développeur Front End junior',
         en: 'Junior front end developer',
      },
      company: 'AGYL TECH',
      date: { fr: 'Oct 2021 à Nov 2022', en: 'Oct 2021 to Nov 2022' },
      context: {
         fr: 'Agence, projets clients.',
         en: 'Agency, client projects.',
      },
      sortDate: '2021-10',
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
      keywords: ['Angular', 'React'],
   },
   {
      id: '03',
      title: {
         fr: 'Développeur web',
         en: 'Web developer',
      },
      company: 'DC Corp',
      date: { fr: 'Fév 2022 à Fév 2024', en: 'Feb 2022 to Feb 2024' },
      context: {
         fr: 'Agence, projets clients.',
         en: 'Agency, client projects.',
      },
      sortDate: '2022-02',
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
         {
            fr: 'Application LocalTik de partage de documents et de vidéos en local, publiée sur Google Play.',
            en: 'LocalTik app for local document and video sharing, published on Google Play.',
         },
      ],
      keywords: ['React', 'Android'],
   },
]

/** Experiences sorted by start date, most recent first. */
export const EXPERIENCES_LIST: Experience[] = [...EXPERIENCES].sort((a, b) => b.sortDate.localeCompare(a.sortDate))
