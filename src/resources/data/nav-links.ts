import { NavLink } from '../util-types'

export const NAV_LINKS: NavLink[] = [
	{ url: '/', label: 'presentation' },
	{ url: '/expertises', label: 'expertises' },
	{ url: '/resume', label: 'resume' },
	{ url: '/projects', label: 'projects' },
	{ url: '/contact', label: 'contact' },
] as const
