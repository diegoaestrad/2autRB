import { test, expect, webkit } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";
// Read from default ".env" file.
dotenv.config();
// Alternatively, read from "../my.env" file.
dotenv.config({ path: path.resolve(__dirname, ".env") });

const { RBMS_URL_TEST, RBMS_USERNAME, RBMS_PASSWORD } = process.env;

// import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(RBMS_URL_TEST);
  await page.goto("http://localhost:5173/#/sign-in?redirectUrl=/");
  await page.getByPlaceholder("User Name").click();

  await page.getByPlaceholder("User Name").fill(RBMS_USERNAME);
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill(RBMS_PASSWORD);

  await page.getByRole("button", { name: "Sign In" }).click();
  await page.getByRole("link", { name: "Category Groups Management" }).click();
  await page.getByRole("button", { name: "Create Category Group" }).click();
  await page.getByPlaceholder("Category Group Name").click();
  await page.getByPlaceholder("Category Group Name").fill("Computing Devices");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByRole("button", { name: "Create Category Group" }).click();
  await page.getByPlaceholder("Category Group Name").click();
  await page.getByPlaceholder("Category Group Name").click();
  await page
    .getByPlaceholder("Category Group Name")
    .fill("Parts and Accessories");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByRole("button", { name: "Create Category Group" }).click();
  await page.getByPlaceholder("Category Group Name").click();
  await page.getByPlaceholder("Category Group Name").fill("Other devices");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByRole("button", { name: "Create Category Group" }).click();
  await page.getByPlaceholder("Category Group Name").click();
  await page.getByPlaceholder("Category Group Name").fill("Service");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.waitForTimeout(500);
});
