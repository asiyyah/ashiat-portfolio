import { test, expect } from '@playwright/test'

test('homepage loads', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toContainText('clarity into complex digital products')
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
  await page.getByRole('tab', { name: 'Built with Code' }).click()
  await expect(page.getByRole('tab', { name: 'Built with Code' })).toHaveAttribute('aria-selected', 'true')
  await page.getByRole('tab', { name: 'Product Design' }).click()
  await expect(page.getByRole('tab', { name: 'Product Design' })).toHaveAttribute('aria-selected', 'true')
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

test('playground cards open from the keyboard and close with Escape', async ({ page }) => {
  await page.goto('/playground')
  const card = page.getByRole('button', { name: 'Open EcoLife Blog' })
  await card.focus()
  await page.keyboard.press('Enter')
  await expect(page.getByRole('dialog', { name: 'EcoLife Blog' })).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog', { name: 'EcoLife Blog' })).toBeHidden()
  await expect(card).toBeFocused()
})

test('unknown projects return a 404 page', async ({ page }) => {
  const response = await page.goto('/work/does-not-exist')
  expect(response?.status()).toBe(404)
  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible()
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
  await expect(page.locator('h1')).toContainText("Let's make it clear.")
  await expect(page.getByLabel('Your name')).toHaveCount(1)
  await expect(page.getByLabel('Email address')).toHaveCount(1)
  await expect(page.getByLabel('What are you working on?')).toHaveCount(1)
})

test('about page loads', async ({ page }) => {
  await page.goto('/about')
  await expect(page.locator('h1')).toContainText("Hi, I'm Ashiat. I followed curiosity into product design.")
})

test('footer navigation is present', async ({ page }) => {
  await page.goto('/')
  const footer = page.locator('footer')
  await expect(footer.getByRole('link', { name: 'Contact' })).toBeVisible()
  await expect(footer.getByRole('heading', { name: /let's make it clear/i })).toBeVisible()
  await expect(footer.getByLabel('Your name')).toBeVisible()
  await expect(footer.getByLabel('Email address')).toBeVisible()
  await expect(footer.getByLabel('What are you working on?')).toBeVisible()

  const backToTop = footer.getByRole('link', { name: 'Back to the top of this page' })
  await backToTop.click()
  await expect(page).toHaveURL(/#top$/)
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(2)
})
