// @ts-check
import { test, expect } from '@playwright/test'
const LOCALHOST_URL = 'http://localhost:5173/'

test('app show random fact string', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const textContent = await text.textContent
  await expect(textContent?.length).toBeGreaterThan(0)
  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
})
