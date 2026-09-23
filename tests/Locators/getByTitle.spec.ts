import{test ,expect ,Locator} from "@playwright/test";

test('verify the title',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

//getByTitle locate an element based on the "title attribute " , The title should be meaningful
// home-->link (customized pages in a link : Home is the title) , HTML(Title context--> options/tabs/headers) 

const link:Locator=page.getByTitle("Tabs"); 
expect(link).toHaveText('Tabs'); // check the title (Title context type--> options/tabs/headers)
await link.fill("T-Shirts"); // fill in search box 

//await expect(page.getByTitle("Tabs")).toHaveText("Tabs"); // find the link 



})