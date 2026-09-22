import{test , expect} from '@playwright/test';

    test('flaky test',async ({page,context})=>{
    await page.goto('https://www.demoblaze.com/index.html');

/*retry (retrive test)---> by using retrive concept we can handle flaky test 
unstable due to network issues ,server is slow , UI elements are overlapping ,elements are slow in response to actions,timeout-issues 
intermetent issue ---> all these comes under flaky  

flaky test : sometime it will pass & sometimes it will fail without changes in condition to the test --> flaky test 
run the test while configure retries in number --> test get executed in retries until it passed -->it terminates the retry 

npx playwright test  Flakytest.spec.ts  -----> (--retries=3) --->to execute specific test file

*/ 
    await page.getByRole('link', { name:'Log in' }).click();
    await page.locator('#loginusername').fill('poojabandari');
    await page.locator('#loginpassword').fill('bandari'); //password incorrect
    await page.getByRole('button', { name:'Log in'}).click();
    await page.waitForTimeout(8000);
    await expect(page.getByRole('link',{name:'Log out'})).toBeVisible();
    await expect(page.locator('#nameofuser')).toContainText('Welcome poojabandari');

})