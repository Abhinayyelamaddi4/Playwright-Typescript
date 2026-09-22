import{test ,expect,Locator} from "@playwright/test";

test('verify dropdown is sorted',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com");

const dropdownoptions:Locator=page.locator('#animals>option'); 
console.log(await dropdownoptions.allTextContents());

const optionstext:string[]=(await dropdownoptions.allTextContents()).map(Text=>Text.trim()); //allTextContents -->string[]

// using ... as a spread operator to spread the list 
const originalList:string[]=[...optionstext];
const sortedList:string[]=[...optionstext].sort();

console.log("Original list :",originalList);
console.log("Sorted list :",sortedList);

expect(originalList).toEqual(sortedList); 

await page.waitForTimeout(3000);
})