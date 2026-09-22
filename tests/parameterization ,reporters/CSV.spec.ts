import {test ,expect } from '@playwright/test';
import fs from 'fs';
import {parse} from 'csv-parse/sync'; // read /sync with externalfile source -CSV

// npm instal csv-parse --- to read csv file 

const csvPath = "testdata/data.csv"; 
const fileContent=fs.readFileSync(csvPath,'utf-8');    // uniform transfer code & parse is imported and sync with file 
const records =parse(fileContent,{columns:true ,skip_empty_lines:true})

test.describe("login data driven test",()=>{ // calling the cata from page

 for(const data of records)
 { 
          test(`login test with email:"${data.email}" and password:"${data.password}"`,async({page})=>{
          await page.goto("https://demowebshop.tricentis.com/login");
          await page.locator('#Email').fill(data.email);
          await page.locator('#Password').fill(data.password);
          await page.locator('input[value="Log in"]').click();  //tag =input attribute value="Log in"

         if(data.validity.toLowerCase()==='valid')
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