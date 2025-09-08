import{test,expect}from '@playwright/test';
test('home page screenshot',async({page})=>{
    await page.goto("https://www.opencart.com/index.php?route=cms/demo");
    await  page.screenshot({path:'test/screenshots/'+ Date.now()+'Homepage.png'})
})
test('Full page screenshot',async({page})=>{
    await page.goto("https://www.opencart.com/index.php?route=cms/demo");
    await  page.screenshot({path:'test/screenshots/'+ Date.now()+'Full page.png',fullPage:true})
})
test.only('element screenshot',async({page})=>{
    await page.goto("https://www.opencart.com/index.php?route=cms/demo");
    await  page.locator("(//a[@class='box-overlay'])[1]").screenshot({path:'test/screenshots/'+ Date.now()+'element.png'})
})