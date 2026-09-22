import{test ,expect,Locator } from "@playwright/test"

// web is designed or development with html, css ,javascript in language 
// html: add buttons ,check boxs,input boxs ,dropdown,links
// javascript: to add some action or behaviour to web elements along with (html) ---> Hyper Text Markup Language
// css : to add some fonts ,colours , style for sheets is CSS (cascading style sheets )
//-----------------------------------------------------------------------------------------------------------------------------
// 2 types of locators in css ->realtive css locator & ->absolute css locator 
// every tag is representing a element--> every element is having attributes -->identify elements based on the attributes
// absolute css :locate the web element from root(html) navigate to each and every node until we find the element
// relative css selctors : we can directly jump & locate web element 

test('verify css Locators',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

const searchbox:Locator=page.locator("input#small-searchterms");

 /* // tagid - (tag#id)/(.id) ---> locator doesnt return any value it identifies the attribute of element --------------------
   await searchbox.fill("T-shirts"); 
   await expect(page.locator("input#small-searchterms")).toBeVisible(); //visible method before passing the value init
   await page.locator("#small-searchterms").fill("T-Shirts"); */

/* // .class - (tag.class)/(.class) contains multiple elements in class  -------------------------------------
   await page.locator("input.search-box-text").fill("T-Shirts");
   await expect(page.locator(".search-box-text")).toBeVisible();
   await page.locator(".search-box-text").fill("T-Shirts");  */

/* // tag with any other attribute - tag[attribute=name]/[attribute=name] --------------------------------------------
   await page.locator("input[name=q]]").fill("T-Shirts"); 
   await page.locator("[name=q]").fill("T-Shirts");  */

///class with any attribute - tag.class[attribute=name] -------------------------------------------------
   await  page.locator("input.search-box-text[id='q']").fill("T-Shirts");
   await  page.locator(".search-box-text[value='Search store']").fill("T-Shirts"); 
   await  page.waitForTimeout(5000); 

})

