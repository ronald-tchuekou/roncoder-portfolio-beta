import { ServicesList } from "@src/components/services/services-list";
import { METADATA } from '@src/resources/data/metadata'
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Les services que j'offres. | roncoder",
	description:
		'Je conçois et implémente des applications web et mobiles, design des prototypes professionnels pour décrire au mieux le scénario des fonctionnalités de vos applications.',
	...METADATA,
};

export default function Services() {
  return (
    <main>
      <ServicesList />
    </main>
  );
}
