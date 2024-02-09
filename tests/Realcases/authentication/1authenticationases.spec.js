import { test, expect, webkit } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";
// Read from default ".env" file.
dotenv.config();
// Alternatively, read from "../my.env" file.
dotenv.config({ path: path.resolve(__dirname, ".env") });

const { RBMS_URL_TEST, RBMS_USERNAME, RBMS_PASSWORD } = process.env;

// import { expect, test } from "@playwright/test";

// const URL_TEST = "http://localhost:5173/#/app/sales/dashboard";

// const USERS_CASES = ["admin@rbms.com", "falseuser@nodomain.ron"];

// const PASSWORD_CASES = ["password", "wrongpazswerd"];

test("Login Success", async ({ page }) => {
  await page.goto(RBMS_URL_TEST);
  await page.getByPlaceholder("User Name").click();
  await page.getByPlaceholder("User Name").fill(RBMS_USERNAME);
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill(RBMS_PASSWORD);
  await page.getByRole("button", { name: "Sign In" }).click();
  //await expect(page).toHaveURL("http://localhost:5173/#/app/sales/dashboard");
});

test("Login Failed with wrong password", async ({ page }) => {
  await page.goto(RBMS_URL_TEST);

  await page.locator("[name='userName']").focus();
  await page.locator("[name='userName']").fill(RBMS_USERNAME);

  await page.locator("[name='password']").focus();
  await page.locator("[name='password']").fill("password2");

  await page.getByRole("button", { name: "Sign In" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Username and password do not match$/ })
    .first()
    .click();
});

test("Login Failed with wrong username", async ({ page }) => {
  await page.goto(RBMS_URL_TEST);

  await page.locator("[name='userName']").focus();
  await page.locator("[name='userName']").fill("admin@rbms.coam");

  await page.locator("[name='password']").focus();
  await page.locator("[name='password']").fill(RBMS_PASSWORD);

  await page.locator("[type='submit']").click();

  await page.getByRole("button", { name: "Sign In" }).click();
  await page.getByText("User not found").click();
});

test("Login Failed with wrong username and password", async ({ page }) => {
  await page.goto(RBMS_URL_TEST);

  await page.locator("[name='userName']").focus();
  await page.locator("[name='userName']").fill("admon@rbms.coam");

  await page.locator("[name='password']").focus();
  await page.locator("[name='password']").fill("pessword");

  await page.locator("[type='submit']").click();

  await page.getByRole("button", { name: "Sign In" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^User not found$/ })
    .first()
    .click();
  await page
    .getByText(
      "Welcome back!Please enter your credentials to sign in!User not foundUser"
    )
    .click();
});

test("Login Failed with empty username and correct password", async ({
  page,
}) => {
  await page.goto(RBMS_URL_TEST);

  await page.locator("[name='userName']").focus();
  await page.locator("[name='userName']").fill(" ");

  await page.locator("[name='password']").focus();
  await page.locator("[name='password']").fill(RBMS_PASSWORD);

  await page.locator("[type='submit']").click();

  await page.getByRole("button", { name: "Sign In" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^User not found$/ })
    .first()
    .click();
});

test("Login Failed with correct username and empty password", async ({
  page,
}) => {
  await page.goto(RBMS_URL_TEST);

  await page.locator("[name='userName']").focus();
  await page.locator("[name='userName']").fill(RBMS_USERNAME);

  await page.locator("[name='password']").focus();
  await page.locator("[name='password']").fill("");

  await page.locator("[type='submit']").click();

  await page.getByRole("button", { name: "Sign In" }).click();
  await page.getByText("Please enter your password").click();
});
