import{test,expect,Page} from '@playwright/test';

test("Authentication Popups",async({browser})=>{

        
  /* // ----------------------------> approch 1 : directly pass login along with url <--------------------------------
    // await page.goto('https://username:password@the-internet.herokuapp.com/basic_auth');

       const context=await browser.newContext();
       const page = await context.newPage();
       await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth'); // username & password is admin
       await page.waitForLoadState(); // wait for load state -----> to load page completely
       await expect(page.locator('text=Congratulations')).toBeVisible();
    // await expect(page.locator("div[class='example'] p")).toBeVisible();
       await page.waitForTimeout(5000);*/
    //----------------------------> approch 2 : pass login with along context <--------------------------------
    // await page.goto("https://the-internet.herokuapp.com/basic_auth"); 

     const context=await browser.newContext( {httpCredentials: { username: 'admin', password: 'admin' } });
     const page = await context.newPage();
     await page.goto('https://the-internet.herokuapp.com/basic_auth'); 
     await page.waitForLoadState(); // wait for page loaded completely
     await expect(page.locator('text=Congratulations')).toBeVisible(); // div[class='example']p
     await page.waitForTimeout(5000); 

})