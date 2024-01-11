import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByRole('link', { name: 'Manage MPN' }).click();
  await page.getByRole('button', { name: 'Create New MPN' }).click();
  await page.getByPlaceholder('MPN Name').click();
  await page.getByPlaceholder('MPN Name').fill('CF-33TEST');
  await page.locator('div').filter({ hasText: /^Model$/ }).nth(2).click();
  await page.getByText('TestModel202410', { exact: true }).click();
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('This is a test MPN for a TestModel previously created');
  await page.getByRole('button', { name: 'Save' }).click();
});