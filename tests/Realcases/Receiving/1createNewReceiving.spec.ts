import { test, expect, webkit } from "@playwright/test";
import dotenv from 'dotenv';
import path from 'path';
// Read from default ".env" file.
dotenv.config();
// Alternatively, read from "../my.env" file.
dotenv.config({ path: path.resolve(__dirname, '.env') });

const { RBMS_URL_TEST, RBMS_USERNAME, RBMS_PASSWORD } = process.env

const createReceiving = [

  { receivingType: "PO", identifier: "2131", supplier: "d&d SUPPLIER TECH", courier: "UPS", trackingNumber: "AXPUI2131", Description: "Description D&D AXPUI2131", quantityToReceive: 1, quantityReceived: 1, partiallyReceived: false, fullyReceived: true, notes: "Description D&D AXPUI2131" },
  { receivingType: "RMA", identifier: "2132", supplier: "d&d SUPPLIER INC", courier: "UPS", trackingNumber: "AXPUI2132", Description: "Description D&D AXPUI2132", quantityToReceive: 2, quantityReceived: 1, partiallyReceived: true, fullyReceived: false, notes: "Description D&D AXPUI2132" },
  { receivingType: "Service", identifier: "2133", supplier: "d&d SUPPLIER LTD", courier: "UPS", trackingNumber: "AXPUI2133", Description: "Description D&D AXPUI2133", quantityToReceive: 3, quantityReceived: 3, partiallyReceived: false, fullyReceived: true, notes: "Description D&D AXPUI2133" },

];

let page;

test.describe.configure({ mode: "serial" });

test.describe("Addinf categories", () => {
  test.beforeAll(async ({ browser }) => {

    const RBMS_URL_TEST = "http://localhost:5173/#/app/sales/dashboard";

    page = await browser.newPage();
    // test('Login Success', async ({ page }) => {

    await page.goto(RBMS_URL_TEST);
    await page.getByPlaceholder("User Name").click();
    await page.getByPlaceholder("User Name").fill(RBMS_USERNAME);
    await page.getByPlaceholder("Password").click();
    await page.getByPlaceholder("Password").fill(RBMS_PASSWORD);
    await page.getByRole("button", { name: "Sign In" }).click();
    await expect(page).toHaveURL("http://localhost:5173/#/app/sales/dashboard");
    await page.getByRole('link', { name: 'Receiving' }).click();

    //await page.getByRole('heading', { name: 'Create New Receiving' }).click();
  });

  test.afterAll(async () => {
    await page.close();
  });

  createReceiving.forEach((model, index) => {
    test(`Test Case ${index + 1} ${model.receivingType}`, async () => {
      await page.getByRole('button', { name: 'Create New Receiving' }).click();
      await page.waitForTimeout(1000);

      if (model.receivingType === "PO") {
        await page.getByText('*Receiving Type').click();
        await page.locator('.select-dropdown-indicator').click();
        await page.getByRole('main').locator('div').filter({ hasText: '*Receiving Typeoption PO' }).nth(2).click();
      } else
        if (model.receivingType === "RMA") {
          await page.getByText('*Receiving Type').click();
          await page.locator('div').filter({ hasText: /^\*Receiving TypePO$/ }).locator('svg').click();
          await page.getByText('RMA', { exact: true }).click();
        } else
          if (model.receivingType === "Service") {
            await page.getByRole('main').locator('svg').first().click();
            await page.getByText('Service', { exact: true }).click();
          }

      //await expect(page).toHaveText("Create New Receiving");


      await page.getByPlaceholder('Identifier').click();
      await page.getByPlaceholder('Identifier').fill(model.identifier);

      await page.getByPlaceholder('Supplier').click();
      await page.getByPlaceholder('Supplier').fill(model.supplier);
      await page.getByPlaceholder('Courier').click();
      await page.getByPlaceholder('Courier').fill(model.courier);
      await page.getByPlaceholder('Description').click();
      await page.getByPlaceholder('Description').fill(model.Description);
      await page.getByPlaceholder('Quantity to Receive').click();
      await page.getByPlaceholder('Quantity to Receive').fill(model.quantityToReceive.toString());
      await page.getByPlaceholder('Quantity Received').click();
      await page.getByPlaceholder('Quantity Received').fill(model.quantityReceived.toString());
      await page.getByPlaceholder('Quantity Received').click();
      if (model.partiallyReceived) {
        await page.getByRole('tab', { name: 'Partially Received' }).click();
        await page.getByText('Partially ReceivedFully').click();
      } else
        if (model.fullyReceived) {

          await page.getByRole('tab', { name: 'Fully Received' }).click();
          await page.getByText('Partially ReceivedFully').click();

        }

      await page.getByPlaceholder('Note').fill(model.notes);
      await page.getByRole('button', { name: 'Save' }).click();
      //

      // await page.getByPlaceholder('Note').click();
      // await page.getByPlaceholder('Note').fill('test');
      // await page.locator('input[type="file"]').click();
      // await page.locator('input[type="file"]').setInputFiles('demo');

      // await page.getByRole('button', { name: 'Capture' }).click();
      // await page.getByRole('button', { name: 'Click to capture' }).click();
      // await page.getByRole('dialog').getByRole('button').first().click();
      // await page.locator('div').filter({ hasText: /^Take a pictureCapture$/ }).locator('span').nth(1).click();
      // await page.getByRole('dialog').getByRole('button', { name: 'Cancel' }).click();
      // await page.getByPlaceholder('Note').click();
      // await page.getByPlaceholder('Note').fill(model.notes);
      // await page.getByRole('button', { name: 'Save' }).click();
    });
  });
});
