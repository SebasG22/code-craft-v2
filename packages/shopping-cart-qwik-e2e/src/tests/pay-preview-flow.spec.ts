import { test } from '@playwright/test';

test.use({ viewport: { width: 1200, height: 1400 } });
test('Validate layout on breakpoint - LG (1200px)', async ({ page }) => {
  await page.goto('http://localhost:5000/', { waitUntil: 'networkidle' });

  await page.locator('[data-test="Cappuccino"]').getByText('milk foam').click();
  await page.waitForTimeout(1000);
  await page.locator('[data-test="checkout"]').dispatchEvent('mouseover');

  await page.getByRole('button', { name: 'Add one Cappuccino' }).click();
  await page.getByRole('button', { name: 'Add one Cappuccino' }).click();
  await page.locator('[data-test="checkout"]').click();
  // await expect(page).toHaveScreenshot();
});
