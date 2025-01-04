import { LinkIcon } from 'lucide-react'
import { Project } from '../util-types'

export const PROJECTS: Project[] = [
   {
      id: 'privie',
      image: '/projects/privie/privie-web-cover.jpg',
      title: {
         fr: 'Privie',
         en: 'Privie',
      },
      description: {
         fr: "Vos informations personnelles sont exploitées sans votre consentement. Elles servent à vous harceler, vous manipuler, et peuvent même vous mettre en danger. Il est temps de reprendre le contrôle. Avec PrivieControl, reprenez le contrôle de votre vie privée dès aujourd'hui. Nous supprimons vos données de toutes les entreprises qui les exploitent, éliminons les risques, et ne laisserons plus jamais personne profiter de vous.",
         en: "Your personal information is being used without your consent. It is exploited to harass, manipulate, and even endanger you. It's time to take back control. With PrivieControl, regain control of your privacy today. We remove your data from all companies exploiting it, eliminate risks, and ensure no one ever takes advantage of you again.",
      },
      tags: [
         'NextJs',
         'React',
         'Redux Toolkit',
         'Tailwind CSS',
         'ShadCN UI',
         'Reacharts',
         'React-PDF',
         'Zod',
         'React-Hook-Form',
         'Stripe',
         'Cryptomonnaie',
      ],
      company: { fr: 'Projet Client', en: 'Client Project' },
      gallery: [
         '/projects/privie/privie-img-01.png',
         '/projects/privie/privie-img-02.png',
         '/projects/privie/privie-img-03.png',
         '/projects/privie/privie-img-04.png',
         '/projects/privie/privie-img-05.png',
         '/projects/privie/privie-img-06.png',
         '/projects/privie/privie-img-07.png',
         '/projects/privie/privie-img-08.png',
         '/projects/privie/privie-img-09.png',
         '/projects/privie/privie-img-10.png',
         '/projects/privie/privie-img-11.png',
         '/projects/privie/privie-img-12.png',
      ],
      links: [
         {
            icon: <LinkIcon className='size-6' />,
            label: { fr: 'Lien', en: 'Link' },
            link: 'https://privie.io',
         },
      ],
      date: {
         fr: '25 Décembre, 2021',
         en: 'December 25, 2021',
      },
   },
   {
      id: 'amizone',
      image: '/projects/amizone/amizone-cover.jpg',
      title: {
         fr: 'Amizone CM',
         en: 'Amizone CM',
      },
      description: {
         fr: "Amizone est une plateforme camerounaise qui offre aux Camerounais en particulier, et aux Africains en général, la possibilité d'investir et de générer des revenus passifs, quel que soit leur niveau de revenu. Elle leur permet également de gagner en visibilité pour leur entreprise, de faire de nouvelles connaissances et de développer les meilleures relations avec les fournisseurs et les clients. Ainsi, elle favorise le réseautage et la communication entre nous, car c'est ensemble que nous ferons la différence.",
         en: 'Amizone is a Cameroonian platform that offers Cameroonians in particular, and Africans in general, the opportunity to invest and generate passive income, regardless of their income level. It also helps businesses gain visibility, make new connections, and develop strong relationships with suppliers and clients. Thus, it fosters networking and communication among us, as together we can make a difference.',
      },
      tags: [
         'NextJs',
         'React',
         'Redux Toolkit',
         'Tailwind CSS',
         'ShadCN UI',
         'Reacharts',
         'React-PDF',
         'Zod',
         'React-Hook-Form',
         'React-Tree',
         'Next Auth',
      ],
      company: { fr: 'Projet Client', en: 'Client Project' },
      gallery: [
         '/projects/amizone/amizone-01.jpg',
         '/projects/amizone/amizone-02.jpg',
         '/projects/amizone/amizone-03.jpg',
         '/projects/amizone/amizone-04.jpg',
         '/projects/amizone/amizone-05.jpg',
         '/projects/amizone/amizone-06.jpg',
         '/projects/amizone/amizone-07.jpg',
         '/projects/amizone/amizone-08.jpg',
         '/projects/amizone/amizone-09.jpg',
         '/projects/amizone/amizone-10.jpg',
         '/projects/amizone/amizone-11.jpg',
         '/projects/amizone/amizone-12.jpg',
      ],
      authentication: {
         username: '600000001',
         password: 'Amizone@2024',
      },
      links: [
         {
            icon: <LinkIcon className='size-6' />,
            label: { fr: 'Lien (Prod)', en: 'Link (Prod)' },
            link: 'https://amizonecm.com',
         },
         {
            icon: <LinkIcon className='size-6' />,
            label: { fr: 'Lien (Staging)', en: 'Link (Staging)' },
            link: 'https://amizonecm-beta.vercel.app',
         },
      ],
      date: {
         fr: '25 Novembre, 2021 2021',
         en: 'December 25, 2021',
      },
   },
   {
      id: 'maori',
      image: '/projects/maori/maori-cover.jpg',
      title: {
         fr: 'Maori Consulting',
         en: 'Maori Consulting',
      },
      description: {
         fr: 'Maori Consulting est une entreprise de consulting en informatique. Elle offre des services de développement web et mobile, de consulting en informatique, de formation et de coaching. Elle a pour mission de fournir des solutions innovantes et de qualité à ses clients.',
         en: 'Maori Consulting is an IT consulting company. It offers web and mobile development, IT consulting, training, and coaching services. Its mission is to provide innovative and high-quality solutions to its clients.',
      },
      tags: ['NextJs', 'React', 'Redux Toolkit', 'Tailwind CSS', 'ShadCN UI', 'Zod', 'React-Hook-Form'],
      company: { fr: 'Partenariat', en: 'Partner Project' },
      gallery: [
         '/projects/maori/moari-img-01.png',
         '/projects/maori/moari-img-02.png',
         '/projects/maori/moari-img-03.png',
         '/projects/maori/moari-img-04.png',
         '/projects/maori/moari-img-05.png',
         '/projects/maori/moari-img-06.png',
         '/projects/maori/moari-img-07.png',
         '/projects/maori/moari-img-08.png',
      ],
      links: [
         {
            icon: <LinkIcon className='size-6' />,
            label: { fr: 'Lien', en: 'Link' },
            link: 'https://maori-delta.vercel.app',
         },
      ],
      date: {
         fr: '25 Novembre, 2021',
         en: 'November 25, 2021',
      },
   },
   {
      id: 'localtik-web',
      image: '/projects/localtik-web/localtik-web-cover.jpg',
      title: {
         fr: 'Localtik Web',
         en: 'Localtik Web',
      },
      description: {
         fr: "Localtik est une plateforme qui permet de partager des documents et des informations avec des personnes de votre choix. Elle permet également de créer des groupes de discussion et de partager des fichiers avec ces groupes. Elle est conçue pour être simple et intuitive, et elle est accessible depuis n'importe quel appareil. Ce qui est présent c'est juste un prototype de l'idée global. Ce projet à été fait avec Angular.",
         en: 'Localtik is a platform for sharing documents and information with people of your choice. It also allows creating discussion groups and sharing files with these groups. Designed to be simple and intuitive, it is accessible from any device. This project is just a prototype of the overall idea and was built with Angular.',
      },
      tags: ['Angular', 'Tailwind CSS', 'NgRx', 'Angular Material'],
      company: { fr: 'Partenariat', en: 'Partner Project' },
      gallery: [
         '/projects/localtik-web/localtik-web-img-1.jpg',
         '/projects/localtik-web/localtik-web-img-2.jpg',
         '/projects/localtik-web/localtik-web-img-3.jpg',
      ],
      links: [
         {
            icon: <LinkIcon className='size-6' />,
            label: { fr: 'Lien', en: 'Link' },
            link: 'https://localtik-web-beta.vercel.app/cloud',
         },
      ],
      date: {
         fr: '14 Avril, 2022',
         en: 'April 14, 2022',
      },
   },
   {
      id: 'bon-paiement',
      image: '/projects/bon-paiement/bon-paiement-cover.jpg',
      title: {
         fr: 'Bon de paiement',
         en: 'Payment Slip',
      },
      description: {
         fr: "Bon de paiement est une application web qui permet de faire la gestion de paiement dans une entreprise, c'est projet fait de manière personnelle qui m'a permis de comprendre le fonctionnement de NextJs, l'api Context de React. Dans ce projet j'ai créer un composant FileUploader pour la récupération et l'upload de plusieurs fichiers images. J'ai également fait une intégration de React-ChartJs-2 pour la présentation d'un graphe de progression des movements générer. Cella été un réel plaisir, car pour ce projet j'ai fait un prototype sur Figma.",
         en: "Payment Slip is a web application for managing payments within a company. This personal project helped me understand NextJs and React's Context API. I created a FileUploader component for retrieving and uploading multiple image files and integrated React-ChartJs-2 to display a graph of generated movement progressions. It was a real pleasure, as I also designed a prototype for this project on Figma.",
      },
      tags: ['React', 'NextJs', 'React Dom', 'React-ChartJs', 'SCSS'],
      company: { fr: 'Projet personnel', en: 'Personal Project' },
      gallery: [
         '/projects/bon-paiement/bon-paiement-img-01.jpg',
         '/projects/bon-paiement/bon-paiement-img-02.jpg',
         '/projects/bon-paiement/bon-paiement-img-03.jpg',
         '/projects/bon-paiement/bon-paiement-img-04.jpg',
         '/projects/bon-paiement/bon-paiement-img-05.jpg',
         '/projects/bon-paiement/bon-paiement-img-06.jpg',
         '/projects/bon-paiement/bon-paiement-img-07.jpg',
         '/projects/bon-paiement/bon-paiement-img-08.jpg',
         '/projects/bon-paiement/bon-paiement-img-09.jpg',
         '/projects/bon-paiement/bon-paiement-img-10.jpg',
         '/projects/bon-paiement/bon-paiement-img-11.jpg',
         '/projects/bon-paiement/bon-paiement-img-12.jpg',
         '/projects/bon-paiement/bon-paiement-img-13.jpg',
      ],
      authentication: {
         username: 'demo',
         password: 'demo',
      },
      links: [
         {
            icon: <LinkIcon className='size-6' />,
            label: { fr: 'Lien', en: 'Link' },
            link: 'https://bon-paiement.vercel.app',
         },
         {
            icon: (
               <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='size-6'>
                  <path
                     fill='currentColor'
                     stroke='none'
                     d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
                  />
               </svg>
            ),
            label: { fr: 'GitHub', en: 'GitHub' },
            link: 'https://github.com/ronald-tchuekou/bon-paiement',
         },
      ],
      date: {
         fr: '25 Janvier, 2022',
         en: 'January 25, 2022',
      },
   },
] as const
