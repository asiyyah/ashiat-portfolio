'use client'

import { useRouter } from 'next/navigation'

interface BackLinkProps {
  className?: string
  children?: React.ReactNode
  to?: string
}

export default function BackLink({ className = '', children, to }: BackLinkProps) {
  const router = useRouter()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!to) {
      router.back()
      return
    }
    event.preventDefault()
    router.push(to)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`text-sm text-muted hover:text-foreground transition-colors ${className}`}
    >
      {children ?? '\u2190 Back'}
    </button>
  )
}
