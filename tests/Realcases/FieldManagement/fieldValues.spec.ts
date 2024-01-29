import { test, expect, chromium } from '@playwright/test';

const URL_TEST = "http://localhost:5173/";
const username = "admin@rbms.com";
const password = "password";

const basicDataModel = [
  { modelToModify: "AMP", fieldType: "specs", dataType: "string", fieldValue: ["High AMP", "Standard", "Low Power"] },
  { modelToModify: "Audio", fieldType: "functional", dataType: "boolean", fieldValue: [false, true] },
  { modelToModify: "Barcode Reader", fieldType: "functional", dataType: "boolean", fieldValue: [false, true] },
  { modelToModify: "Barcode Reader", fieldType: "specs", dataType: "boolean", fieldValue: [false, true] },
  { modelToModify: "Battery Health", fieldType: "functional", dataType: "percentage", fieldValue: [100] },
  { modelToModify: "Battery Report", fieldType: "specs", dataType: "opentext", fieldValue: ["https://example.com/battery-report"] },
  { modelToModify: "Battery type", fieldType: "specs", dataType: "string", fieldValue: ["Lightweight", "Li-ion", "LongLife"] },
  { modelToModify: "Bios Password", fieldType: "functional", dataType: "boolean", fieldValue: [false, true] },
  { modelToModify: "Blemish", fieldType: "cosmetic", dataType: "string", fieldValue: ["Minor", "None"] },
  { modelToModify: "Bluetooth", fieldType: "functional", dataType: "boolean", fieldValue: [false, true, true] },
  { modelToModify: "Brand", fieldType: "specs", dataType: "string", fieldValue: ["Crucial", "Dell", "Lenovo", "Panasonic", "Samsung", "Seagate"] },

];

let page;

test.describe.configure({ mode: "serial" });

test.describe("Add Detailed Field Names values", () => {

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

      // 1st find the required field to modify

      //{ modelToModify: "Brand", fieldType: "specs", dataType: "string", fieldValue: ["Crucial", "Dell", "Lenovo", "Panasonic", "Samsung", "Seagate"] }

      // Iterar sobre la estructura principal
      // for (const item of basicDataModel) {

      console.log(`Model to Modify: ${model.modelToModify}`);
      console.log(`Field Type: ${model.fieldType}`);
      console.log(`Data Type: ${model.dataType}`);
      console.log(`Data Type: ${model.fieldValue}`);

      // Verificar si hay valores múltiples en fieldValues
      if (model.fieldValue && model.fieldValue.length > 0) {
        // Iterar sobre los elementos de fieldValue
        for (const value of model.fieldValue) {

          // add field value
          //console.log(`Field Value: ${value}`);
        }
      } else {
        console.log(`Field Value: ${model.fieldValue}`);
      }

      console.log("\n"); // Separador entre elementos
      // }



      // await page.getByRole('cell', { name: 'Storage Unit' }).click();
      // await page.getByRole('row', { name: 'Storage Unit string specs' }).getByRole('cell').nth(1).click();
      // await page.getByRole('row', { name: 'Storage Unit string specs' }).getByRole('cell').nth(2).click();
      // await page.getByRole('row', { name: 'Storage Unit string specs' }).getByRole('cell').nth(3).click();
      // await page.getByRole('row', { name: 'Storage Unit string specs' }).getByRole('button').first().click();//add value

      // await page.getByRole('button', { name: 'Cancel' }).click();

      // await page.getByRole('row', { name: 'Storage Unit string specs' }).getByRole('button').nth(1).click();//edit value

      // await page.getByRole('button', { name: 'Cancel' }).click();
      // await page.getByRole('row', { name: 'Storage Unit string specs' }).getByRole('button').nth(2).click();//view value

      // await page.getByRole('link', { name: 'Fields' }).click();
      // await page.getByRole('link', { name: 'Field Group' }).click();
      // await page.getByRole('link', { name: 'Fields' }).click();
      // await page.getByRole('row', { name: 'Storage Unit string specs' }).getByRole('button').nth(3).click();//delete value
      // //await page.getByRole('button', { name: 'Confirm' })// line ot confirm the delete value

      //await page.getByRole('button', { name: 'Cancel' }).click();



      // await page.getByText('Field Management').click();
      // await page.getByRole('link', { name: 'Fields' }).click();
      // 2nd click the add value of the specific row
      // 3rd  type the Field Value
      // If it requires Score : type score
      // 4th Click Save
      // not mandatory but ... return to Fields 




      // console.log(model.modelToModify + ' ' + model.dataType + ' ' + model.fieldType);
      // await page.getByRole('row', { name: model.modelToModify + ' ' + model.dataType + ' ' + model.fieldType, exact: true }).getByRole('button').first().click();
      // await page.getByPlaceholder('Field Value').click();
      // await page.getByPlaceholder('Field Value').fill(model.fieldValue);
      // await page.getByRole('button', { name: 'Save' }).click();

      // await page.getByRole('link', { name: 'Fields' }).click();

    });

  });

});