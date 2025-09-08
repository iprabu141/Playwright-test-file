import{test,expect}from '@playwright/test';
test('double click',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/2018/09/automation-form.html")

    const cpybutton=await page.locator("//button[normalize-space()='Copy Text']");
    await cpybutton.dblclick();
    await page.waitForTimeout(3000)
    const field2=await page.locator("#field2")
    await expect(field2).toHaveValue("Hello World!");
})