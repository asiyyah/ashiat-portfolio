export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function formatYear(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
  }).format(date)
}

export function sortByYear<T extends { year: number }>(items: T[], order: 'asc' | 'desc' = 'desc'): T[] {
  return [...items].sort((a, b) => order === 'desc' ? b.year - a.year : a.year - b.year)
}

export function filterByIndustry<T extends { industry: string }>(items: T[], industry: string): T[] {
  return items.filter((item) => item.industry.toLowerCase() === industry.toLowerCase())
}

export function filterByCategory<T extends { category: string }>(items: T[], category: string): T[] {
  return items.filter((item) => item.category.toLowerCase() === category.toLowerCase())
}
