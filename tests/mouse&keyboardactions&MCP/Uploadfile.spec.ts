/*

import{test,expect} from "@playwright/test";
import path from 'path';
import { dirname } from "path";

// single files
test('file Uploads',async({page})=>{
await page.goto("https://testpages.eviltester.com/pages/files/file-upload/");
const filepath=path.join(_dirname,'testdata','data.csv');  // folder name & filename
await page.setInputFiles('#fileinput',filepath); // locator & filepath
await page.waitForTimeout(3000);

// two files
await page.goto(http://www.uitestingplayground.com/upload);
const file1=path.join(_dirname,'testdata','data.csv'); 
const file2=path.join(_dirname,'testdata','data.json');
page.locator(".browse-btn")setInputFiles('file1',file2);

await page.waitForTimeout(3000);

})
*/