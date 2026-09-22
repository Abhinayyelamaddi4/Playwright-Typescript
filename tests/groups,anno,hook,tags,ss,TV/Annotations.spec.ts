import { test, expect ,Page } from '@playwright/test';

//only ,skip , fail ,fixme ,slow --> all the test methods are executed in single page 


//  test.only --->only test gets executed as per the requirement -----------------
    test.only('test1',async({page})=>{     
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
});


// test.skip -->only test gets skipped as per the requirement --------------------
test.skip('test2',async({page})=>{       
    await page.goto('https://www.google.com/');
    await  expect(page).toHaveTitle('Google');
});

//--------------------------------------------------------(or)------------------------------------------------------------------
// based on condition test is skipped --->add (page,browserName)in argument --->(browserName='firefox') --->test is skipped  

test('test3',async({page,browserName})=>{  
    test.skip(browserName=='firefox');    //----------------------------------> add test.skip inside the test with condition
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
})


//test.fail -->only test gets failed as per the requirement ----------------------1
    test.fail('test4',async({page})=>{     
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
});


//test.fixme -->if the test in incomplete or partially completed -----------------> test is skipped
    test.fixme('test5',async({page})=>{       
    await page.goto('https://www.google.com/');
    
});


//test.slow : it triple the default timeout(default:30 sec , after tripling:90 sec) --------> add test.slow inside the test
    test('test6',async({page})=>{  
    test.slow(); 
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
})

// we can apply annotations for groups (test.describe.only/skip/slow/fixme/fail) ---test annotations are used in the test
