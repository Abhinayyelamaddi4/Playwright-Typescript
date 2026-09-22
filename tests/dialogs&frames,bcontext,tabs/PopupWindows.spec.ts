import {test ,expect ,Page,chromium} from '@playwright/test';

    test(' PopUp windows',async({browser})=>{  
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");

    await Promise.all([page.waitForEvent('popup'),await page.locator("#PopUp").click()]); // fro windows popup events
        // for tabs : context.waitForEvent('page')

    const pages=context.pages();
    console.log("no of pages/windows :",pages.length);
    console.log("pages[0].url()");
    console.log("pages[1].url()");
    console.log("pages[2].url()");
    
    for(const page of pages)
    {
        const title= await page.title();
        if(title.includes('playwright'))
        {
       await page.locator('.getStarted_Sjon').click();     
       await page.close();
    }
        }
        
   await page.waitForTimeout(3000);

    })