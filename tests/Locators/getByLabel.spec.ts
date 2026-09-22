import{test,expect,Locator} from "@playwright/test"

// labels : To pass or load some information into inputboxes like first name ,Last name , address
// ideal for form fields with visible labels , label ---> tagname

test('verify the label',async({page})=>{
await page.goto("https://demowebshop.tricentis.com/login");

await page.getByLabel('Email:').fill('Abhinay');
await page.getByLabel('Password:').fill('vusdvh');

  
})