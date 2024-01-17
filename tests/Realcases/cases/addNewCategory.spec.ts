import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.goto('http://localhost:5173/#/sign-in?redirectUrl=/');
  await page.getByPlaceholder('User Name').click();
  await page.getByPlaceholder('User Name').fill('admin@rbms.com');
  await page.getByPlaceholder('User Name').press('Tab');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Manage Category' }).click();
  await page.getByRole('button', { name: 'Create New Category' }).click();
  await page.getByPlaceholder('Category Name').click();
  await page.getByPlaceholder('Category Name').fill('Laptop');
  await page.locator('.select-dropdown-indicator').first().click();
  await page.locator('.select__input-container').first().click();
  await page.getByText('Computing Devices', { exact: true }).click();
  await page.locator('div:nth-child(3) > div > .select > .select__control > .select__value-container > .select__input-container').click();
  await page.locator('div:nth-child(3) > div > .select > .select__control > .select__indicators > .select-dropdown-indicator').click();
  await page.getByRole('main').locator('svg').nth(1).click();
  await page.locator('input[name="needsSerialNumber"]').check();
  await page.locator('input[name="needsPost"]').check();
  await page.getByRole('button', { name: 'Save' }).click();
});


// // import { test, expect, chromium } from "@playwright/test";


// //const URL_TEST = "http://localhost:5173/";
// // const username = "admin@rbms.com";
// // const password = "password";

// const testaddCategory = [
//   {
//     categoryName : "Laptop",
//     categoryGroup : "Computing Devices",
//     parentCategoryGroup : "",
//     needsSerialNumber : "true",
//     needsPost : "true",
//   },
// ];
// // 
// let page;

// test.describe.configure({ mode: "serial" });

// test.describe("Addinf categories", () => {

//   test.beforeAll(async ({ browser }) => {
//     const URL_TEST = "http://localhost:5173/#/app/sales/dashboard";

//     // const USERS_CASES = ["admin@rbms.com", "falseuser@nodomain.ron"];
//     // const PASSWORD_CASES = ["password", "wrongpazswerd"];

//     page = await browser.newPage();
//     // test('Login Success', async ({ page }) => {
//     await page.goto(URL_TEST);
//     //await page.goto('http://localhost:5173/#/sign-in?redirectUrl=/');
//     await page.getByPlaceholder("User Name").click();
//     await page.getByPlaceholder("User Name").fill("admin@rbms.com");
//     await page.getByPlaceholder("Password").click();
//     await page.getByPlaceholder("Password").fill("password");
//     await page.getByRole("button", { name: "Sign In" }).click();
//     await expect(page).toHaveURL("http://localhost:5173/#/app/sales/dashboard");
//     await page.getByRole('link', { name: 'Manage Category' }).click();

//     //await page.locator("div").filter({ hasText: /^Field Management$/ }).click();

//     // });
//   });

//   test.afterAll(async () => {
//     await page.close();
//   });

//   test('test', async ({ page }) => {
//     testaddCategory.forEach((category, index) => {
//     test(`Test Case ${index + 1} ${category.categoryName}`, async () => {
//         // await page.goto('http://localhost:5173/');
//         // await page.goto('http://localhost:5173/#/sign-in?redirectUrl=/');
//         // await page.getByPlaceholder('User Name').click();
//         // await page.getByPlaceholder('User Name').fill('admin@rbms.com');
//         // await page.getByPlaceholder('User Name').press('Tab');
//         // await page.getByPlaceholder('Password').click();
//         // await page.getByPlaceholder('Password').fill('password');
//         // await page.getByRole('button', { name: 'Sign In' }).click();
//         // await page.getByRole('link', { name: 'Manage Category' }).click();

//         await page.getByRole('button', { name: 'Create New Category' }).click();
//         await page.getByPlaceholder('Category Name').click();
//         await page.getByPlaceholder('Category Name').fill(category.categoryName);

//         await page.locator('.select-dropdown-indicator').first().click();
//         await page.locator('.select__input-container').first().click();
//         await page.getByText(category.categoryGroup, { exact: true }).click();

//         if(category.parentCategoryGroup != ""){
//             await page.locator('.select-dropdown-indicator').first().click();
//             await page.locator('.select__input-container').first().click();
//             await page.getByText(category.categoryGroup, { exact: true }).click();
//         }


//         //await page.getByText('*Data LevelSelect...*Field').click();
//         //await page.locator('.md\\:col-span-1\\/4').click();
//         await page.getByRole('main').locator('svg').nth(4).click();

//         await page.locator('div:nth-child(3) > div > .select > .select__control > .select__value-container > .select__input-container').click();
//         await page.locator('div:nth-child(3) > div > .select > .select__control > .select__indicators > .select-dropdown-indicator').click();
//         await page.getByRole('main').locator('svg').nth(1).click();


//         if(category.needsSerialNumber == "True"){
//             await page.locator('input[name="needsSerialNumber"]').check();
//         }

//         if(category.needsPost == "True"){
//             await page.locator('input[name="needsPost"]').check();
//         }

        
//         await page.getByRole('button', { name: 'Save' }).click();




//     //   await page.getByRole("link", { name: "Fields" }).click();
//     //   await page.getByRole("button", { name: "Create New Field" }).click();

//     //   await page.getByPlaceholder("Field Name").click();
//     //   await page.getByPlaceholder("Field Name").fill(category.fieldName);
//     //   await page.locator(".select__input-container").first().click();

//       await page.getByText(category.dataType, { exact: true }).click();

//       await page
//         .locator(
//           "div:nth-child(4) > div > .select > .select__control > .select__value-container > .select__input-container"
//         )
//         .click();
//       await page.getByText(category.fieldType, { exact: true }).click();
//       await page.getByLabel("").check();
//       await page.getByLabel("").uncheck();
//       await page.getByRole("button", { name: "Save" }).click();
//     });
//   });
// });
