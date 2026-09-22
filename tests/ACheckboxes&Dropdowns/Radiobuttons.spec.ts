import {test ,expect ,Locator} from "@playwright/test";

// test.only is a annotation to run specific file /test 

test('test radio button actions',async({page})=>{ // we can select 1-radio button at a time
await page.goto("https://testautomationpractice.blogspot.com/");

/*
const male:Locator =page.locator('#male');
await expect(male).toBeVisible();
await expect(male).toBeEnabled();
// isChecked() is an assertion  to check radio button is enabled / disabled 
// toBeChecked() is an assertion to enabled radio button / .not. toBeChecked() is to disabled radio button 

expect (await male.isChecked()).toBe(false);
await male.check();  
await expect(male).toBeChecked();   
await page.waitForTimeout(3000); 

 */


const femaleRadio:Locator=page.locator("#female");
await expect(femaleRadio).toBeVisible();
await expect(femaleRadio).toBeEnabled();
expect(await femaleRadio.isChecked()).toBe(true);
await femaleRadio.uncheck()
await expect(femaleRadio).not.toBeChecked();
// expect(await femaleRadio.isChecked()).toBe(false);

await page.waitForTimeout(3000);
})