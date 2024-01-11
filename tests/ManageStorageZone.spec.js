import { test, expect } from '@playwright/test';

test('Create Storage Zone', async ({ page }) => {
  await page.goto('https://beta.ruggedbooksms.com/');
  await page.goto('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/');
  await page.getByPlaceholder('User Name').click();
  await page.getByPlaceholder('User Name').press('Control+a');
  await page.getByPlaceholder('User Name').fill('admin@rbms.com');
  await page.getByPlaceholder('User Name').press('Tab');
  await page.getByPlaceholder('Password').press('Control+a');
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('div').filter({ hasText: /^StorageZone$/ }).locator('svg').nth(1).click();
  await page.getByRole('link', { name: 'Storage Zones' }).click();
  await page.getByRole('button', { name: 'Create Storage Zone' }).click();
  await page.getByPlaceholder('Zone Name').click();
  await page.getByPlaceholder('Zone Name').fill('ShelfTest');
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('This is a shelf created for testing purposes');
  await page.getByRole('button', { name: 'Save & Exit' }).click();
  await page.getByRole('cell', { name: 'ShelfTest' }).click();
});


test('test', async ({ page }) => {
  await page.getByRole('cell', { name: 'ShelfTest' }).click();
  await page.getByRole('row', { name: 'ShelfTest This is a shelf' }).locator('svg').click();
  await page.getByRole('button', { name: 'Area' }).click();
  await page.getByRole('button', { name: '+ Add More' }).click();
  await page.getByPlaceholder('Area Name').click();
  await page.getByPlaceholder('Area Name').fill('SHTestR');
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('This is a testing shelf located on SHR');
  await page.getByRole('button', { name: 'Save & Exit' }).click();
  await page.getByRole('cell', { name: 'ShelfTest' }).click();
});

test('CompleteStorageZone', async ({ page }) => {
  await page.getByRole('button', { name: 'Area' }).click();
  await page.getByRole('button', { name: '+ Add More' }).click();
  await page.getByPlaceholder('Area Name').click();
  await page.getByPlaceholder('Area Name').fill('SH1Rtest');
  await page.getByPlaceholder('Area Name').click();
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('Shelf Test R');
  await page.getByRole('button', { name: '+ Add More' }).click();
  await page.getByPlaceholder('Area Name').nth(1).click();
  await page.getByPlaceholder('Area Name').nth(1).fill('SH1Ltest');
  await page.getByPlaceholder('Description').nth(1).click();
  await page.getByPlaceholder('Description').nth(1).fill('Shelf Test L');
  await page.getByRole('button', { name: 'Location' }).click();
  await page.getByRole('button', { name: '+ Add Storage Location' }).click();
  await page.locator('.select__input-container').click();
  await page.locator('#react-select-2-option-0').click();
  await page.getByPlaceholder('Location Name').click();
  await page.getByPlaceholder('Location Name').fill('');
  await page.getByPlaceholder('Location Name').press('CapsLock');
  await page.getByPlaceholder('Location Name').fill('SH1-R1');
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').press('CapsLock');
  await page.getByPlaceholder('Description').fill('Test Location on SH1-R1');
  await page.getByRole('button', { name: 'Level' }).click();
  await page.getByRole('button', { name: '+ Add Storage Levels' }).click();
  await page.getByRole('cell', { name: 'Location' }).locator('svg').click();
  await page.locator('#react-select-3-option-0').click();
  await page.getByPlaceholder('Storage Level').click();
  await page.getByPlaceholder('Storage Level').fill('SL01R');
  await page.getByPlaceholder('Description').click();
  await page.getByPlaceholder('Description').fill('Storage Legel located on SH1 level 1 R');
  await page.getByRole('button', { name: 'Save & Exit' }).click();
});