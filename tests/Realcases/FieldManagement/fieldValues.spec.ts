import { test, expect, webkit } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";
// Read from default ".env" file.
dotenv.config();
// Alternatively, read from "../my.env" file.
dotenv.config({ path: path.resolve(__dirname, ".env") });

const { RBMS_URL_TEST, RBMS_USERNAME, RBMS_PASSWORD } = process.env;



// import { test, expect, chromium } from '@playwright/test';

// import { URL_TEST } from 'C:\\Users\\User\\RB2deb\\2autRB\\playwright.config.ts';
// import { username } from 'C:\\Users\\User\\RB2deb\\2autRB\\playwright.config.ts';
// import { password } from 'C:\\Users\\User\\RB2deb\\2autRB\\playwright.config.ts';

// console.log(URL_TEST);
// console.log(username);
// console.log(password);


// const URL_TEST = "http://localhost:5173/";
// const username = "admin@rbms.com";
// const password = "password";


const basicDataModel = [
  { modelToModify: "AMP", fieldType: "specs", dataType: "string", fieldValue: ["High AMPr", "Standard", "Low Power"], score: [] },
  { modelToModify: "Audio", fieldType: "functional", dataType: "boolean", fieldValue: [false, true], score: [] },
  { modelToModify: "Battery Health", fieldType: "functional", dataType: "percentage", fieldValue: [100], score: [] },
];

let page;

test.describe.configure({ mode: "serial" });

test.describe("Add Detailed Field Names values", () => {

  test.beforeAll(async ({ browser }) => {
    const URL_TEST = "http://localhost:5173/#/app/sales/dashboard";

    page = await browser.newPage();
    // test('Login Success', async ({ page }) => {

    await page.goto(RBMS_URL_TEST);
    await page.getByPlaceholder("User Name").click();
    await page.getByPlaceholder("User Name").fill(RBMS_USERNAME);
    await page.getByPlaceholder("Password").click();
    await page.getByPlaceholder("Password").fill(RBMS_PASSWORD);
    await page.getByRole("button", { name: "Sign In" }).click();
    await expect(page).toHaveURL("http://localhost:5173/#/app/sales/dashboard");
    await page.locator("div").filter({ hasText: /^Field Management$/ }).click();
    await page.getByRole('link', { name: 'Fields' }).click();

    // });
  });

  test.afterAll(async () => {
    await page.close();
  });

  //test('test', async ({ page }) => {

  basicDataModel.forEach((model, index) => {

    test(`Test Case ${index + 1} ${model.modelToModify}`, async () => {
      // await page.getByRole('link', { name: 'Fields' }).click();
      await page.getByRole('button', { name: 'Create New Field' }).click();
      await page.getByPlaceholder('Field Name').click();
      await page.getByPlaceholder('Field Name').fill('newFieldName');
      await page.locator('.select__input-container').first().click();
      await page.locator('#react-select-3-option-0').click();
      await page.locator('div:nth-child(3) > div > .select > .select__control > .select__value-container > .select__input-container').click();
      await page.getByRole('main').locator('svg').nth(1).click();
      await page.locator('div').filter({ hasText: /^\*Field TypeField Type$/ }).locator('svg').click();
      await page.getByText('specs', { exact: true }).click();
      await page.getByRole('button', { name: 'Save' }).click();

      await page.getByRole('heading', { name: 'Manage Fields' }).click();

      await page.getByText('Field', { exact: true }).click();

      await page.getByLabel('100').click();
      await page.getByRole('option', { name: '300' }).click();

      await page.getByRole('cell', { name: model.modelToModify }).click();

      let fieldValToModify = model.modelToModify + " " + model.dataType + "";

      await page.getByRole('row', { name: fieldValToModify }).getByRole('button').first().click();

      await page.getByPlaceholder(model.modelToModify).click();

      await page.getByPlaceholder(model.modelToModify).fill(model.fieldValue[index]);

      await page.getByPlaceholder('Score').click();
      await page.getByPlaceholder('Score').fill(model.score);

      await page.getByRole('button', { name: 'Save' }).click();





      // await page.getByRole('button', { name: 'Cancel' }).click();

      // await page.getByRole('cell', { name: model.modelToModify }).click();

      // await page.getByRole('row', { name: model.modelToModify + ' ' + model.dataType + ' ' + model.fieldType }).getByRole('button').first().click();
      // console.log(model.modelToModify + ' ' + model.dataType + ' ' + model.fieldType);

      // { modelToModify: "AMP", fieldType: "specs", dataType: "string", fieldValue: ["High AMP", "Standard", "Low Power"], score: [] },

      // 3rd  type the Field Value
      // for (const value of model.fieldValue) {
      //   await page.getByPlaceholder(model.modelToModify).click();
      //   await page.getByPlaceholder(model.modelToModify).fill(model.fieldValue);

      //   await page.getByPlaceholder('Score').click();
      //   await page.getByPlaceholder('Score').fill(model.score);

      //   await page.getByText('Field NameData typeField').click();
      //   await page.getByRole('button', { name: 'Save' }).click();
      // }

      // Verificar si hay valores múltiples en fieldValues
      // if (model.fieldValue && model.fieldValue.length > 0) {
      //   // Iterar sobre los elementos de fieldValue
      //   for (const value of model.fieldValue) {
      //     await page.getByPlaceholder('Field Value').click();
      //     await page.getByPlaceholder('Field Value').fill(model.fieldValue);

      //     await page.getByPlaceholder('Score').click();
      //     await page.getByPlaceholder('Score').fill(model.score);

      //     await page.getByText('Field NameData typeField').click();
      //     await page.getByRole('button', { name: 'Save' }).click();
      //   }
      // } else {
      //   console.log(`Field Value: ${model.fieldValue}`);
      // }

      // console.log("\n"); // Separador entre elementos

    });

  });

});