import{test ,expect ,Locator} from "@playwright/test";

test('verify the placeholder',async({page})=>{
 await page.goto("https://demo.nopcommerce.com/");

 // getByPlaceholder locate input fields/text area based on their placeholder attribute
 // good for inputs fields without a label but having a placeholder  

      await page.goto("https://www.takealot.com/");
      await page.getByPlaceholder("Search for products",{exact:false}).fill('book');


     // await page.goto("https://indiadesire.com/lootdeals");
     // await page.getByPlaceholder("Search").fill('T-shirt');

     // await page.goto("https://www.makro.co.za/");
     // await page.getByPlaceholder("Search Makro",{exact:false}).fill('playwright');



  
})

    