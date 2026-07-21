interface TagProps {
  children: React.ReactNode
  className?: string
}

export default function Tag({ children, className = '' }: TagProps) {
  return (
    <span className={`text-xs px-2 py-1 rounded bg-surface text-muted ${className}`}>
      {children}
    </span>
  )
}
