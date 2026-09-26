import{test ,expect} from  '@playwright/test';

test('verify the assertion',async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")
     
    // assertions : to locate element based on thier attribute /to do some action on webpage  
    // assertions are in the form of expect functions --> there are 2 types : auto-retrying assertions & non-retrying assertions 
    // auto retrying assertions : it works based on locator & pages ---->Asynchronus nature  --> timeout is possible
    // non retrying assertions  : it works based on the value  -->synchronus -->no need to put await --> timeout is not possible

    // auto retry assertion==> automatically retries assertion until it pass all actionable checks 

    // auto-retry assertion (automatically retries until it passes or timeout)
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/");  // url should display

   // auto-retrying  : waits for the element to be visible / other one to have the expected text
   await expect(page.locator('text=Welcome to our store')).toBeVisible(); // expect text visibility
   await expect(page.getByText('Welcome to our store')).toBeVisible(); 
   await expect(page.locator("div[class='product-grid home-page-product-grid'] strong")).toHaveText("Featured products"); //match-grid
   
   // non-retrying assertion executes (immediately , noretry)
   const title=await page.title(); 
   expect(title.includes('Demo Web Shop')).toBeTruthy; // validate title--> toBeTruthy
   
   //await expect(page.locator('text=Welcome to our store')).toBeVisible();
   const welcometext = await page.locator('text=Welcome to our store').textContent(); // return innertext
   expect(welcometext).toContain('Welcome'); // toContain --> non retry assertion

   // 3. Negating matcher
   await expect(page.locator('text=Welcome to our store')).toBeVisible(); // auto-retry use not.toBeVisible
   expect(welcometext).toContain('Welcome'); // no auto-retry use not.toContain

   await page.waitForTimeout(5000);


})
/*

toHaveText()  : full match of element ------------------------->
const userNames = page.locator("#login_credentials h4");
await expect(userNames).toHaveText("Accepted usernames are:");

toContainText(): partial match of element  ------------------->
const someText = page.locator(".login_password h4"); // h4 is child tag 
await expect(someText).toContainText("all");

toHaveAttribute ('','') ------------------------------------->
const attributeValue = page.locator("#user-name");
await expect(attributeValue).toHaveAttribute('placeholder', 'Username'); // use key and value of attribute 
await expect(page.locator("#user-name")).toHaveAttribute('placeholder', 'Username'); //pass tow values attribute name & value of attribute

const attributeValue = page.locator("#user-name");
await expect(attributeValue).toHaveClass("form_input"); // use class attribute 

*/