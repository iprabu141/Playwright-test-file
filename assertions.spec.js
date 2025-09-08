import{test,expect}from'@playwright/test'
test('assert',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/2018/09/automation-form.html');

const options=await page.locator('#colors option')
const counts=await options.count();
console.log('no of options :',counts)
await expect(options).toHaveCount(7);
const check=await page.locator('#colors').textContent();
await expect(check.includes('Black')).toBeFalsy();


})