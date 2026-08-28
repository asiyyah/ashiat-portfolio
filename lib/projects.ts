import fs from 'fs'
import path from 'path'
import type { DesignProject, CodeProject, PortfolioProject } from '@/types/project'
import { codeProjects } from '@/lib/code-projects'

const designDir = path.join(process.cwd(), 'content/design')
const codeDir = path.join(process.cwd(), 'content/code')

export function getAllDesignSlugs(): string[] {
  try {
    return fs.readdirSync(designDir).filter((entry) => {
      const stat = fs.statSync(path.join(designDir, entry))
      return stat.isDirectory()
    })
  } catch {
    return []
  }
}

export function getAllCodeSlugs(): string[] {
  try {
    return fs.readdirSync(codeDir).filter((entry) => {
      const stat = fs.statSync(path.join(codeDir, entry))
      return stat.isDirectory()
    })
  } catch {
    return []
  }
}

export async function getDesignProject(slug: string): Promise<DesignProject | null> {
  try {
    const mod = await import(`@/content/design/${slug}/index.mdx`)
    return {
      ...mod.metadata,
      slug,
      projectType: mod.metadata.projectType === 'ui-design' ? 'ui-design' : 'product-design',
    } as DesignProject
  } catch {
    return null
  }
}

export async function getAllDesignProjects(): Promise<DesignProject[]> {
  const slugs = getAllDesignSlugs()
  const projects = await Promise.all(slugs.map(getDesignProject))
  return projects.filter((p): p is DesignProject => p !== null)
}

export async function getCodeProject(slug: string): Promise<CodeProject | null> {
  try {
    const mod = await import(`@/content/code/${slug}/index.mdx`)
    return { ...mod.metadata, slug, projectType: 'code' } as CodeProject
  } catch {
    return null
  }
}

export async function getAllCodeProjects(): Promise<CodeProject[]> {
  const slugs = getAllCodeSlugs()
  const projects = await Promise.all(slugs.map(getCodeProject))
  return projects.filter((p): p is CodeProject => p !== null)
}

export async function getAllPortfolioProjects(): Promise<PortfolioProject[]> {
  const designProjects = await getAllDesignProjects()
  return [...designProjects, ...codeProjects]
}
