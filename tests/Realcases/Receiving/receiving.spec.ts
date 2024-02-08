import { test, expect, webkit } from "@playwright/test";

const URL_TEST = "http://localhost:5173/";
const username = "admin@rbms.com";
const password = "password";

const createReceiving = [

  { receivingType: "PO", identifier: "2", supplier: "d&d SUPPLIER TECH", courier: "UPS", trackingNumber: "AXPUI1212", Description: "Description D&D axpui1", quantityToReceive: 3, quantityReceived: 3, partiallyReceived: false, fullyReceived: true, notes: "Description D&D axpui1" },
  { receivingType: "RMA", identifier: "4", supplier: "d&d SUPPLIER INC", courier: "UPS", trackingNumber: "AXPUI1231", Description: "Description D&D axpui2", quantityToReceive: 2, quantityReceived: 1, partiallyReceived: true, fullyReceived: true, notes: "Description D&D axpui2" },
  { receivingType: "Service", identifier: "6", supplier: "d&d SUPPLIER LTD", courier: "UPS", trackingNumber: "AXPUI1234", Description: "Description D&D axpui3", quantityToReceive: 4, quantityReceived: 5, partiallyReceived: true, fullyReceived: true, notes: "Description D&D axpui3" },

  //{ receivingType : "",    identifier : "",    supplier : "",    courier : "",    trackingNumber : "",    Description : "",    quantityToReceive : "",    quantityReceived : "",    partiallyReceived : "",    fullyReceived : "",    notes : "", },


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
    await page.getByRole('link', { name: 'Receiving' }).click();

    //await page.getByRole('heading', { name: 'Create New Receiving' }).click();
  });

  test.afterAll(async () => {
    await page.close();
  });

  createReceiving.forEach((model, index) => {
    test(`Test Case ${index + 1} ${model.receivingType}`, async () => {
      await page.getByRole('button', { name: 'Create New Receiving' }).click();

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
      await page.getByPlaceholder('Quantity to Receive').fill(model.quantityToReceive);
      await page.getByPlaceholder('Quantity Received').click();
      await page.getByPlaceholder('Quantity Received').fill(model.quantityReceived);
      await page.getByPlaceholder('Quantity Received').click();
      if (model.partiallyReceived) {
        await page.getByRole('tab', { name: 'Partially Received' }).click();
      } else
        if (model.fullyReceived) {
          await page.getByRole('tab', { name: 'Fully Received' }).click();
        }
      //
      await page.locator('input[type="file"]').click();
      await page.locator('input[type="file"]').setInputFiles('demo');

      await page.getByRole('button', { name: 'Capture' }).click();
      await page.getByRole('button', { name: 'Click to capture' }).click();
      await page.getByRole('dialog').getByRole('button').first().click();
      await page.locator('div').filter({ hasText: /^Take a pictureCapture$/ }).locator('span').nth(1).click();
      await page.getByRole('dialog').getByRole('button', { name: 'Cancel' }).click();
      await page.getByPlaceholder('Note').click();
      await page.getByPlaceholder('Note').fill(model.notes);
      await page.getByRole('button', { name: 'Save' }).click();
    });
  });
});
