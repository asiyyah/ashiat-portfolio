interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div
      className={`w-full bg-foreground ${className}`}
      style={{ height: "48px" }}
      role="separator"
      aria-hidden="true"
    />
  );
}
