import{test ,expect,Locator} from "@playwright/test"; // auto suggest dropdown or bootstrap

test('Dynamic  webtable',async({page})=>{

// if we have one table use tabe.table tbody in more ---->page.locator("table.table.table-striped tbody");
await page.goto("https://practice.expandtesting.com/dynamic-table");
const table:Locator=page.locator("table.table tbody"); // table --------
await expect(table).toBeVisible();

// check no of rows with count in array[] ----> rows.length & toHavelength <-----all()
const rows:Locator[]=await table.locator("tr").all();   
console.log("number of rows :",rows.length); 
expect(rows).toHaveLength(4); //expect(rows.length).toBe(4);

//  chrome process get the value of CPU load -----------------1
let cpuLoad=''; 
for(const row of rows) 
{
    const processname:string=await row.locator("td").nth(0).innerText(); //processname=nth(0).locator('td')

    if(processname === "chrome")
    {
        cpuLoad=await row.locator('td:has-text("%")').innerText(); // cpuLoad=chrome
       // css method ---> we are looking for cpu value in %  -----> td:has-test('%') / td,{has-test'%'}
       // cpuload=await row.locator("td{has-text:'%'}").innertext();  ----> playwright syntax ----> find cpu load in(2.9%)
        console.log("cpu Load for chrome :",cpuLoad); 
        break;
    }
}

 // compare it with value of yellow box -------------------2
    const yellowboxtext:string= await page.locator("#chrome-cpu").innerText();
    console.log("print yellobox text :",yellowboxtext)
   // when we  comparing or checking the value of string we use .includes method 
    if(yellowboxtext.includes(cpuLoad))  
    {
      console.log("cpuLoad of chrome is equal");
    }
    else{
        console.log("cpuLoad of chrome is not equal");
    }
    expect(yellowboxtext).toContain(cpuLoad);
    await page.waitForTimeout(5000);

})

/*
test('webtable',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const table:Locator=page.locator("#taskTable tbody");
const rows:Locator[]=await table.locator('tr').all();
console.log("no of rows:",rows.length);
expect(rows).toHaveLength(4);

let Memorysize='';

for(const row of rows) 
{
    const processname:string=await row.locator("td").nth(1).innerText(); 
    if(processname==='Firefox')
    { 
      Memorysize= await row.locator('td:has-text("MB/s")').innerText();
      console.log("memory for Firefox:", Memorysize); 
      break;
}

}
//------------------------------------------------------------------------------------------------
const size:any=await page.locator(".firefox-memory").innerText();
console.log("print the text :",size);
if(size.includes(Memorysize))
{
console.log("Memory is captured");
}
else{
   console.log("memory is not captured");
}
expect(size).toContain(Memorysize);

})
*/