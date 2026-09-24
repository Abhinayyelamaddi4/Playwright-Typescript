import{test,expect} from "@playwright/test";



/* 
// type and locate element with mouse ations   ---> locate(focus) , type ,press -->enter, copy & delete(Backspace)
test('keyboard actions',async({page})=>{
await page.goto("https://demowebshop.tricentis.com/");
await page.locator("#small-searchterms").focus();
await page.keyboard.type("Laptop"); // type the item 
await page.keyboard.press("Control+A"); // press to select text
//await page.keyboard.press("Enter"); // press enter to locate element
await page.keyboard.press("Backspace"); // press backspace to delete 
await page.waitForTimeout(3000); 


//  type , locate & copy element with mouse ations ---> locate(focus) , type ,press---> enter , copy & paste
test('keyboard actions',async({page})=>{
await page.goto("https://demowebshop.tricentis.com/login");
await page.locator("#Email").focus();
await page.keyboard.type("Abhinay"); // type the item 
await page.keyboard.press("Control+A"); // press to select text
await page.keyboard.press("Control+C");
await page.waitForTimeout(3000);
await page.locator("#Password").focus();
await page.keyboard.press("Control+V");
await page.waitForTimeout(3000);
*/

//  type , locate & copy element with mouse ations ---> locate(focus) & pass capital letters using shift up & down
test('keyboard actions',async({page})=>{
await page.goto("https://demowebshop.tricentis.com/login");
await page.locator("#Email").focus();
await page.keyboard.down("Shift");
await page.keyboard.press("KeyA");
await page.keyboard.up("Shift");
await page.waitForTimeout(3000);


/*
mouse actions

Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, Escape, ArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight,
ArrowUp, F1 - F12, Digit0 - Digit9, KeyA - KeyZ, etc.

*/



})