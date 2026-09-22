import{test ,expect ,Locator} from "@playwright/test";

// role locators are interactive elements which are clickable like buttons ,headings ,checkboxes,links ,lists,tables,radio buttons etc 
// getByRole method locate implicit & explicit accesbility attributes
// it follows W3C Specifications or ARIA role   
// tag name & roll name are same it is implicit defined role (button =submit  ,input = inputbox )
// tag name and role name are different they are explicit defined role (href=link)( headings --h3>sign up<h3)(search=combobox)

test('verify the role',async({page})=>{
await page.goto("https://orangehrm.com/");
await page.getByRole("button",{name:'Book a Free Demo'}).click(); 

//await expect(page.getByRole("heading",{name:'We Just Need a Few Details'})).toBeVisible(); 
/*
await page.goto("https://www.google.com/");
await page.getByRole("link",{name:'Search for Images'}).click();  //HTML and ARIA Role---> name is manditory to represent the role 
//await expect(page.getByRole("link",{name:'Search for Images'})).toBeVisible();
//await page.getByRole('combobox').click();
*/

})
 /*
await page.goto("https://demowebshop.tricentis.com/login");
await page.locator('#small-searchterms').fill('T-shirts');
await page.getByRole('button', {name:'Search'}).click();
//----->await expect (page.getByRole('img', {name:'Tricentis Demo Web Shop'})).toBeVisible();

 */






/*
HTML and ARIA Role Mapping TableHTML ElementDefault / Implicit ARIA RolePurpose & Context
List of common HTML elements and their corresponding ARIA roles

HTML Element                          ARIA Role
<a href="...">                        link   
<area href="...">                     link
<button>                              button  
<form> (with name attribute)          form
<h1>, <h2>, <h3>, <h4>, <h5>, <h6>    heading
<header>                              banner (context-specific)
<img> (with alt)                      img    
<input type="button">                 button
<input type="checkbox">               checkbox
<input type="email">                  textbox
<input type="password">               textbox
<input type="radio">                  radio
<input type="range">                  slider
<input type="search">                 searchbox
<input type="text">                   textbox
<select>                              combobox (or listbox if multiple)
<textarea>                            textbox
<ul>, <ol>                            list
<li>                                  listitem
<table>                               table
<tr>                                  row
<td>                                  cell
<th>                                  columnheader / rowheader
<nav>                                 navigation
<main>                                main
<footer>                              contentinfo
<aside>                               complementary
<section> (with accessible name)      region
<dialog>                              dialog
<progress>                            progressbar
<summary>                             button
<option>                              option
*/