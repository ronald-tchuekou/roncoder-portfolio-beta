import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl'
import { FC } from "react";
import { Container } from "../container";
import { RevealFromBottom } from "../motions/reveal-from-bottom";

export const CounterSection: FC = () => {
	const t = useTranslations('home')

	return (
		<Container className='pb-10'>
			<section className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-3 md:gap-8')}>
				<RevealFromBottom className='flex gap-3'>
					<p className='text-5xl font-extrabold text-foreground'>5</p>
					<p>
						{t('year')} <br /> {t('of_experiences')}
					</p>
				</RevealFromBottom>

				<RevealFromBottom delay={0.2} className='flex gap-3'>
					<p className='text-5xl font-extrabold text-foreground'>13</p>
					<p>
						{t('projects')} <br /> {t('finish')}
					</p>
				</RevealFromBottom>

				<RevealFromBottom delay={0.3} className='flex gap-3'>
					<p className='text-5xl font-extrabold text-foreground'>8</p>
					<p>
						{t('technologies')} <br /> {t('mastered')}
					</p>
				</RevealFromBottom>

				<RevealFromBottom delay={0.4} className='flex gap-3'>
					<p className='text-5xl font-extrabold text-foreground'>5987</p>
					<p>
						Github <br /> Contributions
					</p>
				</RevealFromBottom>
			</section>
		</Container>
	)
};
