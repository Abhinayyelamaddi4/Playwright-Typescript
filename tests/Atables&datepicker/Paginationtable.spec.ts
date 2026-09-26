import{test ,expect,Locator} from "@playwright/test"; // auto suggest dropdown or bootstrap


test('read data from allthe table pages',async({page})=>{
await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");
//----------------------------------------------------------------------1st method 
let hasmorepages=true; // global variable --> true/false is boolean method
while(hasmorepages)    // if specific condition is true to execute in multiple pages we use whileloop 
 {
   const rows:any=await page.locator("#example tbody tr").all(); 
   for(let row of rows) 
   {
   console.log(await row.innerText()); 
   }
   await page.waitForTimeout(2000);  
// click next button --> if the next button is enabled we enter next page , if reached to last page the button gets disabled 
// button[aria-label='Next'] //--> css method  
// button[aria-controls='example']:nth-child(9);
// button[aria-controls='example']:hastext'›';  // judo element symbol
 

const nextbutton:Locator=page.locator("button[aria-label='Next']"); 
const isDisabled =await nextbutton.getAttribute('class'); // no more pages -->option gets disabled ---> getAttribute(class)
// value is purely string we use includes // if the value is (string or null) in that case use ?(Question mark)
if(isDisabled?.includes('disabled'))
   {
    hasmorepages=false;
   }
else{
    await nextbutton.click();                                                                                                                                     
    }
}
});  

//----------------------------------------------------------------------------------------------------------2
/*
// method -----------------------------------------------------------2 ( dropdown) test.only executes particulartext
test.only('read data from allthe table pages',async({page})=>{
await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");  

const dropdown=page.locator("#dt-length-0"); // select label in dropdown (10,25,50,100 pages)
await dropdown.selectOption({label:'25'})

// const row2=page.locator("#example tbody tr");
// await expect(row2).toHaveCount(25); 

const rows=await page.locator("#example tbody tr").all(); 
expect(rows.length).toBe('25'); 

   
});
*/
/*
// method --------------------------------------------------------------------------------------------------3
test('read data from allthe table pages',async({page})=>{
await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");

const searchbox:Locator= page.locator("#dt-search-0");
await searchbox.fill('Paul Byrd'); 
await page.waitForTimeout(5000);

const rows=await page.locator("#example tbody tr").all(); 
if(rows.length>=1) // to find specific row (Paul Byrd) atleast one row is available 
{
    let matchFound=false;  
    for(let row of rows) // from all the rows reading each and every row 
    {
           const text=await row.innerText(); // read inner text from row ---> use includes method to find text 
           if(text.includes('Paul Byrd'))  // if the value includes in a row --->print it with console 
           {
           console.log("record exist-found");
           matchFound=true;
            break;
           }
    }   
        expect(matchFound).toBeTruthy(); // or //expect(matchFound).toBe(true);
}

    else
       {
   console.log("no record was found in search");      
      }
   await page.waitForTimeout(2000);

})*/
