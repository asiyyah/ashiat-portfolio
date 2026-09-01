'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { motion, useMotionValue, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import PlaygroundCard from './PlaygroundCard'

interface Item {
  id: number
  title: string
  category: string
  x: number
  y: number
  w: number
  aspectRatio?: number
  visual: React.ReactNode
}

const CANVAS_WIDTH = 3200
const CANVAS_HEIGHT = 1750

function StaticPreview({
  src,
  alt,
  fit = 'contain',
}: {
  src: string
  alt: string
  fit?: 'contain' | 'cover'
}) {
  return (
    <div className="relative w-full h-full bg-transparent">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 80vw, 360px"
        className={fit === 'cover' ? 'object-cover' : 'object-contain'}
      />
    </div>
  )
}

function MotionPreview({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [inView, setInView] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
        if (entry.isIntersecting) setShouldLoad(true)
      },
      { rootMargin: '160px', threshold: 0.1 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !shouldLoad) return

    if (inView && !reduceMotion) {
      void video.play().catch(() => undefined)
    } else {
      video.pause()
    }
  }, [inView, reduceMotion, shouldLoad])

  return (
    <div className="relative w-full h-full bg-black">
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        aria-label={title}
        muted
        loop
        playsInline
        preload={shouldLoad ? 'metadata' : 'none'}
        className="w-full h-full object-cover pointer-events-none"
        onCanPlay={() => {
          if (inView && !reduceMotion) void videoRef.current?.play().catch(() => undefined)
        }}
      />
      {!shouldLoad && (
        <div className="absolute inset-0 flex items-center justify-center text-white/60 text-[10px] uppercase tracking-widest font-mono">
          Motion study
        </div>
      )}
    </div>
  )
}

