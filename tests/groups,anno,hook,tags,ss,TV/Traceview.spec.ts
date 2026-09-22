import{test ,expect} from'@playwright/test';

test('tracing test',async ({page,context})=>{

 // trace-viewer:all the actions performed to the test are traced & reported:it will return snapshots,logs,events,video,error,locators
 // click to view trace in show-report --->actions performed are displayed in time travel & action logs & metadata records

 // action : each action reporting its traceview 
 // meta data : records --> time taken of each condition , type of engine using in browsers, viewport- width , height , mobile /pc
 // add the locator , check logs ,error, console , networks , source,attachments ---->
 // point the actioned element & click ---> action, before , after  to understand the test execution / trace of action

 // configure the trace  ---------------------------> global config 
 // use command (--trace on) -----------------------> local config
 // context.tracing.start  & stop method  ----------> Test config

 // from html file ------->trace.zip
 // through command ------> npx playwright show-trace trace.zip 
 // https://trace.playwright.dev/ -->utilities --> upload the zip file from the location / drag & drop file 
  
    context.tracing.start({screenshots:true , snapshots:true});
    await page.goto('https://www.demoblaze.com/index.html');
    await page.getByRole('link', { name:'Log in' }).click();
    await page.locator('#loginusername').fill('poojabandari');
    await page.locator('#loginpassword').fill('bandari'); //password incorrect
    await page.getByRole('button', { name:'Log in'}).click();
    await expect(page.getByRole('link',{name:'Log out'})).toBeVisible();
    await expect(page.locator('#nameofuser')).toContainText('Welcome poojabandari');

    context.tracing.stop({path :'trace.zip'}) // trace will stop & report in path 

}) 