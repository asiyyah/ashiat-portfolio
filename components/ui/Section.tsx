interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "default" | "surface";
  as?: React.ElementType;
  id?: string;
}

export default function Section({
  children,
  className = "",
  background = "default",
  as: Tag = "section",
  id,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`px-6 ${background === "surface" ? "bg-surface" : ""} section-pad ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </Tag>
  );
}
