import{test ,expect,Locator} from "@playwright/test"

test('Bootstrap data picker',async({page})=>{
await page.goto('https://www.booking.com/'); // go to this page and find below element
await page.getByTestId("button[data-testid='searchbox-dates-container']").click();  //--click on date picker field to open calendar

// let used for global variable defines the value (dates are unselected once they passed) check-in /check-out 
let checkinYear:string="2026";
let checkinMonth:string="August";
let checkinDate:string="14";

// navigate through the calendar to find desired check-inmonth and year 
// previous date picker can be slected with two different elements stored in different variables
while(true)
{
const checkInMonthYear =await page.locator('#bui-calendar-month-2026-8').nth(0).innerText();
const currentMonth =checkInMonthYear.split(" ")[0];
const currentYear=checkInMonthYear.split("  ")[1];
if(currentMonth==checkinMonth && currentYear==checkinYear) // && and operators used in if operation
{
    break;
}
else{
   page.locator("button[aria-label='Next month']").click();  // click next 
}
}

// select specific check in date 
const alldates =await page.locator('table.b8fcb0c66a tbody').nth(0).locator('td').all(); // nth(0)->selecting 1stbox in 2paged calendar
let checkInDatesSelected=false; // global variable for bootstrap 
// for dynamic calendar unable to select previous dates , variable is taken for assertion, let is used for dynamic

for(let date of alldates)
{
    const dateText=await date.innerText();
    if(dateText === checkinDate)
    {
      await date.click();
      checkInDatesSelected=true;   // condition require to add for above constant 
      break;
    }

}
expect(checkInDatesSelected).toBeTruthy(); // global varibale should be addressed in expect condition


// checkout date selection--------------------------------------------------

let checkOutYear:string="2026";
let checkOutMonth:string="septemeber";
let checkOutDate:string="04";


while(true)
{
   const checkOutMonthYear=await page.locator('#bui-calendar-month-2026-9').nth(1).innerText();
   const currentMonth =checkOutMonthYear.split(" ")[0];
   const currentYear=checkOutMonthYear.split(" ")[1];
   if(currentMonth === checkOutMonth && currentYear === checkOutYear) 
   {
    break
   }
else{
    page.locator("button[aria-label='Next month']").click(); 
}
}

// select specific check in date 
const allofdates=await page.locator('table.b8fcb0c66a tbody').nth(1).locator('td').all();  // tbody for checkoutdates 
// all representing an array group of elements (dates) in a page
 let checkOutDateSelected=false; //------------imp to add checkoutdatesselected 

for(let date of allofdates)
{
    const dateText=await date.innerText();
    if(dateText === checkOutDate)
    {
      await date.click();
      checkOutDateSelected = true;
      break;
    }

}

expect(checkOutDateSelected).toBeTruthy();
await page.waitForTimeout(5000);


})
