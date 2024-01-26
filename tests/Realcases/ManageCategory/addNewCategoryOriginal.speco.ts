import { test, expect, chromium } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('http://localhost:5173/');
//   await page.goto('http://localhost:5173/#/sign-in?redirectUrl=/');
//   await page.getByPlaceholder('User Name').click();
//   await page.getByPlaceholder('User Name').fill('admin@rbms.com');
//   await page.getByPlaceholder('User Name').press('Tab');
//   await page.getByPlaceholder('Password').click();
//   await page.getByPlaceholder('Password').fill('password');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('link', { name: 'Manage Category' }).click();
//   await page.getByRole('button', { name: 'Create New Category' }).click();
//   await page.getByPlaceholder('Category Name').click();
//   await page.getByPlaceholder('Category Name').fill('Laptop');
//   await page.locator('.select-dropdown-indicator').first().click();
//   await page.locator('.select__input-container').first().click();
//   await page.getByText('Computing Devices', { exact: true }).click();
//   await page.locator('div:nth-child(3) > div > .select > .select__control > .select__value-container > .select__input-container').click();
//   await page.locator('div:nth-child(3) > div > .select > .select__control > .select__indicators > .select-dropdown-indicator').click();
//   await page.getByRole('main').locator('svg').nth(1).click();
//   await page.locator('input[name="needsSerialNumber"]').check();
//   await page.locator('input[name="needsPost"]').check();
//   await page.getByRole('button', { name: 'Save' }).click();
// });


// // import { test, expect, chromium } from "@playwright/test";


const URL_TEST = "http://localhost:5173/";
const username = "admin@rbms.com";
const password = "password";

const testaddCategory = [
  {
    categoryName: "Laptop", categoryGroup: "Computing Devices", parentCategoryGroup: "", needsSerialNumber: "true", needsPost: "true",
  },
  {
    categoryName: "Hard Drives", categoryGroup: "Parts and Accessories", parentCategoryGroup: "", needsSerialNumber: "true", needsPost: "true",
  },
  {
    categoryName: "RAMs", categoryGroup: "Parts and Accessories", parentCategoryGroup: "", needsSerialNumber: "true", needsPost: "false",
  },
  {
    categoryName: "Batteries", categoryGroup: "Parts and Accessories", parentCategoryGroup: "", needsSerialNumber: "true", needsPost: "false",
  },
  {
    categoryName: "Cosmetic Parts", categoryGroup: "Parts and Accessories", parentCategoryGroup: "", needsSerialNumber: "true", needsPost: "false",
  },
  {
    categoryName: "Motherboard", categoryGroup: "Parts and Accessories", parentCategoryGroup: "", needsSerialNumber: "true", needsPost: "false",
  },
];

let page;

test.describe.configure({ mode: "serial" });

test.describe("Addinf categories", () => {

  test.beforeAll(async ({ browser }) => {
    const URL_TEST = "http://localhost:5173/#/app/sales/dashboard";

    page = await browser.newPage();
    // test('Login Success', async ({ page }) => {
    await page.goto(URL_TEST);
    await page.getByPlaceholder("User Name").click();
    await page.getByPlaceholder("User Name").fill(username);
    await page.getByPlaceholder("Password").click();
    await page.getByPlaceholder("Password").fill(password);
    await page.getByRole("button", { name: "Sign In" }).click();
    await expect(page).toHaveURL("http://localhost:5173/#/app/sales/dashboard");
    await page.getByRole('link', { name: 'Manage Category' }).click();

  });

  test.afterAll(async () => {
    await page.close();
  });

  testaddCategory.forEach((category, index) => {

    test(`Test Case ${index + 1} ${category.categoryName}`, async () => {
      await page.getByRole('button', { name: 'Create New Category' }).click();
      await page.getByPlaceholder('Category Name').click();
      await page.getByPlaceholder('Category Name').fill(category.categoryName);

      await page.locator('.select__input-container').first().click();
      await page.getByText(category.categoryGroup, { exact: true }).click();

      if (category.parentCategoryGroup != "") {
        await page.locator('.select__input-container').first().click();
        await page.getByText(category.parentCategoryGroup, { exact: true }).click();
      }

      await page.getByRole('main').locator('svg').nth(4).click();

      await page.locator('div:nth-child(3) > div > .select > .select__control > .select__value-container > .select__input-container').click();
      await page.locator('div:nth-child(3) > div > .select > .select__control > .select__indicators > .select-dropdown-indicator').click();
      await page.getByRole('main').locator('svg').nth(1).click();


      if (category.needsSerialNumber == "True") {
        await page.locator('input[name="needsSerialNumber"]').check();
      } else {
        await page.locator('input[name="needsSerialNumber"]').uncheck();
      }

      if (category.needsPost == "True") {
        await page.locator('input[name="needsPost"]').check();
      } else {
        await page.locator('input[name="needsPost"]').uncheck();
      }

      await page.getByRole('button', { name: 'Save' }).click();


    });

  });

});

