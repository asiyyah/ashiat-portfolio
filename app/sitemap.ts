import { getAllCodeSlugs, getPublicDesignSlugs } from '@/lib/projects'
import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = [...(await getPublicDesignSlugs()), ...getAllCodeSlugs()]

  const projectEntries: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${SITE_URL}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/work`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/playground`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...projectEntries,
  ]
}
