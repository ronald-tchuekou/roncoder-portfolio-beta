import { Experience } from '../util-types'

export const EXPERIENCES_LIST: Experience[] = [
	{
		id: '01',
		title: 'Développeur Senior Full-Stack',
		company: 'AGYL TECH',
		date: 'Oct 2023 - Présent',
		description: 'Développement de plusieurs applications web et mobiles pour des clients locaux et internationaux.',
		tasks: [
			'Planification des taches (sprints) pour un projet donné.',
			'Conception de modèles de données pour les applications clients et internes.',
			'Analyse du besoin client et proposition de solutions techniques.',
			"Conception et réalisation d'API (REST, GraphQL) pour les applications web et mobiles.",
			"Conception et réalisation d'applications web et mobiles, respectivement en React Native (Expo) et NextJs/Angular, suivant les normes et conventions de l'entreprise.",
			'Mise en place de tests unitaires et fonctionnels pour les applications développées.',
			'Mise en place de pipelines CI/CD pour les applications développées.',
			'Maintenance et évolution des applications développées.',
			'Collaboration avec des équipes internes et externes pour la réalisation des projets.',
			'Gestion et administration des serveurs de développement et de production.',
			'Veille technologique et proposition de nouvelles technologies pour les projets.',
		],
	},
	{
		id: '02',
		title: 'Développeur Junior Front-End',
		company: 'AGYL TECH',
		date: 'Oct 2021 - Nov 2022',
		description: 'Développement de plusieurs applications web pour des clients locaux.',
		tasks: [
			"Conception et réalisation d'applications web en Angular, suivant les normes et conventions de l'entreprise.",
			'Mise en place de tests unitaires et fonctionnels pour les applications développées.',
			'Maintenance et évolution des applications développées.',
			'Réalisation de plusieurs POC pour des clients potentiels.',
			'Collaboration avec des équipes internes pour la réalisation des projets.',
		],
	},
	{
		id: '03',
		title: 'Développeur Front-End',
		company: 'DC Corp',
		date: 'Mai 2019 - Nov 2021',
		description: 'Développement de plusieurs applications web pour des clients locaux.',
		tasks: [
			"Conception et réalisation d'applications web en React, suivant les normes et conventions de l'entreprise.",
			'Conception de prototypes pour des clients potentiels.',
			'Maintenance et évolution des applications développées.',
			'Conception et réalisation des landing pages pour des clients locaux et internationaux.',
		],
	},
] as const
