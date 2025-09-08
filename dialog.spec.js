import { test, expect } from '@playwright/test';

test.skip('alerts', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/2018/09/automation-form.html');

      
   page.on('dialog',async dialog=>{
     expect(dialog.type()).toContain("alert");
     expect(dialog.message()).toContain('I am an alert box!');
    await dialog.accept();

  })
  await page.locator("//button[normalize-space()='Simple Alert']").click();
  await page.waitForTimeout(2000);

})

test('confirmdialog', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/2018/09/automation-form.html');

      
   page.on('dialog',async dialog=>{
     expect(dialog.type()).toContain("confirm");
     expect(dialog.message()).toContain('Press a button!');
    await dialog.accept();  //to click ok
    // await dialog.dismiss(); //t0 click cancel

  })
  await page.locator("//button[normalize-space()='Confirmation Alert']").click();
  await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')
  await page.waitForTimeout(2000);
})
  
test.only('promptdialog', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/2018/09/automation-form.html');

      
   page.on('dialog',async dialog=>{
     expect(dialog.type()).toContain("prompt");
     expect(dialog.message()).toContain('Please enter your name:');
     expect(dialog.defaultValue()).toContain('Harry Potter')
    await dialog.accept('prabu');  //to fill and accept

  })
  await page.locator("//button[normalize-space()='Prompt Alert']").click();
  await expect(page.locator("//p[@id='demo']")).toHaveText('Hello prabu! How are you today?')
  await page.waitForTimeout(2000);
  
})