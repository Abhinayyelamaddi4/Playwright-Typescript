/*

add them in playwright configuration :
we can generate some built in reporters 
commandline  --report=html
reporter:'html', -------------------------> generate report in html 
reporter:[['html',{open:'failure'}]], ----> generate report in fail test
reporter:[['html',{open:'never'}]],  -----> no report is generated in both cases of fail & pass test
reporter:[['html',{open:'always',outputFolder:'html-report'}]], ----------> Testreport is generated in html file
reporter:[['html',{outputFolder:'html-report'}]]' ---------> Testreport is generated in html file & playwright report file
----------> npx playwright show-report html-report -----------------------> display report prominently
----------> npx playwright test Reporters.spec.ts --reporter=html  -------> generate test in specific report 

command line reporters : list ,line & dot 
reporter:'list',  ---------- when ever (step/condition) fails test will report with right or wrong(X) signs in report
reporter:[['html',{outputFolder:'html-report'}],['list']]' ----> can able to configure multiple reporters 

reporter:'line',   -------------------------------> when ever (step/condition) fails --> test will report in line
reporter:[['line'],['list']], --------------------> can able to configure multiple reporters

reporter:['dot'], ------->(step/condition)fails it will report in .(pass),F(failure),T(timeout),o(skipped),X(timeout failure),+/-flaky

reporter:[['junit',{outputfile:'results.xml'}]]' --------reports are generated in XML file format
reporter:[['json',{outputfile:'results.json'}]],--------reports are generated in json file format

pre-requisite :---- external reporter 
npm install -D allure-playwright -------->install allure package in playwright
npm install -g allure-commandline ------->install commandline to generate reports 
npm allure  --version --> check the package is installed 
reporter:[['allure-playwright']], / reporter:'allure-playwright', ------->add to config

allure generate ./allure-results -o ./allure-reports  ---->generate allure results  in file(outputfile)
allure generate ./allure-results -o ./allure-reports  --clean ------> to generate the new file by clearing the existing one
allure open ./allure report  ------->to open results in report 
-->overview(allure report),categories(smoke /sanity/ tags) suits(all browsers executions are displayed),graphs(graph represents)
timeline(time taken for each test ),behaviours(failure reason),packages(test)

*/

import{test,expect,Locator} from '@playwright/test'

test.beforeEach('launching app',async({page})=>{

await page.goto("https://demowebshop.tricentis.com/")

})

test('logotest', async ({ page }) => {   // logo test --> displaylogo
    await expect(page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible();
});

test('title test', async ({ page }) => { // title which is selective
    expect(await page.title()).toContain("Demo Web Shop");
});

test('search test', async ({ page }) => {
    await page.locator('#small-searchterms').fill("laptop");  // fill the text in search box
    await page.locator('input[value="Search"]').click();      // click on the button
    await expect.soft(page.locator('h2 a').nth(0)).toContainText("laptop", { ignoreCase: true });
});
