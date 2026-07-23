'use client'

import { motion, useMotionValue, useSpring } from 'motion/react'
import { useEffect, useState, useSyncExternalStore } from 'react'

function subscribeToPointerFine(callback: () => void) {
  const mq = window.matchMedia('(pointer: fine)')
  callback()
  mq.addEventListener('change', callback)
  return () => mq.removeEventListener('change', callback)
}

function getPointerFineSnapshot() {
  return window.matchMedia('(pointer: fine)').matches
}

function getPointerFineServerSnapshot() {
  return false
}

interface CustomCursorProps {
  label?: string
}

export default function CustomCursor({ label = 'You' }: CustomCursorProps) {
  const [visible, setVisible] = useState(false)
  const isFinePointer = useSyncExternalStore(
    subscribeToPointerFine,
    getPointerFineSnapshot,
    getPointerFineServerSnapshot,
  )

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    if (!isFinePointer) return

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [isFinePointer, visible, cursorX, cursorY])

  if (!isFinePointer) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[40] pointer-events-none"
      style={{ x, y }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        <div
          className="w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'var(--accent)',
            boxShadow: '0 0 12px rgba(232, 39, 26, 0.3)',
          }}
        />
        <div
          className="absolute top-3 left-3 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-mono font-medium tracking-wide uppercase"
          style={{
            background: 'var(--accent)',
            color: 'var(--accent-foreground)',
          }}
        >
          {label}
        </div>
      </div>
    </motion.div>
  )
}
