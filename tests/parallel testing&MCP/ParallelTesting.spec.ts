import{test ,expect} from '@playwright/test'

// fully parallel =disabled -------->workers=disabled --->test executed in parallel mode --> fully parallel is global configuration 
// depending on noof test's in a file ---> workers will be allocated / allocate in config file
// fully parallel = true --------------->add workers=3 --->test executed in parallel mode--> 5 tests using 3 workers
// fully parallel = true --------------->add workers=1 --->test executed in serial mode----> 5 tests using 1 workers
// fully parallel = false -------------->add workers=1 --->test executed in serial mode----> 5 tests using 1 workers
// fully parallel = false -------------->add workers=3 --->test executed in serial mode----> 5 tests using 1 workers
// test follows describe method 
// test.describe.configure({mode:'serial'}) --->add workers=3 --->test executed in serial mode----> 5 tests using 1 workers
// test.describe.configure({mode:'serial'}) --->add workers=1 --->test executed in serial mode----> 5 tests using 1 workers
// test.describe.configure({mode:'parallel'})-->add workers=1 --->test executed in serial mode----> 5 tests using 1 workers
// test.describe.configure({mode:'parallel'})-->add workers=3 --->test executed in parallel mode--> 5 tests using 3 workers

//fully parallel= true  in browser(chrome)------>add workers=3 --->test executed in parallel mode--> other broswers executed in serial
//fully parallel= false in browser(firefox)----->add workers=2 --->test executed in serial mode ---> npx command (browser=firefox)
//fully parallel= true ------>add workers=2 ---> npx command (workers=4)--->test executed in parallel mode--> 5 tests using 4 workers


test.describe('group1',()=>{

  test('Test1', async ({ page }) => {
  console.log(" this is Test1 ......");
  });

  test('Test2', async ({ page }) => {
  console.log(" this is Test2 ......");
  });

  test('Test3', async ({ page }) => {
  console.log(" this is Test3 ......");
  })

  test('Test4', async ({ page }) => {
  console.log(" this is Test4 ......");
  })

  test('Test5', async ({ page }) => {
  console.log(" this is Test5 ......");
  });
  
});