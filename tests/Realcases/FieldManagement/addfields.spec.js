//import { test, expect, chromium } from "@playwright/test";
import { test, expect } from "@playwright/test";

const URL_TEST = "http://localhost:5173/";
const username = "admin@rbms.com";
const password = "password";

const testaddFields2 = [
  {
    fieldName: "Storage Capacity",
    dataType: "integer",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "Storage Unit",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "Storage Type",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
  },
  {
    fieldName: "Storage Form Factor",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
  },
  {
    fieldName: "Storage Controller",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
  },
  {
    fieldName: "Storage Speed",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
  },
  {
    fieldName: "Brand",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
  },
  {
    fieldName: "Storage Health",
    dataType: "percentage",
    fieldGroup: "",
    fieldType: "functional",
  },
  {
    fieldName: "RAM Capacity",
    dataType: "integer",
    fieldGroup: "",
    fieldType: "specs",
  },
  {
    fieldName: "RAM Unit",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
  },
  {
    fieldName: "RAM Type",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
  },
  {
    fieldName: "Processor Brand",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
  },
  {
    fieldName: "Processor Name",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
  },
  {
    fieldName: "Processor Number",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
  },
  {
    fieldName: "Processor Generation",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
  },
  {
    fieldName: "Processor Speed",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
  },
  {
    fieldName: "Ports",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
  },
  {
    fieldName: "Power",
    dataType: "string",
    fieldGroup: "",
    fieldType: "functional",
  },
  {
    fieldName: "Bios Password",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "functional",
  },
  {
    fieldName: "Graphics Card",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
  },
  {
    fieldName: "Dedicated GPU",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "specs",
  },
  {
    fieldName: "Dedicated GPU Model",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
  },
  {
    fieldName: "# USB Ports",
    dataType: "integer",
    fieldGroup: "",
    fieldType: "specs",
  },
  {
    fieldName: "WLAN",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "specs",
  },
  {
    fieldName: "Bluetooth",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "specs",
  },
  {
    fieldName: "MK",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
  },
  {
    fieldName: "Audio",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "functional",
  },
  {
    fieldName: "Diagnostic Utility",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "functional",
  },
  {
    fieldName: "Cover",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
  },
  {
    fieldName: "Exist?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
  },
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
    fieldName: "Blemish?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
  },
  {
    fieldName: "Dead Pixels?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
  },
  {
    fieldName: "Lines On Screen?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
  },
  {
    fieldName: "Marks On Screen?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
  },
];

const testaddFields = [
  {
    fieldName: "Storage Capacity",
    dataType: "integer",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "Storage Unit",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "Storage Type",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: true,
  },
  {
    fieldName: "Storage Form Factor",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "Storage Controller",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "Storage Speed",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "Brand",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "Storage Health",
    dataType: "percentage",
    fieldGroup: "",
    fieldType: "functional",
    isMultiple: false,
  },
  {
    fieldName: "RAM Capacity",
    dataType: "integer",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "RAM Unit",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "RAM Type",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "Processor Brand",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "Processor Name",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "Processor Number",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "Processor Generation",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "Processor Speed",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "Ports",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "Power",
    dataType: "string",
    fieldGroup: "",
    fieldType: "functional",
    isMultiple: false,
  },
  {
    fieldName: "Bios Password",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "functional",
    isMultiple: false,
  },
  {
    fieldName: "Graphics Card",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "Dedicated GPU",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "Dedicated GPU Model",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "# USB Ports",
    dataType: "integer",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "WLAN",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "Bluetooth",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "MK",
    dataType: "string",
    fieldGroup: "",
    fieldType: "specs",
    isMultiple: false,
  },
  {
    fieldName: "Audio",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "functional",
    isMultiple: false,
  },
  {
    fieldName: "Diagnostic Utility",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "functional",
    isMultiple: false,
  },
  {
    fieldName: "Cover",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
    isMultiple: false,
  },
  {
    fieldName: "Exist?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
    isMultiple: false,
  },
  {
    fieldName: "Cracks/Broken?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
    isMultiple: false,
  },
  {
    fieldName: "Dents?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
    isMultiple: false,
  },
  {
    fieldName: "Scratches?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
    isMultiple: false,
  },
  {
    fieldName: "Discoloration?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
    isMultiple: false,
  },
  {
    fieldName: "Screws?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
    isMultiple: false,
  },
  {
    fieldName: "Packaging?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
    isMultiple: false,
  },
  {
    fieldName: "Cleaned?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
    isMultiple: false,
  },
  {
    fieldName: "Blemish?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
    isMultiple: false,
  },
  {
    fieldName: "Dead Pixels?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
    isMultiple: false,
  },
  {
    fieldName: "Lines On Screen?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
    isMultiple: false,
  },
  {
    fieldName: "Marks On Screen?",
    dataType: "boolean",
    fieldGroup: "",
    fieldType: "cosmetic",
    isMultiple: false,
  },
];

let page;

test.describe.configure({ mode: "serial" });

test.describe("Addinf fields", () => {
  test.beforeAll(async ({ browser }) => {
    const URL_TEST = "http://localhost:5173/#/app/sales/dashboard";

    // const USERS_CASES = ["admin@rbms.com", "falseuser@nodomain.ron"];

    // const PASSWORD_CASES = ["password", "wrongpazswerd"];

    page = await browser.newPage();
    await page.goto(URL_TEST);
    await page.getByPlaceholder("User Name").click();
    await page.getByPlaceholder("User Name").fill(username);
    await page.getByPlaceholder("Password").click();
    await page.getByPlaceholder("Password").fill(password);
    await page.getByRole("button", { name: "Sign In" }).click();
    await expect(page).toHaveURL("http://localhost:5173/#/app/sales/dashboard");
    await page
      .locator("div")
      .filter({ hasText: /^Field Management$/ })
      .click();
    await page.getByRole("link", { name: "Fields" }).click();
  });

  test.afterAll(async () => {
    await page.close();
  });

  testaddFields.forEach((fielditems, index) => {
    test(`Test Case ${index + 1} ${fielditems.fieldName}`, async () => {
      await page.getByRole("button", { name: "Create New Field" }).click();

      await page.getByPlaceholder("Field Name").click();
      await page.getByPlaceholder("Field Name").fill(fielditems.fieldName);
      await page.locator(".select__input-container").first().click();

      await page.getByText(fielditems.dataType, { exact: true }).click();

      await page
        .locator(
          "div:nth-child(4) > div > .select > .select__control > .select__value-container > .select__input-container"
        )
        .click();
      await page.getByText(fielditems.fieldType, { exact: true }).click();

      if (fielditems.isMultiple) {
        await page.getByLabel("").check();
      } else {
        await page.getByLabel("").uncheck();
      }

      await page.getByRole("button", { name: "Save" }).click();
    });
  });
});
