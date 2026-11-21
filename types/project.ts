export type ProjectType = 'product-design' | 'ui-design' | 'code'

export interface DesignProject {
  title: string
  slug: string
  industry: string
  role: string
  duration: string
  year: number
  summary: string
  challenge: string
  approach: string
  solution: string
  impact: string
  reflection?: string
  coverImage: string
  thumbnailImage?: string
  gallery: string[]
  aspectRatio?: 'landscape' | 'portrait' | 'square' | 'wide'
  featured?: boolean
  team?: string
  platforms?: string
  tools?: string
  tags?: string[]
  coverWidth?: number
  coverHeight?: number
  projectType: Exclude<ProjectType, 'code'>
  externalUrl?: string
  caseStudyLayout?: 'standard' | 'rich'
  /** Shown as a locked card with no page: NDA work shared on request. */
  locked?: boolean
  /** Labels above the title on project cards. Defaults to industry and role; the case study page still shows the role. */
  cardTags?: string[]
}

export interface CodeProject {
  title: string
  slug: string
  summary: string
  stack: string[]
  repository?: string
  liveDemo?: string
  aiTools?: string[]
  technicalHighlights?: string[]
  coverImage?: string
  gallery?: string[]
  aspectRatio?: 'landscape' | 'portrait' | 'square' | 'wide'
  featured?: boolean
  projectType: 'code'
}

export type PortfolioProject = DesignProject | CodeProject
