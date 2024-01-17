// import { test, expect } from '@playwright/test';

//     const d = new Date();
//     let time = d.getTime();
//     const excecution="Test"+d.getFullYear+"0"
//     console.log("Execution on" + time);

// const URL_TEST = "http://localhost:5173/"

// //1authenticationases.spec

// const testUserCredentials = [
//   { username: 'admin@mail.com', password: 'pass' },
//   // Add more user credentials as needed
// ];

// testUserCredentials.forEach((credentials, index) => {
//   test(`Test Case ${index + 1}`, async ({ page }) => {
//     await page.goto(URL_TEST);
//     await page.goto(URL_TEST + '#/sign-in?redirectUrl=/');

//     // Input username
//     await page.getByPlaceholder('User Name').click();
//     await page.getByPlaceholder('User Name').fill(credentials.username);

//     // Input password
//     await page.getByPlaceholder('Password').click();
//     await page.getByPlaceholder('Password').press('Control+a');
//     await page.getByPlaceholder('Password').fill(credentials.password);

//     // Click Sign In button
//     await page.getByRole('button', { name: 'Sign In' }).click();
//   });
// });



// // test('test', async ({ page }) => {
// //   await page.goto(URL_TEST);
// //   await page.goto(URL_TEST+'#/sign-in?redirectUrl=/');
// //   await page.getByPlaceholder('User Name').click();
// //   await page.getByPlaceholder('User Name').fill('admin@rbms.com');
// //   await page.getByPlaceholder('Password').click();
// //   await page.getByPlaceholder('Password').press('Control+a');
// //   await page.getByPlaceholder('Password').fill('password');
// //   await page.getByRole('button', { name: 'Sign In' }).click();
// // });

// const addFields = [
//   { fieldName: 'Cracks/Broken?', dataType: 'boolean', fieldGroup : '', fieldType: 'cosmetic' },
//   { fieldName: 'Dents?', dataType: 'boolean', fieldGroup : '', fieldType: 'cosmetic' },
//   { fieldName: 'Scratches?', dataType: 'boolean', fieldGroup : '', fieldType: 'cosmetic' },
//   { fieldName: 'Discoloration?', dataType: 'boolean', fieldGroup : '', fieldType: 'cosmetic' },
//   { fieldName: 'Screws?', dataType: 'boolean', fieldGroup : '', fieldType: 'cosmetic' },
//   { fieldName: 'Packaging?', dataType: 'boolean', fieldGroup : '', fieldType: 'cosmetic' },
//   { fieldName: 'Cleaned?', dataType: 'boolean', fieldGroup : '', fieldType: 'cosmetic' },
//   { fieldName: 'Blemish', dataType: 'boolean', fieldGroup : '', fieldType: 'cosmetic' },
// ];


// addFields.forEach((field, index) => {
//   test(`Test Case ${index + 1}`, async ({ page }) => {
//     await page.locator('div').filter({ hasText: /^Field Management$/ }).locator('svg').nth(1).click();
//     await page.getByRole('link', { name: 'Fields' }).click();
//     await page.getByRole('button', { name: 'Create New Field' }).click();
//     await page.getByPlaceholder('Field Name').click();
//     await page.getByPlaceholder('Field Name').fill(field.fieldName);
//     await page.locator('div').filter({ hasText: /^Data Type$/ }).nth(2).click();
//     await page.locator('#react-select-2-option-0').click();
//     await page.locator('div:nth-child(4) > div > .select > .select__control > .select__indicators > .select-dropdown-indicator').click();
//     await page.locator('#react-select-4-option-0').click();
//     await page.getByRole('button', { name: 'Save' }).click();

//     await page.getByText(field.dataType, { exact: true }).click();
//     await page.locator('.select-dropdown-indicator').first().click();
    
//     //await page.getByRole('main').locator('svg').first().click();
    
//     await page.getByText(field.fieldGroup, { exact: true }).click();
//     await page.locator('.select-dropdown-indicator').first().click();
    
//     await page.getByText(field.fieldType, { exact: true }).click();
//     await page.locator('.select-dropdown-indicator').first().click();
  
    
//     await page.getByRole('cell', { name: field.fieldName }).click();
  
//     await page.locator('div').filter({ hasText: /^\*Data TypeData Type$/ }).locator('svg').click();
  
// });


// test('test', async ({ page }) => {
//   await page.locator('div').filter({ hasText: /^Field Management$/ }).locator('svg').nth(1).click();
//   await page.getByRole('link', { name: 'Fields' }).click();
//   await page.getByRole('button', { name: 'Create New Field' }).click();
//   await page.getByPlaceholder('Field Name').click();
//   await page.getByPlaceholder('Field Name').fill('Audio');
//   await page.locator('div').filter({ hasText: /^Data Type$/ }).nth(2).click();
//   await page.locator('#react-select-2-option-0').click();
//   await page.locator('div:nth-child(4) > div > .select > .select__control > .select__indicators > .select-dropdown-indicator').click();
//   await page.locator('#react-select-4-option-0').click();
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.getByRole('cell', { name: 'Audio' }).click();
// });



