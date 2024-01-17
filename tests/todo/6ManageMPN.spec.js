// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://beta.ruggedbooksms.com/');
//   await page.goto('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/');
//   await page.getByPlaceholder('User Name').click();
//   await page.getByPlaceholder('User Name').press('Control+a');
//   await page.getByPlaceholder('User Name').fill('admin@rbms.com');
//   await page.getByPlaceholder('User Name').press('Tab');
//   await page.getByPlaceholder('Password').press('Control+a');
//   await page.getByPlaceholder('Password').fill('password');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Manage MPN' }).click();
//   await page.getByRole('button', { name: 'Create New MPN' }).click();
//   await page.getByPlaceholder('MPN Name').click();
//   await page.getByPlaceholder('MPN Name').fill('CF-33TEST');
//   await page.locator('div').filter({ hasText: /^Model$/ }).nth(2).click();
//   await page.getByText('TestModel202410', { exact: true }).click();
//   await page.getByPlaceholder('Description').click();
//   await page.getByPlaceholder('Description').fill('This is a test MPN for a TestModel previously created');
//   await page.getByRole('button', { name: 'Save' }).click();
// });