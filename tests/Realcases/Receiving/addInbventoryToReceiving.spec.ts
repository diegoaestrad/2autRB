import { test, expect, webkit } from "@playwright/test";
import dotenv from 'dotenv';
import path from 'path';
// Read from default ".env" file.
dotenv.config();
// Alternatively, read from "../my.env" file.
dotenv.config({ path: path.resolve(__dirname, '.env') });

const { RBMS_URL_TEST, RBMS_USERNAME, RBMS_PASSWORD } = process.env

const addInventory = [
    { category: "laptop", model: "cf-33 mk1", mpn: "CF-33ACBNNDN", condition: "used", post: "Passed", serialNumber: "SN000000001", },
    { category: "laptop", model: "cf-33 mk1", mpn: "CF-33ACBNNDN", condition: "used", post: "Passed", serialNumber: "SN000000002" },
    { category: "laptop", model: "cf-33 mk1", mpn: "CF-33ACBNNDN", condition: "used", post: "Passed", serialNumber: "SN000000003", }
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
        // await expect(page).toHaveURL("http://localhost:5173/#/app/sales/dashboard");
        await page.waitForTimeout(500);
        await page.getByRole('link', { name: 'Receiving' }).click();
        await page.waitForTimeout(500);

        //await page.getByRole('heading', { name: 'Create New Receiving' }).click();
    });

    test.afterAll(async () => {
        await page.close();
    });

    addInventory.forEach((model, index) => {
        test(`Test Case ${index + 1} ${model.serialNumber}`, async () => {

            await page.getByRole('link', { name: 'Receiving' }).click();

            await page.getByRole('row', { name: 'Edit 7 PO - 999 trackTest' }).getByRole('button').first().click();
            await page.getByRole('button', { name: 'Add to Inventory' }).click();

            await page.goto("http://localhost:5173/#/app/inventory-item/6");

            await page.locator('div').filter({ hasText: /^\*CategorySelect Category$/ }).locator('svg').click();
            //await page.locator('.select-dropdown-indicator').first().click();
            await page.locator('#react-select-47-option-0').getByText('Laptop').click();

            await page.locator('#react-select-2-option-0').click();
            await page.locator('div:nth-child(2) > div > .select > .select__control > .select__value-container > .select__input-container').click();
            await page.locator('#react-select-3-option-0').getByText('CF-33 MK1').click();
            await page.locator('div:nth-child(3) > div > .select > .select__control > .select__value-container > .select__input-container').click();
            await page.locator('#react-select-4-option-0').getByText('CF-33ACBNNDM').click();
            await page.locator('div:nth-child(4) > div > .select > .select__control > .select__value-container > .select__input-container').click();
            await page.locator('#react-select-5-option-1').getByText('Used').click();
            await page.locator('div:nth-child(5) > div > .select > .select__control > .select__value-container > .select__input-container').click();
            await page.locator('#react-select-6-option-0').getByText('Passed').click();
            await page.getByPlaceholder('serial number').click();
            await page.getByPlaceholder('serial number').fill('202402sn010');
            await page.locator('form').getByRole('button', { name: 'Save' }).click();

            // await page.getByRole('button', { name: 'Add to Inventory' }).click();


            // await page.getByRole('row', { name: 'Edit 5 RMA - 87 greg d1 1' }).getByRole('button').first().click();
            // http://localhost:5173/#/app/inventory-item/6
            // await page.getByRole('row', { name: 'Edit 4 RMA - 8 5345vdfhgf' }).getByRole('button').first().click();
            // http://localhost:5173/#/app/inventory-item/6
            // await page.getByRole('row', { name: 'Edit 3 PO - 7 1 admin@rbms.' }).getByRole('button').first().click();
            // http://localhost:5173/#/app/inventory-item/6
            // await page.getByRole('row', { name: 'Edit 2 PO - 8 D&D axpui1 1' }).getByRole('button').first().click();
            // http://localhost:5173/#/app/inventory-item/6
            // await page.getByRole('row', { name: 'Edit 1 Service - 1' }).getByRole('button').first().click();
            // http://localhost:5173/#/app/inventory-item/6
            // await page.getByRole('row', { name: 'Add to Inventory qty 07 7 7 2' }).getByRole('button').click();
            // http://localhost:5173/#/app/inventory-item/6


            // await page.getByRole('cell', { name: 'Add to Inventory' }).click();
            // await page.getByRole('cell', { name: 'Add to Inventory' }).click();
            // await page.getByRole('cell', { name: 'Add to Inventory' }).click();
            // await page.getByRole('cell', { name: 'Add to Inventory' }).click();
            // await page.getByRole('cell', { name: 'Add to Inventory' }).click();

            // await page.getByRole('button', { name: 'Add to Inventory' }).click();
            // await page.getByRole('button', { name: 'Add to Inventory' }).click();
            // await page.getByRole('button', { name: 'Add to Inventory' }).click();
            // await page.getByRole('button', { name: 'Add to Inventory' }).click();
            // await page.getByRole('button', { name: 'Add to Inventory' }).click();

            // await page.goto('http://localhost:5173/#/app/receiving/list');
            //await page.getByText('Laptop', { exact: true }).click();
            // await page.getByText('Hard Drives', { exact: true }).click();
            // await page.getByText('RAMs', { exact: true }).click();
            // await page.getByText('Batteries', { exact: true }).click();            
            // await page.getByText('Cosmetic Parts', { exact: true }).click();
            // await page.getByText('Motherboard', { exact: true }).click();
            // await page.getByRole('row', { name: 'Edit 6 PO - 567 123qwe123' }).getByRole('button').first().click();
            // await page.getByLabel('Collapse').getByRole('button').click();
            // await page.getByLabel('Collapse').getByRole('button').click();
            // await page.getByRole('row', { name: 'Edit 6 PO - 567 123qwe123' }).getByRole('button').first().click();
            // await page.getByRole('row', { name: 'Edit 5 RMA - 87 greg d1 1' }).getByRole('button').first().click();
            // await page.getByRole('row', { name: 'Collapse Edit 5 RMA - 87 greg' }).getByLabel('Collapse').getByRole('button').click();
            // await page.getByRole('cell', { name: 'qty 07' }).click();
            // await page.getByRole('cell', { name: '7', exact: true }).nth(2).click();
            // await page.getByRole('cell', { name: '7', exact: true }).nth(3).click();
            // await page.getByRole('cell', { name: '7', exact: true }).nth(3).click();
            // await page.getByLabel('a dense table').getByRole('cell', { name: '2' }).nth(1).click();
            // await page.locator('.MuiCollapse-wrapperInner > .MuiPaper-root > .MuiTableContainer-root > .MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > td:nth-child(7)').click();




        });
    });
});
