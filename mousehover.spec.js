import{test,expect}from '@playwright/test';
test('mouse hover',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/2018/09/automation-form.html")

    const mousepoint=await page.locator("//button[normalize-space()='Point Me']")
    const mobiles=await page.locator("//a[normalize-space()='Laptops']")
     await mousepoint.hover();
    await mobiles.hover().catch();
    await page.waitForTimeout(5000);

   
})