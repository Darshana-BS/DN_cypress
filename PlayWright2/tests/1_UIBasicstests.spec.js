const {test, expect} = require('@playwright/test');         //test annotation comes from this playwright/test module, hence it is needed 
const { trace } = require('console');
const exp = require('constants');

// trace 
async function startTracing(context, name) {
    await context.tracing.start({ screenshots: true, snapshots: true })
    return async() => {
        await context.tracing.stop({ path: `trace/${name}.zip` });
    };
}
// test case to be delcared here
test('TC_01 Browser Context Playwright Test1', async ({browser})=>        // async is needed, await gets executed else it wont make any difference
{
        //playwright code to be added here
        const context = await browser.newContext();        //create instance for new instance for browser with some set configurations 
        const stopTrace = await startTracing(context, 'TC_01');
        const page = await context.newPage();        //creates actual page to automate 
        await page.goto("http://www.rahulshettyacademy.com/loginpagePractise/");
        console.log (await page.title());
        await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

        //define locator 
        const userName = page.locator('#username')
        const passWord = page.locator('#password')
        const signIN = page. locator('#signInBtn')
        const cardTitle = page.locator('div .card-body a')

        //Locators = CSS, XPATH with incorrect password 
        await page.locator('#username').fill('rahulshettyacade');
        await page.locator('#password').fill('learning');
        await page.locator('#signInBtn').click();
        console.log (await page.locator("[style*='block']").textContent());             //wait for this element to find 
        await expect(page.locator("[style*='block']")).toContainText('Incorrect');
        
        //Erase and Correct password validation message
        await userName.fill("");            //fill = automatically clears and enters valid details 
        await userName.fill('rahulshettyacademy');
        await passWord.fill('learning');
        await signIN.click();
        await expect(page).toHaveTitle("ProtoCommerce");    

        //get name of first product 
        console.log (await cardTitle.nth(0).textContent());        //).first()
        await expect (cardTitle.nth(0)).toContainText('iphone X');    //assersion to get the title check / validation 
        await expect (cardTitle.nth(1)).toContainText('Samsung Note 8');

        //get title of all products titles 
        const allTitles = await cardTitle.allTextContents();
        console.log (allTitles); 

        stopTrace();
});

test('TC_02 Page Playwright Test2', async({page}) => 
{
    await page.goto("http://www.google.com"); 
    //get title - assertion 
    console.log (await page.title());
    await expect(page).toHaveTitle("Google");
})