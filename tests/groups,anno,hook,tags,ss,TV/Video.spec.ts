import{test ,expect} from'@playwright/test';

// using playwright configuration :
// (video://'on'//, //'off'//, //'on-all-retries'//, //'only-on-failure'//
// //'retain-on-failure'// , //'retain-on-first-retry// , //'retain-with-video// , //'retain-on-failure-and-retries'//
// view record in show report for screenshot --->parameter and video --->parameter


test.only('screenshots from config',async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    await page.getByRole('link', { name:'Log in' }).click();
    await page.locator('#loginusername').fill('poojabandari');
    await page.locator('#loginpassword').fill('bandari'); //password incorrect
    await page.getByRole('button', { name:'Log in'}).click();
    
    await expect(page.getByRole('link',{name:'Log out'})).toBeVisible(); // class & attribute
    await expect(page.locator('#nameofuser')).toContainText('Welcome poojabandari');
    


})