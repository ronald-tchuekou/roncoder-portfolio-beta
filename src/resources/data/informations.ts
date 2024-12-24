import { Information } from '../util-types'

export const INFORMATIONS: Information[] = [
	{
		id: 'name',
		label: 'Nom',
		value: 'Ronald Tchuekou',
		isLong: false,
	},
	{
		id: 'phone',
		label: 'Téléphone',
		value: '(+237) 658 172 868',
		isLong: false,
	},
	{
		id: 'experience',
		label: 'Expérience',
		value: "6 ans d'expérience",
		isLong: false,
	},
	{
		id: 'origin',
		label: 'Nationalité',
		value: 'Camerounaise',
		isLong: false,
	},
	{
		id: 'email',
		label: 'Email',
		value: 'ronaldtchuekou@gmail.com',
		isLong: false,
		link: 'mailto: ronaldtchuekou@gmail.com',
	},
	{
		id: 'language',
		label: 'Langue',
		value: 'Français / English',
		isLong: false,
	},
	{
		id: 'github',
		label: 'Github',
		value: 'https://github.com/ronald-tchuekou',
		isLong: true,
		link: 'https://github.com/ronald-tchuekou',
	},
	{
		id: 'linked_in',
		label: 'LinkedIn',
		value: 'https://linkedin.com/in/ronald-tchuekou-02129b191',
		isLong: true,
		link: 'https://linkedin.com/in/ronald-tchuekou-02129b191',
	},
] as const
