import { LinkIcon } from 'lucide-react'
import { Project } from '../util-types'

const AppleIcon = () => (
   <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='size-6'>
      <path
         fill='currentColor'
         stroke='none'
         d='M17.05 12.53c-.02-2.2 1.8-3.26 1.88-3.31-1.02-1.5-2.61-1.7-3.18-1.72-1.35-.14-2.64.79-3.33.79-.68 0-1.74-.77-2.86-.75-1.47.02-2.83.85-3.59 2.16-1.53 2.65-.39 6.57 1.1 8.72.73 1.05 1.6 2.23 2.75 2.19 1.1-.05 1.52-.71 2.85-.71 1.33 0 1.71.71 2.87.69 1.19-.02 1.94-1.07 2.66-2.13.84-1.22 1.19-2.4 1.21-2.46-.03-.01-2.32-.89-2.36-3.53zM14.9 5.6c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.55 1.31-.56.64-1.05 1.68-.92 2.67.97.07 1.96-.49 2.57-1.22z'
      />
   </svg>
)

const GooglePlayIcon = () => (
   <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='size-6'>
      <path
         fill='currentColor'
         stroke='none'
         d='M3.6 1.84a1.3 1.3 0 0 0-.35.9v18.52c0 .35.13.67.35.9l.06.06 10.38-10.38v-.24L3.66 1.78l-.06.06zm13.79 6.9L5.5 1.96l8.6 8.6 3.29-1.82zm2.9 1.6-2.6-1.44-3.4 3.1 3.4 3.4 2.6-1.44a1.35 1.35 0 0 0 0-3.62zM5.5 22.04l11.89-6.78-3.29-3.29-8.6 10.07z'
      />
   </svg>
)

const GitHubIcon = () => (
   <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='size-6'>
      <path
         fill='currentColor'
         stroke='none'
         d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
      />
   </svg>
)

const APP_STORE_LABEL = { fr: 'App Store', en: 'App Store' }
const GOOGLE_PLAY_LABEL = { fr: 'Google Play', en: 'Google Play' }
const SITE_LABEL = { fr: 'Site', en: 'Website' }

/** Store and source hosts never open in the embedded preview. */
const STORE_HOSTS = ['apps.apple.com', 'play.google.com', 'github.com']

export const isAppStoreLink = (url: string) => url.includes('apps.apple.com')
export const isGooglePlayLink = (url: string) => url.includes('play.google.com')

/** First link that can be shown inside the preview iframe, if any. */
export const previewableLink = (project: Project) =>
   project.platform === 'web' ? project.links.find((l) => !STORE_HOSTS.some((h) => l.link.includes(h))) : undefined

