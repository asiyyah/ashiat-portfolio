"use client";

import { useEffect, useRef } from "react";
import styles from "./EmailIllustration.module.css";

/**
 * Decorative open envelope with a letter peeking out. Drawn in the footer's own tokens, so it
 * follows the light and dark footer automatically.
 *
 * Without JavaScript, or with reduced motion, it stays as the finished still image. Otherwise it
 * waits (data-anim="ready"), then plays once when scrolled into view (data-anim="play"):
 * the envelope rises, the flap opens, the letter slides out, then it floats gently.
 */
export default function EmailIllustration() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    svg.dataset.anim = "ready";
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          svg.dataset.anim = "play";
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className={styles.illustration}
      viewBox="0 0 520 440"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="ei-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" className={styles.glowStart} />
          <stop offset="100%" className={styles.glowEnd} />
        </radialGradient>
        <radialGradient id="ei-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" className={styles.shadowStart} />
          <stop offset="100%" className={styles.shadowEnd} />
        </radialGradient>
        {/* keeps the letter inside the envelope while it is tucked in (nothing shows below the bottom edge) */}
        <clipPath id="ei-letter-clip">
          <rect x="0" y="0" width="520" height="378" />
        </clipPath>
        <linearGradient id="ei-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" className={styles.frontTop} />
          <stop offset="100%" className={styles.frontBottom} />
        </linearGradient>
        <linearGradient id="ei-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" className={styles.backTop} />
          <stop offset="100%" className={styles.backBottom} />
        </linearGradient>
      </defs>

      <ellipse className={styles.glow} cx="260" cy="236" rx="250" ry="210" fill="url(#ei-glow)" />
      <ellipse className={styles.shadow} cx="260" cy="404" rx="170" ry="18" fill="url(#ei-shadow)" />

      <g className={styles.stage}>
        <g className={styles.float}>
          {/* back panel and open flap */}
          <rect className={styles.back} x="90" y="190" width="340" height="190" rx="16" fill="url(#ei-back)" />
          <path
            className={styles.flapOpen}
            d="M108 198 L260 80 L412 198 Z"
            strokeWidth="16"
            strokeLinejoin="round"
          />

          {/* the letter: lift (hover / copied) > rise (entrance) > tilt */}
          <g clipPath="url(#ei-letter-clip)">
          <g className={styles.letterLift} data-envelope="letter">
            <g className={styles.letterRise}>
              <g transform="rotate(-2.5 260 208)">
                <rect className={styles.paper} x="132" y="104" width="256" height="206" rx="10" />
                <text className={styles.hello} x="158" y="152">
                  Hello,
                </text>
                <rect className={styles.line} x="158" y="176" width="150" height="7" rx="3.5" />
                <rect className={styles.line} x="158" y="194" width="196" height="7" rx="3.5" />
                <rect className={styles.line} x="158" y="212" width="172" height="7" rx="3.5" />
                <rect className={styles.line} x="158" y="230" width="112" height="7" rx="3.5" />
                <circle className={styles.seal} cx="352" cy="140" r="16" />
                <text className={styles.sealMark} x="352" y="147" textAnchor="middle">
                  A
                </text>
              </g>
            </g>
          </g>
          </g>

          {/* front pocket with a V-shaped opening */}
          <path
            className={styles.front}
            d="M90 204 L260 296 L430 204 L430 364 Q430 380 414 380 L106 380 Q90 380 90 364 Z"
            fill="url(#ei-front)"
          />
          <path className={styles.fold} d="M98 374 L260 296 L422 374" fill="none" />
          <path className={styles.edge} d="M90 204 L260 296 L430 204" fill="none" />

          {/* closed flap: only visible at the start of the animation, then it swings open */}
          <path
            className={styles.flapClosed}
            d="M108 198 L260 316 L412 198 Z"
            strokeWidth="16"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}
