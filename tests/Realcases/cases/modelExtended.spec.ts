import { test, expect , chromium} from '@playwright/test';

const URL_TEST = "http://localhost:5173/";
const username = "admin@rbms.com";
const password = "password";


const basicDataModel = [
    
    { modelToModify: "Storage capacity", dataType:"integer", fieldValue:"128" },
    { modelToModify: "Storage capacity", dataType:"integer", fieldValue:"256" },
    { modelToModify: "Storage capacity", dataType:"integer", fieldValue:"512" },
    { modelToModify: "Storage capacity", dataType:"integer", fieldValue:"1024" },
    { modelToModify: "Storage capacity", dataType:"integer", fieldValue:"2048" },
    { modelToModify: "Storage unit", dataType:"string", fieldValue:"GB" },
    { modelToModify: "Storage unit", dataType:"string", fieldValue:"TB" },
    { modelToModify:"Storage type", dataType:"string", fieldValue:"SSD" },
    { modelToModify:"Storage type", dataType:"string", fieldValue:"HDD" },
    { modelToModify:"Storage form factor", dataType:"string", fieldValue:"2.5" },
    { modelToModify:"Storage form factor", dataType:"string", fieldValue:"3.5" },
    { modelToModify:"Storage form factor", dataType:"string", fieldValue:"Memory Card" },
    { modelToModify:"Storage form factor", dataType:"string", fieldValue:"mSATA" },
    { modelToModify:"Storage form factor", dataType:"string", fieldValue:"m.2" },
    { modelToModify:"Storage controller", dataType:"string", fieldValue:"NVME_PCIe" },
    { modelToModify:"Storage controller", dataType:"string", fieldValue:"SAS" },
    { modelToModify:"Storage controller", dataType:"string", fieldValue:"SATA" },
    { modelToModify:"Storage controller", dataType:"string", fieldValue:"Flash" },
    { modelToModify:"Storage controller", dataType:"string", fieldValue:"NVME" },
    { modelToModify:"Storage controller", dataType:"string", fieldValue:"PCIe SATA" },
    { modelToModify:"Storage speed", dataType:"string", fieldValue:"5400 RPM" },
    { modelToModify:"Storage speed", dataType:"string", fieldValue:"7200 RPM" },
    { modelToModify:"Storage health", dataType:"percentage", fieldValue:"" },
    { modelToModify:"Storage health", dataType:"percentage", fieldValue:"" },
    { modelToModify:"Storage health", dataType:"percentage", fieldValue:"" },
    { modelToModify:"Storage health", dataType:"percentage", fieldValue:"" },
    { modelToModify:"Storage health", dataType:"percentage", fieldValue:"" },
    { modelToModify:"Brand", dataType:"string", fieldValue:"Panasonic" },
    { modelToModify:"Brand", dataType:"string", fieldValue:"Lenovo" },
    { modelToModify:"Brand", dataType:"string", fieldValue:"Seagate" },
    { modelToModify:"Brand", dataType:"string", fieldValue:"Dell" },
    { modelToModify:"Brand", dataType:"string", fieldValue:"Crucial" },
    { modelToModify:"Brand", dataType:"string", fieldValue:"Samsung" },
    { modelToModify:"Manufacturer", dataType:"string", fieldValue:"Panasonic" },
    { modelToModify:"Manufacturer", dataType:"string", fieldValue:"Lenovo" },
    { modelToModify:"Manufacturer", dataType:"string", fieldValue:"Seagate" },
    { modelToModify:"Manufacturer", dataType:"string", fieldValue:"Dell" },
    { modelToModify:"Manufacturer", dataType:"string", fieldValue:"Crucial" },
    { modelToModify:"Manufacturer", dataType:"string", fieldValue:"Samsung" },
    { modelToModify:"Battery type", dataType:"string", fieldValue:"LongLife" },
    { modelToModify:"Battery type", dataType:"string", fieldValue:"Lightweight" },
    { modelToModify:"RAM capacity", dataType:"integer", fieldValue:"2" },
    { modelToModify:"RAM capacity", dataType:"integer", fieldValue:"4" },
    { modelToModify:"RAM capacity", dataType:"integer", fieldValue:"8" },
    { modelToModify:"RAM capacity", dataType:"integer", fieldValue:"16" },
    { modelToModify:"RAM capacity", dataType:"integer", fieldValue:"32" },
    { modelToModify:"RAM capacity", dataType:"integer", fieldValue:"64" },
    { modelToModify:"RAM unit", dataType:"string", fieldValue:"GB" },
    { modelToModify:"RAM type", dataType:"string", fieldValue:"DDR2" },
    { modelToModify:"RAM type", dataType:"string", fieldValue:"DDR3" },
    { modelToModify:"RAM type", dataType:"string", fieldValue:"DDR4" },
    { modelToModify:"RAM type", dataType:"string", fieldValue:"DDR5" },
    { modelToModify:"Processor", dataType:"string", fieldValue:"Intel® Core™ i3-11100HE Processor" },
    { modelToModify:"Processor", dataType:"string", fieldValue:"Intel® Core™ i3-12300HL Processor" },
    { modelToModify:"Processor", dataType:"string", fieldValue:"Intel® Core™ i5 processor 14600K" },
    { modelToModify:"Processor", dataType:"string", fieldValue:"Intel® Core™ i7 processor 14700K" },
    { modelToModify:"Processor", dataType:"string", fieldValue:"Intel® Core™ i7-10700K Processor" },
    { modelToModify:"Processor", dataType:"string", fieldValue:"Intel® Core™ i9 processor 14900" },
    { modelToModify:"Processor", dataType:"string", fieldValue:"Intel® Core™ i9 processor 14900K" },
    { modelToModify:"Screen size", dataType:"double", fieldValue:"13.3" },
    { modelToModify:"Screen size", dataType:"double", fieldValue:"14.0" },
    { modelToModify:"Screen size", dataType:"double", fieldValue:"15.6" },
    { modelToModify:"Screen size", dataType:"double", fieldValue:"17.3" },
    { modelToModify:"Screen resolution", dataType:"string", fieldValue:"1920x1080" },
    { modelToModify:"Screen resolution", dataType:"string", fieldValue:"1366x768" },
    { modelToModify:"Screen resolution", dataType:"string", fieldValue:"2560x1440" },

    { modelToModify:"Screen type", dataType:"string", fieldValue:"LED-backlit" },
    { modelToModify:"Screen type", dataType:"string", fieldValue:"IPS" },
    { modelToModify:"Screen type", dataType:"string", fieldValue:"OLED" },

    { modelToModify:"Keyboard type", dataType:"string", fieldValue:"standard" },
    { modelToModify:"Keyboard type", dataType:"string", fieldValue:"rubber" },
    { modelToModify:"Keyboard type", dataType:"string", fieldValue:"emmisive" },

    { modelToModify:"Keyboard language", dataType:"string", fieldValue:"US English" },
    { modelToModify:"Keyboard language", dataType:"string", fieldValue:"Spanish" },
    { modelToModify:"Keyboard language", dataType:"string", fieldValue:"French" },

    { modelToModify:"WWAN Model", dataType:"string", fieldValue:"LTE" },
    { modelToModify:"WWAN Model", dataType:"string", fieldValue:"5G" },
    { modelToModify:"WWAN Model", dataType:"string", fieldValue:"4G" },
    { modelToModify:"WWAN Model", dataType:"string", fieldValue:"3G" },

    { modelToModify: "Mobile Broadband Module", dataType: "string", fieldValue: "Sierra Wireless EM7355" },
    { modelToModify: "Mobile Broadband Module", dataType: "string", fieldValue: "Sierra Wireless MC7355" },
    { modelToModify: "Mobile Broadband Module", dataType: "string", fieldValue: "Sierra Wireless EM7455B" },
    { modelToModify: "Mobile Broadband Module", dataType: "string", fieldValue: "Sierra Wireless MC7750" },
    { modelToModify: "Mobile Broadband Module", dataType: "string", fieldValue: "Sierra Wireless EM7565" },
    { modelToModify: "Mobile Broadband Module", dataType: "string", fieldValue: "Sierra Wireless EM7305" },
    { modelToModify: "Mobile Broadband Module", dataType: "string", fieldValue: "Sierra Wireless MC7700" },
    { modelToModify: "Mobile Broadband Module", dataType: "string", fieldValue: "Sierra Wireless EM7340" },
    { modelToModify: "Mobile Broadband Module", dataType: "string", fieldValue: "Sierra Wireless MC7430" },
    { modelToModify: "Mobile Broadband Module", dataType: "string", fieldValue: "Sierra Wireless EM7511" },
    { modelToModify: "Mobile Broadband Module", dataType: "string", fieldValue: "Sierra Wireless MC7430" },
    { modelToModify: "Mobile Broadband Module", dataType: "string", fieldValue: "Sierra Wireless EM9190" },
    { modelToModify: "Mobile Broadband Module", dataType: "string", fieldValue: "Sierra Wireless MC7700" },
    { modelToModify: "Mobile Broadband Module", dataType: "string", fieldValue: "Sierra Wireless MC7304" },
    { modelToModify: "Mobile Broadband Module", dataType: "string", fieldValue: "Sierra Wireless EM7430" },

    { modelToModify:"VGA", dataType:"boolean", fieldValue:true },
    { modelToModify:"VGA", dataType:"boolean", fieldValue:false },

    { modelToModify:"HDMI", dataType:"boolean", fieldValue:true },
    { modelToModify:"HDMI", dataType:"boolean", fieldValue:false },
    
    { modelToModify:"Serial port", dataType:"boolean", fieldValue:true },
    { modelToModify:"Serial port", dataType:"boolean", fieldValue:false },
    
    { modelToModify:"DVI", dataType:"boolean", fieldValue:true },
    { modelToModify:"DVI", dataType:"boolean", fieldValue:false },
    
    { modelToModify:"SD Card", dataType:"boolean", fieldValue:true },
    { modelToModify:"SD Card", dataType:"boolean", fieldValue:false },
    
    { modelToModify:"LAN", dataType:"boolean", fieldValue:true },
    { modelToModify:"LAN", dataType:"boolean", fieldValue:false },
    
    { modelToModify:"Power", dataType:"boolean", fieldValue:true },
    { modelToModify:"Power", dataType:"boolean", fieldValue:false },
    
    { modelToModify:"USB Type C", dataType:"boolean", fieldValue:true },
    { modelToModify:"USB Type C", dataType:"boolean", fieldValue:false },
    
    { modelToModify:"Display Port", dataType:"boolean", fieldValue:true },
    { modelToModify:"Display Port", dataType:"boolean", fieldValue:false },
    
    { modelToModify:"Passed?", dataType:"boolean", fieldValue:true },
    { modelToModify:"Passed?", dataType:"boolean", fieldValue:false },

    { modelToModify:"Stylus", dataType:"boolean", fieldValue:true },
    { modelToModify:"Stylus", dataType:"boolean", fieldValue:false },

    { modelToModify:"Mouse pad", dataType:"boolean", fieldValue:true },
    { modelToModify:"Mouse pad", dataType:"boolean", fieldValue:false },

    { modelToModify:"WLAN", dataType:"boolean", fieldValue:true },
    { modelToModify:"WLAN", dataType:"boolean", fieldValue:false },

    { modelToModify:"Bluetooth", dataType:"boolean", fieldValue:true },
    { modelToModify:"Bluetooth", dataType:"boolean", fieldValue:false },

    { modelToModify:"Audio", dataType:"boolean", fieldValue:true },
    { modelToModify:"Audio", dataType:"boolean", fieldValue:false },

    { modelToModify:"Optical Drive", dataType:"boolean", fieldValue:true },
    { modelToModify:"Optical Drive", dataType:"boolean", fieldValue:false },

    { modelToModify:"GPS", dataType:"boolean", fieldValue:true },
    { modelToModify:"GPS", dataType:"boolean", fieldValue:false },

    { modelToModify:"Camera", dataType:"boolean", fieldValue:true },
    { modelToModify:"Camera", dataType:"boolean", fieldValue:false },

    { modelToModify:"Face Recognition", dataType:"boolean", fieldValue:true },
    { modelToModify:"Face Recognition", dataType:"boolean", fieldValue:false },

    { modelToModify:"RFID", dataType:"boolean", fieldValue:true },
    { modelToModify:"RFID", dataType:"boolean", fieldValue:false },

    { modelToModify:"Fingerprint", dataType:"boolean", fieldValue:true },
    { modelToModify:"Fingerprint", dataType:"boolean", fieldValue:false },

    { modelToModify:"Smart Card", dataType:"boolean", fieldValue:true },
    { modelToModify:"Smart Card", dataType:"boolean", fieldValue:false },

    { modelToModify:"Barcode Reader", dataType:"boolean", fieldValue:true },
    { modelToModify:"Barcode Reader", dataType:"boolean", fieldValue:false },

    { modelToModify:"Dedicated GPU", dataType:"string", fieldValue:"AMD Radeon RX 5700M" },
    { modelToModify:"Dedicated GPU", dataType:"string", fieldValue:"NVIDIA Quadro RTX 5000" },
    { modelToModify:"Dedicated GPU", dataType:"string", fieldValue:"AMD Radeon RX 6800M" },
    { modelToModify:"Dedicated GPU", dataType:"string", fieldValue:"NVIDIA GeForce GTX 1660 Ti" },

    { modelToModify:"Bios Password", dataType:"boolean", fieldValue:true },
    { modelToModify:"Bios Password", dataType:"boolean", fieldValue:false },

    { modelToModify:"USB Ports", dataType:"integer", fieldValue:4 },
    { modelToModify:"USB Ports", dataType:"integer", fieldValue:6 },
    { modelToModify:"USB Ports", dataType:"integer", fieldValue:8 },

    { modelToModify:"AMP", dataType:"string", fieldValue:"Standard" },
    { modelToModify:"AMP", dataType:"string", fieldValue:"Low Power" },

    { modelToModify:"Label condition", dataType:"string", fieldValue:"Excellent" },
    { modelToModify:"Label condition", dataType:"string", fieldValue:"Good" },
    { modelToModify:"Label condition", dataType:"string", fieldValue:"Fair" },

    { modelToModify:"Cleaned", dataType:"boolean", fieldValue:true },
    { modelToModify:"Cleaned", dataType:"boolean", fieldValue:false },

    { modelToModify:"Packaging", dataType:"string", fieldValue:"Original" },
    { modelToModify:"Packaging", dataType:"string", fieldValue:"Generic" },

    { modelToModify:"Dead Pixel", dataType:"string", fieldValue:"None" },
    { modelToModify:"Dead Pixel", dataType:"string", fieldValue:"Some" },

    { modelToModify:"Lines on Screen", dataType:"string", fieldValue:"None" },
    { modelToModify:"Lines on Screen", dataType:"string", fieldValue:"Visible" },

    { modelToModify:"Marks on Screen", dataType:"string", fieldValue:"None" },
    { modelToModify:"Marks on Screen", dataType:"string", fieldValue:"Minor" },


    //to verify

    // { modelToModify:"Diagnostic Utility", dataType:"string", fieldValue:"" },
    // { modelToModify:"Bios Password", dataType:"boolean", fieldValue:"" },
    // { modelToModify:"USB Ports", dataType:"integer", fieldValue:"" },
    // { modelToModify:"AMP", dataType:"string", fieldValue:"" },    
    // { modelToModify:"Label condition", dataType:"string", fieldValue:"" },
    // { modelToModify:"Cracks/Broken", dataType:"string", fieldValue:"" },
    // { modelToModify:"Dents", dataType:"string", fieldValue:"" },
    // { modelToModify:"Scratches", dataType:"string", fieldValue:"" },
    // { modelToModify:"Discoloration", dataType:"string", fieldValue:"" },
    // { modelToModify:"Screws", dataType:"string", fieldValue:"" },
    // { modelToModify:"Packaging", dataType:"string", fieldValue:"" },
    // { modelToModify:"Cleaned", dataType:"boolean", fieldValue:"" },
    // { modelToModify:"Blemish", dataType:"string", fieldValue:"" },
    // { modelToModify:"Dead Pixel", dataType:"string", fieldValue:"" },
    // { modelToModify:"Lines on Screen", dataType:"string", fieldValue:"" },
    // { modelToModify:"Marks on Screen", dataType:"string", fieldValue:"" },
    // { modelToModify:"MK", dataType:"string", fieldValue:"" },

    // { modelToModify:"Storage health", dataType:"percentage", fieldValue:"" },
    // { modelToModify:"Storage wiping report url", dataType:"opentext", fieldValue:"" },
    
  
];

