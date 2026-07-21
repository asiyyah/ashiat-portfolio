interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Display({
  children,
  className = "",
  as: Tag = "h1",
}: TypographyProps) {
  return <Tag className={`display ${className}`}>{children}</Tag>;
}

export function Heading({
  children,
  className = "",
  as: Tag = "h2",
}: TypographyProps) {
  return <Tag className={`heading ${className}`}>{children}</Tag>;
}

export function Subheading({
  children,
  className = "",
  as: Tag = "h3",
}: TypographyProps) {
  return <Tag className={`subheading ${className}`}>{children}</Tag>;
}

export function Body({
  children,
  className = "",
  as: Tag = "p",
}: TypographyProps) {
  return <Tag className={`body ${className}`}>{children}</Tag>;
}

export function Caption({
  children,
  className = "",
  as: Tag = "p",
}: TypographyProps) {
  return <Tag className={`caption ${className}`}>{children}</Tag>;
}

export function Metric({
  children,
  className = "",
  label,
}: {
  children: React.ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <div className={className}>
      <p
        className="font-sans"
        style={{ fontSize: "2.25rem", lineHeight: 1.02 }}
      >
        {children}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}
