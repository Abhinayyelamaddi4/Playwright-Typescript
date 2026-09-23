import {test, expect,Locator} from '@playwright/test'
import XLSX from 'xlsx';
//npx install -xlsx  ---->pre-requisite --->to get xlsx library 
// reading excel --> file-->workbook-->excel sheets -->rows & columns
// const logindata=JSON.parse(fs.readFileSync(jsonpath,'utf-8));----for json
// const filecontent=fs.readFileSync(csvPath,'utf-8'); 


const XLSXpath='testdata/login_data.xlsx'; //---> reading excel through location 
const workbook=XLSX.readFile(XLSXpath);  //----> read from workbook imported xlsx  
const sheetnames=workbook.SheetNames[0]; //----> excell sheets in workbook sheetnames=sheetnames
const worksheet=workbook.Sheets[sheetnames]; //--->workbook .sheetnames --> worksheet =sheet calling the sheet from sheets

// covert sheet into JSON ----- imp objective
// xlsx file i
const logindata:any=XLSX.utils.sheet_to_json(worksheet); //--> sheettojson(worksheet)
console.log(logindata); // printing the records in sheet to select the data in below method
                        
test.describe('login test data',async()=>{

for(const {email,password,validity} of logindata)
        {
 test(`login test for email:"${email}" and password:"${password}"`,async({page})=>{
   await page.goto("https://demowebshop.tricentis.com/login");
   await page.locator("#Email").fill(email);
   await page.locator("#Password").fill(password);
   await page.locator("input[value='Log in']").click();

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
