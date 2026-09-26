import{test,expect} from "@playwright/test";

test('keyboard actions',async({page})=>{
await page.goto("https://play1.automationcamp.ir/mouse_events.html");

/* // Click action
await expect(page.locator("#click_type")).not.toBeVisible();
await page.locator("div#click_area").click(); 
// await page.click("div#click_area");
await expect(page.locator("#click_type")).toHaveText("Click");


// Right-Click action
await expect(page.locator("#click_type")).not.toBeVisible();
//await page.locator("div#click_area").click({button:"right"});
await page.click("div#click_area",{button:"right"});
await expect(page.locator("#click_type")).toHaveText("Right-Click");


// Double-Click action
await expect(page.locator("#click_type")).not.toBeVisible();
//await page.locator("div#click_area").dblclick();
await page.dblclick("div#click_area");
await expect(page.locator("#click_type")).toHaveText("Double-Click");



// Mouse Hover
await expect(page.locator("#hover_validate")).not.toBeVisible();
await page.locator(".dropbtn").hover();
//await page.hover(".dropbtn");
await page.waitForTimeout(2000);
await page.locator("text='Python'").click();
await expect(page.locator("#hover_validate")).toHaveText('Python');



// Drag & Drop
await expect(page.locator("#drag_source")).toHaveText("Drop me on to the green box");
//await page.dragAndDrop("#drag_source", "#drop_target");
await page.locator("#drag_source").dragTo(page.locator("#drop_target"));
await expect(page.locator("div h3")).toHaveText("Drop is successful!");

*/

//Scroll down

await page.mouse.wheel(0,1000);

await page.waitForTimeout(5000);






// click , doubleclick /context click , right click , Hover over elements ,drag and drop , scrolling with mouse 
})