

describe('Login Page Test', () => {

    it('Login Validation', async () => {
        await browser.url("https://www.saucedemo.com/")
        const usernameTextbox =  await browser.$("#user-name")
        const passwordTextbox = await browser.$("#password")
        const loginButton = await browser.$('//input[@type="submit"]')
        
        await usernameTextbox.addValue("standard_user")
        await passwordTextbox.addValue("secret_sauce")
        await loginButton.click()

        await browser.pause(5000)
    });
    it('Dashboard page Validation', async() => {
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    });
});