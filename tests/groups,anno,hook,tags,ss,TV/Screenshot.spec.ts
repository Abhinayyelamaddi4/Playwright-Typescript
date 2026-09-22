import{test ,expect} from'@playwright/test';


test('Screenshots on page of browser',async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    const Timestamp=Date.now();
// page screenshot
  await page.screenshot({path:'Screenshots/'+'homepage'+'timestamp'+'.png'});     // add like tags
// fullpage screenshot                
  await page.screenshot({path:'Screenshots/'+'fullpage'+'timestamp'+'.png',fullPage:true}); // fullPage:true is boolean method
 // element screenshot
  const logo=page.locator("img[alt='Tricentis Demo Web Shop']"); // it will get saved in playwright-report 
  await logo.screenshot({path:'Screenshots/'+'logo'+'timestamp'+'.png'}); // folder ,condition , requirement ,image file format 

  // it will get saved in folder in explorer
  await page.locator("img[alt='Tricentis Demo Web Shop']").screenshot({path:'Screenshots/'+'logo'+'timestamp'+'.png'})

// element screenshot
//page screenshot configuration in playwright : when ever / where ever condition got failed in script --> captures screenshot

 await page.locator('.product-grid.home-page-product-grid').screenshot({path:'screenshots/'+'featuredproducts'+'timestamp'+'.png'});

})

// view record in show report for screenshot --->parameter and video --->parameter
//----> add playwright configuration ( screenshot:'on'/''only-on-failure',/'off') ---> view records in show-report 
/*

const products= page.locator(".page.category-page");
await products.screenshot({path:'Screenshot/'+'products'+'Timestamp'+'.png'});

*/








