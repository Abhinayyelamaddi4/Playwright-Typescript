import{test ,expect ,Locator} from "@playwright/test";

test('verify the placeholder',async({page})=>{
 await page.goto("https://demo.nopcommerce.com/");

 // getByPlaceholder locate input fields/text area based on their placeholder attribute
 // good for inputs fields without a label but having a placeholder  

      await page.goto("https://www.takealot.com/");
      await page.getByPlaceholder("Search for products",{exact:false}).fill('book');


     // await page.goto("https://indiadesire.com/lootdeals");
     // await page.getByPlaceholder("Search").fill('T-shirt');
      //----> page.fill method 
     // await page.fill("Search","T-shirt");

     // await page.goto("https://www.makro.co.za/");
     // await page.getByPlaceholder("Search Makro",{exact:false}).fill('playwright');

  
})

/*
test("Input Box - Error Message", async ({ page }) => {
  await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
  await page.locator("#headingOne .accordion-button.collapsed").click();
  await page.getByText("Text Box").click();
  await expect(page).toHaveTitle("Selenium Practice - Text Box");
  await page.locator("#TextForm h1").toHaveText("Text Box");

  await page.locator(".btn.btn-primary").click(); // without adding credentials to required columns click submit to find the error message
  await expect(page.locator("#fullname-error")).toBeAttached();  // locate error message using toBeAttached method 
  
  const error=page.locator("#fullname-error");
  const errormessage =await error.textContent();
  console.log(errormessage);
  expect(errormessage).toContain("The field is required.");


});

*/
    