import { test, expect } from '@playwright/test';

test('irctc', async ({ page }) => {
  await page.goto('https://cosmocode.io/automation-practice-webtable/#google_vignette');


const tweb=await page.locator("//tbody");
const wtext=await tweb.textContent();
// console.log(wtext);
  const trows=await page.locator("//tbody/tr")
const rcount= await trows.count();
c

});


 
