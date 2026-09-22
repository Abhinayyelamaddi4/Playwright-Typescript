import{test ,expect,Locator} from "@playwright/test";


test('verify singleselecteddropdown ',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com"); //options in dropdown which are stable called static dropdown-------1

await page.locator('#country').selectOption("india"); // plain text method
/*
await page.locator('#country').selectOption({value:'uk'}); // using value attribute
await page.locator('#country').selectOption({label:'India'}); // using label --> country
await page.locator('#country').selectOption({index:3}); // using index 0,1,2,3 */

const dropdownOptions:Locator=page.locator("#country>option");  
await expect(dropdownOptions).toHaveCount(10); // staticdropdown(stable)  count is visible
console.log(await dropdownOptions.allTextContents());

// printed all the options in the form of array --> use this method 
const optionstext:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim()); // dropdown options with trim
console.log(optionstext)
expect(optionstext).toContain('Japan'); 

// printing options in text format ----> use this method
for(const option of optionstext)
{
    console.log(option)
}
await page.waitForTimeout(3000);
})
