// import { test, expect } from '@playwright/test';



//     const d = new Date();
//     let time = d.getTime();
//     const excecution="Test"+d.getFullYear+d.getHours+d.getMinutes
//     console.log("Execution on" + time);

// test.only('Create Admin', async ({ page }) => {
//     var caseid = "admin"
//     await page.goto('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/');
//     await page.getByPlaceholder('User Name').click();
//     await page.getByPlaceholder('User Name').press('Control+a');
//     await page.getByPlaceholder('User Name').fill('admin@rbms.com');
//     await page.getByPlaceholder('User Name').press('Tab');
//     await page.getByPlaceholder('Password').fill('password');
//     await page.getByPlaceholder('Password').press('Enter');
//     await page.locator('div').filter({ hasText: /^User$/ }).click();
//     await page.getByRole('link', { name: 'Manage User' }).click();

//     await page.getByRole('button', { name: 'Create New User' }).click();
//     await page.getByPlaceholder('First name').click();
//     await page.getByPlaceholder('First name').fill(excecution+caseid);
//     await page.getByPlaceholder('First name').press('Tab');
//     await page.getByPlaceholder('Last name').fill(excecution+caseid);
//     await page.getByPlaceholder('Email').click();
//     await page.getByPlaceholder('Email').fill(excecution+caseid+"@rbms.com");
//     await page.getByPlaceholder('Email').press('Tab');
//     await page.getByRole('main').locator('svg').click();
//     await page.locator('#react-select-2-option-0').click();
//     await page.getByRole('button', { name: 'Save' }).click();
// });

// test('Create Manager', async ({ page }) => {
//     var caseid = "Manager"
//     await page.goto('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/');
//     await page.getByPlaceholder('User Name').click();
//     await page.getByPlaceholder('User Name').press('Control+a');
//     await page.getByPlaceholder('User Name').fill('admin@rbms.com');
//     await page.getByPlaceholder('User Name').press('Tab');
//     await page.getByPlaceholder('Password').fill('password');
//     await page.getByPlaceholder('Password').press('Enter');
//     await page.locator('div').filter({ hasText: /^User$/ }).click();
//     await page.getByRole('link', { name: 'Manage User' }).click();

//     await page.getByRole('button', { name: 'Create New User' }).click();
//     await page.getByPlaceholder('First name').click();
//     await page.getByPlaceholder('First name').fill(excecution+caseid);
//     await page.getByPlaceholder('First name').press('Tab');
//     await page.getByPlaceholder('Last name').fill(excecution+caseid);
//     await page.getByPlaceholder('Email').click();
//     await page.getByPlaceholder('Email').fill(excecution+caseid+"@rbms.com");
//     await page.locator('.select__input-container').click();
//     await page.locator('#react-select-3-option-1').click();
//     await page.getByRole('button', { name: 'Save' }).click();
// });

// test('Create Operator', async ({ page }) => {
//     var caseid = "Operator"
//     await page.goto('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/');
//     await page.getByPlaceholder('User Name').click();
//     await page.getByPlaceholder('User Name').press('Control+a');
//     await page.getByPlaceholder('User Name').fill('admin@rbms.com');
//     await page.getByPlaceholder('User Name').press('Tab');
//     await page.getByPlaceholder('Password').fill('password');
//     await page.getByPlaceholder('Password').press('Enter');
//     await page.locator('div').filter({ hasText: /^User$/ }).click();
//     await page.getByRole('link', { name: 'Manage User' }).click();

//     await page.getByRole('button', { name: 'Create New User' }).click();
//     await page.getByPlaceholder('First name').click();
//     await page.getByPlaceholder('First name').fill(excecution+caseid);
//     await page.getByPlaceholder('First name').press('Tab');
//     await page.getByPlaceholder('Last name').fill(excecution+caseid);
//     await page.getByPlaceholder('Email').click();
//     await page.getByPlaceholder('Email').fill(excecution+caseid+"@rbms.com");
//     await page.locator('.select__input-container').click();
//     await page.getByText('Operator', { exact: true }).click();
//     await page.getByRole('button', { name: 'Save' }).click();
// });

