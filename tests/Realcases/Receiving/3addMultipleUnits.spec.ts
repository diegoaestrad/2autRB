//http://localhost:5173/#/app/inventory-item/1

import { test, expect, webkit } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";
// Read from default ".env" file.
dotenv.config();
// Alternatively, read from "../my.env" file.
dotenv.config({ path: path.resolve(__dirname, ".env") });

const { RBMS_URL_TEST, RBMS_USERNAME, RBMS_PASSWORD } = process.env;

const basicDataModel = [
    { Category: "Laptop", Model: "CF-33 MK1", MPN: "CF-33BWABZ1M", condition: "Used", Post: "Passed", sn: "SNCF33001", },
    { Category: "Laptop", Model: "CF-33 MK1", MPN: "CF-33BWABZ1M", condition: "Used", Post: "Passed", sn: "SNCF33002", },
    { Category: "Laptop", Model: "CF-33 MK1", MPN: "CF-33BWABZ1M", condition: "Used", Post: "Passed", sn: "SNCF33003", },
    { Category: "Laptop", Model: "CF-33 MK1", MPN: "CF-33BWABZ1M", condition: "Used", Post: "Passed", sn: "SNCF33004", },
    { Category: "Laptop", Model: "CF-33 MK1", MPN: "CF-33BWABZ1M", condition: "Used", Post: "Passed", sn: "SNCF33005", },
    { Category: "Laptop", Model: "CF-33 MK1", MPN: "CF-33BWABZ1M", condition: "Used", Post: "Passed", sn: "SNCF33006", },
    { Category: "Laptop", Model: "CF-33 MK1", MPN: "CF-33BWABZ1M", condition: "Used", Post: "Passed", sn: "SNCF33007", },
    { Category: "Laptop", Model: "CF-33 MK1", MPN: "CF-33BWABZ1M", condition: "Used", Post: "Passed", sn: "SNCF33008", },
    { Category: "Laptop", Model: "CF-33 MK1", MPN: "CF-33BWABZ1M", condition: "Used", Post: "Passed", sn: "SNCF33009", },
    { Category: "Laptop", Model: "CF-33 MK1", MPN: "CF-33BWABZ1M", condition: "Used", Post: "Passed", sn: "SNCF33010", },
];

let page;

test.describe.configure({ mode: "serial" });

test.describe("Add Detailed Field Names values", () => {
    test.beforeAll(async ({ browser }) => {
        // const URL_TEST = "http://localhost:5173/#/app/sales/dashboard";

        page = await browser.newPage();
        await page.goto(RBMS_URL_TEST);
        await page.getByPlaceholder("User Name").click();
        await page.getByPlaceholder("User Name").fill(RBMS_USERNAME);
        await page.getByPlaceholder("Password").click();
        await page.getByPlaceholder("Password").fill(RBMS_PASSWORD);
        await page.getByRole("button", { name: "Sign In" }).click();
        //await expect(page).toHaveURL("http://localhost:5173/#/app/sales/dashboard");
        await page
            .locator("div")
            .filter({ hasText: /^Field Management$/ })
            .click();
        await page.getByRole("link", { name: "Fields" }).click();
    });

    test.afterAll(async () => {
        await page.close();
    });

    basicDataModel.forEach((model, index) => {
        test(`Test Case ${index + 1} ${model.sn}`, async () => {
            await page.getByRole('link', { name: 'Receiving' }).click();
            await page.getByRole('row', { name: 'Edit 1 PO - 999 d&d SUPPLIER' }).getByRole('button').first().click();
            await page.getByRole('button', { name: 'Add to Inventory' }).click();


            await page.locator('div').filter({ hasText: /^\*CategorySelect Category$/ }).locator('svg').click();
            await page.locator('#react-select-2-option-0').getByText(model.Category).click();

            await page.locator('div').filter({ hasText: /^\*ModelSelect model$/ }).locator('svg').click();
            await page.locator('#react-select-3-option-0').getByText('CF-33 MK1').click();


            await page.locator('div').filter({ hasText: /^MPNSelect MPN$/ }).locator('svg').click();
            await page.locator('#react-select-4-option-1').getByText('CF-33BWABZ1M').click();


            await page.locator('div').filter({ hasText: /^\*ConditionSelect Condition$/ }).locator('svg').click();
            await page.locator('#react-select-5-option-1').getByText('Used').click();

            await page.locator('div').filter({ hasText: /^\*PostSelect post$/ }).locator('svg').click();
            await page.locator('#react-select-6-option-0').getByText('Passed').click();

            await page.getByPlaceholder('serial number').click();
            await page.getByPlaceholder('serial number').fill(model.sn);
            await page.locator('form').getByRole('button', { name: 'Save' }).click();

        });
    });
});
