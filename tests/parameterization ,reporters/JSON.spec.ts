import{test ,expect } from '@playwright/test';
import fs from 'fs';  // buit-in module in java ---> fs required to store a file
// npm install --save-dev @types/node
// to use JSON file we need to add extra logic & read data from file 

const jsonPath = "testdata/data.json"; //copy relative xpath ---> file location into constant variable
const logindata:any=JSON.parse(fs.readFileSync(jsonPath,'utf-8')); 
// parse : link // // fs.readFileSync :file storage // //jsonpath ="Jpath" // // UTF = uniform transfer format//

 test.describe("login data driven test",async()=>{    // describe is out to sync the JSONfile
 for(const {email,password,validity} of logindata)
        {
          test(`login test for email:"${email}" and password:"${password}"`,async({page})=>{
          await page.goto("https://demowebshop.tricentis.com/login");
          await page.locator('#Email').fill(email);
          await page.locator('#Password').fill(password);
          await page.locator('input[value="Log in"]').click();  //tag =input attribute value="Log in"

         if(validity.toLowerCase()==='valid')
         {
            const logoutlink=page.locator('a[href="/logout"]');
            await expect(logoutlink).toBeVisible({timeout:5000});
         }
       else{
        const errormessage=page.locator('.validation-summary-errors');
        await expect(errormessage).toBeVisible({timeout:5000});

        await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
       }

     })
    }
 })