const items: Item[] = [
  { id: 1, title: 'EcoLife Blog', category: 'Web Design', x: 60, y: 60, w: 360, aspectRatio: 4320 / 3268, visual: <StaticPreview src="/images/playground/Ecolife Blog.png" alt="EcoLife ecommerce blog interface" /> },
  { id: 2, title: 'Create Card Flow', category: 'Motion Design', x: 560, y: 110, w: 300, aspectRatio: 556 / 480, visual: <MotionPreview src="/images/playground/Create-Card-User.mp4" title="Create Card Flow animation" /> },
  { id: 3, title: 'Task Priority Breakdown', category: 'Dashboard Component', x: 1060, y: 50, w: 360, aspectRatio: 2233 / 1226, visual: <StaticPreview src="/images/playground/image 292.png" alt="Task priority breakdown chart" /> },
  { id: 4, title: 'Dashboard Motion', category: 'Motion Design', x: 1560, y: 100, w: 320, aspectRatio: 720 / 630, visual: <MotionPreview src="/images/playground/Dashboard.mp4" title="Dashboard Motion animation" /> },
  { id: 5, title: 'Crypto Tip Flow', category: 'Web3 Interaction', x: 2060, y: 40, w: 300, aspectRatio: 1854 / 1800, visual: <StaticPreview src="/images/playground/tip-user.png" alt="Crypto wallet tip payment bottom sheet" /> },
  { id: 6, title: 'DineHub', category: 'Product Motion', x: 2560, y: 110, w: 350, aspectRatio: 800 / 600, visual: <MotionPreview src="/images/playground/DineHub.mp4" title="DineHub product animation" /> },
  { id: 7, title: 'Crypto Wallet', category: 'Interaction', x: 140, y: 590, w: 290, aspectRatio: 556 / 562, visual: <MotionPreview src="/images/playground/crpto-wallet.mp4" title="Crypto Wallet animation" /> },
  { id: 8, title: 'Assigned Tasks', category: 'Dashboard Component', x: 640, y: 540, w: 370, aspectRatio: 2400 / 1242, visual: <StaticPreview src="/images/playground/image 293.png" alt="Assigned tasks data table" /> },
  { id: 9, title: 'Seedly Landing Page', category: 'Web Motion', x: 1140, y: 610, w: 350, aspectRatio: 640 / 480, visual: <MotionPreview src="/images/playground/Seedly-Landing-Page.mp4" title="Seedly Landing Page animation" /> },
  { id: 10, title: 'Token Swap', category: 'Web3 Interaction', x: 1640, y: 520, w: 310, aspectRatio: 1854 / 1800, visual: <StaticPreview src="/images/playground/token-swap.png" alt="Token swap interface" /> },
  { id: 11, title: 'Web3 Social Media', category: 'Motion Design', x: 2140, y: 600, w: 320, aspectRatio: 640 / 480, visual: <MotionPreview src="/images/playground/Web3-social-media-animation.mp4" title="Web3 Social Media animation" /> },
  { id: 12, title: 'Traffic Source Breakdown', category: 'Data Visualisation', x: 2640, y: 540, w: 280, aspectRatio: 806 / 762, visual: <StaticPreview src="/images/playground/Background.png" alt="Traffic source breakdown donut chart" /> },
  { id: 13, title: 'Project Calendar', category: 'Dashboard Component', x: 60, y: 1100, w: 370, aspectRatio: 2400 / 1238, visual: <StaticPreview src="/images/playground/image 295.png" alt="Project planning calendar" /> },
  { id: 14, title: 'Celuxe', category: 'Product Motion', x: 560, y: 1180, w: 350, aspectRatio: 800 / 600, visual: <MotionPreview src="/images/playground/celuxe.mp4" title="Celuxe product animation" /> },
  { id: 15, title: 'Bali Destination Card', category: 'Travel UI', x: 1060, y: 1090, w: 320, aspectRatio: 1680 / 1260, visual: <StaticPreview src="/images/playground/Travel ui.png" alt="Bali travel destination card" /> },
  { id: 16, title: 'Wandermate', category: 'Product Motion', x: 1560, y: 1170, w: 330, aspectRatio: 618 / 582, visual: <MotionPreview src="/images/playground/wandermate.mp4" title="Wandermate product animation" /> },
  { id: 17, title: 'Tip Confirmation', category: 'Web3 Interaction', x: 2060, y: 1080, w: 300, aspectRatio: 1854 / 1800, visual: <StaticPreview src="/images/playground/tip-successful.png" alt="Successful crypto tip confirmation" /> },
  { id: 18, title: 'Beerah Collection', category: 'Editorial Design', x: 2560, y: 1160, w: 350, aspectRatio: 814 / 526, visual: <StaticPreview src="/images/playground/studio collection 5.png" alt="Beerah fashion collection feature card" /> },
]

