import{test,expect, chromium} from '@playwright/test';

test('hands tabs',async({})=>{ 

const browser=await chromium.launch();
const context=await browser.newContext();
const parentpage=await context.newPage(); // as like page --> tabs -->context.wait for new event added to same context
await parentpage.goto("https://testautomationpractice.blogspot.com");

   
   // context.waitForEvent('page');  //------> promise can be : pending /fullfilled/ rejected  
   // Parentpage.locator("button[onclick='myFunction()']").click(); //css method
   // parentpage.locator("button:has-text('New Tab')").click()

     
      const [childpage] = await Promise.all([context.waitForEvent('page'), parentpage.locator("button:has-text('New Tab')").click()]);
  //  passing 2 coditions in the form of array --->2 conditions will execute parallely

   // approch 1 ----------------------------> use this method <--------> when we have 2 pages---------------------------
   // check how many pages are created or check in the page 

      const pages=context.pages(); // capture all the pages in pages through context & access thier pages through index --0,1,2 
      console.log("no of pages created :", pages.length);

      console.log(" parent page is created :", await parentpage.title());
      console.log(" child  page is created :", await childpage.title()); 

  //  approch -2 --------------------------->use this method <--------> for multiple pages <---------------------------
  
      console.log(" create the parent page :", await pages[0].title());  
      console.log(" child page is created :" , await pages[1].title());


})