import{test ,expect,Locator} from "@playwright/test"; // auto suggest dropdown or bootstrap


test('comparing methods  ',async({page})=>{
await page.goto("https://demowebshop.tricentis.com/");
// Group of elements are captured & represented by a locator -->locator isan interface with constant variable & class(.) represent products --->1
const products:Locator=page.locator(".product-title"); 

console.log(await products.nth(1).innerText());   // capture actual text /input value of the element 
console.log(await products.nth(1).textContent()); // captures the text along with spaces,dots,special characters, linebreaks, etc


// using traditional "forloop" for capturing index values --> it is a locator not array ---> for array method use forof loop / forin loop
// ---------------------------------InnerTexts() vs TextContent()----------------------------------------------------------------->2
// Traditional forloop :locate element manually by tracking an index counter to check each position in an array / collection
// forof loop Iterate one test multiple times with different sets of data to locate specific element (Arrays, Strings, Maps, NodeLists) 
// forin loop Iterate keys/properties of an object 
// foreach loop : control flow of statement  iterate one element multiple times in collection (such as an array, list, or object) 
// test.describe : group related tests into logic block

const count=await products.count(); 
console.log("no of items in count:",count);

for(let i = 0 ; i<count ; i++) //---------> traditional for loop --> locate group of elements manually by tracking index number (i=index) 
{
//  innerText() --> returns only string
    const productName:string=await products.nth(i).innerText(); 
    console.log(productName); 
 
// textContent()--> returns string or null ---> it captures text along with blankspaces,dots,hidden elements ,fullstops,line breaks,etc 
    const productname:string | null=await products.nth(i).textContent();
    console.log(productname?.trim());  //using (.trim())trim method for single product --> to return only text from specific webelement */

//<-----allInnerTexts() vs allTextContents()--->works for array of elements ---->we can use all type of loops in []string --------->3
    const productNames:string[]=await products.allInnerTexts();   // [] string --> to call group of elements 
    console.log("productNames captures innerText :", productNames);
   
    const productnames:string[]=await products.allTextContents(); 
    console.log("productNamesss captures textContent :", productnames);

    const productNamesTrimmed=productnames.map(text=>text.trim());
    console.log("trim the  productNamesss :",productNamesTrimmed);

// all() method using on products returns array of locators -->it convert (:Locator) into -->locator type array(:Locator[]) ------->4
 // const products:Locator=page.locator(".product-title");   
    const productLocators:Locator[]=await products.all(); 
    console.log(productLocators); 
     
    console.log(await productLocators[1].innerText()); 
    console.log(await productLocators[2].textContent()); 
    
   
//  printing all the locators using -------------------------------------------------------------->for of loop  
    for(let productLocator of productLocators) 
    {
    console.log(await productLocator.innerText());
    } 

//  using for in loop ( i is an index in loop) --->locate with [i] directly to const variable -----> for in loop
    for(const i in productLocators)
    {
    console.log(await productLocators[i].innerText());
    }
  }
})