// test('addfieldvalueboolean-false', async ({ page }) => {
//   await page.goto('https://beta.ruggedbooksms.com/');
//   await page.getByPlaceholder('User Name').click();
//   await page.getByPlaceholder('User Name').press('Control+a');
//   await page.getByPlaceholder('User Name').fill('admin@rbms.com');
//   await page.getByPlaceholder('User Name').press('Tab');
//   await page.getByPlaceholder('Password').fill('password');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Field Value' }).click();
//   await page.getByRole('row', { name: 'fieldtest20240110 boolean' }).locator('path').first().click();
//   await page.getByRole('main').locator('svg').click();
//   await page.locator('#react-select-7-option-1').click();
//   await page.getByRole('button', { name: 'Save' }).click();
// });

// test('createfield-string', async ({ page }) => {
//     await page.getByRole('link', { name: 'Fields' }).click();
//     await page.getByRole('button', { name: 'Create New Field' }).click();
//     await page.getByPlaceholder('Field Name').click();
//     await page.getByPlaceholder('Field Name').fill('fieldStringTest202410');
//     await page.locator('.select__input-container').first().click();
//     await page.locator('#react-select-11-option-1').click();
//     await page.locator('div').filter({ hasText: /^Field GroupField Group$/ }).locator('svg').click();
//     await page.getByText('FieldGroupTest20240110', { exact: true }).click();
//     await page.locator('div:nth-child(4) > div > .select > .select__control > .select__value-container > .select__input-container').click();
//     await page.locator('#react-select-13-option-0').click();
//     await page.getByLabel('').check();
//     await page.getByRole('button', { name: 'Save' }).click();
//   });

//   test('createFieldOpentext', async ({ page }) => {
//     await page.getByRole('link', { name: 'Fields' }).click();
//     await page.getByRole('button', { name: 'Create New Field' }).click();
//     await page.getByPlaceholder('Field Name').click();
//     await page.getByPlaceholder('Field Name').fill('testFieldOpentext202410');
//     await page.locator('div').filter({ hasText: /^\*Data TypeData Type$/ }).locator('svg').click();
//     await page.getByText('opentext', { exact: true }).click();
//     await page.locator('div').filter({ hasText: /^Field GroupField Group$/ }).locator('svg').click();
//     await page.locator('#react-select-21-option-0').click();
//     await page.locator('div').filter({ hasText: /^\*Field TypeField Type$/ }).locator('svg').click();
//     await page.locator('#react-select-22-option-0').click();
//     await page.getByRole('button', { name: 'Save' }).click();
//   });

//   test('createFieldInteger', async ({ page }) => {
//     await page.getByRole('link', { name: 'Fields' }).click();
//     await page.getByRole('button', { name: 'Create New Field' }).click();
//     await page.getByPlaceholder('Field Name').click();
//     await page.getByPlaceholder('Field Name').fill('FieldInteger202410');
//     await page.locator('div').filter({ hasText: /^\*Data TypeData Type$/ }).locator('svg').click();
//     await page.locator('#react-select-26-option-3').click();
//     await page.locator('div').filter({ hasText: /^Field GroupField Group$/ }).locator('svg').click();
//     await page.getByText('FieldGroupTest20240110', { exact: true }).click();
//     await page.locator('div').filter({ hasText: /^\*Field TypeField Type$/ }).locator('svg').click();
//     await page.locator('#react-select-28-option-0').click();
//     await page.getByLabel('').check();
//     await page.getByRole('button', { name: 'Save' }).click();
//   });

//   test('createfieldPercentage', async ({ page }) => {
//     await page.getByRole('link', { name: 'Fields' }).click();
//     await page.getByRole('button', { name: 'Create New Field' }).click();
//     await page.getByPlaceholder('Field Name').click();
//     await page.getByPlaceholder('Field Name').fill('fieldpercentage202410');
//     await page.locator('.select-dropdown-indicator').first().click();
//     await page.getByText('percentage', { exact: true }).click();
//     await page.locator('div').filter({ hasText: /^Field GroupField Group$/ }).locator('svg').click();
//     await page.getByText('FieldGroupTest20240110', { exact: true }).click();
//     await page.locator('div').filter({ hasText: /^\*Field TypeField Type$/ }).locator('svg').click();
//     await page.locator('#react-select-34-option-0').click();
//     await page.getByLabel('').check();
//     await page.getByRole('button', { name: 'Save' }).click();
//   });