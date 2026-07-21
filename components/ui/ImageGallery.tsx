'use client'

import { useState } from 'react'

interface ImageGalleryProps {
  images: string[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  if (images.length === 0) return null

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setSelectedIndex(i)}
            className="aspect-[4/3] bg-surface rounded-lg border border-border overflow-hidden hover:border-foreground/30 transition-colors"
          >
            <div className="w-full h-full flex items-center justify-center text-muted">
              <span className="text-sm">Image {i + 1}</span>
            </div>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-foreground text-2xl"
            aria-label="Close preview"
          >
            &times;
          </button>

          {selectedIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedIndex(selectedIndex - 1)
              }}
              className="absolute left-6 text-foreground text-2xl"
              aria-label="Previous image"
            >
              &larr;
            </button>
          )}

          {selectedIndex < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedIndex(selectedIndex + 1)
              }}
              className="absolute right-16 text-foreground text-2xl"
              aria-label="Next image"
            >
              &rarr;
            </button>
          )}

          <div className="aspect-[16/10] max-w-4xl w-full mx-6 bg-surface rounded-lg flex items-center justify-center text-muted">
            <span className="text-sm">
              Image {selectedIndex + 1} of {images.length}
            </span>
          </div>
        </div>
      )}
    </>
  )
}
