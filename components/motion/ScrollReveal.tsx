'use client'

import { motion } from 'motion/react'
import { useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
}

export default function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
