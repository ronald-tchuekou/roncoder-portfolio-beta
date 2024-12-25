import { Service } from '../util-types'

export const SERVICES: Service[] = [
	{
		id: '01',
		key: 'ux_ui_design',
		title: {
			en: 'UX/UI Design',
			fr: 'Design UX/UI',
		},
		description: {
			en: 'I design intuitive and aesthetic user interfaces that offer an optimal user experience. My goal is to create designs that are not only eye-catching but also functional and easy to use.',
			fr: "Je conçois des interfaces utilisateur intuitives et esthétiques qui offrent une expérience utilisateur optimale. Mon objectif est de créer des designs qui non seulement attirent l'œil, mais qui sont également fonctionnels et faciles à utiliser.",
		},
	},
	{
		id: '02',
		key: 'web_dev',
		title: {
			en: 'Web Development',
			fr: 'Développement web',
		},
		description: {
			en: 'Do you need a modern, responsive, clean, and attractive web application that perfectly respects your graphic charter? I am here to turn your ideas into reality with custom web solutions.',
			fr: "Vous avez besoin d'une application web moderne, responsive, épurée et attrayante qui respecte parfaitement votre charte graphique ? Je suis là pour transformer vos idées en réalité avec des solutions web sur mesure.",
		},
	},
	{
		id: '03',
		key: 'mobile_dev',
		title: {
			en: 'Mobile Development',
			fr: 'Développement mobile',
		},
		description: {
			en: 'Do you need a modern, clean, and attractive mobile application, accessible on iOS and Android, that perfectly respects your graphic charter? I develop high-performance and user-friendly mobile applications.',
			fr: 'Vous avez besoin d’une application mobile moderne, épurée et attrayante, accessible sur iOS et Android, qui respecte parfaitement votre charte graphique ? Je développe des applications mobiles performantes et user-friendly.',
		},
	},
	{
		id: '04',
		key: 'seo',
		title: {
			en: 'SEO (Search Engine Optimization)',
			fr: 'SEO (Référencement naturel)',
		},
		description: {
			en: 'Do you want to optimize the natural referencing of your platform to maximize your traffic and increase your sales or visibility? I offer effective SEO strategies to improve your positioning on search engines.',
			fr: 'Vous souhaitez optimiser le référencement naturel de votre plateforme pour maximiser votre trafic et augmenter vos ventes ou votre visibilité ? Je propose des stratégies SEO efficaces pour améliorer votre positionnement sur les moteurs de recherche.',
		},
	},
	{
		id: '05',
		key: 'pay_tools_integration',
		title: {
			en: 'Payment Tool Integration',
			fr: 'Intégration d’outil de paiement',
		},
		description: {
			en: 'Do you need to add a payment method to your web and mobile application? I help you integrate secure and reliable payment solutions to facilitate your users’ transactions.',
			fr: 'Vous avez besoin d’ajouter un moyen de paiement dans votre application web et mobile ? Je vous aide à intégrer des solutions de paiement sécurisées et fiables pour faciliter les transactions de vos utilisateurs.',
		},
	},
	{
		id: '06',
		key: 'deploy',
		title: {
			en: 'Deployment',
			fr: 'Mise en production',
		},
		description: {
			en: 'Do you need to deploy your application to make it accessible to your audience? I take care of the deployment of your applications, ensuring a smooth and uninterrupted transition.',
			fr: 'Vous avez besoin de déployer votre application pour la rendre accessible à votre audience ? Je m’occupe de la mise en production de vos applications, en assurant une transition fluide et sans interruption.',
		},
	},
	{
		id: '07',
		key: 'api_build_or_integration',
		title: {
			en: 'API Creation and Integration',
			fr: "Création et intégration d'API REST",
		},
		description: {
			en: 'Do you need to create or integrate REST APIs for your application? I develop and integrate robust and secure APIs to enhance the functionality and interoperability of your applications.',
			fr: 'Vous avez besoin de créer ou d’intégrer des API REST pour votre application ? Je développe et intègre des API robustes et sécurisées pour améliorer les fonctionnalités et l’interopérabilité de vos applications.',
		},
	},
	{
		id: '08',
		key: 'other_services',
		title: {
			en: 'Other Services',
			fr: 'Autres services',
		},
		description: {
			en: 'Do you have other specific needs that are not listed here? Feel free to contact me to discuss your project and find the best solution together.',
			fr: 'Vous avez d’autres besoins spécifiques qui ne sont pas listés ici ? N’hésitez pas à me contacter pour discuter de votre projet et trouver ensemble la meilleure solution.',
		},
	},
] as const
