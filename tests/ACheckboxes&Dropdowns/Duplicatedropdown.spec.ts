import { test, expect, type Locator } from '@playwright/test';

test('verify dropdown contains duplicate', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com');

  const dropdownOptions: Locator = page.locator('#animal > option'); //having duplicates 
  // console.log(await dropdownOptions.allTextContents());
  const optionsText: string[] = (await dropdownOptions.allTextContents()).map((text) => text.trim());
  console.log(optionsText); 
 
 // two arrays are taken set & string according to requirement 
  const mySet = new Set<string>(); //Set will not allow the duplicates ->Set store specific data Type--><string>is added explicitly
  const duplicate:string[]=[];  //array allows all data even duplicates ---> array,tuple <-->ordered sequence of elements/items 

  for (const option of optionsText) {  
    if (mySet.has(option))  // ".has()" is using explicitly
       {    
      duplicate.push(option);  // push duplicates 
       } 
  else   {
       mySet.add(option);  // add set strings
         }
  }

  expect(duplicate.length).toBe(0);  // duplicate length is calculating expect(duplicate.length).toBe(0)
  console.log('print duplicate options :', duplicate); // as per above constant variable 
 
  /* or
  if (duplicate.length > 0) {  // duplicate elements length (size) is located print here 
    console.log('duplicate options found..); // use row method -2
  } 
    else {
      console.log('no duplicate options found..')
  }  */

  
});
