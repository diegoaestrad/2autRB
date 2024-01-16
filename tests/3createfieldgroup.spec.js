import { expect, test } from '@playwright/test';

test('authenticate', async ({ page }) => {
    await page.goto('https://beta.ruggedbooksms.com/');
    await page.getByPlaceholder('User Name').click();
    await page.getByPlaceholder('User Name').press('Control+a');
    await page.getByPlaceholder('User Name').fill('admin@rbms.com');
    await page.getByPlaceholder('User Name').press('Tab');
    await page.getByPlaceholder('Password').fill('password');
    await page.getByRole('button', { name: 'Sign In' }).click();
  });



test('createFieldGroup', async ({ page }) => {
    await page.goto('https://beta.ruggedbooksms.com/');
    await page.goto('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/');
    await page.getByPlaceholder('User Name').click();
    // await page.getByPlaceholder('User Name').click();
    await page.getByPlaceholder('User Name').press('Control+a');
    await page.getByPlaceholder('User Name').fill('admin@rbms.com');
    await page.getByPlaceholder('User Name').press('Tab');
    await page.getByPlaceholder('Password').fill('password');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div').filter({ hasText: /^Field Management$/ }).click();
    await page.getByRole('link', { name: 'Field Group' }).click();
    await page.getByRole('button', { name: 'Create Field Group' }).click();
    await page.getByPlaceholder('Field Group Name').click();
    await page.getByPlaceholder('Field Group Name').fill('FieldGroupTest20240110');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page).toHaveURL('https://beta.ruggedbooksms.com/#/app/field-group')
    
  });

  
test('createfield-boolean', async ({ page }) => {
    await page.goto('https://beta.ruggedbooksms.com/');
    await page.goto('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/');
    await page.getByPlaceholder('User Name').click();
    await page.getByPlaceholder('User Name').click();
    await page.getByPlaceholder('User Name').press('Control+a');
    await page.getByPlaceholder('User Name').fill('admin@rbms.com');
    await page.getByPlaceholder('User Name').press('Tab');
    await page.getByPlaceholder('Password').fill('password');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('div').filter({ hasText: /^Field Management$/ }).click();
    await page.getByRole('link', { name: 'Fields' }).click();
    await page.getByRole('button', { name: 'Create New Field' }).click();
    await page.getByPlaceholder('Field Name').click();
    await page.getByPlaceholder('Field Name').fill('fieldtest20240110');
    await page.locator('.select__input-container').first().click();
    await page.locator('#react-select-2-option-0').click();
    await page.locator('div:nth-child(3) > div > .select > .select__control > .select__value-container > .select__input-container').click();
    await page.locator('#react-select-3-option-0').click();
    await page.locator('div:nth-child(4) > div > .select > .select__control > .select__value-container > .select__input-container').click();
    await page.locator('#react-select-4-option-0').click();
    await page.getByLabel('').check();
    await page.getByRole('button', { name: 'Save' }).click();
  });
  
  test('createfieldvalueboolean', async ({ page }) => {
      await page.goto('https://beta.ruggedbooksms.com/');
      await page.goto('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/');
      await page.getByPlaceholder('User Name').click();
      await page.getByPlaceholder('User Name').click();
      await page.getByPlaceholder('User Name').press('Control+a');
      await page.getByPlaceholder('User Name').fill('admin@rbms.com');
      await page.getByPlaceholder('User Name').press('Tab');
      await page.getByPlaceholder('Password').fill('password');
      await page.getByRole('button', { name: 'Sign In' }).click();
      await page.locator('div').filter({ hasText: /^Field Management$/ }).click();
      await page.getByRole('link', { name: 'Fields' }).click();
      await page.getByRole('button', { name: 'Create New Field' }).click();
      await page.getByPlaceholder('Field Name').click();
      await page.getByPlaceholder('Field Name').fill('fieldtest20240110');
      await page.locator('.select__input-container').first().click();
      await page.locator('#react-select-2-option-0').click();
      await page.locator('div:nth-child(3) > div > .select > .select__control > .select__value-container > .select__input-container').click();
      await page.locator('#react-select-3-option-0').click();
      await page.locator('div:nth-child(4) > div > .select > .select__control > .select__value-container > .select__input-container').click();
      await page.locator('#react-select-4-option-0').click();
      await page.getByLabel('').check();
      await page.getByRole('button', { name: 'Save' }).click();
    });