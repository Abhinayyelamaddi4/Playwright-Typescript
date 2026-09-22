import { test, expect ,Page } from '@playwright/test';

// sanity {tag:'sanity'}, regression ,  smoke
/*

------>add @sanity in test function------------>(@sanity.test,async()) 
------>add tag into arguments ----------------->(test,{tag:'@sanity'},async()) 
------>add tag into arguments ----------------->(test,{tag:['@regression','@sanity']},async()) 

 --grep "@sanity"  -------------------------run all sanity test ------{tag:'@sanity'} --->2 test executed
 --grep "@regression"  ---------------------run all regression test -------{tag:'@regression'} --->2 test executed
 --grep "(?=.*@sanity)(?=.*regression)" ----run (sanity + regression) test ---{tag:['@sanity','@regression']} --->1 test executed
 --grep "@sanity|@regression" --------------run either sanity or regression  --->3 test executed
---grep-invert "@sanity" -------------------run all tests other than sanity ->(regression will get executed) --->1 test executed
 --grep "@sanity" --grep-invert "@regression" -----run all sanity tests which are not belongs to regression test  --->1 test executed

 

*/
    test('Check title of the homepage',{tag:'@sanity'},async({page})=>{     
    await page.goto('https://www.demoblaze.com/index.html#');
    await expect(page).toHaveTitle('STORE');
});

    test('Check navigation to the store',{tag:'@regression'},async({page})=>{     
    await page.goto('https://www.demoblaze.com/index.html#');
    await page.getByText('Phones').click();
    expect(page).toBeTruthy;
});

test('Check Top Recommendations',{tag:['@sanity','@regression']},async({page})=>{     
    await page.goto('https://www.demoblaze.com/index.html#');
    await page.getByText('Laptops').click();
    await expect(page.locator('#tbodyid')).toBeVisible();
});

/*
import{test ,expect} from'@playwright/test';

test('@regression test1',{tag:'@sanity'},async({page})=>{   //-----------------------------------------1
await page.goto("https://www.demoblaze.com/index.html");
await expect.soft(page.getByRole('link',{name:'Log In'})).toBeVisible();
});


test('test2',async({page})=>{   //-----------------------------------------2
await page.goto("https://www.demoblaze.com/index.html");
await page.locator("#login2").click();
await page.locator('#loginusername').fill('poojabandari');
await page.locator('#loginpassword').fill('bandari');
await page.getByRole('button',{name:'Log In'}).click();
})



test('test3',{tag:['@sanity','@regression']},async({page})=>{  //-----------------------------------------3
await page.goto("https://www.demoblaze.com/index.html");
await page.locator("#login2").click();
await page.locator('#loginusername').fill('poojabandari');
await page.locator('#loginpassword').fill('bandari');
await page.getByRole('button',{name:'Log In'}).click();
await expect.soft(page.getByRole('link',{name:'Log out'})).toBeVisible();
await expect.soft(page.locator("#nameofuser")).toContainText('Welcome poojabandari');
});

/*
test.describe('group2',async()=>{  

test.fixme('test4',async({page})=>{ //-----------------------------------------4
await page.goto("https://www.demoblaze.com/index.html");
await page.locator("#login2").click();
await page.locator('#loginusername').fill('poojabandari');
await page.locator('#loginpassword').fill('bandari');
await page.getByRole('button',{name:'Log In'}).click();
await expect(page.getByRole('link',{name:'Log out'})).toBeVisible();
}); 


 

test('test5',{tag:'@regression'},async({page})=>{  //-----------------------------------------5
    await page.goto("https://www.demoblaze.com/index.html");
await page.locator("#login2").click();
await page.locator('#loginusername').fill('poojabandari');
await page.locator('#loginpassword').fill('bandari');
await page.getByRole('button',{name:'Log In'}).click();
await expect(page.getByRole('link',{name:'Log out'})).toBeVisible();
await expect(page.locator("#nameofuser")).toContainText('Welcome poojabandari');
});



test('@sanity @regression test6',async({page,browserName})=>{  //-----------------------------------------6
    test.skip(browserName=='chromium');
await page.goto("https://www.demoblaze.com/index.html");
await page.locator("#login2").click();
await page.locator('#loginusername').fill('poojabandari');
await page.locator('#loginpassword').fill('bandari');
await page.getByRole('button',{name:'Log In'}).click();
await expect(page.getByRole('link',{name:'Log out'})).toBeVisible();
await expect(page.locator("#nameofuser")).toContainText('Welcome poojabandari');

});
})

*/




/*

test('@sanity test1',async({page})=>{
await page.goto("https://demowebshop.tricentis.com/");
await expect(page).toHaveURL("https://demowebshop.tricentis.com/"); 
});



test('@sanity @regression test2',async({page})=>{ 
await page.goto("https://demowebshop.tricentis.com/");
await expect(page).toHaveTitle("Demo Web Shop");
});

test('@regression test3',async({page})=>{
await page.goto("https://demowebshop.tricentis.com/");
const title=await page.title();
expect(title.includes('Demo Web Shop')).toBeTruthy();
});

test.describe('group5',async()=>{ 
test('test4',{tag:'@sanity'},async({page})=>{
await page.goto("https://demowebshop.tricentis.com/");
await expect(page).toHaveTitle("Demo Web Shop");

});

test('test5',{tag:['@sanity','@regression']},async({page})=>{
await page.goto("https://demowebshop.tricentis.com/");
await expect(page.locator('text=Welcome to our store')).toBeVisible(); 
await expect(page.locator("div[class='product-grid home-page-product-grid'] strong")).toHaveText("Featured products");
});

test('test6',{tag:'@regression'},async({page})=>{
await page.goto("https://demowebshop.tricentis.com/");
const text=await page.locator('text=Welcome to our store').innerText();
expect(text).toContain('Welcome to our store');


})
})
*/


 

/*

 await page.goto('https://www.demoblaze.com/index.html');
    await page.getByRole('link', { name:'Log in' }).click();
    await page.locator('#loginusername').fill('poojabandari');
    await page.locator('#loginpassword').fill('bandari'); //password incorrect
    await page.getByRole('button', { name:'Log in'}).click();
    await expect(page.getByRole('link',{name:'Log '})).toBeVisible();
    await expect(page.locator('#nameofuser')).toContainText('Welcome poojabandari');



     test.describe('group1',async()=>{ 
    test('check the products',async()=>{ 
    const products=page.locator('#tbodyid .hrefch');
    const count=await products.count();
    console.log("no of products :",count);
    await expect(products).toHaveCount(9);
    });

    test('add product to cart',async()=>{ 
    await page.locator("text='Nokia lumia 1520'").click();
    page.once('dialog',async(dialog)=>{ 
    expect(dialog.message()).toContain('Product added');
    expect(dialog.message()).toContain('Product added');
    await dialog.accept();
    })   
    })

    */

*/