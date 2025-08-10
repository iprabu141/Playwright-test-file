import {test, expect}from'@playwright/test'
test('irctc',async({page})=>{

    await page.goto('https://www.irctc.co.in/nget/train-search')
    await page.locator('#journeyQuota').click();
    await page.locator("//span[text()='TATKAL']","TATKAL").click();
    await page.waitForTimeout(3000);
})