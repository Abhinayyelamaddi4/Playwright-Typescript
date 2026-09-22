import {test ,expect} from '@playwright/test';

// combination of columns & rows in one string is a 2 conditioned array  ---> data driven testing
// foreachloop works in 1-dimentional array[] model -----> 1row &1 column ---->one dimentional array read -->for(const item of items)
// forofloop   works in 2-dimentional array[][] model  --> 1 row & 3 column -->two dimentional array read ->for(const [1,2,3] ofitems)
//  test.describe  works in a group related tests into a logical block

// test data 
const logintestdata:string[][]=[["abhiyelamaddi@gmail.com", "#lolisJustaworD", "valid"],["invaliduser@example.com", "test321", "invalid"],
["validuser@example.com", "test321", "invalid"]]; 

    for(const [email,password,validity] of logintestdata) // const data of logintestdata --> data in 3-dimentional array[]
        {
         test.describe("login data driven test",async()=>{ //group[,,,] related tests into a logical block

          test(`login test for email:"${email}" and password:"${password}"`,async({page})=>{ //email and password are dynamic use backtick key 
          await page.goto("https://demowebshop.tricentis.com/login");

          await page.locator('#Email').fill(email);
          await page.locator('#Password').fill(password);
          await page.locator('input[value="Log in"]').click();  //tag =input attribute value="Log in"

         if(validity.toLowerCase()==='valid') // validity.toLowerCase()
         {
            const logoutlink=page.locator('a[href="/logout"]');
            await expect(logoutlink).toBeVisible({timeout:5000});
         }
       else{
        const errormessage=page.locator('.validation-summary-errors');
        await expect(errormessage).toBeVisible({timeout:5000});
        await expect(page).toHaveURL('https://demowebshop.tricentis.com/login'); // check user in still on the page -- yes
       }

       })
    
    })
}

     // test describe blog sync with page

    // email & passwords are dynamic changes according to input[]
    

