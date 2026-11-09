import posthog from 'posthog-js'
import { RESUME_URL, SOCIAL_LINKS } from '@/lib/site-links'

export interface CaseStudyInfo {
  slug: string
  title: string
  type: 'design' | 'code'
}

const VIEWED_KEY = 'case_studies_viewed'
const LAST_KEY = 'last_case_study'

function ready() {
  return typeof window !== 'undefined' && posthog.__loaded
}

export function capture(event: string, properties?: Record<string, unknown>) {
  if (!ready()) return
  posthog.capture(event, properties)
}

// Case study history is stored as super properties, so every later event
// (including contact actions) carries which case studies this visitor read.
export function trackCaseStudyViewed(study: CaseStudyInfo, source: string) {
  if (!ready()) return
  const viewed = (posthog.get_property(VIEWED_KEY) as string[] | undefined) ?? []
  posthog.register({
    [VIEWED_KEY]: viewed.includes(study.slug) ? viewed : [...viewed, study.slug],
    [LAST_KEY]: study.slug,
  })
  posthog.capture('case_study_viewed', {
    case_study: study.slug,
    case_study_title: study.title,
    case_study_type: study.type,
    source,
  })
}

export function trackCaseStudyRead(study: CaseStudyInfo, secondsOnPage: number) {
  capture('case_study_read', {
    case_study: study.slug,
    case_study_title: study.title,
    case_study_type: study.type,
    seconds_on_page: secondsOnPage,
  })
}

function locationOf(el: Element) {
  if (el.closest('nav')) return 'navbar'
  if (el.closest('footer')) return 'footer'
  return window.location.pathname
}

// Delegated listener: classifies contact-intent links by their href so
// server components don't need to be converted to client components.
export function trackOutboundClicks() {
  const socials = new Map<string, string>(SOCIAL_LINKS.map((l) => [l.href, l.label]))

  document.addEventListener(
    'click',
    (event) => {
      const link = (event.target as Element | null)?.closest?.('a[href]')
      if (!(link instanceof HTMLAnchorElement)) return
      const href = link.getAttribute('href') ?? ''
      const location = locationOf(link)

      if (href.startsWith('mailto:')) {
        capture('email_link_clicked', { location })
      } else if (href === RESUME_URL) {
        capture('resume_clicked', { location })
      } else if (socials.has(href)) {
        capture('social_link_clicked', { network: socials.get(href), location })
      }
    },
    { capture: true },
  )
}
