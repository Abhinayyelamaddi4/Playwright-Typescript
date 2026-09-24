import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 720,
    width: 1280
  }
});

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3D--viewport-size%2B%25221280%252C720%2522%26oq%3D--viewport-size%2B%25221280%252C720%2522%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDEzMTNqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DvIakatnMMuuWhbIPx7PD0As&q=EgQpwalzGL2NktUGIjC2XA25afVnKfKMh3YNz70fszsSNTwlTcMO10Qw_MrVsr5ytZgQwOkjsp85UD0ph_8yAVJaAUM');
});


/*
codegen : is a code generator , we can  inspect elements with manual clicks & assertions on webpage
npx playwright codegen ---> execute the command automatically opens playwright inspector parallely with a browser 
npx playwright codegen ---> manually copy the script and paste in new file 

by using debug we can record the test and select the locator to locate element & select languages in test runner 
npx playwright test codegenTest.spec.ts --debug ---> specific file (manually generated)

npx playwright codegen -o tests/codegenTest.spec.ts  -------> executes the test script into file  or
npx playwright codegen -output tests/codegenTest.spec.ts ---> executes the test script into file
npx playwright codegen https://www.google.com/   ---> launch the browser directly 

npx playwright codegen -o tests/codegenTest.spec.ts --device "iphone 6" 
npx playwright codegen https://www.google.com/ --device "iphone 6" 

npx playwright codegen -o tests/codegenTest.spec.ts --viewport-size "1280,720"
npx playwright codegen https://www.google.com/ --viewport-size "800,600" -----> width & height 
------->viewport: {width:1280 , height:720} ----------> global config 

select testrunner in codegen -->json /java /junit & few other 
using playwright inspector inspect the elements with clicks & checks the assertions in browser --> visibility , text,value,snapshot


--------------------------------------------> test plugin <--------------------------------------------------

using test plugin we can perform some actions 
actions are : we can select folders / files to run , debug & continuous run the test 
-----> select specific browser/browsers to run the test
-----> select record --> playwright will automatically launch Codegen & manually inspect elements accordingly 
<-----------------------------------> script is generated in specific file (test-1.spec.ts) --> created by playwright 
-----> select pick locator ---> automatically it will take you to browser --> select website and locate element manually
<-----------------------------------> element is located in command line --> use generated locator in test
 
*/