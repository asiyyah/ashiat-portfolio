'use client'

import { useRouter } from 'next/navigation'

interface BackLinkProps {
  className?: string
  children?: React.ReactNode
}

export default function BackLink({ className = '', children }: BackLinkProps) {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={`text-sm text-muted hover:text-foreground transition-colors ${className}`}
    >
      {children ?? '\u2190 Back'}
    </button>
  )
}
