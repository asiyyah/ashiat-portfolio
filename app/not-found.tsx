import Link from 'next/link'
import Section from '@/components/ui/Section'
import { Body, Heading } from '@/components/ui/Typography'

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <p className="caption mb-4">404</p>
        <Heading as="h1">Page not found</Heading>
        <Body className="mt-4">
          The page you requested may have moved or no longer exists.
        </Body>
        <Link href="/work" className="mt-8 inline-block text-accent hover:underline">
          View selected work →
        </Link>
      </div>
    </Section>
  )
}
