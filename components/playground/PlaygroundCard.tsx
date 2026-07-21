'use client'

import { motion } from 'motion/react'
import { useState, useRef } from 'react'
import { createPortal } from 'react-dom'

interface PlaygroundCardProps {
  title: string
  category: string
  visual: React.ReactNode
  style?: React.CSSProperties
  isDragging: boolean
}

export default function PlaygroundCard({
  title,
  category,
  visual,
  style,
  isDragging,
}: PlaygroundCardProps) {
  const [open, setOpen] = useState(false)
  const wasDragging = useRef(false)

  const handleClick = () => {
    if (wasDragging.current) {
      wasDragging.current = false
      return
    }
    setOpen(true)
  }

  return (
    <>
      <motion.div
        style={style}
        className="absolute cursor-pointer group"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}
        onClick={handleClick}
        onPointerDown={() => { wasDragging.current = false }}
        onPointerMove={() => { if (isDragging) wasDragging.current = true }}
      >
        <div className="rounded-xl border border-border bg-background overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full h-full">
          <div className="aspect-[4/3] overflow-hidden bg-surface">
            {visual}
          </div>
          <div className="p-3">
            <p className="text-[10px] text-muted uppercase tracking-wider font-mono">
              {category}
            </p>
            <p className="text-sm font-medium mt-0.5">{title}</p>
          </div>
        </div>
      </motion.div>

      {open && typeof document === 'object' && createPortal(
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <div
            className="max-w-3xl w-full bg-surface rounded-lg border border-border p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-xs text-muted uppercase tracking-wider font-mono mb-1">
                  {category}
                </p>
                <h2 className="text-2xl font-semibold">{title}</h2>
              </div>
              <button
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
            <div className="aspect-[16/9] rounded-lg overflow-hidden bg-surface-hover flex items-center justify-center">
              {visual}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
