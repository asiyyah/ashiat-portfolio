import Image from "next/image";
import { ReactNode } from "react";

interface ScreenshotFrameProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: ReactNode;
  className?: string;
}

export default function ScreenshotFrame({
  src,
  alt,
  width = 1200,
  height = 750,
  caption,
  className = "",
}: ScreenshotFrameProps) {
  return (
    <figure className={`my-10 group ${className}`}>
      <div
        className="rounded-lg bg-surface p-4 md:p-6"
      >
        <div className="rounded-md overflow-hidden bg-background border border-border">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-auto transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
