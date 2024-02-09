import { test, expect, webkit } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";
// Read from default ".env" file.
dotenv.config();
// Alternatively, read from "../my.env" file.
dotenv.config({ path: path.resolve(__dirname, ".env") });

const { RBMS_URL_TEST, RBMS_USERNAME, RBMS_PASSWORD } = process.env;

const onlyCategoryNoFields = [
  {
    categoryName: "Laptop", categoryGroup: "Computing Devices", parentCategoryGroup: "", needsSerialNumber: true, needsPost: true, additionalFields: false, dataLevel: "model", fieldName: "Brand", includeInLabel: true,
  },
  {
    categoryName: "Hard Drives", categoryGroup: "Parts and Accessories", parentCategoryGroup: "", needsSerialNumber: true, needsPost: true, additionalFields: false, dataLevel: "model", fieldName: "Brand", includeInLabel: true,
  },
  {
    categoryName: "RAMs", categoryGroup: "Parts and Accessories", parentCategoryGroup: "", needsSerialNumber: true, needsPost: false, additionalFields: false, dataLevel: "model", fieldName: "Brand", includeInLabel: true,
  },
  {
    categoryName: "Batteries", categoryGroup: "Parts and Accessories", parentCategoryGroup: "", needsSerialNumber: true, needsPost: false, additionalFields: false, dataLevel: "model", fieldName: "Brand", includeInLabel: true,
  },
  {
    categoryName: "Cosmetic Parts", categoryGroup: "Parts and Accessories", parentCategoryGroup: "", needsSerialNumber: false, needsPost: false, additionalFields: false, dataLevel: "", fieldName: "", includeInLabel: true,
  },
  {
    categoryName: "Motherboard", categoryGroup: "Parts and Accessories", parentCategoryGroup: "", needsSerialNumber: false, needsPost: false, additionalFields: false, dataLevel: "model", fieldName: "Brand", includeInLabel: false,
  },
];

let page;

test.describe.configure({ mode: "serial" });

test.describe("Addinf categories", () => {

  test.beforeAll(async ({ browser }) => {
    //const URL_TEST = "http://localhost:5173/#/app/sales/dashboard";

    page = await browser.newPage();
    // test('Login Success', async ({ page }) => {
    await page.goto(RBMS_URL_TEST);
    await page.getByPlaceholder("User Name").click();
    await page.getByPlaceholder("User Name").fill(RBMS_USERNAME);
    await page.getByPlaceholder("Password").click();
    await page.getByPlaceholder("Password").fill(RBMS_PASSWORD);
    await page.getByRole("button", { name: "Sign In" }).click();
    //await expect(page).toHaveURL("http://localhost:5173/#/app/sales/dashboard");
    await page.getByRole('link', { name: 'Manage Category' }).click();

  });


  test.afterAll(async () => {
    await page.close();
  });

  onlyCategoryNoFields.forEach((category, index) => {

    test(`Test Case ${index + 1} ${category.categoryName}`, async () => {
      await page.getByRole('button', { name: 'Create New Category' }).click();
      await page.getByPlaceholder('Category Name').click();
      await page.getByPlaceholder('Category Name').fill(category.categoryName);
      await page.locator('div').filter({ hasText: /^\*Category GroupCategory Group$/ }).locator('svg').click();
      await page.getByText('Computing Devices', { exact: true }).click();
      if (category.needsSerialNumber)
        await page.locator('div').filter({ hasText: /^Needs Serial Number$/ }).locator('div').nth(1).click();
      if (category.needsPost)
        await page.locator('div').filter({ hasText: /^Post$/ }).locator('div').nth(1).click();

      if (category.additionalFields) {
        //await page.getByRole('main').locator('svg').nth(3).click();
        //await page.getByText(category.dataLevel, { exact: true }).click();
        await page.waitForTimeout(1000);
        await page.locator('.md\\:col-span-2 > .form-item > div > .select > .select__control > .select__value-container > .select__input-container').first().click();
        await page.getByText(category.dataLevel, { exact: true }).click();
        await page.getByText('*Data Level').click();

        await page.waitForTimeout(1000);
        await page.locator('div:nth-child(3) > .form-item > div > .select > .select__control > .select__value-container > .select__input-container').click();
        await page.getByText(category.fieldName, { exact: true }).click();
        await page.getByText('*Field Name').click();
        await page.waitForTimeout(1000);

        if (category.includeInLabel) {
          await page.waitForTimeout(1000);
          await page.locator('.md\\:col-span-2 > .form-item > div > .switcher > .switcher-toggle').click();
        }

      } else {
        //await page.getByText('*Data Levelmpn*Field').click();
        await page.waitForTimeout(2000);
        await page.getByRole('main').locator('svg').nth(2).click();

        await page.getByText('Create New CategoryInformation for a new Category*Category Name*Category').click();

        //await 
        //await page.getByRole('button', { name: 'Save' }).click();
      }

      await page.getByRole('button', { name: 'Save' }).click();
      await page.waitForTimeout(1000);
      await page.getByRole('link', { name: 'Manage Category' }).click();
    });

  });

});