// test('Create Purchasing Manager', async ({ page }) => {
//     var caseid = "PurchasingManager"
//     await page.goto('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/');
//     await page.getByPlaceholder('User Name').click();
//     await page.getByPlaceholder('User Name').press('Control+a');
//     await page.getByPlaceholder('User Name').fill('admin@rbms.com');
//     await page.getByPlaceholder('User Name').press('Tab');
//     await page.getByPlaceholder('Password').fill('password');
//     await page.getByPlaceholder('Password').press('Enter');
//     await page.locator('div').filter({ hasText: /^User$/ }).click();
//     await page.getByRole('link', { name: 'Manage User' }).click();

//     await page.getByRole('button', { name: 'Create New User' }).click();
//     await page.getByPlaceholder('First name').click();
//     await page.getByPlaceholder('First name').fill(excecution+caseid);
//     await page.getByPlaceholder('First name').press('Tab');
//     await page.getByPlaceholder('Last name').fill(excecution+caseid);
//     await page.getByPlaceholder('Email').click();
//     await page.getByPlaceholder('Email').fill(excecution+caseid+"@rbms.com");
//     await page.locator('div').filter({ hasText: /^Role$/ }).nth(2).click();
//     await page.getByText('Purchasing Manager', { exact: true }).click();
//     await page.getByRole('button', { name: 'Save' }).click();
// });

// test('Create Warehouse Manager', async ({ page }) => {
//     var caseid = "WarehouseManager"
//     await page.goto('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/');
//     await page.getByPlaceholder('User Name').click();
//     await page.getByPlaceholder('User Name').press('Control+a');
//     await page.getByPlaceholder('User Name').fill('admin@rbms.com');
//     await page.getByPlaceholder('User Name').press('Tab');
//     await page.getByPlaceholder('Password').fill('password');
//     await page.getByPlaceholder('Password').press('Enter');
//     await page.locator('div').filter({ hasText: /^User$/ }).click();
//     await page.getByRole('link', { name: 'Manage User' }).click();

//     await page.getByRole('button', { name: 'Create New User' }).click();
//     await page.getByPlaceholder('First name').click();
//     await page.getByPlaceholder('First name').fill(excecution+caseid);
//     await page.getByPlaceholder('First name').press('Tab');
//     await page.getByPlaceholder('Last name').fill(excecution+caseid);
//     await page.getByPlaceholder('Email').click();
//     await page.getByPlaceholder('Email').fill(excecution+caseid+"@rbms.com");
//     await page.locator('.select__input-container').click();
//     await page.getByText('WareHouse Manager', { exact: true }).click();
//     await page.getByRole('button', { name: 'Save' }).click();
// });

// test('Create Tech Manager', async ({ page }) => {
//     var caseid = "TechManager"
//     await page.goto('https://beta.ruggedbooksms.com/#/sign-in?redirectUrl=/');
//     await page.getByPlaceholder('User Name').click();
//     await page.getByPlaceholder('User Name').press('Control+a');
//     await page.getByPlaceholder('User Name').fill('admin@rbms.com');
//     await page.getByPlaceholder('User Name').press('Tab');
//     await page.getByPlaceholder('Password').fill('password');
//     await page.getByPlaceholder('Password').press('Enter');
//     await page.locator('div').filter({ hasText: /^User$/ }).click();
//     await page.getByRole('link', { name: 'Manage User' }).click();
    
//     await page.getByRole('button', { name: 'Create New User' }).click();
//     await page.getByPlaceholder('First name').click();
//     await page.getByPlaceholder('First name').fill(excecution+caseid);
//     await page.getByPlaceholder('First name').press('Tab');
//     await page.getByPlaceholder('Last name').fill(excecution+caseid);
//     await page.getByPlaceholder('Email').click();
//     await page.getByPlaceholder('Email').fill(excecution+caseid+"@rbms.com");
//     await page.locator('.select__input-container').click();
//     await page.locator('#react-select-7-option-5').click();
//     await page.getByRole('button', { name: 'Save' }).click();
// });