import { test, expect, chromium } from "@playwright/test";

const URL_TEST = "http://localhost:5173/";
const username = "admin@rbms.com";
const password = "password";

const createReceiving = [

  { receivingType : "PO", identifier : "", supplier : "", courier : "", trackingNumber : "", Description : "", quantityToReceive : "", quantityReceived : "", partiallyReceived : "", fullyReceived : "", notes : "" },
  { receivingType : "RMA", identifier : "", supplier : "", courier : "", trackingNumber : "", Description : "", quantityToReceive : "", quantityReceived : "", partiallyReceived : "", fullyReceived : "", notes : "" },
  { receivingType : "Service", identifier : "", supplier : "", courier : "", trackingNumber : "", Description : "", quantityToReceive : "", quantityReceived : "", partiallyReceived : "", fullyReceived : "", notes : "" },





{




    receivingType : "",
    identifier : "",
    supplier : "",
    courier : "",
    trackingNumber : "",
    Description : "",
    quantityToReceive : "",
    quantityReceived : "",
    partiallyReceived : "",
    fullyReceived : "",
    //uploadImage
    //takePicture
    notes : "",


}
  

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
  });

  test.afterAll(async () => {
    await page.close();
  });

  createReceiving.forEach((model, index) => {
    test(`Test Case ${index + 1} ${model.receivingType}`, async () => {
      
        await page.getByRole('button', { name: 'Create New Receiving' }).click();
        //await expect(page).toHaveText("Create New Receiving");
        await page.getByRole('link', { name: 'Receiving' }).click();

    });
  });
});