export default function PlaygroundCanvas() {
  const constraintsRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const canvasX = useMotionValue(0)
  const canvasY = useMotionValue(0)

  const handleDragStart = useCallback(() => setIsDragging(true), [])
  const handleDragEnd = useCallback(() => {
    setTimeout(() => setIsDragging(false), 0)
  }, [])

  useEffect(() => {
    const viewport = constraintsRef.current
    if (!viewport) return

    let middlePan: { pointerId: number; x: number; y: number } | null = null

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault()
      event.stopPropagation()

      const deltaScale = event.deltaMode === WheelEvent.DOM_DELTA_LINE
        ? 16
        : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
          ? viewport.clientHeight
          : 1

      canvasX.set(canvasX.get() - event.deltaX * deltaScale)
      canvasY.set(canvasY.get() - event.deltaY * deltaScale)
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 1) return
      event.preventDefault()
      middlePan = { pointerId: event.pointerId, x: event.clientX, y: event.clientY }
      viewport.setPointerCapture(event.pointerId)
      setIsDragging(true)
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (!middlePan || event.pointerId !== middlePan.pointerId) return
      event.preventDefault()

      const deltaX = event.clientX - middlePan.x
      const deltaY = event.clientY - middlePan.y

      canvasX.set(canvasX.get() + deltaX)
      canvasY.set(canvasY.get() + deltaY)
      middlePan = { ...middlePan, x: event.clientX, y: event.clientY }
    }

    const endMiddlePan = (event: PointerEvent) => {
      if (!middlePan || event.pointerId !== middlePan.pointerId) return
      if (viewport.hasPointerCapture(event.pointerId)) {
        viewport.releasePointerCapture(event.pointerId)
      }
      middlePan = null
      setIsDragging(false)
    }

    const preventAuxiliaryClick = (event: MouseEvent) => {
      if (event.button === 1) event.preventDefault()
    }

    viewport.addEventListener('wheel', handleWheel, { passive: false, capture: true })
    viewport.addEventListener('pointerdown', handlePointerDown)
    viewport.addEventListener('pointermove', handlePointerMove)
    viewport.addEventListener('pointerup', endMiddlePan)
    viewport.addEventListener('pointercancel', endMiddlePan)
    viewport.addEventListener('auxclick', preventAuxiliaryClick)

    return () => {
      viewport.removeEventListener('wheel', handleWheel, { capture: true })
      viewport.removeEventListener('pointerdown', handlePointerDown)
      viewport.removeEventListener('pointermove', handlePointerMove)
      viewport.removeEventListener('pointerup', endMiddlePan)
      viewport.removeEventListener('pointercancel', endMiddlePan)
      viewport.removeEventListener('auxclick', preventAuxiliaryClick)
    }
  }, [canvasX, canvasY])

  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    const viewport = constraintsRef.current
    if (!viewport) return

    const step = event.shiftKey ? 160 : 64
    let nextX = canvasX.get()
    let nextY = canvasY.get()

    if (event.key === '0' || event.key === 'Home') {
      event.preventDefault()
      canvasX.set(0)
      canvasY.set(0)
      return
    } else if (event.key === 'ArrowLeft') nextX += step
    else if (event.key === 'ArrowRight') nextX -= step
    else if (event.key === 'ArrowUp') nextY += step
    else if (event.key === 'ArrowDown') nextY -= step
    else return

    event.preventDefault()
    canvasX.set(nextX)
    canvasY.set(nextY)
  }, [canvasX, canvasY])

  return (
    <div
      className="fixed inset-0 top-16 overflow-hidden cursor-grab active:cursor-grabbing"
      role="region"
      aria-label="Interactive design playground. Swipe or drag to explore. Use arrow keys when focused."
      style={{
        background: `
          linear-gradient(to right, rgba(128,128,128,0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(128,128,128,0.08) 1px, transparent 1px),
          var(--surface)
        `,
        backgroundSize: '48px 48px, 48px 48px, 100% 100%',
        touchAction: 'none',
        overscrollBehavior: 'contain',
        overscrollBehaviorX: 'none',
        overscrollBehaviorY: 'none',
      }}
    >
      <h1 className="sr-only">Playground</h1>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 pointer-events-none w-[min(88vw,36rem)] text-center">
        <p className="text-sm leading-relaxed text-foreground">
          A collection of concepts, experiments, and interactions from my work
          across product design and code.
        </p>
      </div>
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none hidden md:block rounded-full border border-border bg-surface px-4 py-2 shadow-sm">
        <p className="text-xs text-muted font-mono tracking-wider whitespace-nowrap">
          trackpad or drag to explore &middot; press 0 to reset &middot; tap to view
        </p>
      </div>
      <motion.div
        ref={constraintsRef}
        className="w-full h-full"
      >
        <motion.div
          drag
          dragMomentum
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          className="relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
          style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT, x: canvasX, y: canvasY, touchAction: 'none' }}
        >
          {items.map((item) => (
            <PlaygroundCard
              key={item.id}
              title={item.title}
              category={item.category}
              visual={item.visual}
              isDragging={isDragging}
              aspectRatio={item.aspectRatio}
              style={{
                left: item.x,
                top: item.y,
                width: item.w,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
