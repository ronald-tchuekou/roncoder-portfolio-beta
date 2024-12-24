import { Service } from '../util-types'

export const SERVICES: Service[] = [
	{
		id: '01',
		key: 'ux_ui_design',
		title: 'UX/UI Design',
		description:
			"Je conçois des interfaces utilisateur intuitives et esthétiques qui offrent une expérience utilisateur optimale. Mon objectif est de créer des designs qui non seulement attirent l'œil, mais qui sont également fonctionnels et faciles à utiliser.",
	},
	{
		id: '02',
		key: 'web_dev',
		title: 'Développement web',
		description:
			"Vous avez besoin d'une application web moderne, responsive, épurée et attrayante qui respecte parfaitement votre charte graphique ? Je suis là pour transformer vos idées en réalité avec des solutions web sur mesure.",
	},
	{
		id: '03',
		key: 'mobile_dev',
		title: 'Développement mobile',
		description:
			'Vous avez besoin d’une application mobile moderne, épurée et attrayante, accessible sur iOS et Android, qui respecte parfaitement votre charte graphique ? Je développe des applications mobiles performantes et user-friendly.',
	},
	{
		id: '04',
		key: 'seo',
		title: 'SEO (Référencement naturel)',
		description:
			'Vous souhaitez optimiser le référencement naturel de votre plateforme pour maximiser votre trafic et augmenter vos ventes ou votre visibilité ? Je propose des stratégies SEO efficaces pour améliorer votre positionnement sur les moteurs de recherche.',
	},
	{
		id: '05',
		key: 'pay_tools_integration',
		title: 'Intégration d’outil de paiement',
		description:
			'Vous avez besoin d’ajouter un moyen de paiement dans votre application web et mobile ? Je vous aide à intégrer des solutions de paiement sécurisées et fiables pour faciliter les transactions de vos utilisateurs.',
	},
	{
		id: '06',
		key: 'deploy',
		title: 'Mise en production',
		description:
			'Vous avez besoin de déployer votre application pour la rendre accessible à votre audience ? Je m’occupe de la mise en production de vos applications, en assurant une transition fluide et sans interruption.',
	},
	{
		id: '07',
		key: 'api_build_or_integration',
		title: "Création et intégration d'API REST",
		description:
			'Vous avez besoin de créer ou d’intégrer des API REST pour votre application ? Je développe et intègre des API robustes et sécurisées pour améliorer les fonctionnalités et l’interopérabilité de vos applications.',
	},
] as const
