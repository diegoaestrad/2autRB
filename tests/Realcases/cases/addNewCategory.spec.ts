import { test, expect, chromium } from '@playwright/test';

const URL_TEST = "http://localhost:5173/";
const username = "admin@rbms.com";
const password = "password";

const testaddCategory = [
  {
    categoryName: "Laptop", categoryGroup: "Computing Devices", parentCategoryGroup: "", needsSerialNumber: "true", needsPost: "true", additionalFields: false,
  },
  {
    categoryName: "Hard Drives", categoryGroup: "Parts and Accessories", parentCategoryGroup: "", needsSerialNumber: "true", needsPost: "true", additionalFields: false,
  },
  {
    categoryName: "RAMs", categoryGroup: "Parts and Accessories", parentCategoryGroup: "", needsSerialNumber: "true", needsPost: "false", additionalFields: false,
  },
  {
    categoryName: "Batteries", categoryGroup: "Parts and Accessories", parentCategoryGroup: "", needsSerialNumber: "true", needsPost: "false", additionalFields: false,
  },
  {
    categoryName: "Cosmetic Parts", categoryGroup: "Parts and Accessories", parentCategoryGroup: "", needsSerialNumber: "true", needsPost: "false", additionalFields: false,
  },
  {
    categoryName: "Motherboard", categoryGroup: "Parts and Accessories", parentCategoryGroup: "", needsSerialNumber: "true", needsPost: "false", additionalFields: false,
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

      await page.locator('div').filter({ hasText: /^\*Category GroupCategory Group$/ }).locator('svg').click();
      await page.getByRole('main').locator('svg').first().click();

      await page.locator('div').filter({ hasText: /^\*Category GroupCategory Group$/ }).locator('svg').click();
      await page.getByText(category.categoryGroup, { exact: true }).click();

      if (category.needsSerialNumber)
        await page.locator('div').filter({ hasText: /^Needs Serial Number$/ }).locator('label').nth(1).click();
      if (category.needsPost)
        await page.locator('div').filter({ hasText: /^Post$/ }).locator('label').nth(1).click();

      if (category.additionalFields) {
        //add data level
        //add field name
        //include label
        //if is mandatory add it
      } else {
        //delete field
        await page.locator('div').filter({ hasText: /^\*Data Levelmodel\*Field NameStorage UnitInclude in label\?$/ }).locator('svg').first().click();
        await page.locator('div').filter({ hasText: /^\*Data Levelmodel\*Field NameStorage Form FactorInclude in label\?$/ }).locator('svg').first().click();


        //

        await page.getByRole('link', { name: 'Manage Category' }).click();
        await page.getByRole('button', { name: 'Create New Category' }).click();

        page.once('dialog', dialog => {
          console.log(`Dialog message: ${dialog.message()}`);
          dialog.dismiss().catch(() => { });
        });
        await page.getByRole('button', { name: 'Add Field' }).click();
        await page.locator('.md\\:grid > .flex').click();

        await page.getByRole('main').locator('svg').nth(2).click();
        //

      }
      await page.getByRole('main').locator('svg').nth(2).click();




      // if (category.needsSerialNumber == "True") {
      //   await page.locator('input[name="needsSerialNumber"]').check();
      // } else {
      //   await page.locator('input[name="needsSerialNumber"]').uncheck();
      // }

      // if (category.needsPost == "True") {
      //   await page.locator('input[name="needsPost"]').check();
      // } else {
      //   await page.locator('input[name="needsPost"]').uncheck();
      // }

    });

  });

});

