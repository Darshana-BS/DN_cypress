const {test, expect} = require ('@playwright/test');
const exp = require('constants');

test('TC_01 Dropdown', async({page}) => 
{
        //define locators
        const url = "https://rahulshettyacademy.com/loginpagePractise/";
        const userEmail = page.locator("#username")
        const userPassword = page.locator("#password")
        const dropdown = page.locator("select.form-control")
        const signIn = page.locator("#signInBtn") 
        // const radioButton = page.locator("input[value='user']")
        const radioButton = page.locator(".radiotextsty")
        const clickOkay = page.locator("button#okayBtn")
        const checkBox = page.locator("#terms")

        //steps 
        await page.goto(url);
        await userEmail.fill("1drahulshettyacademy@playwright.com");
        await userPassword.fill("Dash805Dash805");
        
        //select dropdown value 
        await dropdown.selectOption("consult");

        //select radio button 
        await radioButton.last().click()
        await clickOkay.click()
        
        //METHOD 1 = verify of the button is successfully selected or not 
        console.log ((await radioButton.last()).isChecked())
        await expect(radioButton.last()).toBeChecked();

        //chekbox
        await checkBox.click()
        await expect (checkBox).toBeChecked();
        await checkBox.uncheck();
        // await expect (checkBox.isChecked()).toBeFalsy();
        expect ((await checkBox).isChecked()).toBeFalsy();
        await signIn.click();
})
