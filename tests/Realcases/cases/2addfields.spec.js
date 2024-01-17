import { test, expect, chromium } from "@playwright/test";

const d = new Date();
let time = d.getTime();
const excecution = "Test" + d.getFullYear + "0";
console.log("Execution on" + time);

const URL_TEST = "http://localhost:5173/";
const username = "admin@rbms.com";
const password = "password";

const testaddFields = [
  {
    fieldName: "Cracks/Broken?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
  },
  {
    fieldName: "Dents?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
  },
  {
    fieldName: "Scratches?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
  },
  {
    fieldName: "Discoloration?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
  },
  {
    fieldName: "Screws?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
  },
  {
    fieldName: "Packaging?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
  },
  {
    fieldName: "Cleaned?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
  },
  {
    fieldName: "Blemish",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
  },
];

let page;

test.describe.configure({ mode: "serial" });

test.describe("Addinf fields", () => {
  test.beforeAll(async ({ browser }) => {
    const URL_TEST = "http://localhost:5173/#/app/sales/dashboard";

    const USERS_CASES = ["admin@rbms.com", "falseuser@nodomain.ron"];

    const PASSWORD_CASES = ["password", "wrongpazswerd"];

    page = await browser.newPage();
    // test('Login Success', async ({ page }) => {
    await page.goto(URL_TEST);
    //await page.goto('http://localhost:5173/#/sign-in?redirectUrl=/');
    await page.getByPlaceholder("User Name").click();
    await page.getByPlaceholder("User Name").fill("admin@rbms.com");
    await page.getByPlaceholder("Password").click();
    await page.getByPlaceholder("Password").fill("password");
    await page.getByRole("button", { name: "Sign In" }).click();
    await expect(page).toHaveURL("http://localhost:5173/#/app/sales/dashboard");
    await page
      .locator("div")
      .filter({ hasText: /^Field Management$/ })
      .click();
    // });
  });

  test.afterAll(async () => {
    await page.close();
  });

  testaddFields.forEach((fielditems, index) => {
    test(`Test Case ${index + 1} ${fielditems.fieldName}`, async () => {
      // await page.goto(URL_TEST+'#/sign-in?redirectUrl=/');
      // await page.getByPlaceholder('User Name').click();
      // await page.getByPlaceholder('User Name').fill(username);
      // await page.getByPlaceholder('Password').click();
      // await page.getByPlaceholder('Password').fill(password);
      // await page.getByRole('button', { name: 'Sign In' }).click();

      //await page.locator("div").filter({ hasText: /^Field Management$/ }).click();
      await page.getByRole("link", { name: "Fields" }).click();
      await page.getByRole("button", { name: "Create New Field" }).click();

      await page.getByPlaceholder("Field Name").click();
      await page.getByPlaceholder("Field Name").fill(fielditems.fieldName);
      await page.locator(".select__input-container").first().click();

      await page.getByText(fielditems.dataType, { exact: true }).click();
      //await page.locator('div:nth-child(3) > div > .select > .select__control > .select__value-container > .select__input-container').click();
      //await page.getByText('No options').click();
      // if(fielditems.fieldGroup = ''){
      //   await page.getByText('No options').click();
      // }else{
      //   await page.getByText('No options').click();
      //   //await page.getByText(fielditems.fieldGroup).click();
      // }

      await page
        .locator(
          "div:nth-child(4) > div > .select > .select__control > .select__value-container > .select__input-container"
        )
        .click();
      await page.getByText(fielditems.fieldType, { exact: true }).click();
      await page.getByLabel("").check();
      await page.getByLabel("").uncheck();
      await page.getByRole("button", { name: "Save" }).click();
    });
  });
});

// test('test', async ({ page }) => {
//   await page.goto(URL_TEST+'#/sign-in?redirectUrl=/');
//   await page.getByPlaceholder('User Name').click();
//   await page.getByPlaceholder('User Name').fill(username);
//   await page.getByPlaceholder('Password').click();
//   await page.getByPlaceholder('Password').fill(password);
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.locator('div').filter({ hasText: /^Field Management$/ }).click();
//   await page.getByRole('link', { name: 'Fields' }).click();
//   await page.getByRole('button', { name: 'Create New Field' }).click();
//   await page.getByPlaceholder('Field Name').click();
//   await page.getByPlaceholder('Field Name').fill('Storage Capacity');
//   await page.locator('.select__input-container').first().click();
//   await page.getByText('integer', { exact: true }).click();
//   await page.locator('div:nth-child(3) > div > .select > .select__control > .select__value-container > .select__input-container').click();
//   await page.getByText('No options').click();
//   await page.locator('div:nth-child(4) > div > .select > .select__control > .select__value-container > .select__input-container').click();
//   await page.getByText('specs', { exact: true }).click();
//   await page.getByLabel('').check();
//   await page.getByLabel('').uncheck();
//   await page.getByRole('button', { name: 'Save' }).click();
// });

// addFields.forEach((field, index) => {
//   test(`addField${index + 1}`, async ({ page }) => {
//     await page.locator('div').filter({ hasText: /^Field Management$/ }).locator('svg').nth(1).click();
//     await page.getByRole('link', { name: 'Fields' }).click();
//     await page.getByRole('button', { name: 'Create New Field' }).click();
//     // previous 3 lines are the sae as : await page.goto('http://localhost:5173/#/app/FieldsManagement/CreateNewField');

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
//   });
// });

// test('test', async ({ page }) => {
//   await page.goto('http://localhost:5173/#/app/FieldsManagement/CreateNewField');
//   await page.getByRole('link', { name: 'Fields' }).click();
//   await page.getByRole('button', { name: 'Create New Field' }).click();
//   await page.getByPlaceholder('Field Name').click();
//   await page.getByPlaceholder('Field Name').fill('Storage Capacity');
//   await page.locator('.select__input-container').first().click();
//   await page.getByText('integer', { exact: true }).click();
//   await page.locator('div:nth-child(3) > div > .select > .select__control > .select__value-container > .select__input-container').click();
//   await page.locator('div:nth-child(3) > div > .select > .select__control > .select__value-container > .select__input-container').click();
//   await page.locator('div:nth-child(4) > div > .select > .select__control > .select__value-container > .select__input-container').click();
//   await page.getByText('specs', { exact: true }).click();
//   await page.getByRole('button', { name: 'Save' }).click();
// });
