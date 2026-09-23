import { test, expect } from '@playwright/test';

test('Autowaiting and forcing', async ({ page }) => {
   // test.setTimeout(2000); // we can add timeout in playwright config or in the test file -->50000 limit
    // test.slow() is a annotation for  triple the time out  1000*3
    await page.goto('https://demowebshop.tricentis.com/'); 

    // to validate the assertions playwright takes -5 seconds 
    // expect:{timeout:4000},
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/"); 
    await expect(page.locator('text=Welcome to our store')).toBeVisible({timeout:2000}); 
     

    // auto waiting in playwright perform a range of actionability checks on the elements before playwright  action on it
    // actionable checks are stable , visibile, receive events, enable ,editable 
    // with in 5 seconds of time all the actionability checks are passed if any actionabile check get failed returns timeout error 
    // auto wait reduces the flaky tests caused by timeouts 
    // autowait makes the test more reliable and stable it also improves readbility & maintainability of test
    // autowait mechanism works for both actions and assertions 
    // differences are 30sec for action & no actionable checks -->async , 5sec for assertion & actionable checks --->sync

  //--------------------------------Time out------------------------------------------------------------------------
    
    // to validate the actions playwright takes -30 seconds 
    // timeout :60000,
    await page.locator('#small-searchterms').fill("Laptop",{force:true}); 
    await page.locator('.button-1.search-box-button').click({force:true}); //perform forceful action on it.

});

    // timeout() is an inbuilt feature of playwright configuration 
    // timeout : how long single test is allowed to run is timeout
    // test.setTimeout(2000); in the test file -->50000 limit
    // we can add timeout in playwright config -60000 or in the test file -->50000 limit
    // test.slow() is a annotation for  triple the time out  1000*3
    

   












/* codegen is also called testrunner
codegen : npx playwright codegen --> while we execute the command it automatically starts browser parallelly with playwright inspector
using playwright inspector click on web elemnets on browser & perform actions using codegen features  like
visibility check - assert visibility , text  : assert text , value  : assert value , snapshot : assert snapshot to test the assertions
parallely  codegen records every action performed on browser with playwrightscript added with inbuilt locators & assertions 
and generate the result into specific file ----->file : npx playwright codegen -o codegenTest.spec.ts 
generated report is dispalyed in selective file custumize the code 

Device  / browser check ------------------------
select the device : npx playwright codegen -o codegenTest.spec.ts  --device "iPhone 15"
npx playwright codegen -o codegenTest.spec.ts  --browser firefox

use assert text :click on the text & check the text accessbility , clickable & validate the text popup disaplyed with action---------

use snapshot : to locate the element , codegen records the image attributes into script -----------------------

use viewport size: npx playwright codegen -o codegenTest.spec.ts  --viewport-size "1280,720" -----------------------
add view port as global config use ---->playwright config & local config use----> add --viewport-size "1280,720"

debug : npx playwright codegen  codegenTest.spec.ts  --debug --------------------------------
debug the test in headed mode --->run/pause the script , & use inspector to locate the element --> copy and edit manually in script 
logs and aria roles are dispalyed in execution

we can select languages listed in dropdown (target label)--> display the code accordingly


  */