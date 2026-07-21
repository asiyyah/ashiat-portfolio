interface GridProps {
  children: React.ReactNode
  className?: string
  cols?: 1 | 2 | 3 | 4
}

const colClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 lg:grid-cols-4',
}

export default function Grid({
  children,
  className = '',
  cols = 1,
}: GridProps) {
  return (
    <div className={`grid gap-8 ${colClasses[cols]} ${className}`}>
      {children}
    </div>
  )
}
