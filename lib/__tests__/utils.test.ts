import { describe, it, expect } from 'vitest'
import { slugify, formatDate, sortByYear, filterByIndustry } from '../utils'

describe('slugify', () => {
  it('converts text to lowercase slug', () => {
    expect(slugify('Enterprise Dashboard')).toBe('enterprise-dashboard')
  })

  it('removes special characters', () => {
    expect(slugify('Payment Platform $200M')).toBe('payment-platform-200m')
  })

  it('collapses multiple hyphens', () => {
    expect(slugify('design  --  system')).toBe('design-system')
  })
})

describe('formatDate', () => {
  it('formats a date to long format', () => {
    const date = new Date('2024-06-15')
    expect(formatDate(date)).toBe('June 15, 2024')
  })
})

describe('sortByYear', () => {
  const items = [
    { title: 'A', year: 2022 },
    { title: 'B', year: 2024 },
    { title: 'C', year: 2020 },
  ]

  it('sorts descending by default', () => {
    const result = sortByYear(items)
    expect(result.map((i) => i.title)).toEqual(['B', 'A', 'C'])
  })

  it('sorts ascending when specified', () => {
    const result = sortByYear(items, 'asc')
    expect(result.map((i) => i.title)).toEqual(['C', 'A', 'B'])
  })

  it('does not mutate original array', () => {
    const original = [...items]
    sortByYear(items)
    expect(items).toEqual(original)
  })
})

describe('filterByIndustry', () => {
  const projects = [
    { title: 'Dashboard', industry: 'SaaS' },
    { title: 'Payments', industry: 'Fintech' },
    { title: 'Analytics', industry: 'SaaS' },
  ]

  it('filters projects by industry (case insensitive)', () => {
    expect(filterByIndustry(projects, 'saas')).toHaveLength(2)
    expect(filterByIndustry(projects, 'Fintech')).toHaveLength(1)
  })

  it('returns empty array for unmatched industry', () => {
    expect(filterByIndustry(projects, 'Healthcare')).toHaveLength(0)
  })
})
