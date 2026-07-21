'use client'

import { motion } from 'motion/react'
import { useState } from 'react'

interface PlaygroundCardProps {
  title: string
  category: string
  index: number
}

export default function PlaygroundCard({ title, category, index }: PlaygroundCardProps) {
  const [open, setOpen] = useState(false)

  const aspectClasses = [
    'aspect-[4/5]',
    'aspect-square',
    'aspect-[4/3]',
    'aspect-square',
    'aspect-square',
    'aspect-[4/5]',
  ]

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className={`break-inside-avoid group cursor-pointer rounded-lg border border-border overflow-hidden transition-colors hover:border-foreground/30 ${aspectClasses[index % aspectClasses.length]}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-full h-full bg-surface flex flex-col items-center justify-center p-6 text-center">
          <p className="text-xs text-muted uppercase tracking-wider mb-2">
            {category}
          </p>
          <p className="font-medium">{title}</p>
        </div>
      </motion.button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <div
            className="max-w-2xl w-full bg-surface rounded-lg border border-border p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-xs text-muted uppercase tracking-wider mb-1">
                  {category}
                </p>
                <h2 className="text-2xl">{title}</h2>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-muted hover:text-foreground text-xl"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div className="aspect-[16/10] bg-surface-hover rounded flex items-center justify-center text-muted">
              <span className="text-sm">Preview</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
