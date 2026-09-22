
import{test,expect,Locator} from '@playwright/test';

// By default ,dailog's are auto-dissmissed by playwright,no need to action /handle them 
// we can register a dialog handler before playwright action it 
// 3 types of dailog's --> "alert()" -->ok, "confirm()" -->ok /cancel, "prompt()" -->rename /add prompt in search bar
// await page.getByrole('Button').click();

test('verify page URL',async({page})=>{
      await page.goto("https://testautomationpractice.blogspot.com/");
 /* 
// alert handling <---page.on/once catches'event'--->'dialog'represents event,(dialog)--->represents arrowfunction towards conditions
  page.on('dialog',(dialog)=>  
    {  
      console.log("Dialog type is :",dialog.type());   
      expect(dialog.type()).toContain("alert");
      console.log("dialog Text :",dialog.message());
      expect(dialog.message()).toContain('Iam an alert box');    
      dialog.accept();
    }); 
  await page.locator("#alertBtn").click(); // pre-condition is added before click action on alert 
  await page.waitForTimeout(5000);
 

}) */
/*
//-----confirm Dialog------>dialog.accept()-ok , dialog.dismiss()=cancel . innerText --->addvariable , toHaveText --->add assertion

page.on('dialog',(dialog)=>
{
  console.log("confirm Dialog :",dialog.type());
  expect(dialog.type()).toContain('confirm');    // confirmation alert type =confirm
  console.log("dialog message :",dialog.message());
  expect(dialog.message()).toContain("press a button!");
 //dialog.dismiss(); // close dialog by dismissing
   dialog.accept();  // close dialog by accepting

});
await page.locator("#confirmBtn").click(); // opens confirmation dialog
const text:string=await page.locator("#demo").innerText(); //capture dialog actioned text --> locate element and get inner text
console.log('output text :',text); // print dialog text 
await expect(page.locator("#demo")).toHaveText("you pressed cancel!"); // validate with expect function 
await page.waitForTimeout(5000);
*/

//---------------------------------------------prompt Dialog------------------------------------------------------------------

page.on('dialog',(dialog)=>
{ 
  console.log(" prompt alert Dialog :",dialog.type());
  expect(dialog.type()).toContain('prompt');
  console.log("dialog message :",dialog.message());
  expect(dialog.message()).toContain("Please enter your name:");
  expect(dialog.defaultValue()).toContain("Harry Potter"); // check  default value in dialog.
  dialog.accept("john"); //re-name the default message with john
  //dialog.dismiss();

});

await page.locator("#promptBtn").click(); // prompt element path / locate
const text:string=await page.locator('#demo').innerText();
console.log("output text :",text);
await expect(page.locator('#demo')).toHaveText('Hello john! How are you today?'); 
await page.waitForTimeout(5000);


}) 
