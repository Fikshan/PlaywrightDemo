import { test, expect } from '@playwright/test';

test('C Open Google and check title', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});

test('D Open Facebook and check title', async ({ page }) => {
    await page.goto('https://www.facebook.com');
    await expect(page).toHaveTitle(/Facebook/);
  });

test('E Open Facebook and check title', async ({ page }) => {
    await page.goto('https://www.gmail.com');
    await expect(page).toHaveTitle(/Gmail/);
  });
