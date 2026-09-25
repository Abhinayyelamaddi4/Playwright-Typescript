import{test ,expect,Page,chromium } from '@playwright/test' // import according to requirement -->chromium , webkit , firefox

// browser creates 'context' --> by using context we can create  multiple pages, tabs, windows ,app's  on same browser
// browsercontext can work on multiple applications parallelly
// in playwirght tabs , windows , popups ---> comes under page


test('Browser context demo',async({})=>{  // fixture added in test function -->should be restricted in condition
    // it picks default browsers added in config / create & launch new --> browser , context , pages --->3 types of fixtures
    
     
    const browser = await chromium.launch();  //const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page1   = await context.newPage();
    const page2   = await context.newPage();
     console.log("no of pages created :",context.pages().length); // pages created -->context.pages().length

     await page1.goto("https://playwright.dev/"); // expect title of the page
     await expect(page1).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");

     await page2.goto("https://www.selenium.dev/"); 
     await expect(page2).toHaveTitle("Selenium");

     /*
     
     await parentpage1.goto("https://www.demoblaze.com/index.html");
     expect(parentpage1).toHaveTitle('STORE');
     await parentpage2.goto("https://testautomationpractice.blogspot.com/");
     expect(parentpage2).toHaveTitle("Automation Testing Practice");

     */


     await page1.waitForTimeout(5000);
     await page2.waitForTimeout(5000);


})