import { test, expect, chromium } from '@playwright/test';

const URL_TEST = "http://localhost:5173/";
const username = "admin@rbms.com";
const password = "password";

const testaddCategory = [
    {
        role: "Admin",
    },
];

const FUNC = ['User', 'Asset', 'Category Group', 'Categories', 'Field Groups', 'Fields', 'Fieldvalues', 'Identification', 'Inventory', 'Mpns', 'Models', 'Qrcode', 'Receivings', 'Storage', 'Ordes'];

let page;

test.describe.configure({ mode: "serial" });

test.describe("Access Control", () => {

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
        await page.locator('div').filter({ hasText: /^User$/ }).click();
        await page.getByRole('link', { name: 'Dashboard' }).nth(1).click();

        await page.locator('.select__input-container').click();
        await page.getByText('Admin', { exact: true }).click();
        await page.locator('form').click();
        await page.waitForTimeout(500);

    });

    test.afterAll(async () => {
        await page.getByRole('button', { name: 'Save' }).click();
        await page.close();
    });


    testaddCategory.forEach((FUNC, index) => {
        test(`Test Case ${index + 1} ${FUNC[index]}`, async () => {
            //for (let i = 0; i < FUNC.length; i++) {
            await page.getByRole('row', { name: FUNC[index] }).getByLabel('').first().check();
            await page.getByRole('row', { name: FUNC[index] }).getByLabel('').nth(1).check();
            await page.getByRole('row', { name: FUNC[index] }).getByLabel('').nth(2).check();
            await page.getByRole('row', { name: FUNC[index] }).getByLabel('').nth(3).check();
            //}

        });

    });

});

