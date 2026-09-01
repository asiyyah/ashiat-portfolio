'use client'

import { motion } from 'motion/react'
import { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'

interface PlaygroundCardProps {
  title: string
  category: string
  visual: React.ReactNode
  style?: React.CSSProperties
  isDragging: boolean
  aspectRatio?: number
}

export default function PlaygroundCard({
  title,
  category,
  visual,
  style,
  isDragging,
  aspectRatio = 4 / 3,
}: PlaygroundCardProps) {
  const [open, setOpen] = useState(false)
  const wasDragging = useRef(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    const trigger = triggerRef.current
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        return
      }

      if (event.key !== 'Tab') return
      const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      trigger?.focus()
    }
  }, [open])

  const handleClick = () => {
    if (wasDragging.current) {
      wasDragging.current = false
      return
    }
    setOpen(true)
  }

  return (
    <>
      <motion.button
        ref={triggerRef}
        type="button"
        style={style}
        className="absolute cursor-pointer group border-0 bg-transparent p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}
        onClick={handleClick}
        onPointerDown={() => { wasDragging.current = false }}
        onPointerMove={() => { if (isDragging) wasDragging.current = true }}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={`Open ${title}`}
      >
        <div className="rounded-xl border border-border bg-background overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full h-full">
          <div
            className="overflow-hidden bg-surface"
            style={{ aspectRatio }}
          >
            {visual}
          </div>
          <div className="p-3">
            <p className="text-[10px] text-muted uppercase tracking-wider font-mono">
              {category}
            </p>
            <p className="text-sm font-medium mt-0.5">{title}</p>
          </div>
        </div>
      </motion.button>

      {open && typeof document === 'object' && createPortal(
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`playground-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          <div
            ref={modalRef}
            className="w-full max-h-[calc(100vh-3rem)] overflow-y-auto bg-surface rounded-lg border border-border p-4 md:p-8"
            style={{
              maxWidth: aspectRatio < 1
                ? 'min(90vw, 32rem)'
                : `min(90vw, calc(${70 * aspectRatio}vh + 4rem), 64rem)`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-xs text-muted uppercase tracking-wider font-mono mb-1">
                  {category}
                </p>
                <h2 id={`playground-title-${title.replace(/\s+/g, '-').toLowerCase()}`} className="text-2xl font-semibold">{title}</h2>
              </div>
              <button
                ref={closeRef}
                onClick={(e) => { e.stopPropagation(); setOpen(false) }}
                className="text-muted hover:text-foreground rounded p-1 hover:bg-surface-hover transition-colors flex items-center justify-center"
                aria-label="Close"
                type="button"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div
              className="w-full rounded-lg overflow-hidden bg-transparent flex items-center justify-center"
              style={{ aspectRatio }}
            >
              {visual}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
