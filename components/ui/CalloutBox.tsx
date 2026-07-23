import { ReactNode } from "react";

interface CalloutBoxProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function CalloutBox({
  title,
  children,
  className = "",
}: CalloutBoxProps) {
  return (
    <div
      className={`rounded-lg bg-surface p-6 ${className}`}
    >
      <h4
        className="font-semibold text-foreground mb-3"
        style={{ fontSize: "1rem" }}
      >
        {title}
      </h4>
      <div className="text-muted leading-relaxed text-sm">{children}</div>
    </div>
  );
}
