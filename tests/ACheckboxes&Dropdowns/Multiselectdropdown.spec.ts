import{test ,expect,Locator} from "@playwright/test";


test('verify multiselected dropdown ',async({page})=>{  // or listbox

await page.goto("https://testautomationpractice.blogspot.com");
//select option is to select directly the webelement 
/*
await page.locator("#colors").selectOption(['Red','Blue','Green']);  //select by multiple text
await page.locator("#colors").selectOption([{value:'blue'},{value:'yellow'},{value:'green'}]); 
await page.locator("#colors").selectOption([{label:'Red'},{label:'Blue'},{label:'Green'}]);
await page.locator("#colors").selectOption([{index:0},{index:2},{index:4}]); // select by index value
*/
// select no of options in dropdown(count) --> row method -1
const dropdownOptions:Locator=page.locator("#colors>option");
await expect(dropdownOptions).toHaveCount(7); // stable option -->static dropdown
console.log(await dropdownOptions.allTextContents());

// printed all the options in the form of array ----> use this method
const OptionsText:string[]=(await dropdownOptions.allTextContents()).map(text=>text.trim());
console.log(OptionsText);
expect (OptionsText).toContain('Red');

// printing all the options in the form of Text ----> use this method
for(const option of OptionsText)
{
console.log(option);
}
})