export const PROJECTS: Project[] = [
   {
      id: 'cosumaf',
      order: 1,
      featured: true,
      platform: 'confidential',
      image: '/projects/cosumaf/cover.svg',
      title: {
         fr: 'COSUMAF, outil de supervision financière régionale',
         en: 'COSUMAF, regional financial supervision tool',
      },
      company: { fr: 'NAFASI DIGITAL SARL', en: 'NAFASI DIGITAL SARL' },
      context: {
         fr: "NAFASI DIGITAL SARL, mission pour la COSUMAF, autorité de supervision financière d'Afrique centrale. Déc 2025 à aujourd'hui.",
         en: 'NAFASI DIGITAL SARL, engagement for COSUMAF, the Central African financial supervisory authority. Dec 2025 to today.',
      },
      role: { fr: 'Senior Frontend Engineer et consultant CTO', en: 'Senior Frontend Engineer and CTO consultant' },
      description: {
         fr: "Plateforme de supervision utilisée par l'autorité de régulation des marchés financiers d'Afrique centrale. Je conçois les parcours sur Figma, je définis le design system et je développe le frontend Angular des modules métier.",
         en: 'Supervision platform used by the Central African financial markets regulator. I design the user journeys in Figma, define the design system and build the Angular frontend of the business modules.',
      },
      contributions: [
         {
            fr: 'Référent technique du projet : décisions frontend et UX, coordination avec les équipes produit et backend.',
            en: 'Technical lead: frontend and UX decisions, coordination with product and backend teams.',
         },
         {
            fr: "Conception des parcours, wireframes et maquettes haute fidélité sur Figma pour une dizaine d'écrans clés.",
            en: 'User journeys, wireframes and high fidelity Figma designs for about ten key screens.',
         },
         {
            fr: 'Définition du design system garantissant la cohérence et la réutilisation des composants.',
            en: 'Design system definition ensuring consistency and component reuse.',
         },
         {
            fr: 'Développement complet du frontend Angular, intégration fidèle des maquettes.',
            en: 'Full Angular frontend development, faithful implementation of the designs.',
         },
         {
            fr: "Modules livrés : authentification et habilitations, demandes d'agréments et de visas, facturation, notifications, tableaux de bord.",
            en: 'Modules delivered: authentication and permissions, licence and visa requests, invoicing, notifications, dashboards.',
         },
      ],
      result: {
         fr: "Outil utilisé à l'échelle régionale par plusieurs pays, avec des pratiques de performance, d'accessibilité et de tests en place.",
         en: 'A tool used regionally by several countries, with performance, accessibility and testing practices in place.',
      },
      tags: ['Angular', 'TypeScript', 'Figma', 'Design system'],
      gallery: [],
      links: [],
      date: { fr: "Déc 2025 à aujourd'hui", en: 'Dec 2025 to today' },
   },
   {
      id: 'lafya',
      order: 2,
      featured: true,
      platform: 'mobile',
      image: '/projects/lafya/cover.svg',
      title: { fr: "Lafya, application d'entretien automobile", en: 'Lafya, car maintenance app' },
      company: { fr: 'AGYL TECH', en: 'AGYL TECH' },
      context: {
         fr: 'AGYL TECH pour Lafya, France. 2023 à 2025.',
         en: 'AGYL TECH for Lafya, France. 2023 to 2025.',
      },
      role: { fr: 'Développeur mobile', en: 'Mobile developer' },
      description: {
         fr: "Application React Native qui suit l'entretien d'un véhicule : rappels, documents et recherche de garages. J'y ai intégré Mistral AI en multimodal pour lire la carte grise et remplir la fiche du véhicule sans saisie manuelle.",
         en: 'React Native app that tracks vehicle maintenance: reminders, documents and garage search. I integrated Mistral AI in multimodal mode to read the registration card and fill in the vehicle record with no manual entry.',
      },
      contributions: [
         {
            fr: "Développement de l'application React Native avec Expo, sur iOS et Android.",
            en: 'React Native app development with Expo, on iOS and Android.',
         },
         {
            fr: "Intégration de Mistral AI en multimodal : la photo d'une carte grise est convertie en données structurées, sans saisie manuelle.",
            en: 'Mistral AI multimodal integration: a photo of a vehicle registration card is turned into structured data, with no manual entry.',
         },
         {
            fr: "Rappels d'entretien, stockage des documents, recherche de garages à proximité.",
            en: 'Maintenance reminders, document storage, nearby garage search.',
         },
         {
            fr: "Publication et mises à jour sur l'App Store et Google Play.",
            en: 'Publishing and updates on the App Store and Google Play.',
         },
      ],
      result: {
         fr: 'Application publiée sur les deux stores et utilisée par des automobilistes en France.',
         en: 'App published on both stores and used by drivers in France.',
      },
      tags: ['React Native', 'Expo', 'TypeScript', 'Mistral AI'],
      gallery: [],
      links: [
         {
            icon: <AppleIcon />,
            label: APP_STORE_LABEL,
            link: 'https://apps.apple.com/fr/app/lafya-entretien/id6450374401',
         },
         {
            icon: <GooglePlayIcon />,
            label: GOOGLE_PLAY_LABEL,
            link: 'https://play.google.com/store/apps/details?id=com.agyltech.lafya',
         },
         { icon: <LinkIcon className='size-6' />, label: SITE_LABEL, link: 'https://lafya.fr' },
      ],
      date: { fr: '2023 à 2025', en: '2023 to 2025' },
   },
   {
      id: 'mappeos',
      order: 3,
      featured: true,
      platform: 'web',
      image: '/projects/mappeos/cover.svg',
      title: { fr: 'Mappeos, plateforme de mise en relation', en: 'Mappeos, matchmaking platform' },
      company: { fr: 'Mappeos', en: 'Mappeos' },
      context: {
         fr: 'Mappeos, startup française. Oct 2024 à Sept 2025, à distance.',
         en: 'Mappeos, French startup. Oct 2024 to Sept 2025, remote.',
      },
      role: { fr: 'Directeur technique (CTO)', en: 'Chief Technology Officer' },
      description: {
         fr: "Plateforme de mise en relation menée de la conception à la production. J'ai défini l'architecture et la stack, encadré l'équipe de développement et traduit les besoins métier en spécifications techniques.",
         en: 'Matchmaking platform taken from design to production. I defined the architecture and the stack, led the development team and turned business needs into technical specifications.',
      },
      contributions: [
         {
            fr: "Définition de l'architecture technique et de la stack (Next.js, Express).",
            en: 'Defined the technical architecture and stack (Next.js, Express).',
         },
         {
            fr: "Encadrement de l'équipe de développement, organisation des sprints, revue de code.",
            en: 'Led the development team, ran sprints, reviewed code.',
         },
         {
            fr: 'Choix garantissant la sécurité, la maintenabilité et la montée en charge de la plateforme.',
            en: "Decisions ensuring the platform's security, maintainability and ability to scale.",
         },
         {
            fr: 'Traduction des besoins métier en spécifications avec les équipes non techniques.',
            en: 'Turning business needs into specifications with non technical teams.',
         },
      ],
      result: {
         fr: 'Produit mené de la conception initiale à la mise en production, avec une équipe qui livre à un rythme régulier.',
         en: 'A product taken from initial design to production, with a team shipping at a steady pace.',
      },
      tags: ['Next.js', 'Node.js', 'Express', 'TypeScript', 'CTO'],
      gallery: [],
      links: [],
      date: { fr: 'Oct 2024 à Sept 2025', en: 'Oct 2024 to Sept 2025' },
   },
   {
      id: 'zakadia',
      order: 4,
      featured: false,
      platform: 'mobile',
      image: '/projects/zakadia/cover.svg',
      title: { fr: 'Zakadia, livraison de colis entre voyageurs', en: 'Zakadia, parcel delivery between travellers' },
      company: { fr: 'AGYL TECH', en: 'AGYL TECH' },
      context: {
         fr: 'AGYL TECH pour Zakadia, France. 2024 à 2025.',
         en: 'AGYL TECH for Zakadia, France. 2024 to 2025.',
      },
      role: { fr: 'Développeur mobile', en: 'Mobile developer' },
      description: {
         fr: 'Application React Native qui met en relation des voyageurs et des expéditeurs : publication de trajets, réservation, paiement et suivi de livraison.',
         en: 'React Native app connecting travellers and senders: trip publishing, booking, payment and delivery tracking.',
      },
      contributions: [
         {
            fr: "Développement de l'application React Native (publication de trajets, recherche de transporteur, réservation, suivi de livraison).",
            en: 'React Native app development (trip publishing, carrier search, booking, delivery tracking).',
         },
         {
            fr: 'Intégration du paiement et de la géolocalisation.',
            en: 'Payment and geolocation integration.',
         },
         {
            fr: "Publication sur l'App Store et Google Play.",
            en: 'Publishing on the App Store and Google Play.',
         },
      ],
      result: {
         fr: 'Disponible sur les deux stores depuis juin 2024.',
         en: 'Available on both stores since June 2024.',
      },
      tags: ['React Native', 'Expo', 'TypeScript', 'GPS'],
      gallery: [],
      links: [
         { icon: <AppleIcon />, label: APP_STORE_LABEL, link: 'https://apps.apple.com/us/app/zakadia/id6503708050' },
         {
            icon: <GooglePlayIcon />,
            label: GOOGLE_PLAY_LABEL,
            link: 'https://play.google.com/store/apps/details?id=com.agyltech.zakadia',
         },
      ],
      date: { fr: '2024 à 2025', en: '2024 to 2025' },
   },
   {
      id: 'les-vadrouilleurs',
      order: 5,
      featured: false,
      platform: 'mobile',
      image: '/projects/les-vadrouilleurs/cover.svg',
      title: { fr: 'Les Vadrouilleurs, parcours touristiques', en: 'Les Vadrouilleurs, guided tour trails' },
      company: { fr: 'AGYL TECH', en: 'AGYL TECH' },
      context: {
         fr: 'AGYL TECH avec Agence 1400, France. 2023 à 2025.',
         en: 'AGYL TECH with Agence 1400, France. 2023 to 2025.',
      },
      role: { fr: 'Développeur mobile', en: 'Mobile developer' },
      description: {
         fr: 'Application React Native de jeux de piste et de visites guidées par GPS, dont les contenus multimédias sont administrés par les territoires.',
         en: 'React Native app for treasure hunts and GPS guided tours, whose multimedia content is managed by local authorities.',
      },
      contributions: [
         {
            fr: "Développement de l'application React Native de jeux de piste et visites guidées par GPS.",
            en: 'React Native app development for treasure hunts and GPS guided tours.',
         },
         {
            fr: 'Contenus multimédias (texte, photo, audio, vidéo) administrés par les territoires.',
            en: 'Multimedia content (text, photo, audio, video) managed by local authorities.',
         },
         {
            fr: 'Évolutions du fonctionnement des parcours et mises à jour sur les stores.',
            en: 'Changes to how the trails work, plus store updates.',
         },
      ],
      result: {
         fr: 'Application publiée sur les deux stores, utilisée par des offices de tourisme et des collectivités en France.',
         en: 'App published on both stores, used by tourist offices and local authorities in France.',
      },
      tags: ['React Native', 'Expo', 'TypeScript', 'GPS'],
      gallery: [],
      links: [
         {
            icon: <AppleIcon />,
            label: APP_STORE_LABEL,
            link: 'https://apps.apple.com/fr/app/les-vadrouilleurs/id1634201497',
         },
         {
            icon: <GooglePlayIcon />,
            label: GOOGLE_PLAY_LABEL,
            link: 'https://play.google.com/store/apps/details?id=com.vadrouilleursrn',
         },
         { icon: <LinkIcon className='size-6' />, label: SITE_LABEL, link: 'https://les-vadrouilleurs.fr' },
      ],
      date: { fr: '2023 à 2025', en: '2023 to 2025' },
   },
   {
      id: 'privie',
      order: 6,
      featured: false,
      platform: 'web',
      image: '/projects/privie/privie-web-cover.webp',
      title: { fr: 'Privie', en: 'Privie' },
      company: { fr: 'AGYL TECH', en: 'AGYL TECH' },
      context: { fr: 'AGYL TECH, projet client.', en: 'AGYL TECH, client project.' },
      role: { fr: 'Développeur frontend', en: 'Frontend developer' },
      description: {
         fr: "Service de suppression de données personnelles auprès des courtiers en données. J'ai développé l'interface Next.js, les tableaux de bord de suivi des demandes, la génération des documents PDF et le tunnel de paiement.",
         en: 'Service that removes personal data held by data brokers. I built the Next.js interface, the request tracking dashboards, the PDF document generation and the payment flow.',
      },
      contributions: [
         {
            fr: "Développement de l'interface Next.js et des composants réutilisables du produit.",
            en: 'Built the Next.js interface and the product reusable components.',
         },
         {
            fr: 'Tableaux de bord de suivi des demandes de suppression, avec graphiques Recharts.',
            en: 'Removal request tracking dashboards, with Recharts charts.',
         },
         {
            fr: 'Génération des documents PDF envoyés aux courtiers en données.',
            en: 'Generation of the PDF documents sent to data brokers.',
         },
         {
            fr: 'Intégration du paiement par carte avec Stripe et du paiement en crypto.',
            en: 'Card payment integration with Stripe, plus crypto payment.',
         },
      ],
      result: {
         fr: 'Plateforme en production avec paiement par carte et crypto.',
         en: 'Platform in production with card and crypto payment.',
      },
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Stripe', 'Crypto'],
      gallery: [
         '/projects/privie/privie-img-01.webp',
         '/projects/privie/privie-img-02.webp',
         '/projects/privie/privie-img-03.webp',
         '/projects/privie/privie-img-04.webp',
         '/projects/privie/privie-img-05.webp',
         '/projects/privie/privie-img-06.webp',
         '/projects/privie/privie-img-07.webp',
         '/projects/privie/privie-img-08.webp',
         '/projects/privie/privie-img-09.webp',
         '/projects/privie/privie-img-10.webp',
         '/projects/privie/privie-img-11.webp',
         '/projects/privie/privie-img-12.webp',
      ],
      links: [{ icon: <LinkIcon className='size-6' />, label: SITE_LABEL, link: 'https://privie.io' }],
      date: { fr: '2023 à 2025', en: '2023 to 2025' },
   },
   {
      id: 'amizone',
      order: 7,
      featured: false,
      platform: 'web',
      image: '/projects/amizone/amizone-cover.webp',
      title: { fr: 'Amizone CM', en: 'Amizone CM' },
      company: { fr: 'AGYL TECH', en: 'AGYL TECH' },
      context: { fr: 'AGYL TECH, projet client.', en: 'AGYL TECH, client project.' },
      role: { fr: 'Développeur frontend', en: 'Frontend developer' },
      description: {
         fr: "Plateforme camerounaise d'investissement et de mise en réseau entre entrepreneurs. J'ai développé l'espace membre, les tableaux de bord et l'authentification.",
         en: 'Cameroonian investment and business networking platform. I built the member area, the dashboards and the authentication.',
      },
      contributions: [
         {
            fr: "Développement de l'espace membre : profil, filleuls, suivi des placements.",
            en: 'Built the member area: profile, referrals, investment tracking.',
         },
         {
            fr: 'Tableaux de bord avec graphiques Recharts et export des relevés en PDF.',
            en: 'Dashboards with Recharts charts and PDF statement export.',
         },
         {
            fr: 'Authentification et gestion de session avec NextAuth, formulaires validés avec Zod.',
            en: 'Authentication and session handling with NextAuth, forms validated with Zod.',
         },
      ],
      result: {
         fr: 'Interface complète livrée et déployée sur un environnement de recette.',
         en: 'Full interface delivered and deployed to a staging environment.',
      },
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Recharts', 'NextAuth'],
      gallery: [
         '/projects/amizone/amizone-01.webp',
         '/projects/amizone/amizone-02.webp',
         '/projects/amizone/amizone-03.webp',
         '/projects/amizone/amizone-04.webp',
         '/projects/amizone/amizone-05.webp',
         '/projects/amizone/amizone-06.webp',
         '/projects/amizone/amizone-07.webp',
         '/projects/amizone/amizone-08.webp',
         '/projects/amizone/amizone-09.webp',
         '/projects/amizone/amizone-10.webp',
         '/projects/amizone/amizone-11.webp',
         '/projects/amizone/amizone-12.webp',
      ],
      links: [
         {
            icon: <LinkIcon className='size-6' />,
            label: { fr: 'Site (recette)', en: 'Website (staging)' },
            link: 'https://amizonecm-beta.vercel.app',
         },
      ],
      date: { fr: '2021 à 2022', en: '2021 to 2022' },
   },
   {
      id: 'localtik-web',
      order: 8,
      featured: false,
      platform: 'web',
      image: '/projects/localtik-web/localtik-web-cover.webp',
      title: { fr: 'Localtik', en: 'Localtik' },
      company: { fr: 'DC Corp', en: 'DC Corp' },
      context: { fr: 'DC Corp, puis prototype web.', en: 'DC Corp, then a web prototype.' },
      role: { fr: 'Développeur', en: 'Developer' },
      description: {
         fr: "Partage de documents et de vidéos sur un réseau local, né chez DC Corp sous forme d'application Android, puis repris en prototype web Angular.",
         en: 'Document and video sharing over a local network, born at DC Corp as an Android app, then rebuilt as an Angular web prototype.',
      },
      contributions: [
         {
            fr: 'Application Android de partage de documents et de vidéos en local, publiée sur Google Play.',
            en: 'Android app for local document and video sharing, published on Google Play.',
         },
         {
            fr: 'Prototype web en Angular avec NgRx.',
            en: 'Angular web prototype with NgRx.',
         },
         {
            fr: 'Interface de navigation dans les fichiers partagés et de prévisualisation des médias.',
            en: 'Interface to browse the shared files and preview the media.',
         },
      ],
      result: {
         fr: 'Prototype web en ligne, reprenant les parcours principaux de la version Android.',
         en: 'Web prototype online, reproducing the main flows of the Android version.',
      },
      tags: ['Angular', 'TypeScript', 'NgRx', 'Angular Material', 'Tailwind CSS'],
      gallery: [
         '/projects/localtik-web/localtik-web-img-1.webp',
         '/projects/localtik-web/localtik-web-img-2.webp',
         '/projects/localtik-web/localtik-web-img-3.webp',
      ],
      links: [
         {
            icon: <LinkIcon className='size-6' />,
            label: SITE_LABEL,
            link: 'https://localtik-web-beta.vercel.app/cloud',
         },
      ],
      date: { fr: '2022', en: '2022' },
   },
   {
      id: 'maori',
      order: 9,
      featured: false,
      platform: 'web',
      image: '/projects/maori/maori-cover.webp',
      title: { fr: 'Maori Consulting', en: 'Maori Consulting' },
      company: { fr: 'Maori Consulting', en: 'Maori Consulting' },
      context: { fr: 'Maori Consulting, projet en partenariat.', en: 'Maori Consulting, partner project.' },
      role: { fr: 'Développeur frontend', en: 'Frontend developer' },
      description: {
         fr: "Site vitrine d'une société de conseil en informatique : présentation des services, catalogue de formations et formulaire de contact.",
         en: 'Marketing site for an IT consulting company: services, training catalogue and contact form.',
      },
      contributions: [
         {
            fr: 'Développement du site Next.js à partir des maquettes fournies.',
            en: 'Built the Next.js site from the supplied designs.',
         },
         {
            fr: 'Pages de services et de formations, avec un contenu structuré et réutilisable.',
            en: 'Service and training pages, with structured and reusable content.',
         },
         {
            fr: 'Formulaire de contact validé avec Zod et React Hook Form.',
            en: 'Contact form validated with Zod and React Hook Form.',
         },
      ],
      result: {
         fr: 'Site en ligne, responsive, servant de vitrine commerciale à la société.',
         en: 'Site online and responsive, used as the company sales front.',
      },
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'React Hook Form'],
      gallery: [
         '/projects/maori/moari-img-01.webp',
         '/projects/maori/moari-img-02.webp',
         '/projects/maori/moari-img-03.webp',
         '/projects/maori/moari-img-04.webp',
         '/projects/maori/moari-img-05.webp',
         '/projects/maori/moari-img-06.webp',
         '/projects/maori/moari-img-07.webp',
         '/projects/maori/moari-img-08.webp',
      ],
      links: [{ icon: <LinkIcon className='size-6' />, label: SITE_LABEL, link: 'https://maori-delta.vercel.app' }],
      date: { fr: '2021', en: '2021' },
   },
   {
      id: 'bon-paiement',
      order: 10,
      featured: false,
      platform: 'web',
      image: '/projects/bon-paiement/bon-paiement-cover.webp',
      title: { fr: 'Bon de paiement', en: 'Payment Slip' },
      company: { fr: 'Projet personnel', en: 'Personal project' },
      context: { fr: 'Projet personnel.', en: 'Personal project.' },
      role: { fr: 'Conception Figma et développement', en: 'Figma design and development' },
      description: {
         fr: "Outil de gestion des bons de paiement d'une entreprise, conçu sur Figma puis développé en Next.js. Il m'a servi à approfondir le téléversement multiple de fichiers et la restitution graphique de données.",
         en: 'Tool to manage a company payment slips, designed in Figma then built with Next.js. I used it to dig into multiple file uploads and data visualisation.',
      },
      contributions: [
         {
            fr: 'Conception du prototype sur Figma avant le développement.',
            en: 'Designed the prototype in Figma before development.',
         },
         {
            fr: 'Composant de téléversement multiple de fichiers images, avec prévisualisation.',
            en: 'Multiple image file upload component, with preview.',
         },
         {
            fr: 'Graphiques de suivi des mouvements de paiement avec Chart.js.',
            en: 'Payment movement charts with Chart.js.',
         },
         {
            fr: "Gestion de l'état applicatif avec la Context API de React.",
            en: "Application state handled with React's Context API.",
         },
      ],
      result: {
         fr: 'Application déployée et code source public sur GitHub.',
         en: 'App deployed and source code public on GitHub.',
      },
      tags: ['Next.js', 'React', 'Chart.js', 'SCSS', 'Figma'],
      gallery: [
         '/projects/bon-paiement/bon-paiement-img-01.webp',
         '/projects/bon-paiement/bon-paiement-img-02.webp',
         '/projects/bon-paiement/bon-paiement-img-03.webp',
         '/projects/bon-paiement/bon-paiement-img-04.webp',
         '/projects/bon-paiement/bon-paiement-img-05.webp',
         '/projects/bon-paiement/bon-paiement-img-06.webp',
         '/projects/bon-paiement/bon-paiement-img-07.webp',
         '/projects/bon-paiement/bon-paiement-img-08.webp',
         '/projects/bon-paiement/bon-paiement-img-09.webp',
         '/projects/bon-paiement/bon-paiement-img-10.webp',
         '/projects/bon-paiement/bon-paiement-img-11.webp',
         '/projects/bon-paiement/bon-paiement-img-12.webp',
         '/projects/bon-paiement/bon-paiement-img-13.webp',
      ],
      links: [
         { icon: <LinkIcon className='size-6' />, label: SITE_LABEL, link: 'https://bon-paiement.vercel.app' },
         {
            icon: <GitHubIcon />,
            label: { fr: 'GitHub', en: 'GitHub' },
            link: 'https://github.com/ronald-tchuekou/bon-paiement',
         },
      ],
      date: { fr: '2022', en: '2022' },
   },
]
