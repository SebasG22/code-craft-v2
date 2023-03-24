import { test, expect } from '@playwright/test';

test('demo-app', async ({ page }) => {
  await page.goto('/');

  const greeting = page.locator('h1');
  await expect(greeting).toContainText('Welcome demo-app');
});
