import { LinkIcon } from 'lucide-react'
import { Project } from '../util-types'

export const PROJECTS: Project[] = [
	{
		id: 'privie',
		image: '/projects/privie/privie-web-cover.jpg',
		title: 'Privie',
		description:
			"Vos informations personnelles sont exploitées sans votre consentement. Elles servent à vous harceler, vous manipuler, et peuvent même vous mettre en danger. Il est temps de reprendre le contrôle. Avec PrivieControl, reprenez le contrôle de votre vie privée dès aujourd'hui. Nous supprimons vos données de toutes les entreprises qui les exploitent, éliminons les risques, et ne laisserons plus jamais personne profiter de vous.",
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
		company: 'Projet Client',
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
				label: 'Lien',
				link: 'https://privie.io',
			},
		],
		date: '2021-12-25',
	},
	{
		id: 'amizone',
		image: '/projects/amizone/amizone-cover.jpg',
		title: 'Amizone CM',
		description:
			"Amizone est une plateforme camerounaise qui offre aux Camerounais en particulier, et aux Africains en général, la possibilité d'investir et de générer des revenus passifs, quel que soit leur niveau de revenu. Elle leur permet également de gagner en visibilité pour leur entreprise, de faire de nouvelles connaissances et de développer les meilleures relations avec les fournisseurs et les clients. Ainsi, elle favorise le réseautage et la communication entre nous, car c'est ensemble que nous ferons la différence.",
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
		company: 'Projet Client',
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
				label: 'Lien (Staging)',
				link: 'https://amizonecm-beta.vercel.app',
			},
			{
				icon: <LinkIcon className='size-6' />,
				label: 'Lien (Prod)',
				link: 'https://amizonecm.com',
			},
		],
		date: '2021-12-25',
	},
	{
		id: 'maori',
		image: '/projects/maori/maori-cover.jpg',
		title: 'Maori Consulting',
		description:
			'Maori Consulting est une entreprise de consulting en informatique. Elle offre des services de développement web et mobile, de consulting en informatique, de formation et de coaching. Elle a pour mission de fournir des solutions innovantes et de qualité à ses clients.',
		tags: ['NextJs', 'React', 'Redux Toolkit', 'Tailwind CSS', 'ShadCN UI', 'Zod', 'React-Hook-Form'],
		company: 'Projet de partenariat',
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
				label: 'Lien',
				link: 'https://maori-delta.vercel.app',
			},
		],
		date: '2021-11-25',
	},
	{
		id: 'localtik-web',
		image: '/projects/localtik-web/localtik-web-cover.jpg',
		title: 'Localtik Web',
		description:
			"Localtik est une plateforme qui permet de partager des documents et des informations avec des personnes de votre choix. Elle permet également de créer des groupes de discussion et de partager des fichiers avec ces groupes. Elle est conçue pour être simple et intuitive, et elle est accessible depuis n'importe quel appareil. Ce qui est présent c'est juste un prototype de l'idée global. Ce projet à été fait avec Angular.",
		tags: ['Angular', 'Tailwind CSS', 'NgRx', 'Angular Material'],
		company: 'Projet de partenariat',
		gallery: [
			'/projects/localtik-web/localtik-web-img-1.jpg',
			'/projects/localtik-web/localtik-web-img-2.jpg',
			'/projects/localtik-web/localtik-web-img-3.jpg',
		],
		links: [
			{
				icon: <LinkIcon className='size-6' />,
				label: 'Lien',
				link: 'https://localtik-web-beta.vercel.app/cloud',
			},
		],
		date: '2022-04-14',
	},
	{
		id: 'bon-paiement',
		image: '/projects/bon-paiement/bon-paiement-cover.jpg',
		title: 'Bon de paiement',
		description:
			"Bon de paiement est une application web qui permet de faire la gestion de paiement dans une entreprise, c'est projet fait de manière personnelle qui m'a permis de comprendre le fonctionnement de NextJs, l'api Context de React. Dans ce projet j'ai créer un composant FileUploader pour la récupération et l'upload de plusieurs fichiers images. J'ai également fait une intégration de React-ChartJs-2 pour la présentation d'un graphe de progression des movements générer. Cella été un réel plaisir, car pour ce projet j'ai fait un prototype sur Figma.",
		tags: ['React', 'NextJs', 'React Dom', 'React-ChartJs', 'SCSS'],
		company: 'Projet Personnel',
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
				label: 'Lien',
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
				label: 'GitHub',
				link: 'https://github.com/ronald-tchuekou/bon-paiement',
			},
		],
		date: '2022-01-25',
	},
	// {
	//   id: "bigoodee-mobile",
	//   image: "/images/projects/bigoodee-mobile.png",
	//   title: "Bigoodee Mobile",
	//   description:
	//     "Bigoodee est une application mobile qui permet de trouver des services de proximité.",
	//   tags: ["React Native", "Expo", "Redux Toolkit"],
	//   company: "AGYL TECH",
	// },
	// {
	//   id: "bigoodee-atelier-web",
	//   image: "/images/projects/bigoodee-atelier-web.png",
	//   title: "Bigoodee Atelier",
	//   description:
	//     "Bigoodee est une application web qui permet de trouver des services de proximité.",
	//   tags: ["Angular", "MaterialUI", "Tailwind CSS"],
	//   company: "AGYL TECH",
	// },
	// {
	//   id: "les-vadrouilleurs",
	//   image: "/images/projects/les-vadrouilleurs.png",
	//   title: "Les Vadrouilleurs",
	//   description: "Les vadrouilleurs est une application web de voyage.",
	//   tags: [
	//     "React Native",
	//     "Expo",
	//     "Google Map",
	//     "Redux Toolkit",
	//     "Async Storage",
	//   ],
	//   company: "AGYL TECH",
	// },
	// {
	//   id: "dolishop",
	//   image: "/images/projects/dolishop.png",
	//   title: "Dolishop",
	//   description: "Dolishop est une application web de vente en ligne.",
	//   tags: [
	//     "NextJS",
	//     "React",
	//     "Tailwind CSS",
	//     "Redux Toolkit",
	//     "Framer Motion",
	//     "WhatsApp",
	//   ],
	//   company: "AGYL TECH",
	// },
] as const
