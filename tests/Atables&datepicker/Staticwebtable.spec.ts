import{test ,expect,Locator} from "@playwright/test"; 

// elements in table which are stable without changing are static 
// elements in table which are not stable & keeps on changing are dynamic table
// group of elements in table which are located in multiple pages are pagination table

test('static webtable',async({page})=>{   
await page.goto("https://testautomationpractice.blogspot.com/");
// tr=tablerow ,th=tablecolumn ,td=tabledata ------->all are child elements located inside tbody 

const table:Locator=page.locator("table[name='BookTable'] tbody"); // directly jumping into tbody ----> follwing Ajacks call
await expect(table).toBeVisible(); 
const rows:Locator=table.locator("tr"); 
/*
// count number of rows in a table -------------------------------------------------------------------------------1
await expect(rows).toHaveCount(7); // expect the count of rows in table from locator ------1
const rowCount:number=await rows.count();  // count the rows from the table & confirm -----2
console.log("number of rows in table :" ,rowCount);
expect (rowCount).toBe(7);

// count number of columns in the table ==> columns are 4 ---------------------------------------------------------2
const column:Locator=rows.locator("th"); 
await expect(column).toHaveCount(4); // approch-1 assertion
const columncount:number=await column.count(); // approch-2
console.log("number of columns in table :",columncount);
expect(columncount).toBe(4);  //its validation */

// capture the data from 2nd row ---------------------------------------------------------------------------------->3
const secondrowcells:Locator=rows.nth(2).locator('td'); //(table) representing the group of elements /items inside tbody (td=data)
await expect(secondrowcells).toHaveText ([ 'Learn Java', 'Mukesh', 'Java', '500' ]); // entire cell
const secondrowtexts:string[]=await secondrowcells.allInnerTexts(); // entire row data
console.log("2nd row text :",secondrowtexts); 

//use forloop for array locators and print seconrowtexts --------------------------------------------------------->3(2)
for(const text of secondrowtexts)
{
    console.log(text);
} 
 
// all method --> read all the elements from table (excluding header), reading rows ----------------------------------->4
// Traditional forloop :locate element manually by tracking an index counter to check each position in an array / collection
// forof loop used to Iterate values in an array[] /objects to locate a specific element (Arrays, Strings, Maps, or NodeLists) 
// forin loop is used to Iterate keys/properties of an object 
// foreach loop is used to iterate through all elements of a collection (such as an array, list, or object) 
const allrowdata:any=await rows.all(); 
for(let row of allrowdata.slice(1) ) // using slice to remove headers in the table
{
const col=await row.locator('td').allInnerTexts(); 
console.log(col);  
// console.log(col.join('\t')); //---->a tab space to remove [] print in table format 
}

// print the book name where author is mukesh --------------------------------------------------------------------->5
const mukeshBooks:string[]=[]; 
for(let row of allrowdata.slice(1))
{
const cells=await row.locator('td').allInnerTexts(); 
const author=cells[1]; // author in 1st cell <-->while book is in 0th cell 
const book=cells[0];
if (author.toLowerCase()== "mukesh")
{
console.log(`${author} \t ${book}`); // /t representing a tab space
mukeshBooks.push(book);
} 
}
expect(mukeshBooks).toHaveLength(2); // toHaveLength ---> its an array --> we check length of element

/*

// add the prices of book------------------------------------------------------------------------------------------->6 
let totalprice=0 // to add the values for calculation in forof loop

for(let row of allrowdata.slice(1))
{
    const cells=await row.locator('td').allInnerTexts();  
    const price=cells[3];
   totalprice=totalprice+parseInt(price); // parseint from java ---> used to convert string into number format
}
console.log("total price :",totalprice);
expect(totalprice).toBe(7100);

*/
})