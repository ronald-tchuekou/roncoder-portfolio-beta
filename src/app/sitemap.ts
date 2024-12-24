import type { MetadataRoute } from 'next'

const baseUrl = process.env.BASE_LINK

const paths: MetadataRoute.Sitemap = [
	{
		url: ``,
		changeFrequency: 'yearly',
		priority: 1,
	},
	{
		url: '/services',
		changeFrequency: 'monthly',
		priority: 0.8,
	},
	{
		url: '/resume',
		changeFrequency: 'monthly',
		priority: 0.8,
	},
	{
		url: '/resume/educations',
		changeFrequency: 'monthly',
		priority: 0.6,
	},
	{
		url: '/resume/experiences',
		changeFrequency: 'monthly',
		priority: 0.6,
	},
	{
		url: '/resume/about',
		changeFrequency: 'monthly',
		priority: 0.6,
	},
	{
		url: '/projects',
		changeFrequency: 'monthly',
		priority: 0.8,
	},
	{
		url: '/contact',
		changeFrequency: 'monthly',
		priority: 0.8,
	},
]

export default function sitemap(): MetadataRoute.Sitemap {
	return paths.map((path) => ({
		url: `${baseUrl}${path.url}`,
		lastModified: new Date(),
		changeFrequency: path.changeFrequency,
		priority: path.priority,
	}))
}
