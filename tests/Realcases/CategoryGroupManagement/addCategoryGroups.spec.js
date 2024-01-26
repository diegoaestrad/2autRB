import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.goto("http://localhost:5173/#/sign-in?redirectUrl=/");
  await page.getByPlaceholder("User Name").click();
  await page.getByPlaceholder("User Name").fill("admin@rbms.com");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("password");
  await page.getByRole("button", { name: "Sign In" }).click();
  await page.getByRole("link", { name: "Category Groups Management" }).click();
  await page.getByRole("button", { name: "Create Category Group" }).click();
  await page.getByPlaceholder("Category Group Name").click();
  await page.getByPlaceholder("Category Group Name").fill("Computing Devices");
  await page.getByRole("button", { name: "Submit" }).click();

  await page.getByRole("button", { name: "Create Category Group" }).click();
  await page.getByPlaceholder("Category Group Name").click();
  await page
    .getByPlaceholder("Category Group Name")
    .fill("Parts and Accessories");
  await page.getByRole("button", { name: "Submit" }).click();
});
