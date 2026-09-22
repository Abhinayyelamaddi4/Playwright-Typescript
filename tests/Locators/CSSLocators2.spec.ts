import{test ,expect,Locator } from "@playwright/test"

test('verify css Locators',async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    // Absolute CSS locating the webelement from the root(html) navigate to each and every node until we find the element 
    // absolute CSS Selector required full path , '>' -symbol for navigation
    // Relative CSS Selector-->jump directly to locate webelement based on thier attribute & properties 

    // absolute CSS Selector
    // html>body>div>div>h1  -- until we find elements navigated to each and every node 
      const tag:Locator=page.locator("h1");
      await expect(tag).toContainText("Basic Web Page");

     // html>body>div>div>p ------> (p)-------> is paragraph tag
     // html>body>div>div>p[id=para1]   -->p[id=para1] or --> p[class=main] ------------------------------------------
      const lag:Locator=page.locator("p[id=para1]");
      await expect(lag).toContainText("A paragraph of text");

     // html>body>div>div>p#para1 <---or----> "p#para1" --> idtag is locating the webelement in p#para1 , p#para2 -----
      const bag:Locator=page.locator("p#para1");
      await expect(bag).toContainText("A paragraph of text");

     // html>body>div>div>p[id='para1'][class='main'] --> parapagraph tag--> matches Both the elements ----------------- 
      const pag:Locator=page.locator("p[id='para1'][class='main']");
      await expect(pag).toContainText("A paragraph of text"); 
      
     // html>body>div>div>p[id='para2'][class='sub'] --> parapagraph tag--> matches Both the elements ----------------- 
      const sag:Locator=page.locator("p[id='para2'][class='sub']");
      await expect(sag).toContainText("Another paragraph of text");
    

      //------------------------------------------------------------------------------------------------------------------------
      /* relative CSS Selector 
      page.locator("[id='para2']"); / page.locator("p.sub");
      page.locator('body>div>*:first-child'); / page.locator('body>div>*:nth-child(1)');
      page.locator('p[class^=ma]'); /page.locator('p[class$=in]'); / page.locator('p[class*=ai]');
      page.locator("p[id='para1'][class='main']"); / page.locator("p[id='para1']:not([class='sub'])");
      p[id='para1']+p // p[id='para1']+* // p[class='main']+p[class='sub'] // p[id='para1']+p[id='para2']+p[id='para3']

      parapgraph(P) -------> (tag#id)-------> p[id=para2] -->(or)<-- p#para2  -->(or)<-- [id='para2']/[id=para2] -->(or)<-- #para2 
      const tag:Locator=page.locator("[id='para2']");
      await expect(tag).toContainText("Another paragraph of text");

      parapgraph(P) -------> (tag.class) ---> p[clas=sub] -->(or)<-- p.sub    -->(or)<-- [class='sub']/[class=sub]-->(or)<-- .sub 
      const tag:Locator=page.locator("p.sub");
      await expect(tag).toContainText("Another paragraph of text");

      ------------------------------(div's are child elements of parent (div))---------------------------Absolute CSS 

      body>div>*:first-child -----> first child of parent tag
      const paragraph = page.locator('body>div>*:first-child');
      await expect(paragraph).toContainText('A paragraph of text');
      await expect(paragraph).toContainText('Another paragraph of text');

      body>div>*:last-child  -----> last child of parent tag
      const paragraph = page.locator('body>div>*:last-child');

      body>div>*:nth-child(1) -->(*)representing nth number in  childs 
      const paragraph = page.locator('body>div>*:nth-child(1)');
      await expect(paragraph).toContainText('A paragraph of text');

      const paragraph = page.locator('body>div>*:nth-child(1)');
      await expect(paragraph).toContainText('Another paragraph of text');


      ----------------------------------------------------------------------------------------------------------------------

      p[class^=ma/su] ---> (^)carrotsymbol always representing starts with p[class=main ----- class^=ma]
      const paragraph = page.locator('p[class^=ma]');
      await expect(paragraph).toContainText('A paragraph of text');

      p[id$= 2/a2] ------> ($)dollarsymbol always representing ends with p[id=para2----id$=a2]
      const paragraph = page.locator('p[class$=in]'); 
      await expect(paragraph).toContainText('A paragraph of text');

      p[class*= ai/ub] --> (*)starsymbol always representing middle with p[class=main/sub---class*='ai'/'ub']
      const paragraph = page.locator('p[class*=ai]'); 
      await expect(paragraph).toContainText('A paragraph of text');

      -----------------------------------------------------------------------------------------------------------------------
      p[id='para1'][class='main'] ---> both should match to locate the web element 
      const paragraph = page.locator("p[id='para1'][class='main']");
      await expect(paragraph).toContainText('A paragraph of text');
      
      p[id='para1']:not([class='sub'])  ---> second is invalid 
      const paragraph = page.locator("p[id='para1']:not([class='sub'])");
      await expect(paragraph).toContainText('A paragraph of text');

      p:not([id='para1'])[id='para2'] ---> first one is invalid 
      const paragraph = page.locator("p:not([id='para2'])[id='para1']");
      await expect(paragraph).toContainText('A paragraph of text');

      p:not([id='para1']):not([id='para2']) ---> two are invalid  -----------------------------------
      :not(p):not([id='para1']):not([id='para2']) --> all of the elements are invalid --------------- 


      p[id='para1']+p -----------> sibling element not a child element ---> it captures second sibling p(paragraph) tag 
      const paragraph = page.locator("p[id='para1']+p");
      await expect(paragraph).toBeVisible();

      const paragraph = page.locator("p[id='para1']+p[id='para2']");
      await expect(paragraph).toBeVisible();

      p[id='para1']+* -----------> it captures all sibling p(paragraph) tags 
      const paragraph = page.locator("p[id='para1']+*");
      await expect(paragraph).toBeVisible();
     */
}) 