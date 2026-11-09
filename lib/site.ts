import type { Metadata } from 'next'

export const SITE_URL = 'https://ashiatabdulkadir.com'
export const SITE_NAME = 'Ashiat Abdulkadir'
export const DEFAULT_TITLE = 'Ashiat Abdulkadir — Product Designer & Design Engineer'
export const DEFAULT_DESCRIPTION =
  'Portfolio of a product designer specialising in enterprise SaaS, fintech, compliance platforms, and complex product workflows.'

interface PageMetadataInput {
  title: string
  description: string
  /** Route path, e.g. "/work" or "/work/spend-tool". Resolved against metadataBase. */
  path: string
  /** Optional social preview image (relative path or absolute URL). Falls back to the site OG image. */
  image?: string
  imageAlt?: string
}

/**
 * Builds page metadata with canonical URL, Open Graph and Twitter fields.
 * openGraph/twitter are replaced (not merged) per route segment, so each page
 * needs to supply the full set.
 */
export function pageMetadata({ title, description, path, image, imageAlt }: PageMetadataInput): Metadata {
  // Page-level openGraph/twitter replace the root ones (including the file-based
  // opengraph-image), so the default social image has to be set explicitly here.
  const ogImages = image
    ? [{ url: image, alt: imageAlt ?? title }]
    : [{ url: '/opengraph-image', width: 1200, height: 630, alt: DEFAULT_TITLE }]
  const twitterImages = image
    ? [{ url: image, alt: imageAlt ?? title }]
    : [{ url: '/twitter-image', width: 1200, height: 630, alt: DEFAULT_TITLE }]

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      locale: 'en_US',
      url: path,
      title,
      description,
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: twitterImages,
    },
  }
}
