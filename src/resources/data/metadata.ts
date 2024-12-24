import { Metadata } from 'next'

export const METADATA_KEYWORDS = [
	'Ronald',
	'Tchuekou',
	'Ronald Tchuekou',
	'Portfolio',
	'Ronald Tchuekou Portfolio',
	'Web',
	'Mobile',
	'Front',
	'FrontEnd',
	'FullStack',
	'Full',
	'Next.js',
	'React',
	'JavaScript',
	'TypeScript',
	'Angular',
	'TailwindCSS',
	'Stripe',
	'Paddle',
	'BTCPay Sever',
]

export const METADATA: Metadata = {
	generator: 'Next.js',
	applicationName: 'roncoder',
	referrer: 'origin-when-cross-origin',
	keywords: [...METADATA_KEYWORDS],
	authors: [{ name: 'Ronald Tchuekou' }],
	creator: 'Ronald Tchuekou',
	publisher: 'Vercel',
	category: 'technology',
	twitter: {
		card: 'summary_large_image',
		title: 'Ronald Tchuekou Portfolio, Développeur FullStack et Administrateur de systèmes',
		description:
			'Je conçois et implémente des applications web et mobiles, design des prototypes professionnels pour décrire au mieux le scénario des fonctionnalités de vos applications.',
		siteId: '@TchuekouRonald',
		creator: '@TchuekouRonald',
		creatorId: '@TchuekouRonald',
		images: [`${process.env.BASE_LINK}/ronald-tchuekou-profile.jpg`], // Must be an absolute URL
	},
}
