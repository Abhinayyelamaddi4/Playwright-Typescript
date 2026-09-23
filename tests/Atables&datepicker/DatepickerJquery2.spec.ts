import{test ,expect,Locator,Page} from "@playwright/test"; // auto suggest dropdown or bootstrap

// add no of variables in the function for multiple datepickers --> async function selectdate()
async function selectDate(targetYear:string, targetMonth:string ,targetDate:string ,page:Page,isFuture:boolean) // parameters in func
{
    while(true)
{
   // select date from calendar -- elements in no of pages are 
      const CurrentMonth=await page.locator(".ui-datepicker-month").textContent();
      const CurrentYear=await page.locator(".ui-datepicker-year").textContent();
    if(CurrentMonth===targetMonth && CurrentYear===targetYear)
  {
       break;
  }
  
  if(isFuture) // boolean method is used for syncfunction if not we can use await page.locator method 
{ 
  await page.locator(".ui-datepicker-next").click(); // select next button to change the page to find element 
}
else{
  await page.locator(".ui-datepicker-prev").click(); //previous /past date ,<2026
}

}
       const alldates=await page.locator(".ui-datepicker-calendar td").all(); // all dates in a calendar
       for(let dt of alldates) // dt of alldates select a date(dt) in calendar 
      {
       const dateText=await dt.innerText();   // selected date is having some innertext
       if(dateText==targetDate)
        {
            await dt.click()
        } 
      }

}

test('JQuery datepicker',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const datainput:Locator= page.locator("#datepicker");
expect(datainput).toBeVisible();
//---------------------------------------------using fill method approch 1
// await datainput.fill('06-20-2025');
//---------------------------------------------using select page in datepicker method 
await datainput.click();  //---- click the field

// select target date
const year:string='2027';
const month:string='August';
const date:string='21';

selectDate(year,month,date,page,true); // true =future date , false =pastdate
const expectDate='08/21/2027';
await expect(datainput).toHaveValue('08/21/2027'); // check the inputvalue in expectdate

await page.waitForTimeout(5000);

})


/*
for(const date of alldates) // select date from alldates
 {
    const text=await date.innerText(); // print selected date with inner text and capture each date in variable
    if(text===targetDate) // each printed date == required date 
    {
        await date.click(); // select date .click
        break;
    }
}

*/