let page;

test.describe.configure({ mode: "serial" });

test.describe("Addinf categories", () => {

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
    await page.getByRole('link', { name: 'Manage Model' }).click();

    //await page.locator("div").filter({ hasText: /^Field Management$/ }).click();

    // });
  });

  test.afterAll(async () => {
    await page.close();
  });

  //test('test', async ({ page }) => {

  basicDataModel.forEach((model, index) => {

    test(`Test Case ${index + 1} ${model.modelToModify}`, async () => {
      // { modelToModify:"MK", dataType:"string", fieldValue:"" },
      //https://alpha.ruggedbooksms.com/#/app/manageModel

        await page.getByRole('button', { name: 'Create New Model' }).click();
        await page.getByPlaceholder('Model Name').click();
        await page.getByPlaceholder('Model Name').fill(model.modelName);
              
        if(model.identifier != ""){
          await page.getByPlaceholder('Identifier').click();
          await page.getByPlaceholder('Identifier').fill(model.identifier);
        }

        await page.getByRole('main').locator('svg').click();
        await page.getByText(model.category, { exact: true }).click();

        await page.getByPlaceholder('Description').click();
        await page.getByPlaceholder('Description').fill(model.description);


        if (model.isControlled) {
          await page.locator('.checkbox-label').click();
          //await page.getByLabel('').uncheck();
          await page.getByLabel('').check();
          await page.locator('div').filter({ hasText: /^Is Manufacturing Part Number Controlled \?$/ }).nth(1).click();
          //await page.getByRole('checkbox',{name : 'needsMpn'}).check();
        }else{await page.locator('.checkbox-label').click();
          //await page.getByLabel('').check();
          await page.getByLabel('').uncheck();
        }
        await page.getByRole('button', { name: 'Save' }).click();

    });

  });

  });