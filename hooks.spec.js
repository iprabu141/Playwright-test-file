import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page}) => {
    

    await page.goto("https://demoblaze.com/index.html");

    //login
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("prabu2302")
    await page.locator("#loginpassword").fill("prabu@123")
    await page.locator("//button[normalize-space()='Log in']").click()
})
//logout
test.afterEach(async ({ page}) => {
    await page.locator("#logout2").click()
})

//homepage
test('homepage', async ({page}) => {
    const products = await page.$$("//a[@class='hrefch']")
    await expect(products).toHaveLength(9);
})



//add to cart
test('add to cart', async ({page}) => {
    page.on('dialog', async dialog => {
         expect(dialog.message()).toContain("Product added.")
        await dialog.accept()
    })
    await page.locator("//a[normalize-space()='Iphone 6 32gb']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click()


})
