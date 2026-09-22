import {test ,expect ,Locator} from "@playwright/test";
// playwright actions : check value /length ,fill element , capture element

test('Test input actions',async({page})=>{ // use in -----> text area /text box/input value
await page.goto("https://testautomationpractice.blogspot.com/");


const textbox :Locator=page.locator("#name");
await expect(textbox).toBeVisible(); //using expect along with elements -->await is important -->auto retry assertion
await expect(textbox).toBeEnabled(); //assertions applied on the elements returns promise

 // in Playwright getAttribute method captures the length or value of attribute  
const maxlength:string | null =await textbox.getAttribute("maxlength"); //maxlength is an attribute, we can use string |null or any 
expect(maxlength).toBe('15');  //using expect along with value -->await is not required -->non-retry assertion
await textbox.fill("john kennedy");

//text content will return the content of the element , while inputvalue returns value of the element/ loaded value|input
const enteredValue:string=await textbox.inputValue(); // to add data using input value 
console.log("inputValue of FirstName:", enteredValue);
expect(enteredValue).toBe("john kennedy") 
await page.waitForTimeout(3000);

/*
const phone:Locator= page.locator("input#phone");
await expect(phone).toBeVisible();
await expect(phone).toBeEnabled();

const maxlength :any=await phone.getAttribute("maxlength"); // returns value of maxlength attribute of element
expect(maxlength).toBe('10');
await phone.fill("0617555777");
const enteredVal=await phone.inputValue();
console.log("input values of phonenumber:",enteredVal);
expect(enteredVal).toBe("0617555777"); 

await page.waitForTimeout(3000);
*/
/*
const email:Locator=page.locator("#email");
await expect(email).toBeVisible(); //  check visibile first
await expect(email).toBeEnabled(); // next enable check
await email.fill("abhinayelamaddi@gmail.com"); // fill the name
const maxlength:any=await email.getAttribute("maxlength"); // max length with attribute
expect(maxlength).toBe('25');
const inputvalue:any=await email.inputValue(); // return the name 
console.log("inputvalue of email :",inputvalue);
expect(inputvalue).toBe("abhinayelamaddi@gmail.com");

await page.waitForTimeout(3000);
*/
})
