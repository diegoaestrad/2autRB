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
        test(`Test Case ${index + 1} ${model.modelToModify}`, async () => {
            await page.getByRole("cell", { name: model.modelToModify }).click();
            console.log(`Model to Modify: ${model.modelToModify}`);

            await page
                .getByRole("row", {
                    name:
                        model.modelToModify + " " + model.dataType + " " + model.fieldType,
                })
                .getByRole("button")
                .first()
                .click();
            console.log(
                `Model name to Modify: ${model.modelToModify}` +
                "->" +
                model.modelToModify +
                " " +
                model.dataType +
                " " +
                model.fieldType
            );

            // Type the Field Value and Score
            for (let i = 0; i < model.fieldValue.length; i++) {
                await page.getByPlaceholder("Field Value").click();
                await page
                    .getByPlaceholder("Field Value")
                    .fill(String(model.fieldValue[i]));

                await page.getByPlaceholder("Score").click();
                await page.getByPlaceholder("Score").fill(String(model.score[i]));

                await page.getByRole("button", { name: "Save" }).click();
            }

            console.log("\n"); // Separator between elements
        });
    });
});
