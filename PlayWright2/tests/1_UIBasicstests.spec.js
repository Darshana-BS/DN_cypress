const {test} = require('@playwright/test');         //test annotation comes from this playwright/test module, hence it is needed 

// test case to be delcared here
test('Browser Context Playwright Test1', async ({browser})=>        // async is needed, await gets executed else it wont make any difference
{
        //playwright code to be added here
        const context = browser.newContext();        //create instance for new instance for browser with some set configurations 
        const page = (await context).newPage;        //creates actual page to automate 
        await page.goto("http://www.rahulshettyacademy.com/loginpagePractise/");
});

test('Page Playwright Test2', async({page}) => 
{
    await page.goto("http://www.rahulshettyacademy.com/loginpagePractise/");
})