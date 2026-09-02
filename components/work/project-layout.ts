import styles from './Work.module.css'
import type { DesignProject, ProjectType } from '@/types/project'

export interface CardLayoutConfig {
  colSpanClass: string
  aspectClass: string
  imageSizes: string
}

export const PROJECT_TABS: Array<{ id: ProjectType; label: string }> = [
  { id: 'product-design', label: 'Product Design' },
  { id: 'ui-design', label: 'UI Design' },
  { id: 'code', label: 'Built with Code' },
]

export const DESIGN_LAYOUT_PATTERN: CardLayoutConfig[] = [
  { colSpanClass: styles.colSpan8, aspectClass: styles.aspectWide, imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw' },
  { colSpanClass: styles.colSpan4, aspectClass: styles.aspectPortrait, imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw' },
  { colSpanClass: styles.colSpan6, aspectClass: styles.aspectLandscape, imageSizes: '(max-width: 768px) 100vw, 50vw' },
  { colSpanClass: styles.colSpan6, aspectClass: styles.aspectLandscape, imageSizes: '(max-width: 768px) 100vw, 50vw' },
  { colSpanClass: styles.colSpan4, aspectClass: styles.aspectSquare, imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw' },
  { colSpanClass: styles.colSpan12, aspectClass: styles.aspectWide, imageSizes: '(max-width: 768px) 100vw, 100vw' },
]

export const CODE_LAYOUT_PATTERN: CardLayoutConfig[] = [
  { colSpanClass: styles.colSpan7, aspectClass: styles.aspectCode, imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 58vw' },
  { colSpanClass: styles.colSpan5, aspectClass: styles.aspectCode, imageSizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 42vw' },
  { colSpanClass: styles.colSpan6, aspectClass: styles.aspectCode, imageSizes: '(max-width: 768px) 100vw, 50vw' },
  { colSpanClass: styles.colSpan6, aspectClass: styles.aspectCode, imageSizes: '(max-width: 768px) 100vw, 50vw' },
]

export const CODE_COVER_VARIANTS = [
  styles.codeCoverCoral,
  styles.codeCoverInk,
  styles.codeCoverSage,
  styles.codeCoverSand,
]

export function getLayoutConfig(
  index: number,
  pattern: CardLayoutConfig[],
  projectAspect?: DesignProject['aspectRatio'],
): CardLayoutConfig {
  const defaultPattern = pattern[index % pattern.length]
  if (!projectAspect) return defaultPattern

  const aspectClasses = {
    portrait: styles.aspectPortrait,
    wide: styles.aspectWide,
    square: styles.aspectSquare,
    landscape: styles.aspectLandscape,
  }

  return { ...defaultPattern, aspectClass: aspectClasses[projectAspect] }
}
