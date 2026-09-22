import{test ,expect,Locator} from "@playwright/test";

//passing two arguments in test function  ( verify , check or test -1st arguments starts with)

test("Verify playwright Locators",async({page})=> {
    await page.goto("https://demo.nopcommerce.com/");
    const logo: Locator = page.getByAltText("nopCommerce"); //logo is page fixture
    await expect(logo).toBeVisible();
})
    // page.getByAltText(), most of images have alt properties , identifying webelements  based on thier alt atributes  
    // getByAltText method locating the webelements based on the attribute of images & logo  

    // capturing group of elements into a variable --->constant variable 
    // await :if the statement is returning some promise/statement doing some action on web element
    // await & async keywords used to manage asynchronous browser actions—like clicking, typing, or navigating 

   // locators are central piece of Playwright autowaiting and retry logic in a nutshell ,
   // locators represents a way to findout web elements on the page at the movement
   // locators  identify the web elements based on thier attributes & properties 
  
   // when ever we click to inspect a web element the DOM structure will open automatically
   // DOM represents the web element based on the attribute (document object model)
   // Dom is an api interface which is created by the browser itself while loading the page 
   // when ever we inspect to see page source the webdesign represents with (java + html ) 

   // selenium webdriver is a browser automation tool which is used to automate web applications
   // it follows W3C protocol to communicate with browsers and  perform actions on webelements 
   // by sending http request from internal server to real browser to each & every condition connection get dipused everytime
   // performance & response time gets slow 
  
   // playwright is a browser automation tool which is used to automate web applications
   // it follows websocket protocol to communicate with browsers and  perform actions on webelements 
   // by sending http request from internal server to real browser , connection get diffused once the action is performed
    
   
/*
await page.goto("https://indiadesire.com/");
await expect(page).toHaveURL("https://indiadesire.com/");
const logo: Locator = page.getByAltText('india desire logo', { exact: true }); // css
await expect(logo).toBeVisible();

await page.goto('https://demowebshop.tricentis.com');
await expect(page).toHaveURL("https://demowebshop.tricentis.com");
const logo: Locator = page.getByAltText("Tricentis Demo Web Shop");
await expect(logo).toBeVisible();
*/



