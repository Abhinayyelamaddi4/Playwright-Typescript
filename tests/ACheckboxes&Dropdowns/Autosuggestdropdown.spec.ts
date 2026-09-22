import{test ,expect,Locator} from "@playwright/test"; // auto suggest dropdown or bootstrap


test('AutoSuggest dropdown  ',async({page})=>{
await page.goto("https://www.flipkart.com/");

//Autosuggestions :elements which are visible is UI but not able to locate in dom structure comes under dynamic elements 
//examples : ecommerce applications , flipkart , google search
//elements with no select tag comes under boostrapmethod 

await page.locator("input[name='q']").fill("smart");  // CSS method
const optionText:Locator=page.locator("ul>li"); //(ul li)absolute CSS ul -list , li -list item (dynamic search items) 
await page.waitForTimeout(5000); 
 // use selectorshub debugger // pause script execution :(pause & play) // ctrl+shift+p ---> to emulate focus page 
 // no built feauture in playwright to capture the runtime elements ----->dynamic 

 const count:number=await optionText.count();
 console.log("number of suggested options:",count); 

// printing 5th suggested option in console 
// console.log("5th suggested option :",await optionText.nth(5).innerText()); 
// console.log("5th suggested option :",await optionText.nth(5).textContent()); 

/*
//printing all the suggested options --->using traditional forloop(dynamic) , the forof / forin loops are used for array
  for(let i=0;i<count;i++)
 {
 console.log(await optionText.nth(i).innerText());  // printing the all the autosuggestion texts
//console.log(await optionText.nth(i).textContent());
 }
*/
// searchtext=smartwatch  

for(let i=0;i<count;i++)
{
    const text=await optionText.nth(i).textContent(); // storing the variable to find the element 
    if(text=="smartwatch")
    {
        await optionText.nth(i).click();  // select from const optionText:Locator=page.locator("ul>li");
        break;
    }
}

await page.waitForTimeout(5000);

})


// all text contents used in array dimentionals  

 /* static method style)

 console.log(await optionText.allTextContents()); 

 const texts: string[] = (await optionText.allTextContents()).map((item:string)=>(item.trim()));
 console.log(texts);
 */