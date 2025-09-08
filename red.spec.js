import { test, expect } from '@playwright/test';

test('redbus', async ({ page }) => {
  await page.goto('https://www.redbus.in/');
  await page.locator("(//div[@class='placeHolderContainer___17236c'])[1]").click();
  await page.locator("#srcDest").fill("che");
  await page.waitForSelector("//div[@role='listbox']//div[@role='heading']")
const options=await page.locator("//div[@role='listbox']//div[@role='heading']").allTextContents();
await page.waitForTimeout(3000);

for(const option of options){
  // const autosuggest=await option.
  console.log(option)
}

  await page.waitForTimeout(2000);
});


//   await page.waitForSelector("//div[@class='suggestionsWrapper___d2b869']//div[@role='heading']")
// const options=await page.locator("//div[@class='suggestionsWrapper___d2b869']//div[@role='heading']").allTextContents();