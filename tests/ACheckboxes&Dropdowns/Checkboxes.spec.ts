import {test ,expect,Locator} from "@playwright/test";

test('checkbox actions',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com");

/* // select specific check box -------------------------------------------------------------------------------->1
const sunday:Locator =page.getByLabel('sunday');
await sunday.check();
await expect(sunday).toBeChecked();
// expect (await sunday.isChecked()).toBe(false);
*/

// captured allcheckboxes  ------------------------------------------------------------------------------------->2
const days:string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']; //storing labels inthe form of strings
const Checkboxes:Locator[]=days.map(index=>page.getByLabel(index)); // map is a condition to apply index on labels(index) 
expect(Checkboxes.length).toBe(7); 

/*
// using forloop method ---> if checkboxes are unchecked----------------------------->3
for(const checkbox of Checkboxes)
{
await checkbox.check();
await expect(checkbox).toBeChecked();
}
*/

/*
// uncheck last 3 checkboxes --------------------------------------------------------->4
for(const checkbox of Checkboxes.slice(-3))
{
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
} 
*/

// using slice method  selecting  top 4 checkboxes ------------------------------------>5 for bottom order
/*
for (const checkbox of Checkboxes.slice(4))
{
await checkbox.check();
await expect(checkbox).not.toBeChecked();
}
*/

/*  
//forif method --> (check the buttons are checked)--> ischecked method , tobechecked method used for enable/disable boxes ----->6

    for (const checkbox of Checkboxes)
    {
       if(await checkbox.isChecked())
       {
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked(); 
       }
       else {
         await checkbox.check();
         await expect(checkbox).toBeChecked();
        }
    } 
/*

// randomly select check boxes --> reading with index--> index:number[]=[1,3,6] ---------------------------------->7
const index:number[]=[1,3,6]
for(const i of index)
{
    await Checkboxes[i].check();
    await expect(Checkboxes[i]).toBeChecked();
}
*/

// print the weekname from label in string ----------------------------------------------------------------------->8
const weekname:String="friday";

for(const label of days) // days are representing group of elements which are in labels --> page.getbylabel method
{
    if(label.toLowerCase()===weekname.toLowerCase()) //use if for special case // toLowerCase() special case or (if(label===Weekname))
    {
         const Label=page.getByLabel(label);  // call all the labels from checkbox into getByLabel() method
         await Label.check();
         await expect(Label).toBeChecked();
    }

}
await page.waitForTimeout(5000);
})


/*
CSS METHOD:
await page.locator('input[type="checkbox"][value="Sunday"]').check();
await page.locator('input[type="checkbox"][value="Monday"]').check();
await page.locator('input[type="checkbox"][value="Wednesday"]').check();

await page.locator('input[type="checkbox"]:nth-of-type(1)').check();
await page.locator('input[type="checkbox"]:nth-of-type(2)').check();


*/