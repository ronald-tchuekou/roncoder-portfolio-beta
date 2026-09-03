import { Expertise } from '../util-types'

/** Technical areas, ordered from the most present in the day to day work to the least. */
export const EXPERTISES: Expertise[] = [
   {
      id: '01',
      key: 'frontend',
      title: {
         fr: 'Développement frontend web',
         en: 'Frontend web development',
      },
      summary: {
         fr: "Je construis des interfaces React, Next.js et Angular en TypeScript, du composant isolé à l'application complète. Je travaille avec un design system pour garder une cohérence visuelle et limiter la dette.",
         en: 'I build React, Next.js and Angular interfaces in TypeScript, from a single component to a full application. I work with a design system to keep the interface consistent and limit technical debt.',
      },
      highlights: [
         {
            fr: 'Applications Next.js avec rendu serveur, routes internationalisées et optimisation du référencement.',
            en: 'Next.js applications with server rendering, internationalised routes and SEO optimisation.',
         },
         {
            fr: "Applications Angular structurées en modules, avec gestion d'état et formulaires complexes.",
            en: 'Angular applications structured in modules, with state management and complex forms.',
         },
         {
            fr: 'Design system et bibliothèque de composants réutilisables, intégration fidèle des maquettes.',
            en: 'Design system and reusable component library, faithful implementation of designs.',
         },
         {
            fr: 'Performance et accessibilité : chargement des images, découpage du code, contraste, navigation au clavier.',
            en: 'Performance and accessibility: image loading, code splitting, contrast, keyboard navigation.',
         },
      ],
      stack: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
      projects: ['cosumaf', 'privie', 'amizone'],
   },
   {
      id: '02',
      key: 'mobile',
      title: {
         fr: 'Développement mobile',
         en: 'Mobile development',
      },
      summary: {
         fr: "Je développe des applications React Native avec Expo, publiées sur l'App Store et Google Play. Trois de mes applications sont aujourd'hui accessibles au public.",
         en: 'I build React Native applications with Expo, published on the App Store and Google Play. Three of my apps are publicly available today.',
      },
      highlights: [
         {
            fr: 'Cycle complet : développement, préparation des fiches, publication et mises à jour sur les deux stores.',
            en: 'Full cycle: development, store listings, publishing and updates on both stores.',
         },
         {
            fr: 'Fonctions natives : appareil photo, géolocalisation, notifications, stockage sécurisé.',
            en: 'Native features: camera, geolocation, notifications, secure storage.',
         },
         {
            fr: "Intégration de paiement et d'authentification dans les applications mobiles.",
            en: 'Payment and authentication integration in mobile apps.',
         },
         {
            fr: 'Lecture automatique de documents par modèle multimodal (Mistral AI) dans Lafya.',
            en: 'Automatic document reading with a multimodal model (Mistral AI) in Lafya.',
         },
      ],
      stack: ['React Native', 'Expo', 'TypeScript'],
      projects: ['lafya', 'zakadia', 'les-vadrouilleurs'],
   },
   {
      id: '03',
      key: 'backend',
      title: {
         fr: 'Backend et intégrations',
         en: 'Backend and integrations',
      },
      summary: {
         fr: "Je conçois et consomme des API REST et GraphQL en Node.js, et j'intègre les briques tierces qui portent le produit : paiement, abonnements, authentification, intelligence artificielle.",
         en: 'I design and consume REST and GraphQL APIs in Node.js, and integrate the third party building blocks a product relies on: payments, subscriptions, authentication and AI.',
      },
      highlights: [
         {
            fr: 'API REST et GraphQL avec Express, modélisation des données relationnelles et NoSQL.',
            en: 'REST and GraphQL APIs with Express, relational and NoSQL data modelling.',
         },
         {
            fr: 'Paiement et abonnements en production avec Stripe et Paddle, gestion des webhooks.',
            en: 'Payments and subscriptions in production with Stripe and Paddle, webhook handling.',
         },
         {
            fr: 'Authentification et gestion des habilitations, notamment avec Clerk.',
            en: 'Authentication and permission management, including with Clerk.',
         },
         {
            fr: 'Communication en temps réel via WebSocket.',
            en: 'Real time communication with WebSocket.',
         },
      ],
      stack: [
         'Node.js',
         'Express',
         'PostgreSQL',
         'MySQL',
         'MongoDB',
         'Firebase',
         'Stripe',
         'Paddle',
         'Clerk',
         'Mistral AI',
      ],
      projects: ['privie', 'lafya', 'amizone'],
   },
   {
      id: '04',
      key: 'design',
      title: {
         fr: 'Conception UX/UI et design system',
         en: 'UX/UI design and design systems',
      },
      summary: {
         fr: "Je conçois les parcours et les écrans sur Figma avant de les développer moi même, ce qui réduit les allers retours entre design et développement.",
         en: 'I design user journeys and screens in Figma before building them myself, which cuts the back and forth between design and development.',
      },
      highlights: [
         {
            fr: 'Parcours utilisateurs, wireframes et maquettes haute fidélité.',
            en: 'User journeys, wireframes and high fidelity designs.',
         },
         {
            fr: "Design system : jetons, composants, états, documentation d'usage.",
            en: 'Design system: tokens, components, states, usage documentation.',
         },
         {
            fr: 'Prototypes cliquables pour valider une interface avant développement.',
            en: 'Clickable prototypes to validate an interface before development.',
         },
         {
            fr: 'Accessibilité prise en compte dès la maquette : contraste, tailles de cible, hiérarchie.',
            en: 'Accessibility considered from the design stage: contrast, target sizes, hierarchy.',
         },
      ],
      stack: ['Figma', 'Design system', 'Prototypage'],
      projects: ['cosumaf', 'bon-paiement'],
   },
   {
      id: '05',
      key: 'leadership',
      title: {
         fr: 'Direction technique et livraison',
         en: 'Technical leadership and delivery',
      },
      summary: {
         fr: "J'ai tenu le rôle de directeur technique et de référent frontend : choix d'architecture, encadrement de développeurs, organisation des livraisons, mise en place des chaînes d'intégration continue.",
         en: 'I have held the role of technical director and frontend lead: architecture decisions, coaching developers, organising deliveries, setting up continuous integration.',
      },
      highlights: [
         {
            fr: "Choix de la stack et de l'architecture, arbitrage entre délai, coût et dette technique.",
            en: 'Stack and architecture choices, balancing time, cost and technical debt.',
         },
         {
            fr: 'Encadrement de développeurs, revue de code, organisation des sprints.',
            en: 'Coaching developers, code review, sprint organisation.',
         },
         {
            fr: 'Intégration continue et déploiement automatisé (GitHub Actions, Vercel, Docker, VPS).',
            en: 'Continuous integration and automated deployment (GitHub Actions, Vercel, Docker, VPS).',
         },
         {
            fr: 'Administration serveur et supervision des applications en production.',
            en: 'Server administration and monitoring of production applications.',
         },
      ],
      stack: ['GitHub Actions', 'Docker', 'Vercel', 'Google Cloud', 'VPS', 'Coolify', 'n8n', 'Backblaze B2'],
      projects: ['mappeos', 'cosumaf'],
   },
]
