import { test, expect,Locator } from '@playwright/test';

// iframe is (short for inline frame) --------------------------> it is an external webpage that embbeded in parent page 
//iframes are commonly used to "embed" with external frames like videos,maps,or other web pages into webpage without effecting parent Page
// page.frame --> every frame is an element , array contain no of frames(elements) attached to the web page


test('check frames in webpage', async ({ page }) => {
await page.goto('https://ui.vision/demo/webtest/frames/'); // locate the web page
const frames=page.frames(); 
console.log("no of frames :",frames.length);

//-------------------------------------approch-1--------> using page.frame()----------------------------------------
// page.frame locates element either by name of the attribute/url of the frame ({})
const frame=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"}); // locate the frame in webpage

if(frame)  //check the frame is existed or not --> typescritp strictly follow types
{
    // using frame.locator -->locate the element in web page using locators : css/xpath/playwright locators
    // await frame.locator("[name='mytext1']").fill('hello'); // CSS --> "[name='mytext']" 
      await frame.fill("[name='mytext1']","hello"); // frame.fill("argument1" ,"argument2") method
}
else{
    console.log("frame is not available");  
}
await page.waitForTimeout(5000);

//-------------------------------------approch-2---------------------> inner frame <--------------------------------

// page.framelocator (we can pass all type of locators)
// page.frameLocator:-->it allows all type of locators to locate element ---> CSS , Xpath ,inbuilt Locators

/*
const inputbox=page.frameLocator("[src='frame_1.html']").locator("[name='mytext']"); // framelocator --> frame+locator
await inputbox.fill("head");
await page.waitForTimeout(5000);
*/
//-------------------------------------approch-3-----------> nested frame <------------------------------------------
const frame3=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3"});
if(frame3)
{
      // await frame3.fill("[name='mytext']","hello"); 
        await frame3.locator("[name='mytext3']").fill('welcome'); // frame3.locator --> capture element and fill 

        const childFrames=frame3.childFrames(); // to return array of childframes into frames3
        console.log("child frames inside the frame3 :", childFrames.length);
        const radio=childFrames[0].getByLabel("I am a human");
        await radio.check();
        expect(radio).toBeChecked();     
}
else{
    console.log("frame3 is not found");  
}
await page.waitForTimeout(5000);

})