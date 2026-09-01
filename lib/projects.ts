import { cache } from 'react'
import type { DesignProject, CodeProject, PortfolioProject } from '@/types/project'
import { codeProjects } from '@/lib/code-projects'
import { uiProjects } from '@/lib/ui-projects'

type DesignModule = {
  default: React.ComponentType
  metadata: Omit<DesignProject, 'slug' | 'projectType'> & {
    projectType?: DesignProject['projectType']
  }
}

const designModule = (loader: () => Promise<unknown>) => async (): Promise<DesignModule> =>
  (await loader()) as DesignModule

const designProjectLoaders: Record<string, () => Promise<DesignModule>> = {
  'compliance-system': designModule(() => import('@/content/design/compliance-system/index.mdx')),
  'enterprise-dashboard': designModule(() => import('@/content/design/enterprise-dashboard/index.mdx')),
  'fintech-payment-platform': designModule(() => import('@/content/design/fintech-payment-platform/index.mdx')),
  hirewise: designModule(() => import('@/content/design/hirewise/index.mdx')),
  payup: designModule(() => import('@/content/design/payup/index.mdx')),
  'revenue-management-platform': designModule(() => import('@/content/design/revenue-management-platform/index.mdx')),
  'saas-administration-system': designModule(() => import('@/content/design/saas-administration-system/index.mdx')),
  'spend-tool': designModule(() => import('@/content/design/spend-tool/index.mdx')),
}

export function getAllDesignSlugs(): string[] {
  return Object.keys(designProjectLoaders)
}

export function getAllCodeSlugs(): string[] {
  return codeProjects.map((project) => project.slug)
}

export const getDesignProjectModule = cache(async (slug: string): Promise<DesignModule | null> => {
  const loader = designProjectLoaders[slug]
  return loader ? loader() : null
})

export async function getDesignProject(slug: string): Promise<DesignProject | null> {
  const mod = await getDesignProjectModule(slug)
  if (!mod) return null

  return {
    ...mod.metadata,
    slug,
    projectType: mod.metadata.projectType === 'ui-design' ? 'ui-design' : 'product-design',
  }
}

export async function getAllDesignProjects(): Promise<DesignProject[]> {
  const slugs = getAllDesignSlugs()
  const projects = await Promise.all(slugs.map(getDesignProject))
  return projects.filter((p): p is DesignProject => p !== null)
}

export async function getCodeProject(slug: string): Promise<CodeProject | null> {
  return codeProjects.find((project) => project.slug === slug) ?? null
}

export async function getAllCodeProjects(): Promise<CodeProject[]> {
  return codeProjects
}

export async function getAllPortfolioProjects(): Promise<PortfolioProject[]> {
  const designProjects = await getAllDesignProjects()
  return [...designProjects, ...uiProjects, ...codeProjects]
}
