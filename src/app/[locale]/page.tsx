import { cn } from "@/lib/utils";
import { Container } from "@src/components/container";
import { CounterSection } from "@src/components/home/counter-section";
import { InfoSection } from "@src/components/home/info-section";
import { ProfileSection } from "@src/components/home/profile-section";
import { setRequestLocale } from 'next-intl/server'

type Props = {
	params: Promise<{ locale: string }>
}

export default async function Page({ params }: Props) {
	const locale = (await params).locale

	// Enable static rendering
	setRequestLocale(locale)

	return (
		<main>
			<Container className={cn('grid grid-cols-1 md:grid-cols-2 gap-3 py-10 lg:py-10')}>
				<InfoSection />
				<ProfileSection />
			</Container>
			<CounterSection />
		</main>
	)
}
