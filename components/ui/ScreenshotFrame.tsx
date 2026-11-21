"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef } from "react";

interface ScreenshotFrameProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: ReactNode;
  className?: string;
}

/**
 * Case study screenshot. Inline it fills the column; tapping or clicking opens
 * a full-size view (scrollable in both directions) so dense UI is legible on phones.
 */
export default function ScreenshotFrame({
  src,
  alt,
  width = 1200,
  height = 750,
  caption,
  className = "",
}: ScreenshotFrameProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // <dialog> closes itself on Esc; return focus to the screenshot that opened it.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => triggerRef.current?.focus();
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <figure className={`my-10 group ${className}`}>
      <div className="rounded-lg bg-surface p-2 md:p-6">
        <button
          ref={triggerRef}
          type="button"
          onClick={open}
          aria-label={`View full size: ${alt}`}
          className="screenshot-trigger block w-full rounded-md overflow-hidden bg-background border border-border text-left"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-auto transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <span className="screenshot-hint" aria-hidden="true">
            Tap to enlarge
          </span>
        </button>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted">
          {caption}
        </figcaption>
      )}

      <dialog
        ref={dialogRef}
        className="screenshot-dialog"
        aria-label={alt}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        <div className="screenshot-dialog-bar">
          <p className="screenshot-dialog-title">{alt}</p>
          <button type="button" onClick={close} className="screenshot-dialog-close">
            Close
          </button>
        </div>
        <div className="screenshot-dialog-scroll">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="screenshot-dialog-image"
            sizes="(max-width: 768px) 1200px, 1600px"
            quality={85}
          />
        </div>
      </dialog>
    </figure>
  );
}
