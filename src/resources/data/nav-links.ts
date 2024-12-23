import { NavLink } from '../util-types'

export const NAV_LINKS: NavLink[] = [
	{ url: '/', label: 'Presentation' },
	{ url: '/services', label: 'Services' },
	{ url: '/resume', label: 'Résumé' },
	{ url: '/projects', label: 'Projets' },
	{ url: '/contact', label: 'Contact' },
] as const
