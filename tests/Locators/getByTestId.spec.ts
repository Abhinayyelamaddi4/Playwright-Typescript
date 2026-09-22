import{test ,expect ,Locator} from "@playwright/test";

test('verify the testid',async({page})=>{
 await page.goto("https://strategicdigital.com.au/displaying-your-email-address-on-your-website-good-idea-or-bad/");

// page.getByTestId locate web element based on "data test-id attribute "
// when to use : when the text or role locators are unstable or not suitable to locate web element use test-id locator

await expect(page.getByTestId("profile-email")).toHaveText("abhi4@gmail.com");
await expect(page.getByTestId("profile-name")).toHaveText("abhi");


}) 

/*
// if any changes are made to webelement the dom structure get updated with new attributevalue 
// we can locate the web element based on new attribute value 
// instead of changing the script we can customize the new attribute value in playwright.config.ts file
// while we executing the test , it retrieves new attribute value ---->testIdAttribute =("data-pw")

// install live server in the vscode for app.html 
*/