import { test, expect, chromium } from '@playwright/test';

const URL_TEST = "http://localhost:5173/";
const username = "admin@rbms.com";
const password = "password";

const basicDataModel = [

  // { modelToModify: "AMP", fieldType: "specs", dataType: "string", fieldValue: "High AMP" },
  // { modelToModify: "AMP", fieldType: "specs", dataType: "string", fieldValue: "Standard" },
  // { modelToModify: "AMP", fieldType: "specs", dataType: "string", fieldValue: "Low Power" },

  {
    modelToModify: "AMP",
    fieldType: "specs",
    dataType: "string",
    fieldValues: ["High AMP", "Standard", "Low Power"],
  }


];



const CompleteDataModel = [

  { modelToModify: "AMP", fieldType: "specs", dataType: "string", fieldValue: "High AMP" },
  { modelToModify: "AMP", fieldType: "specs", dataType: "string", fieldValue: "Standard" },
  { modelToModify: "AMP", fieldType: "specs", dataType: "string", fieldValue: "Low Power" },
  { modelToModify: "Audio", fieldType: "functional", dataType: "boolean", fieldValue: false },
  { modelToModify: "Audio", fieldType: "functional", dataType: "boolean", fieldValue: true },
  { modelToModify: "Barcode Reader", fieldType: "functional", dataType: "boolean", fieldValue: false },
  { modelToModify: "Barcode Reader", fieldType: "functional", dataType: "boolean", fieldValue: true },
  { modelToModify: "Barcode Reader", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "Barcode Reader", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "Battery Health", fieldType: "functional", dataType: "percentage", fieldValue: 80 },
  { modelToModify: "Battery Report", fieldType: "specs", dataType: "opentext", fieldValue: "https://example.com/battery-report" },
  { modelToModify: "Battery type", fieldType: "specs", dataType: "string", fieldValue: "Lightweight" },
  { modelToModify: "Battery Type", fieldType: "specs", dataType: "string", fieldValue: "Li-ion" },
  { modelToModify: "Battery type", fieldType: "specs", dataType: "string", fieldValue: "LongLife" },
  { modelToModify: "Bios Password", fieldType: "functional", dataType: "boolean", fieldValue: false },
  { modelToModify: "Bios Password", fieldType: "functional", dataType: "boolean", fieldValue: true },
  { modelToModify: "Blemish", fieldType: "cosmetic", dataType: "string", fieldValue: "Minor" },
  { modelToModify: "Blemish", fieldType: "cosmetic", dataType: "string", fieldValue: "None" },
  { modelToModify: "Bluetooth", fieldType: "functional", dataType: "boolean", fieldValue: true },
  { modelToModify: "Bluetooth", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "Bluetooth", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "Brand", fieldType: "specs", dataType: "string", fieldValue: "Crucial" },
  { modelToModify: "Brand", fieldType: "specs", dataType: "string", fieldValue: "Dell" },
  { modelToModify: "Brand", fieldType: "specs", dataType: "string", fieldValue: "Lenovo" },
  { modelToModify: "Brand", fieldType: "specs", dataType: "string", fieldValue: "Panasonic" },
  { modelToModify: "Brand", fieldType: "specs", dataType: "string", fieldValue: "Samsung" },
  { modelToModify: "Brand", fieldType: "specs", dataType: "string", fieldValue: "Seagate" },
  { modelToModify: "Camera", fieldType: "functional", dataType: "boolean", fieldValue: true },
  { modelToModify: "Camera", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "Camera", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "Cleaned", fieldType: "cosmetic", dataType: "boolean", fieldValue: true },
  { modelToModify: "Cleaned", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "Cleaned", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "Cracks/Broken", fieldType: "cosmetic", dataType: "string", fieldValue: "None" },
  { modelToModify: "Dead Pixel", fieldType: "cosmetic", dataType: "string", fieldValue: "1" },
  { modelToModify: "Dead Pixel", fieldType: "cosmetic", dataType: "string", fieldValue: "None" },
  { modelToModify: "Dead Pixel", fieldType: "specs", dataType: "string", fieldValue: "None" },
  { modelToModify: "Dead Pixel", fieldType: "specs", dataType: "string", fieldValue: "Some" },
  { modelToModify: "Dedicated GPU", fieldType: "specs", dataType: "string", fieldValue: "AMD Radeon Pro WX 7100" },
  { modelToModify: "Dedicated GPU", fieldType: "specs", dataType: "string", fieldValue: "AMD Radeon RX 5700M" },
  { modelToModify: "Dedicated GPU", fieldType: "specs", dataType: "string", fieldValue: "AMD Radeon RX 6800M" },
  { modelToModify: "Dedicated GPU", fieldType: "specs", dataType: "string", fieldValue: "NVIDIA GeForce GTX 1650" },
  { modelToModify: "Dedicated GPU", fieldType: "specs", dataType: "string", fieldValue: "NVIDIA GeForce GTX 1660 Ti" },
  { modelToModify: "Dedicated GPU", fieldType: "specs", dataType: "string", fieldValue: "NVIDIA Quadro P5000" },
  { modelToModify: "Dedicated GPU", fieldType: "specs", dataType: "string", fieldValue: "NVIDIA Quadro RTX 5000" },
  { modelToModify: "Dents", fieldType: "cosmetic", dataType: "string", fieldValue: "Minor" },
  { modelToModify: "Diagnostic Utility", fieldType: "functional", dataType: "string", fieldValue: "Dell Diagnostics" },
  { modelToModify: "Diagnostic Utility", fieldType: "functional", dataType: "string", fieldValue: "HP PC Hardware Diagnostics" },
  { modelToModify: "Discoloration", fieldType: "cosmetic", dataType: "string", fieldValue: "None" },
  { modelToModify: "Display Port", fieldType: "functional", dataType: "boolean", fieldValue: false },
  { modelToModify: "Display Port", fieldType: "functional", dataType: "boolean", fieldValue: true },
  { modelToModify: "Display Port", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "Display Port", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "DVI", fieldType: "functional", dataType: "boolean", fieldValue: false },
  { modelToModify: "DVI", fieldType: "functional", dataType: "boolean", fieldValue: true },
  { modelToModify: "DVI", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "DVI", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "Face Recognition", fieldType: "functional", dataType: "boolean", fieldValue: false },
  { modelToModify: "Face Recognition", fieldType: "functional", dataType: "boolean", fieldValue: true },
  { modelToModify: "Face Recognition", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "Face Recognition", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "Fingerprint", fieldType: "functional", dataType: "boolean", fieldValue: false },
  { modelToModify: "Fingerprint", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "Fingerprint", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "GPS", fieldType: "functional", dataType: "boolean", fieldValue: false },
  { modelToModify: "GPS", fieldType: "functional", dataType: "boolean", fieldValue: true },
  { modelToModify: "GPS", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "GPS", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "Graphics Card", fieldType: "functional", dataType: "string", fieldValue: "AMD Radeon RX 5700" },
  { modelToModify: "Graphics Card", fieldType: "functional", dataType: "string", fieldValue: "Intel Iris Xe Graphics" },
  { modelToModify: "Graphics Card", fieldType: "functional", dataType: "string", fieldValue: "Intel UHD Graphics 520" },
  { modelToModify: "Graphics Card", fieldType: "functional", dataType: "string", fieldValue: "NVIDIA GeForce RTX 3060" },
  { modelToModify: "HDMI", fieldType: "functional", dataType: "boolean", fieldValue: true },
  { modelToModify: "HDMI", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "HDMI", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "Keyboard language", fieldType: "specs", dataType: "string", fieldValue: "French" },
  { modelToModify: "Keyboard language", fieldType: "specs", dataType: "string", fieldValue: "Spanish" },
  { modelToModify: "Keyboard language", fieldType: "specs", dataType: "string", fieldValue: "US English" },
  { modelToModify: "Keyboard Type", fieldType: "specs", dataType: "string", fieldValue: "Backlit" },
  { modelToModify: "Keyboard type", fieldType: "specs", dataType: "string", fieldValue: "emmisive" },
  { modelToModify: "Keyboard type", fieldType: "specs", dataType: "string", fieldValue: "rubber" },
  { modelToModify: "Keyboard type", fieldType: "specs", dataType: "string", fieldValue: "standard" },
  { modelToModify: "Label Condition", fieldType: "cosmetic", dataType: "string", fieldValue: "Excellent" },
  { modelToModify: "Label condition", fieldType: "specs", dataType: "string", fieldValue: "Excellent" },
  { modelToModify: "Label condition", fieldType: "specs", dataType: "string", fieldValue: "Fair" },
  { modelToModify: "Label condition", fieldType: "specs", dataType: "string", fieldValue: "Good" },
  { modelToModify: "LAN", fieldType: "functional", dataType: "boolean", fieldValue: true },
  { modelToModify: "LAN", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "LAN", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "Lines on Screen", fieldType: "cosmetic", dataType: "string", fieldValue: "Few" },
  { modelToModify: "Lines on Screen", fieldType: "cosmetic", dataType: "string", fieldValue: "None" },
  { modelToModify: "Lines on Screen", fieldType: "specs", dataType: "string", fieldValue: "None" },
  { modelToModify: "Lines on Screen", fieldType: "specs", dataType: "string", fieldValue: "Visible" },
  { modelToModify: "Manufacturer", fieldType: "specs", dataType: "string", fieldValue: "Crucial" },
  { modelToModify: "Manufacturer", fieldType: "specs", dataType: "string", fieldValue: "Dell" },
  { modelToModify: "Manufacturer", fieldType: "specs", dataType: "string", fieldValue: "Lenovo" },
  { modelToModify: "Manufacturer", fieldType: "specs", dataType: "string", fieldValue: "Panasonic" },
  { modelToModify: "Manufacturer", fieldType: "specs", dataType: "string", fieldValue: "Samsung" },
  { modelToModify: "Manufacturer", fieldType: "specs", dataType: "string", fieldValue: "Seagate" },
  { modelToModify: "Marks on Screen", fieldType: "cosmetic", dataType: "string", fieldValue: "Light scratches" },
  { modelToModify: "Marks on Screen", fieldType: "cosmetic", dataType: "string", fieldValue: "None" },
  { modelToModify: "Marks on Screen", fieldType: "specs", dataType: "string", fieldValue: "Minor" },
  { modelToModify: "Marks on Screen", fieldType: "specs", dataType: "string", fieldValue: "None" },
  { modelToModify: "MK", fieldType: "specs", dataType: "string", fieldValue: "MK1" },
  { modelToModify: "MK", fieldType: "specs", dataType: "string", fieldValue: "MK2" },
  { modelToModify: "MK", fieldType: "specs", dataType: "string", fieldValue: "MK3" },
  { modelToModify: "MK", fieldType: "specs", dataType: "string", fieldValue: "MK4" },
  { modelToModify: "MK", fieldType: "specs", dataType: "string", fieldValue: "MK5" },
  { modelToModify: "MK", fieldType: "specs", dataType: "string", fieldValue: "MK6" },
  { modelToModify: "Mobile Broadband Module", fieldType: "specs", dataType: "string", fieldValue: "Sierra Wireless EM7305" },
  { modelToModify: "Mobile Broadband Module", fieldType: "specs", dataType: "string", fieldValue: "Sierra Wireless EM7340" },
  { modelToModify: "Mobile Broadband Module", fieldType: "specs", dataType: "string", fieldValue: "Sierra Wireless EM7355" },
  { modelToModify: "Mobile Broadband Module", fieldType: "specs", dataType: "string", fieldValue: "Sierra Wireless EM7430" },
  { modelToModify: "Mobile Broadband Module", fieldType: "specs", dataType: "string", fieldValue: "Sierra Wireless EM7455B" },
  { modelToModify: "Mobile Broadband Module", fieldType: "specs", dataType: "string", fieldValue: "Sierra Wireless EM7511" },
  { modelToModify: "Mobile Broadband Module", fieldType: "specs", dataType: "string", fieldValue: "Sierra Wireless EM7565" },
  { modelToModify: "Mobile Broadband Module", fieldType: "specs", dataType: "string", fieldValue: "Sierra Wireless EM9190" },
  { modelToModify: "Mobile Broadband Module", fieldType: "specs", dataType: "string", fieldValue: "Sierra Wireless MC7304" },
  { modelToModify: "Mobile Broadband Module", fieldType: "specs", dataType: "string", fieldValue: "Sierra Wireless MC7355" },
  { modelToModify: "Mobile Broadband Module", fieldType: "specs", dataType: "string", fieldValue: "Sierra Wireless MC7430" },
  { modelToModify: "Mobile Broadband Module", fieldType: "specs", dataType: "string", fieldValue: "Sierra Wireless MC7700" },
  { modelToModify: "Mobile Broadband Module", fieldType: "specs", dataType: "string", fieldValue: "Sierra Wireless MC7750" },
  { modelToModify: "Mouse Pad", fieldType: "functional", dataType: "boolean", fieldValue: true },
  { modelToModify: "Mouse pad", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "Mouse pad", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "Optical Drive", fieldType: "functional", dataType: "boolean", fieldValue: false },
  { modelToModify: "Optical Drive", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "Optical Drive", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "Packaging", fieldType: "cosmetic", dataType: "string", fieldValue: "Original" },
  { modelToModify: "Packaging", fieldType: "specs", dataType: "string", fieldValue: "Generic" },
  { modelToModify: "Packaging", fieldType: "specs", dataType: "string", fieldValue: "Original" },
  { modelToModify: "Passed?", fieldType: "functional", dataType: "boolean", fieldValue: true },
  { modelToModify: "Passed?", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "Passed?", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "Power", fieldType: "functional", dataType: "boolean", fieldValue: false },
  { modelToModify: "Power", fieldType: "functional", dataType: "boolean", fieldValue: true },
  { modelToModify: "Processor", fieldType: "specs", dataType: "string", fieldValue: "Intel Core i5-8250U" },
  { modelToModify: "Processor", fieldType: "specs", dataType: "string", fieldValue: "Intel® Core™ i3-11100HE Processor" },
  { modelToModify: "Processor", fieldType: "specs", dataType: "string", fieldValue: "Intel® Core™ i3-12300HL Processor" },
  { modelToModify: "Processor", fieldType: "specs", dataType: "string", fieldValue: "Intel® Core™ i5 processor 14600K" },
  { modelToModify: "Processor", fieldType: "specs", dataType: "string", fieldValue: "Intel® Core™ i7 processor 14700K" },
  { modelToModify: "Processor", fieldType: "specs", dataType: "string", fieldValue: "Intel® Core™ i7-10700K Processor" },
  { modelToModify: "Processor", fieldType: "specs", dataType: "string", fieldValue: "Intel® Core™ i9 processor 14900" },
  { modelToModify: "Processor", fieldType: "specs", dataType: "string", fieldValue: "Intel® Core™ i9 processor 14900K" },
  { modelToModify: "RAM capacity", fieldType: "specs", dataType: "integer", fieldValue: "16" },
  { modelToModify: "RAM capacity", fieldType: "specs", dataType: "integer", fieldValue: "2" },
  { modelToModify: "RAM capacity", fieldType: "specs", dataType: "integer", fieldValue: "32" },
  { modelToModify: "RAM capacity", fieldType: "specs", dataType: "integer", fieldValue: "4" },
  { modelToModify: "RAM capacity", fieldType: "specs", dataType: "integer", fieldValue: "64" },
  { modelToModify: "RAM capacity", fieldType: "specs", dataType: "integer", fieldValue: "8" },
  { modelToModify: "RAM Capacity", fieldType: "specs", dataType: "integer", fieldValue: 8 },
  { modelToModify: "RAM type", fieldType: "specs", dataType: "string", fieldValue: "DDR2" },
  { modelToModify: "RAM type", fieldType: "specs", dataType: "string", fieldValue: "DDR3" },
  { modelToModify: "RAM type", fieldType: "specs", dataType: "string", fieldValue: "DDR4" },
  { modelToModify: "RAM type", fieldType: "specs", dataType: "string", fieldValue: "DDR5" },
  { modelToModify: "RAM unit", fieldType: "specs", dataType: "string", fieldValue: "GB" },
  { modelToModify: "RFID", fieldType: "functional", dataType: "boolean", fieldValue: false },
  { modelToModify: "RFID", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "RFID", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "Scratches", fieldType: "cosmetic", dataType: "string", fieldValue: "Few" },
  { modelToModify: "Screen resolution", fieldType: "specs", dataType: "string", fieldValue: "1366x768" },
  { modelToModify: "Screen resolution", fieldType: "specs", dataType: "string", fieldValue: "1920x1080" },
  { modelToModify: "Screen resolution", fieldType: "specs", dataType: "string", fieldValue: "2560x1440" },
  { modelToModify: "Screen size", fieldType: "specs", dataType: "double", fieldValue: "13.3" },
  { modelToModify: "Screen size", fieldType: "specs", dataType: "double", fieldValue: "14.0" },
  { modelToModify: "Screen size", fieldType: "specs", dataType: "double", fieldValue: "15.6" },
  { modelToModify: "Screen size", fieldType: "specs", dataType: "double", fieldValue: "17.3" },
  { modelToModify: "Screen Size", fieldType: "specs", dataType: "double", fieldValue: 14.0 },
  { modelToModify: "Screen type", fieldType: "specs", dataType: "string", fieldValue: "IPS" },
  { modelToModify: "Screen Type", fieldType: "specs", dataType: "string", fieldValue: "LED" },
  { modelToModify: "Screen type", fieldType: "specs", dataType: "string", fieldValue: "LED-backlit" },
  { modelToModify: "Screen type", fieldType: "specs", dataType: "string", fieldValue: "OLED" },
  { modelToModify: "Screws", fieldType: "cosmetic", dataType: "string", fieldValue: "Tightened" },
  { modelToModify: "SD Card", fieldType: "functional", dataType: "boolean", fieldValue: true },
  { modelToModify: "SD Card", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "SD Card", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "Serial Port", fieldType: "functional", dataType: "boolean", fieldValue: false },
  { modelToModify: "Serial Port", fieldType: "functional", dataType: "boolean", fieldValue: true },
  { modelToModify: "Serial port", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "Serial port", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "Smart Card", fieldType: "functional", dataType: "boolean", fieldValue: false },
  { modelToModify: "Smart Card", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "Smart Card", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "Storage capacity", fieldType: "specs", dataType: "integer", fieldValue: "1024" },
  { modelToModify: "Storage capacity", fieldType: "specs", dataType: "integer", fieldValue: "2048" },
  { modelToModify: "Storage capacity", fieldType: "specs", dataType: "integer", fieldValue: "256" },
  { modelToModify: "Storage capacity", fieldType: "specs", dataType: "integer", fieldValue: "512" },
  { modelToModify: "Storage Capacity", fieldType: "specs", dataType: "integer", fieldValue: 1024 },
  { modelToModify: "Storage Capacity", fieldType: "specs", dataType: "integer", fieldValue: 2048 },
  { modelToModify: "Storage Capacity", fieldType: "specs", dataType: "integer", fieldValue: 256 },
  { modelToModify: "Storage Capacity", fieldType: "specs", dataType: "integer", fieldValue: 512 },
  { modelToModify: "Storage controller", fieldType: "specs", dataType: "string", fieldValue: "Flash" },
  { modelToModify: "Storage controller", fieldType: "specs", dataType: "string", fieldValue: "NVME" },
  { modelToModify: "Storage controller", fieldType: "specs", dataType: "string", fieldValue: "NVME_PCIe" },
  { modelToModify: "Storage controller", fieldType: "specs", dataType: "string", fieldValue: "PCIe SATA" },
  { modelToModify: "Storage controller", fieldType: "specs", dataType: "string", fieldValue: "SAS" },
  { modelToModify: "Storage controller", fieldType: "specs", dataType: "string", fieldValue: "SATA" },
  { modelToModify: "Storage Form Factor", fieldType: "specs", dataType: "string", fieldValue: "2.5 inch" },
  { modelToModify: "Storage form factor", fieldType: "specs", dataType: "string", fieldValue: "2.5" },
  { modelToModify: "Storage form factor", fieldType: "specs", dataType: "string", fieldValue: "3.5" },
  { modelToModify: "Storage form factor", fieldType: "specs", dataType: "string", fieldValue: "m.2" },
  { modelToModify: "Storage form factor", fieldType: "specs", dataType: "string", fieldValue: "Memory Card" },
  { modelToModify: "Storage form factor", fieldType: "specs", dataType: "string", fieldValue: "mSATA" },
  { modelToModify: "Storage health", fieldType: "functional", dataType: "percentage", fieldValue: "" },
  { modelToModify: "Storage Health", fieldType: "functional", dataType: "percentage", fieldValue: 95 },
  { modelToModify: "Storage speed", fieldType: "specs", dataType: "string", fieldValue: "5400 RPM" },
  { modelToModify: "Storage speed", fieldType: "specs", dataType: "string", fieldValue: "7200 RPM" },
  { modelToModify: "Storage type", fieldType: "specs", dataType: "string", fieldValue: "HDD" },
  { modelToModify: "Storage type", fieldType: "specs", dataType: "string", fieldValue: "SSD" },
  { modelToModify: "Storage unit", fieldType: "specs", dataType: "string", fieldValue: "GB" },
  { modelToModify: "Storage unit", fieldType: "specs", dataType: "string", fieldValue: "TB" },
  { modelToModify: "Storage Wiping Report URL", fieldType: "specs", dataType: "opentext", fieldValue: "https://example.com/storage-wiping-report" },
  { modelToModify: "Stylus", fieldType: "functional", dataType: "boolean", fieldValue: false },
  { modelToModify: "Stylus", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "Stylus", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "USB Ports", fieldType: "specs", dataType: "integer", fieldValue: 4 },
  { modelToModify: "USB Ports", fieldType: "specs", dataType: "integer", fieldValue: 6 },
  { modelToModify: "USB Ports", fieldType: "specs", dataType: "integer", fieldValue: 8 },
  { modelToModify: "USB Type C", fieldType: "functional", dataType: "boolean", fieldValue: false },
  { modelToModify: "USB Type C", fieldType: "functional", dataType: "boolean", fieldValue: true },
  { modelToModify: "USB Type C", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "USB Type C", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "VGA", fieldType: "functional", dataType: "boolean", fieldValue: true },
  { modelToModify: "VGA", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "VGA", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "WLAN", fieldType: "functional", dataType: "boolean", fieldValue: true },
  { modelToModify: "WLAN", fieldType: "specs", dataType: "boolean", fieldValue: false },
  { modelToModify: "WLAN", fieldType: "specs", dataType: "boolean", fieldValue: true },
  { modelToModify: "WWAN Model", fieldType: "specs", dataType: "string", fieldValue: "3G" },
  { modelToModify: "WWAN Model", fieldType: "specs", dataType: "string", fieldValue: "4G" },
  { modelToModify: "WWAN Model", fieldType: "specs", dataType: "string", fieldValue: "5G" },
  { modelToModify: "WWAN Model", fieldType: "specs", dataType: "string", fieldValue: "LTE" },


];

