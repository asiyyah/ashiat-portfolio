import { test, expect } from '@playwright/test'

test('homepage loads', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toContainText('Product Designer')
  await expect(page).toHaveTitle(/Product Designer/)
})

test('navigation works', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Work' }).first().click()
  await expect(page).toHaveURL('/work')
  await expect(page.locator('h1')).toContainText('Work')
})

test('work tabs switch correctly', async ({ page }) => {
  await page.goto('/work')
  await page.getByRole('tab', { name: 'Code' }).click()
  await expect(page.getByRole('tab', { name: 'Code' })).toHaveAttribute('aria-selected', 'true')
  await page.getByRole('tab', { name: 'Design' }).click()
  await expect(page.getByRole('tab', { name: 'Design' })).toHaveAttribute('aria-selected', 'true')
})

test('case study page renders', async ({ page }) => {
  await page.goto('/work/enterprise-dashboard')
  await expect(page.locator('h1')).toContainText('Enterprise Dashboard')
  await expect(page).toHaveTitle(/Enterprise Dashboard/)
})

test('back from project opened via work returns to work', async ({ page }) => {
  await page.goto('/work/enterprise-dashboard?from=work')
  await page.getByRole('button', { name: /back/i }).click()
  await expect(page).toHaveURL('/work')
})

test('back from project opened via home returns to home', async ({ page }) => {
  await page.goto('/work/enterprise-dashboard?from=home')
  await page.getByRole('button', { name: /back/i }).click()
  await expect(page).toHaveURL('/')
})

test('back from directly visited project defaults to work', async ({ page }) => {
  await page.goto('/work/enterprise-dashboard')
  await page.getByRole('button', { name: /back/i }).click()
  await expect(page).toHaveURL('/work')
})

test('playground loads', async ({ page }) => {
  await page.goto('/playground')
  await expect(page.locator('h1')).toContainText('Playground')
})

test('mobile navigation opens and closes', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 })
  await page.goto('/')
  const menuButton = page.getByLabel('Open menu')
  await menuButton.click()
  await expect(page.getByLabel('Navigation menu')).toBeVisible()
  await page.getByLabel('Navigation menu').getByRole('link', { name: 'About' }).click()
  await expect(page).toHaveURL('/about')
})

test('contact page loads', async ({ page }) => {
  await page.goto('/contact')
  await expect(page.locator('h1')).toContainText('Get in Touch')
})

test('about page loads', async ({ page }) => {
  await page.goto('/about')
  await expect(page.locator('h1')).toContainText('About')
})

test('footer navigation is present', async ({ page }) => {
  await page.goto('/')
  const footer = page.locator('footer')
  await expect(footer.getByRole('link', { name: 'Contact' })).toBeVisible()
})
