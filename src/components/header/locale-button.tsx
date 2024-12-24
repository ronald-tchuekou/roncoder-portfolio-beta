'use client'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { Link } from '@src/i18n/routing'
import { Check } from 'lucide-react'
import { useLocale } from 'next-intl'
import { FC } from 'react'

export const LocaleButton: FC = () => {
	const curLocale = useLocale()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size={'icon'} variant={'outline'} className='rounded-full'>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35 36' fill='none' className={cn('size-6')}>
						<path
							fill='currentColor'
							d='M17.5 32.583c-2.017 0-3.913-.383-5.688-1.149-1.774-.766-3.317-1.805-4.63-3.116-1.312-1.312-2.351-2.855-3.116-4.63C3.3 21.912 2.918 20.015 2.916 18c0-2.016.383-3.912 1.15-5.688.767-1.775 1.806-3.318 3.116-4.63 1.31-1.311 2.854-2.35 4.63-3.116 1.777-.766 3.673-1.15 5.688-1.15 2.015 0 3.911.384 5.688 1.15 1.776.766 3.32 1.805 4.63 3.116 1.31 1.312 2.35 2.855 3.118 4.63.768 1.776 1.15 3.672 1.147 5.688-.003 2.016-.386 3.912-1.149 5.688-.763 1.775-1.802 3.318-3.116 4.63a14.814 14.814 0 0 1-4.63 3.118c-1.773.767-3.669 1.15-5.688 1.147Zm0-2.916c3.257 0 6.016-1.13 8.276-3.391 2.26-2.26 3.39-5.02 3.39-8.276 0-.17-.005-.347-.017-.53a8.45 8.45 0 0 1-.019-.454 2.893 2.893 0 0 1-.984 1.75 2.807 2.807 0 0 1-1.896.692h-2.917a2.807 2.807 0 0 1-2.059-.856 2.814 2.814 0 0 1-.857-2.06v-1.459h-5.834v-2.916c0-.802.286-1.489.858-2.06A2.815 2.815 0 0 1 17.5 9.25h1.458c0-.559.152-1.051.457-1.476a3.81 3.81 0 0 1 1.111-1.04 15.112 15.112 0 0 0-1.476-.291 10.686 10.686 0 0 0-1.55-.11c-3.257 0-6.016 1.13-8.276 3.391-2.26 2.26-3.39 5.019-3.39 8.276h7.291c1.604 0 2.977.571 4.12 1.713 1.142 1.143 1.713 2.516 1.713 4.12v1.459h-4.375v4.01c.486.122.967.213 1.441.274.475.061.967.092 1.476.09Z'
						/>
					</svg>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56' align='end'>
				<DropdownMenuItem asChild>
					<Link href='/' locale={'en'}>
						<Button size='sm' variant={'ghost'}>
							<Check className={cn('mr-2 invisible', { visible: curLocale === 'en' })} />
							🇬🇧 English
						</Button>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href='/' locale={'fr'}>
						<Button size='sm' variant={'ghost'}>
							<Check className={cn('mr-2 invisible', { visible: curLocale === 'fr' })} />
							🇫🇷 Français
						</Button>
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
