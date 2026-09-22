import { test, expect } from '@playwright/test';

// test data --> for loop , forif loop, foreach loop -usage ----> data driven testing ---> parameterization in playwright
const searchitems:string[]=['laptop','giftcard' ,'smartphone']; 

/*
for(const item of searchitems) // using looping statement ----> iterating same test multiple times with multiple sets of data
{
   test(`search test for ${item}`,async({page})=>{ // back tick operator for dynamic search +${item} is required
   await page.goto("https://demowebshop.tricentis.com/");
   await page.locator('#small-searchterms').fill(item);
   await page.locator("input[value='search']").click();
   await expect.soft(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true}); //  tocontaintext is soft expect condition 

});
}
*/

/*
// using foreach loop function  -a control flow statement used to iterate elements in a collection --> such as an array, list
searchitems.forEach((item)=>{     // searchitems is an array , foreach function will take arrow function((item)=>{  )}
test(`search test for ${item} `, async ({ page })=> {  // use the backtick operator for dynamic search +${item} is required
await page.goto('https://demowebshop.tricentis.com/');
await page.locator('#small-searchterms').fill(item); 
await page.locator("input[value='Search']").click();
await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, {ignoreCase:true});
});

})
*/

// describe  -- a group related tests into a logical block

test.describe("searching items",()=>{   
searchitems.forEach((item)=>{
test(`search test for ${item}`, async ({ page })=> {  // use the backtick operator for dynamic search +${item} is required
await page.goto('https://demowebshop.tricentis.com/');
await page.locator('#small-searchterms').fill(item); 
await page.locator("input[value='Search']").click();
await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, {ignoreCase:true});

})
})
}); 
