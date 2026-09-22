import{test ,expect,Locator} from "@playwright/test";

test("verify Locators",async({page})=>{
await page.goto("https://orangehrm.com/");

// find the element by the "text" it contains 
// text that wrapped in between the tags like div,span,page,p,h tags are non-interactive elements which are not cickable


// await expect(page.getByText("Streamline All Your HR Needs on One ")).toBeVisible(); //fullstring

await expect(page.getByText("Streamline All Your HR")).toBeVisible(); //partial string

// await expect(page.getByText(/Streamline\s+All\s+Your\s+HR\s+Needs\s+On\s+One/i)).toBeVisible(); // regular expression


/*
 await page.goto("https://orangehrm.com/");
 const Text: Locator = page.getByText("Streamline All Your HR Needs on One",{exact : false});
 await expect(Text).toBeVisible();

 await page.goto("https://testautomationpractice.blogspot.com/");
 const Text: Locator = page.getByText("Date Picker 1 (mm/dd/yyyy): ",{exact : false}); //logo is page fixture
 await expect(Text).toBeVisible();
*/


})