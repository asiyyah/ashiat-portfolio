'use client'

import { useRef, useState, useCallback } from 'react'
import { motion } from 'motion/react'
import PlaygroundCard from './PlaygroundCard'

interface Item {
  id: number
  title: string
  category: string
  x: number
  y: number
  w: number
  visual: React.ReactNode
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

const items: Item[] = [
  { id: 1, title: 'Dashboard UI', category: 'UI Design', x: 80, y: 80, w: 300, visual: <UIMockup /> },
  { id: 2, title: 'Color System', category: 'Design System', x: 460, y: 40, w: 240, visual: <ColorPalette /> },
  { id: 3, title: 'Type Specimen', category: 'Typography', x: 800, y: 100, w: 280, visual: <TypographyStudy /> },
  { id: 4, title: 'Icon Set', category: 'Visual Design', x: 220, y: 420, w: 260, visual: <IconGrid /> },
  { id: 5, title: 'App Wireframe', category: 'Wireframing', x: 580, y: 400, w: 320, visual: <Wireframe /> },
  { id: 6, title: 'Brand Gradient', category: 'Branding', x: 1020, y: 380, w: 220, visual: <GradientCard from="#6366f1" to="#a855f7" label="Brand Gradient" /> },
  { id: 7, title: 'Motion Study', category: 'Interaction', x: 80, y: 780, w: 280, visual: <GradientCard from="#f43f5e" to="#f97316" label="Motion Frames" /> },
  { id: 8, title: 'Data Viz', category: 'Dashboard', x: 440, y: 800, w: 300, visual: <GradientCard from="#0ea5e9" to="#06b6d4" label="Chart Exploration" /> },
  { id: 9, title: 'Component Library', category: 'Components', x: 840, y: 760, w: 260, visual: <GradientCard from="#22c55e" to="#10b981" label="Component Grid" /> },
  { id: 10, title: 'Landing Concept', category: 'Web Design', x: 180, y: 1160, w: 320, visual: <GradientCard from="#8b5cf6" to="#d946ef" label="Landing Page" /> },
  { id: 11, title: 'Card System', category: 'Design System', x: 620, y: 1180, w: 240, visual: <GradientCard from="#eab308" to="#f59e0b" label="Card Variants" /> },
  { id: 12, title: 'Micro-interactions', category: 'Interaction', x: 980, y: 1140, w: 280, visual: <GradientCard from="#ef4444" to="#f97316" label="Hover States" /> },
]

export default function PlaygroundCanvas() {
  const constraintsRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleDragStart = useCallback(() => setIsDragging(true), [])
  const handleDragEnd = useCallback(() => {
    setTimeout(() => setIsDragging(false), 0)
  }, [])

  return (
    <div
      className="fixed inset-0 top-16 overflow-hidden cursor-grab active:cursor-grabbing"
      style={{
        background: `
          linear-gradient(to right, rgba(128,128,128,0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(128,128,128,0.08) 1px, transparent 1px),
          var(--surface)
        `,
        backgroundSize: '48px 48px, 48px 48px, 100% 100%',
      }}
    >
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <p className="text-xs text-muted font-mono tracking-wider">
          drag to explore &middot; click to view
        </p>
      </div>
      <motion.div
        ref={constraintsRef}
        className="w-full h-full"
      >
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.08}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          className="relative"
          style={{ width: 1500, height: 1600 }}
        >
          {items.map((item) => (
            <PlaygroundCard
              key={item.id}
              title={item.title}
              category={item.category}
              visual={item.visual}
              isDragging={isDragging}
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
