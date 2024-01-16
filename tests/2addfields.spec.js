import { test, expect } from '@playwright/test';

    const d = new Date();
    let time = d.getTime();
    const excecution="Test"+d.getFullYear+"0"
    console.log("Execution on" + time);

const URL_TEST = [
  URL_TEST[0]
];
//1authenticationases.spec

test('authenticate', async ({ page }) => {
  await page.goto('https://beta.ruggedbooksms.com/');
  await page.getByPlaceholder('User Name').click();
  await page.getByPlaceholder('User Name').press('Control+a');
  await page.getByPlaceholder('User Name').fill('admin@rbms.com');
  await page.getByPlaceholder('User Name').press('Tab');
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
});

test('addfieldvalueboolean-false', async ({ page }) => {
  await page.goto('https://beta.ruggedbooksms.com/');
  await page.getByPlaceholder('User Name').click();
  await page.getByPlaceholder('User Name').press('Control+a');
  await page.getByPlaceholder('User Name').fill('admin@rbms.com');
  await page.getByPlaceholder('User Name').press('Tab');
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Field Value' }).click();
  await page.getByRole('row', { name: 'fieldtest20240110 boolean' }).locator('path').first().click();
  await page.getByRole('main').locator('svg').click();
  await page.locator('#react-select-7-option-1').click();
  await page.getByRole('button', { name: 'Save' }).click();
});

test('createfield-string', async ({ page }) => {
    await page.getByRole('link', { name: 'Fields' }).click();
    await page.getByRole('button', { name: 'Create New Field' }).click();
    await page.getByPlaceholder('Field Name').click();
    await page.getByPlaceholder('Field Name').fill('fieldStringTest202410');
    await page.locator('.select__input-container').first().click();
    await page.locator('#react-select-11-option-1').click();
    await page.locator('div').filter({ hasText: /^Field GroupField Group$/ }).locator('svg').click();
    await page.getByText('FieldGroupTest20240110', { exact: true }).click();
    await page.locator('div:nth-child(4) > div > .select > .select__control > .select__value-container > .select__input-container').click();
    await page.locator('#react-select-13-option-0').click();
    await page.getByLabel('').check();
    await page.getByRole('button', { name: 'Save' }).click();
  });

  test('createFieldOpentext', async ({ page }) => {
    await page.getByRole('link', { name: 'Fields' }).click();
    await page.getByRole('button', { name: 'Create New Field' }).click();
    await page.getByPlaceholder('Field Name').click();
    await page.getByPlaceholder('Field Name').fill('testFieldOpentext202410');
    await page.locator('div').filter({ hasText: /^\*Data TypeData Type$/ }).locator('svg').click();
    await page.getByText('opentext', { exact: true }).click();
    await page.locator('div').filter({ hasText: /^Field GroupField Group$/ }).locator('svg').click();
    await page.locator('#react-select-21-option-0').click();
    await page.locator('div').filter({ hasText: /^\*Field TypeField Type$/ }).locator('svg').click();
    await page.locator('#react-select-22-option-0').click();
    await page.getByRole('button', { name: 'Save' }).click();
  });

  test('createFieldInteger', async ({ page }) => {
    await page.getByRole('link', { name: 'Fields' }).click();
    await page.getByRole('button', { name: 'Create New Field' }).click();
    await page.getByPlaceholder('Field Name').click();
    await page.getByPlaceholder('Field Name').fill('FieldInteger202410');
    await page.locator('div').filter({ hasText: /^\*Data TypeData Type$/ }).locator('svg').click();
    await page.locator('#react-select-26-option-3').click();
    await page.locator('div').filter({ hasText: /^Field GroupField Group$/ }).locator('svg').click();
    await page.getByText('FieldGroupTest20240110', { exact: true }).click();
    await page.locator('div').filter({ hasText: /^\*Field TypeField Type$/ }).locator('svg').click();
    await page.locator('#react-select-28-option-0').click();
    await page.getByLabel('').check();
    await page.getByRole('button', { name: 'Save' }).click();
  });

  test('createfieldPercentage', async ({ page }) => {
    await page.getByRole('link', { name: 'Fields' }).click();
    await page.getByRole('button', { name: 'Create New Field' }).click();
    await page.getByPlaceholder('Field Name').click();
    await page.getByPlaceholder('Field Name').fill('fieldpercentage202410');
    await page.locator('.select-dropdown-indicator').first().click();
    await page.getByText('percentage', { exact: true }).click();
    await page.locator('div').filter({ hasText: /^Field GroupField Group$/ }).locator('svg').click();
    await page.getByText('FieldGroupTest20240110', { exact: true }).click();
    await page.locator('div').filter({ hasText: /^\*Field TypeField Type$/ }).locator('svg').click();
    await page.locator('#react-select-34-option-0').click();
    await page.getByLabel('').check();
    await page.getByRole('button', { name: 'Save' }).click();
  });