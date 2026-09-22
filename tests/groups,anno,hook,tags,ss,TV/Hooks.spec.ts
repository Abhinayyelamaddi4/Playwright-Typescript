import { test, expect ,Page } from '@playwright/test';

/*
  //beforeall , beforeeach , afterall , aftereach --> all the test methods are executed in single page 
                             keep all hook methods outside of the group
open page  -before all
close page -afterall

login -beforeeach
findproducts
logout -aftereach

login -beforeeach
add products to cart
login -beforeeach
*/

let page : Page;
 //before starting the test -------------------------------------->condition get executed 
test.beforeAll('Open app',async({browser})=>{   
page=await browser.newPage();  //from the browser taking newPage() and capturing into 'Page'-->global variable     
await page.goto("https://www.demoblaze.com/index.html")
})

//after completion of all tests ----------------------------------->condition get executed 
test.afterAll('Close app',async()=>{          
await page.close();
})

// before each test ------------------------------------------------>condition get executed 
    test.beforeEach('login app',async()=>{  
    await page.locator('#login2' ).click();
    await page.locator('#loginusername').fill('poojabandari');
    await page.locator('#loginpassword').fill('bandari');
    await page.locator("button[onclick='logIn()']").click(); //await page.getByRole('button',{name:'Log In'}).click();
    await page.waitForTimeout(2000)
})

 // after each test  ------------------------------------------------>condition get executed 
test.afterEach('logout app',async()=>{ 
await page.locator('#logout2').click();

})

test.describe('mygroup',async()=>{  
//add hooks outside of describe block-->we can use for entire test,if hook is added inside describe block -->able to use inside test

    test('find no of products', async () => {
    const products=page.locator('#tbodyid .hrefch');
    const count=await products.count();
    console.log("no of products :",count);
    await expect(products).toHaveCount(9);
})


   test('add products into cart', async () => {
   await page.locator("text='Samsung galaxy s6'").click();
   //await page.getByText('Samsung galaxy s6').click();
  
    page.once('dialog',async(dialog)=>{   // handle alert before the click 
    expect(dialog.message()).toContain('Product added');
    await dialog.accept()
})
    await page.locator('.btn.btn-success.btn-lg').click();
});
})


