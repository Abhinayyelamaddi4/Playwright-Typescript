import{test ,expect,Locator} from "@playwright/test"; // auto suggest dropdown or bootstrap

// datepickers with input tags / input elements --> use fill method --> jquery date picker & range 
// combinations of elements which are not standard ( keeps changing ) --> bootstrap date picker type 
test('JQuery datepicker',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const datainput:Locator= page.locator("#datepicker");
await expect(datainput).toBeVisible();
//---------------------------------------------using fill method approch --------------------------1
// await datainput.fill('06-20-2025');

//---------------------------------------------using select page in datepicker method -------------2
await datainput.click();  //---- click the field
// select target date
const year:string='2026';
const month:string='October';
const date:string='21';

while(true) //-------------------------------- while loop is added for calendar -------------------3
{
   // select date from calendar -- elements in no of pages are 
      const CurrentMonth=await page.locator(".ui-datepicker-month").textContent();
      const CurrentYear=await page.locator(".ui-datepicker-year").textContent();
      if(CurrentMonth===month && CurrentYear===year)
       {
       break;
        }
        else{ 
         await page.locator(".ui-datepicker-next").click(); // select future date
      // await page.locator(".ui-datepicker-prev").click(); // select previous date
  }
}

   const alldates=await page.locator(".ui-datepicker-calendar td").all(); // all()=capture all dates num's
   for(let dt of alldates) // date of alldates ---> from a calendar
   {
      const dateText=await dt.innerText();   // select each date(inner-text) 
      if(dateText==date)  // compare text with const variable date 
        {
            await dt.click();
            break;
        } 
   }

    await page.waitForTimeout(5000);

})