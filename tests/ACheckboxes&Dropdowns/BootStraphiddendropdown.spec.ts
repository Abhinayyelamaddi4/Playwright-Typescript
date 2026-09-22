import{test ,expect,Locator} from "@playwright/test"; // auto suggest dropdown or bootstrap

// element with no select tag  are comes under bootstrap dropdown
// the elements which are autosuggesting ,relative suggestion ,new item suggestion are--> dynamic elements are generated 
// use selectorhub debugger , pause script execution -->(pause & play), emulate focused page to freeze elements ctrl+shit+p 

test('Check hidden Bootsstrap  dropdown ',async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await page.locator('input[name="username"]').fill('Admin');
await page.locator('input[name="password"]').fill('admin123');
await page.locator('button[type="submit"]').click();
// click to locate pim using getByText method 
await page.getByText('PIM').click();  

//form i --> space to locate element by jumping directly --> CSS
await page.locator('form i').nth(2).click(); // 'i'tag representing list of items under'form'parent tag -->nth(2)nd -->css method
await page.waitForTimeout(3000); 

// capture all the options from listbox and count
const options:Locator=page.locator('div[role="listbox"] span'); 
const Count:number=await options.count();  
console.log("number of options in a dropdown :",Count); 

/*// printing all the options 

for(let i=0;i<Count;i++)
{
         // console.log(await options.nth(i).textContent());
     console.log(await options.nth(i).innerText());
         //console.log(await options.allTextContents()); // here we are capturing the elements , all doenst require nth() 
} */


for(let i=0;i<Count;i++)
{
   const text:any=options.nth(i).innerText(); 
   if(text==="Automaton Tester")
   {
   console.log(await options.nth(i).click());
   break;
   }
}

await page.waitForTimeout(3000); 


})    