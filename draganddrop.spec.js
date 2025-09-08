import{test,expect}from '@playwright/test';
test('drag and drop',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/2018/09/automation-form.html")

    const draggable=await page.locator("#draggable")
    const dropable=await page.locator("#droppable")
    await draggable.dragTo(dropable);
    await page.waitForTimeout(3000);

})