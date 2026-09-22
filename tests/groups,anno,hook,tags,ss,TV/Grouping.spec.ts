import { test, expect } from '@playwright/test';

test.describe.configure({mode:'parallel'});
test.describe('Group1',async()=>{  // ----> use grep command in terminal '--grep Group1' / group2 --it is an regular expression  

test('Test1', async () => {
    console.log(" this is Test1 ...L..")
});


test('Test2', async () => {
    console.log(" this is Test2 ......")
});
//-----------------------------------------------------------------------------------------------------------------------------

})

test.describe('Group2',async()=>{  // ----> use grep command in terminal '--grep Group1' / group2 --it is an regular expression 

test('Test3', async () => {
    console.log(" this is Test3 ......")
});


test('Test4', async () => {
    console.log(" this is Test4 ......")
});
})
