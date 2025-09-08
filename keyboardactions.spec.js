
import{test,expect}from '@playwright/test';
test('keyboard actions',async({page})=>{
    await page.goto("https://gotranscript.com/text-compare")
    await page.type('[name="text1"]',"Welcome buddy");
    await page.keyboard.press("Control+A")
        await page.keyboard.press("Control+C")
    await page.keyboard.down("Tab")
        await page.keyboard.up("Tab")


    await page.keyboard.press("Control+V")
    const field2=await page.locator('[name="text2"]')
await expect(field2).toHaveValue("Welcome buddy")
await page.waitForTimeout(3000)
 

})