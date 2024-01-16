import { expect, test } from '@playwright/test';
 

const URL_TEST = [
  'https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/'
];

const USERS_CASES = [
  'admin@rbms.com',
  'pro@pro.com',
  'TheManager@manag.com'
];

const PASSWORD_CASES = [
  'password',
  'cAT',
  'DoctorManag'
];

test('Login Success', async ({ page }) => {
  //await page.goto('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/');
  await page.goto(URL_TEST[0]);
 
  await page.locator("[name='userName']").focus()
  await page.locator("[name='userName']").fill(USERS_CASES[0])
 
  await page.locator("[name='password']").focus()
  await page.locator("[name='password']").fill(PASSWORD_CASES[0])
 
  await page.locator("[type='submit']").click()
 
  await expect(page).toHaveURL('https://beta.ruggedbooksms.com/#/app/sales/dashboard')
});
 
test('Login Failed with wrong password', async ({ page }) => {
  await page.goto(URL_TEST[0]);
  //await page.goto('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/');
 
  
  await page.locator("[name='userName']").focus()
  await page.locator("[name='userName']").fill("admin@rbms.com")
 
  await page.locator("[name='password']").focus()
  await page.locator("[name='password']").fill("password2")
 
  await page.locator("[type='submit']").click()
 
  await expect(page).toHaveURL('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/')
});
 
test('Login Failed with wrong username', async ({ page }) => {
  //await page.goto('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/');
  await page.goto(URL_TEST[0]);
 
  await page.locator("[name='userName']").focus()
  await page.locator("[name='userName']").fill("admin@rbms.coam")
 
  await page.locator("[name='password']").focus()
  await page.locator("[name='password']").fill("password")
 
  await page.locator("[type='submit']").click()
 
  await expect(page).toHaveURL('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/')
});

test('Login Failed with wrong username and password', async ({ page }) => {
  await page.goto(URL_TEST[0]);
  //await page.goto('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/');
 
  await page.locator("[name='userName']").focus()
  await page.locator("[name='userName']").fill("admon@rbms.coam")
 
  await page.locator("[name='password']").focus()
  await page.locator("[name='password']").fill("pessword")
 
  await page.locator("[type='submit']").click()
 
  await expect(page).toHaveURL('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/')
});

test('Login Failed with empty username and correct password', async ({ page }) => {
  //await page.goto('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/');
  await page.goto(URL_TEST[0]);
 
  await page.locator("[name='userName']").focus()
  await page.locator("[name='userName']").fill(" ")
 
  await page.locator("[name='password']").focus()
  await page.locator("[name='password']").fill("password")
 
  await page.locator("[type='submit']").click()
 
  await expect(page).toHaveURL('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/')
});

test('Login Failed with correct username and empty password', async ({ page }) => {
  //await page.goto('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/');
  await page.goto(URL_TEST[0]);
 
  await page.locator("[name='userName']").focus()
  await page.locator("[name='userName']").fill("admin@rbms.com")
 
  await page.locator("[name='password']").focus()
  await page.locator("[name='password']").fill("")
 
  await page.locator("[type='submit']").click()
 
  await expect(page).toHaveURL('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/')
});