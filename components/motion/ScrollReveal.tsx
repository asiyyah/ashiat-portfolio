'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  /** How far it rises while fading in (px). */
  y?: number
  /** Share of the element that must be visible before it animates (0 to 1). */
  amount?: number
}

export default function ScrollReveal({ children, className = '', delay = 0, y = 16, amount = 0.08 }: ScrollRevealProps) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px', amount }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
