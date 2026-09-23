import { test, expect } from '@playwright/test';

test('Autowaiting and forcing', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    
//hard assertions : if any of the assertion got failed action/session terminates immediately rest of the code will not executed 

await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
await expect(page).toHaveTitle("Demo Web Shop");

const text1=page.locator('text=Welcome to our store')
await expect(text1).toBeVisible();
// await expect(page.locator('text=Welcome to our store')).toBeVisible();
const logo1 =page.locator("img[alt='Tricentis Demo Web Shop']");
await expect(logo1).toBeVisible();
await page.waitForTimeout(5000);

// soft assertion : if any assertion is failed in test -->it will mark it as fail & execute rest of the code in test
// soft is added for every expect validation / assertion  (expect is hard -->using expect.soft)

await expect.soft(page).toHaveURL('https://demowebshop.tricentis.com/');
await expect.soft(page).toHaveTitle("Demo Web Shop");

const text2=page.locator('text=Welcome to our store')
await expect.soft(text2).toBeVisible();

const logo2 =page.locator("img[alt='Tricentis Demo Web Shop']");
await expect.soft(logo2).toBeVisible();
await page.waitForTimeout(5000);


})

