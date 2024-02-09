import { test, expect, webkit } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";
// Read from default ".env" file.
dotenv.config();
// Alternatively, read from "../my.env" file.
dotenv.config({ path: path.resolve(__dirname, ".env") });

const { RBMS_URL_TEST, RBMS_USERNAME, RBMS_PASSWORD } = process.env;

const addfewModels = [
  { modelName: "CF-33 MK1", identifier: "", category: "Laptop", description: "CF-33 MK1", isControlled: "true", },
  { modelName: "TOSHIBA SSD", identifier: "", category: "Hard Drives", description: "TOSHIBA SSD", isControlled: "true", },
  { modelName: "KINGSTON 2 GB DDR3", identifier: "", category: "RAMs", description: "KINGSTON 2 GB DDR3", isControlled: "true", },
  { modelName: "BatteryTest", identifier: "", category: "Batteries", description: "BatteryTest", isControlled: "true", },
  { modelName: "topCoverCf-33", identifier: "", category: "Cosmetic Parts", description: "topCoverCf-33", isControlled: "false", },
  { modelName: "AsusMB50", identifier: "", category: "Motherboard", description: "AsusMB50", isControlled: "true", },
];

const totalModels = [
  { modelName: "CF-18 MK1", identifier: "", category: "Laptop", description: "CF-18 MK1", isControlled: "true", },
  { modelName: "CF-18 MK3", identifier: "", category: "Laptop", description: "CF-18 MK3", isControlled: "true", },
  { modelName: "CF-18 MK5", identifier: "", category: "Laptop", description: "CF-18 MK5", isControlled: "true", },
  { modelName: "CF-19 MK1", identifier: "", category: "Laptop", description: "CF-19 MK1", isControlled: "true", },
  { modelName: "CF-19 MK2", identifier: "", category: "Laptop", description: "CF-19 MK2", isControlled: "true", },
  { modelName: "CF-19 MK3", identifier: "", category: "Laptop", description: "CF-19 MK3", isControlled: "true", },
  { modelName: "CF-19 MK4", identifier: "", category: "Laptop", description: "CF-19 MK4", isControlled: "true", },
  { modelName: "CF-19 MK5", identifier: "", category: "Laptop", description: "CF-19 MK5", isControlled: "true", },
  { modelName: "CF-19 MK6", identifier: "", category: "Laptop", description: "CF-19 MK6", isControlled: "true", },
  { modelName: "CF-19 MK7", identifier: "", category: "Laptop", description: "CF-19 MK7", isControlled: "true", },
  { modelName: "CF-19 MK8", identifier: "", category: "Laptop", description: "CF-19 MK8", isControlled: "true", },
  { modelName: "CF-20 MK1", identifier: "", category: "Laptop", description: "CF-20 MK1", isControlled: "true", },
  { modelName: "CF-20 MK2", identifier: "", category: "Laptop", description: "CF-20 MK2", isControlled: "true", },
  { modelName: "CF-30 MK1", identifier: "", category: "Laptop", description: "CF-30 MK1", isControlled: "true", },
  { modelName: "CF-30 MK2", identifier: "", category: "Laptop", description: "CF-30 MK2", isControlled: "true", },
  { modelName: "CF-30 MK3", identifier: "", category: "Laptop", description: "CF-30 MK3", isControlled: "true", },
  { modelName: "CF-31 MK1", identifier: "", category: "Laptop", description: "CF-31 MK1", isControlled: "true", },
  { modelName: "CF-31 MK2", identifier: "", category: "Laptop", description: "CF-31 MK2", isControlled: "true", },
  { modelName: "CF-31 MK3", identifier: "", category: "Laptop", description: "CF-31 MK3", isControlled: "true", },
  { modelName: "CF-31 MK3-NT", identifier: "", category: "Laptop", description: "CF-31 MK3-NT", isControlled: "true", },
  { modelName: "CF-31 MK4", identifier: "", category: "Laptop", description: "CF-31 MK4", isControlled: "true", },
  { modelName: "CF-31 MK5", identifier: "", category: "Laptop", description: "CF-31 MK5", isControlled: "true", },
  { modelName: "CF-31 MK6", identifier: "", category: "Laptop", description: "CF-31 MK6", isControlled: "true", },
  { modelName: "CF-33 MK1", identifier: "", category: "Laptop", description: "CF-33 MK1", isControlled: "true", },
  { modelName: "CF-33 MK2", identifier: "", category: "Laptop", description: "CF-33 MK2", isControlled: "true", },
  { modelName: "CF-52 MK1", identifier: "", category: "Laptop", description: "CF-52 MK1", isControlled: "true", },
  { modelName: "CF-52 MK2", identifier: "", category: "Laptop", description: "CF-52 MK2", isControlled: "true", },
  { modelName: "CF-52 MK3", identifier: "", category: "Laptop", description: "CF-52 MK3", isControlled: "true", },
  { modelName: "CF-52 MK4", identifier: "", category: "Laptop", description: "CF-52 MK4", isControlled: "true", },
  { modelName: "CF-52 MK5", identifier: "", category: "Laptop", description: "CF-52 MK5", isControlled: "true", },
  { modelName: "CF-53 MK1", identifier: "", category: "Laptop", description: "CF-53 MK1", isControlled: "true", },
  { modelName: "CF-53 MK2", identifier: "", category: "Laptop", description: "CF-53 MK2", isControlled: "true", },
  { modelName: "CF-53 MK3", identifier: "", category: "Laptop", description: "CF-53 MK3", isControlled: "true", },
  { modelName: "CF-53 MK4", identifier: "", category: "Laptop", description: "CF-53 MK4", isControlled: "true", },
  { modelName: "CF-54 MK1", identifier: "", category: "Laptop", description: "CF-54 MK1", isControlled: "true", },
  { modelName: "CF-54 MK2", identifier: "", category: "Laptop", description: "CF-54 MK2", isControlled: "true", },
  { modelName: "CF-54 MK3", identifier: "", category: "Laptop", description: "CF-54 MK3", isControlled: "true", },
  { modelName: "CF-74", identifier: "", category: "Laptop", description: "CF-74", isControlled: "true", },
  { modelName: "CF-C1", identifier: "", category: "Laptop", description: "CF-C1", isControlled: "true", },
  { modelName: "CF-C1 MK1", identifier: "", category: "Laptop", description: "CF-C1 MK1", isControlled: "true", },
  { modelName: "CF-C1 MK2", identifier: "", category: "Laptop", description: "CF-C1 MK2", isControlled: "true", },
  { modelName: "CF-C2 MK1", identifier: "", category: "Laptop", description: "CF-C2 MK1", isControlled: "true", },
  { modelName: "CF-C2 MK2", identifier: "", category: "Laptop", description: "CF-C2 MK2", isControlled: "true", },
  { modelName: "CF-F8", identifier: "", category: "Laptop", description: "CF-F8", isControlled: "true", },
  { modelName: "CF-F9", identifier: "", category: "Laptop", description: "CF-F9", isControlled: "true", },
  { modelName: "CF-H2 MK1", identifier: "", category: "Laptop", description: "CF-H2 MK1", isControlled: "true", },
  { modelName: "CF-H2 MK2", identifier: "", category: "Laptop", description: "CF-H2 MK2", isControlled: "true", },
  { modelName: "CF-H2 MK3", identifier: "", category: "Laptop", description: "CF-H2 MK3", isControlled: "true", },
  { modelName: "CF-S10", identifier: "", category: "Laptop", description: "CF-S10", isControlled: "true", },
  { modelName: "CF-S9", identifier: "", category: "Laptop", description: "CF-S9", isControlled: "true", },
  { modelName: "FZ-55 MK2", identifier: "", category: "Laptop", description: "FZ-55 MK2", isControlled: "true", },
  { modelName: "FZ-G2 MK1", identifier: "", category: "Laptop", description: "FZ-G2 MK1", isControlled: "true", },

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
    await page.waitForTimeout(500);
    // await expect(page).toHaveURL("http://localhost:5173/#/app/sales/dashboard");
    await page.getByRole('link', { name: 'Manage Model' }).click();

    //await page.locator("div").filter({ hasText: /^Field Management$/ }).click();

    // });
  });

  test.afterAll(async () => {
    await page.close();
  });

  //test('test', async ({ page }) => {

  addfewModels.forEach((model, index) => {

    test(`Test Case ${index + 1} ${model.modelName}`, async () => {

      await page.getByRole('button', { name: 'Create New Model' }).click();
      await page.getByPlaceholder('Model Name').click();
      await page.getByPlaceholder('Model Name').fill(model.modelName);

      if (model.identifier != "") {
        await page.getByPlaceholder('Identifier').click();
        await page.getByPlaceholder('Identifier').fill(model.identifier);
      }

      await page.getByRole('main').locator('svg').click();
      await page.getByText(model.category, { exact: true }).click();

      await page.getByPlaceholder('Description').click();
      await page.getByPlaceholder('Description').fill(model.description);


      if (model.isControlled) {
        await page.locator('.checkbox-label').click();
        //await page.getByLabel('').uncheck();
        await page.getByLabel('').check();
        await page.locator('div').filter({ hasText: /^Is Manufacturing Part Number Controlled \?$/ }).nth(1).click();
        //await page.getByRole('checkbox',{name : 'needsMpn'}).check();
      } else {
        await page.locator('.checkbox-label').click();
        //await page.getByLabel('').check();
        await page.getByLabel('').uncheck();


      }
      await page.getByRole('button', { name: 'Save' }).click();

    });

  });

});