let page;

// test.describe.configure({ mode: "serial" });

test.describe("Add Detailed Field Names values", () => {

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
    await page.locator("div").filter({ hasText: /^Field Management$/ }).click();
    await page.getByRole('link', { name: 'Fields' }).click();

    // });
  });

  test.afterAll(async () => {
    await page.close();
  });

  //test('test', async ({ page }) => {

  basicDataModel.forEach((model, index) => {

    test(`Test Case ${index + 1} ${model.modelToModify}`, async () => {

      // 1st find the required field to modify


      await page.getByRole('cell', { name: 'Storage Unit' }).click();
      await page.getByRole('row', { name: 'Storage Unit string specs' }).getByRole('cell').nth(1).click();
      await page.getByRole('row', { name: 'Storage Unit string specs' }).getByRole('cell').nth(2).click();
      await page.getByRole('row', { name: 'Storage Unit string specs' }).getByRole('cell').nth(3).click();
      await page.getByRole('row', { name: 'Storage Unit string specs' }).getByRole('button').first().click();//add value

      await page.getByRole('button', { name: 'Cancel' }).click();

      await page.getByRole('row', { name: 'Storage Unit string specs' }).getByRole('button').nth(1).click();//edit value

      await page.getByRole('button', { name: 'Cancel' }).click();
      await page.getByRole('row', { name: 'Storage Unit string specs' }).getByRole('button').nth(2).click();//view value

      await page.getByRole('link', { name: 'Fields' }).click();
      await page.getByRole('link', { name: 'Field Group' }).click();
      await page.getByRole('link', { name: 'Fields' }).click();
      await page.getByRole('row', { name: 'Storage Unit string specs' }).getByRole('button').nth(3).click();//delete value
      //await page.getByRole('button', { name: 'Confirm' })// line ot confirm the delete value

      await page.getByRole('button', { name: 'Cancel' }).click();



      // await page.getByText('Field Management').click();
      // await page.getByRole('link', { name: 'Fields' }).click();
      // 2nd click the add value of the specific row
      // 3rd  type the Field Value
      // If it requires Score : type score
      // 4th Click Save
      // not mandatory but ... return to Fields 

      // Supongamos que 'data' es la estructura que contiene la información:

      // Iterar sobre la estructura principal
      for (const item of basicDataModel) {
        console.log(`Model to Modify: ${item.modelToModify}`);
        console.log(`Field Type: ${item.fieldType}`);
        console.log(`Data Type: ${item.dataType}`);

        // Verificar si hay valores múltiples en fieldValues
        if (item.fieldValues && item.fieldValues.length > 0) {
          // Iterar sobre los elementos de fieldValues
          for (const value of item.fieldValues) {
            console.log(`Field Value: ${value}`);
          }
        } else {
          console.log(`Field Value: ${item.fieldValues}`);
        }

        console.log("\n"); // Separador entre elementos
      }



      // console.log(model.modelToModify + ' ' + model.dataType + ' ' + model.fieldType);
      // await page.getByRole('row', { name: model.modelToModify + ' ' + model.dataType + ' ' + model.fieldType, exact: true }).getByRole('button').first().click();
      // await page.getByPlaceholder('Field Value').click();
      // await page.getByPlaceholder('Field Value').fill(model.fieldValue);
      // await page.getByRole('button', { name: 'Save' }).click();

      // await page.getByRole('link', { name: 'Fields' }).click();

    });

  });

});