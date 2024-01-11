import { test, expect } from '@playwright/test';

test('createModel', async ({ page }) => {
  await page.getByRole('link', { name: 'Manage Model' }).click();
  await page.getByRole('button', { name: 'Create New Model' }).click();
  await page.getByPlaceholder('Model Name').click();
  await page.getByPlaceholder('Model Name').fill('TestModel202410');
  await page.getByPlaceholder('Identifier').click();
  await page.getByPlaceholder('Identifier').fill('idtest202410');
  await page.getByRole('main').locator('svg').click();
  await page.getByText('TestCategory202410', { exact: true }).click();
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('model based ontest 202410');
  await page.getByLabel('').uncheck();
  await page.getByLabel('').check();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
});