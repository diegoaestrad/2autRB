import { test, expect, webkit } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";
// Read from default ".env" file.
dotenv.config();
// Alternatively, read from "../my.env" file.
dotenv.config({ path: path.resolve(__dirname, ".env") });

const { RBMS_URL_TEST, RBMS_USERNAME, RBMS_PASSWORD } = process.env;

const basicDataModel = [
  {
    modelToModify: "AMP",
    fieldType: "specs",
    dataType: "string",
    fieldValue: ["High AMP", "Standard", "Low Power"],
    score: [10, 5, 0],
  },
  {
    modelToModify: "Audio",
    fieldType: "functional",
    dataType: "boolean",
    fieldValue: ["False", "True"],
    score: [0, 3, 4, 5],
  },
  {
    modelToModify: "Battery Health",
    fieldType: "functional",
    dataType: "percentage",
    fieldValue: [100],
    score: [0],
  },
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
