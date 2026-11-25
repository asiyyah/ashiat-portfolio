"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

interface ProcessCardProps {
  className?: string;
  children: React.ReactNode;
}

const SPRING = { stiffness: 220, damping: 32, mass: 0.2 };

/**
 * A card that fades in over the bottom edge of the screen and fades out over
 * the top edge. Both zones are small, so about three cards stay fully visible
 * at rest. It follows scroll position (no timers or stagger), so it reverses
 * when the user scrolls back up. Nothing is pinned or hijacked.
 */
export default function ProcessCard({ className, children }: ProcessCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Fade in: card top travels from the bottom of the screen up to 80% down it.
  const { scrollYProgress: enter } = useScroll({
    target: ref,
    offset: ["start end", "start 0.8"],
  });

  // Fade out: card bottom travels from 15% down the screen up to the top edge.
  const { scrollYProgress: exit } = useScroll({
    target: ref,
    offset: ["end 0.15", "end start"],
  });

  const enterSmooth = useSpring(enter, SPRING);
  const exitSmooth = useSpring(exit, SPRING);

  const opacity = useTransform([enterSmooth, exitSmooth], ([e, x]: number[]) => {
    const inV = Math.min(1, Math.max(0, e));
    const outV = Math.min(1, Math.max(0, x));
    return inV * (1 - outV);
  });
  const y = useTransform([enterSmooth, exitSmooth], ([e, x]: number[]) => {
    const inV = Math.min(1, Math.max(0, e));
    const outV = Math.min(1, Math.max(0, x));
    return (1 - inV) * 24 - outV * 16;
  });

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} className={className} style={{ opacity, y }}>
      {children}
    </motion.div>
  );
}
