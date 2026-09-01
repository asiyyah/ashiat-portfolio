'use client'

import { useEffect } from 'react'

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="caption mb-4">Something went wrong</p>
      <h1 className="heading text-3xl">This page could not be displayed.</h1>
      <p className="body mt-4 text-muted">Please try again. If the problem continues, return to the work page.</p>
      <button type="button" className="btn btn-primary mt-8" onClick={reset}>
        Try again
      </button>
    </div>
  )
}
