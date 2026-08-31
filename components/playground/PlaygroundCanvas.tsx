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

const CANVAS_WIDTH = 3500
const CANVAS_HEIGHT = 2400

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
    <div className="relative w-full h-full bg-white">
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

function UIMockup() {
  return (
    <div className="w-full h-full p-4 flex gap-3 bg-white">
      <div className="w-1/4 rounded bg-gray-100 p-2 space-y-2">
        <div className="h-2 rounded bg-gray-300 w-3/4" />
        <div className="h-2 rounded bg-gray-200 w-1/2" />
        <div className="h-2 rounded bg-gray-200 w-2/3" />
        <div className="h-2 rounded bg-gray-200 w-1/2" />
      </div>
      <div className="flex-1 space-y-3">
        <div className="h-4 rounded bg-gray-200 w-1/3" />
        <div className="h-20 rounded bg-gray-100" />
        <div className="flex gap-2">
          <div className="h-8 rounded bg-gray-100 flex-1" />
          <div className="h-8 rounded bg-gray-100 flex-1" />
        </div>
      </div>
    </div>
  )
}

function ColorPalette() {
  const colors = ['#e8271a', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899']
  return (
    <div className="w-full h-full grid grid-cols-3 grid-rows-2">
      {colors.map((c, i) => (
        <div key={i} className="flex items-center justify-center" style={{ background: c }}>
          <span className="text-white text-[10px] font-mono opacity-70">{c}</span>
        </div>
      ))}
    </div>
  )
}

function TypographyStudy() {
  return (
    <div className="w-full h-full p-5 space-y-2 bg-white flex flex-col justify-center">
      <p className="text-2xl font-bold tracking-tight">Aa</p>
      <p className="text-lg font-semibold">The quick brown fox</p>
      <p className="text-sm">The quick brown fox jumps over the lazy dog.</p>
      <p className="text-[10px] uppercase tracking-widest text-gray-400">Geist · Regular · Bold · Mono</p>
    </div>
  )
}

function IconGrid() {
  return (
    <div className="w-full h-full p-4 grid grid-cols-4 grid-rows-3 gap-2 bg-white">
      {['◇', '○', '△', '□', '☆', '⤴', '◎', '✦', '⊕', '⊘', '◈', '▣'].map((s, i) => (
        <div key={i} className="flex items-center justify-center rounded bg-gray-50 text-gray-700 text-lg">
          {s}
        </div>
      ))}
    </div>
  )
}

function Wireframe() {
  return (
    <div className="w-full h-full p-3 bg-white flex flex-col gap-2">
      <div className="h-3 rounded bg-gray-200 w-1/3" />
      <div className="flex gap-2 flex-1">
        <div className="w-1/4 rounded bg-gray-100" />
        <div className="flex-1 space-y-2">
          <div className="h-6 rounded bg-gray-100" />
          <div className="h-6 rounded bg-gray-100 w-2/3" />
          <div className="flex-1 rounded bg-gray-50" />
        </div>
      </div>
    </div>
  )
}

function GradientCard({ from, to, label }: { from: string; to: string; label: string }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <span className="text-white text-sm font-medium opacity-80">{label}</span>
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
  { id: 1, title: 'Dashboard UI', category: 'UI Design', x: 80, y: 80, w: 300, visual: <UIMockup /> },
  { id: 2, title: 'Color System', category: 'Design System', x: 590, y: 45, w: 240, visual: <ColorPalette /> },
  { id: 3, title: 'Type Specimen', category: 'Typography', x: 1100, y: 110, w: 280, visual: <TypographyStudy /> },
  { id: 4, title: 'Icon Set', category: 'Visual Design', x: 1640, y: 55, w: 260, visual: <IconGrid /> },
  { id: 5, title: 'App Wireframe', category: 'Wireframing', x: 2210, y: 100, w: 320, visual: <Wireframe /> },
  { id: 6, title: 'Brand Gradient', category: 'Branding', x: 260, y: 490, w: 220, visual: <GradientCard from="#6366f1" to="#a855f7" label="Brand Gradient" /> },
  { id: 7, title: 'Motion Study', category: 'Interaction', x: 780, y: 540, w: 280, visual: <GradientCard from="#f43f5e" to="#f97316" label="Motion Frames" /> },
  { id: 8, title: 'Data Viz', category: 'Dashboard', x: 1340, y: 470, w: 300, visual: <GradientCard from="#0ea5e9" to="#06b6d4" label="Chart Exploration" /> },
  { id: 9, title: 'Component Library', category: 'Components', x: 1900, y: 530, w: 260, visual: <GradientCard from="#22c55e" to="#10b981" label="Component Grid" /> },
  { id: 10, title: 'Landing Concept', category: 'Web Design', x: 2390, y: 460, w: 320, visual: <GradientCard from="#8b5cf6" to="#d946ef" label="Landing Page" /> },
  { id: 11, title: 'Card System', category: 'Design System', x: 80, y: 950, w: 240, visual: <GradientCard from="#eab308" to="#f59e0b" label="Card Variants" /> },
  { id: 12, title: 'Micro-interactions', category: 'Interaction', x: 590, y: 900, w: 280, visual: <GradientCard from="#ef4444" to="#f97316" label="Hover States" /> },
  { id: 13, title: 'Create Card Flow', category: 'Motion Design', x: 1120, y: 970, w: 300, aspectRatio: 556 / 480, visual: <MotionPreview src="/images/playground/Create-Card-User.mp4" title="Create Card Flow animation" /> },
  { id: 14, title: 'Dashboard Motion', category: 'Motion Design', x: 1690, y: 910, w: 320, aspectRatio: 720 / 630, visual: <MotionPreview src="/images/playground/Dashboard.mp4" title="Dashboard Motion animation" /> },
  { id: 15, title: 'DineHub', category: 'Product Motion', x: 2240, y: 960, w: 340, aspectRatio: 800 / 600, visual: <MotionPreview src="/images/playground/DineHub.mp4" title="DineHub product animation" /> },
  { id: 16, title: 'Crypto Wallet', category: 'Interaction', x: 300, y: 1400, w: 280, aspectRatio: 556 / 562, visual: <MotionPreview src="/images/playground/crpto-wallet.mp4" title="Crypto Wallet animation" /> },
  { id: 17, title: 'Seedly Landing Page', category: 'Web Motion', x: 840, y: 1360, w: 340, aspectRatio: 640 / 480, visual: <MotionPreview src="/images/playground/Seedly-Landing-Page.mp4" title="Seedly Landing Page animation" /> },
  { id: 18, title: 'Web3 Social Media', category: 'Motion Design', x: 1400, y: 1430, w: 310, aspectRatio: 640 / 480, visual: <MotionPreview src="/images/playground/Web3-social-media-animation.mp4" title="Web3 Social Media animation" /> },
  { id: 19, title: 'Celuxe', category: 'Product Motion', x: 1940, y: 1360, w: 340, aspectRatio: 800 / 600, visual: <MotionPreview src="/images/playground/celuxe.mp4" title="Celuxe product animation" /> },
  { id: 20, title: 'Wandermate', category: 'Product Motion', x: 2400, y: 1420, w: 320, aspectRatio: 618 / 582, visual: <MotionPreview src="/images/playground/wandermate.mp4" title="Wandermate product animation" /> },
  { id: 21, title: 'EcoLife Blog', category: 'Web Design', x: 2860, y: 80, w: 360, aspectRatio: 4320 / 3268, visual: <StaticPreview src="/images/playground/Ecolife Blog.png" alt="EcoLife ecommerce blog interface" /> },
  { id: 22, title: 'Traffic Source Breakdown', category: 'Data Visualisation', x: 3100, y: 470, w: 260, aspectRatio: 806 / 762, visual: <StaticPreview src="/images/playground/Background.png" alt="Traffic source breakdown donut chart" /> },
  { id: 24, title: 'Crypto Tip Flow', category: 'Web3 Interaction', x: 3160, y: 1160, w: 280, aspectRatio: 1854 / 1800, visual: <StaticPreview src="/images/playground/tip-user.png" alt="Crypto wallet tip payment bottom sheet" /> },
  { id: 25, title: 'Tip Confirmation', category: 'Web3 Interaction', x: 2860, y: 1600, w: 280, aspectRatio: 1854 / 1800, visual: <StaticPreview src="/images/playground/tip-successful.png" alt="Successful crypto tip confirmation" /> },
  { id: 26, title: 'Task Priority Breakdown', category: 'Dashboard Component', x: 80, y: 1950, w: 340, aspectRatio: 2233 / 1226, visual: <StaticPreview src="/images/playground/image 292.png" alt="Task priority breakdown chart" /> },
  { id: 27, title: 'Assigned Tasks', category: 'Dashboard Component', x: 560, y: 2020, w: 360, aspectRatio: 2400 / 1242, visual: <StaticPreview src="/images/playground/image 293.png" alt="Assigned tasks data table" /> },
  { id: 28, title: 'Project Calendar', category: 'Dashboard Component', x: 1060, y: 1930, w: 360, aspectRatio: 2400 / 1238, visual: <StaticPreview src="/images/playground/image 295.png" alt="Project planning calendar" /> },
  { id: 29, title: 'Token Swap', category: 'Web3 Interaction', x: 1540, y: 2010, w: 300, aspectRatio: 1854 / 1800, visual: <StaticPreview src="/images/playground/token-swap.png" alt="Token swap interface" /> },
  { id: 30, title: 'Bali Destination Card', category: 'Travel UI', x: 2040, y: 1920, w: 300, aspectRatio: 1680 / 1260, visual: <StaticPreview src="/images/playground/Travel ui.png" alt="Bali travel destination card" /> },
  { id: 31, title: 'Beerah Collection', category: 'Editorial Design', x: 2540, y: 2010, w: 340, aspectRatio: 814 / 526, visual: <StaticPreview src="/images/playground/studio collection 5.png" alt="Beerah fashion collection feature card" /> },
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
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <p className="text-xs text-muted font-mono tracking-wider">
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
