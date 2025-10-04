const {test, expect} = require ('@playwright/test');

// trace 
async function startTracing(context, name) {
    await context.tracing.start({ screenshots: true, snapshots: true })
    return async() => {
        await context.tracing.stop({ path: `trace/assignments/${name}.zip` });
    };
}

test('TC_01 signup to visited page', async({browser}) => 
{
    const context = await browser.newContext();  
    const stopTrace = await startTracing(context, 'A_TC_01');
    const page = await context.newPage();     

    //locators defined 
    const url = "https://rahulshettyacademy.com/client/#/auth/login";
    const register = page.locator(".text-reset")
    const pageTitle = page.locator(".login-title")
    const firstName = page.locator("#firstName")
    const lastName = page.locator("input[type='lastName']")
    const email = page.locator(".form-control")
    const userPhone = page.locator("#userMobile")
    const gender = page.locator("input[type='radio']")
    const userPassword = page.locator("#userPassword")
    const confirmPassword = page.locator("#confirmPassword")
    const ageconfirmation = page.locator("input[type='checkbox']")
    const login = page.locator("#login")
    const loginSuccess = page.locator("#toast-container")

    //visit the page 
    await page.goto(url)
    await register.click();
    //validate visited page 
    await expect (pageTitle).toHaveText("Register")
    //Enter data to register 
    await firstName.fill("Dash8051");
    await lastName.fill("NDash8051");
    await email.nth(2).fill("1drahulshettyacademy@playwright.com");
    await userPhone.fill("9987654321");
    await gender.nth(1).click();
    await userPassword.fill("Dash805Dash805");
    await confirmPassword.fill("Dash805Dash805");
    await ageconfirmation.click();
    await login.click();
    // await expect(loginSuccess).toHaveText("Account Created Successfully");
    await expect (page.getByText("Account Created Successfully")).toBeVisible(); 

    //stop trace
    stopTrace();
})
test('TC_02 Login to existing account and get list of products', async({browser}) => 
{
    const context = await browser.newContext();  
    const stopTrace = await startTracing(context, 'A_TC_02');
    const page = await context.newPage();     

    //login locators
    const url = "https://rahulshettyacademy.com/client/#/auth/login";
    const userEmail = page.locator("#userEmail")
    const userPassword = page.locator("#userPassword")
    const productname = page.locator(".card-body h5")
    const login = page.locator("#login")
    
    //login to existing user
    await page.goto(url);
    await userEmail.fill("1drahulshettyacademy@playwright.com");
    await userPassword.fill("Dash805Dash805");
    await login.click();
    //get the list of the products 
    console.log (await productname.nth(1).textContent());
    await expect(productname.nth(1)).toContainText("ADIDAS ORIGINAL");
    //get list or array of all products on page 1
    const allproducts = await productname.allTextContents();
    console.log (allproducts);
})
    //Register using existing details
    //password validation Please enter 1 Special Character, 1 Capital 1, Numeric 1 Small 
    //email validation 
    //number validation 

