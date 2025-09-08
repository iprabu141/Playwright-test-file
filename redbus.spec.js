import {test,expect}from'@playwright/test'
test('redbus',async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.locator("(//div[@class='labelCityWrapper___8fa82e'])[1]").click();

     await page.waitForSelector('.autoFill li', { timeout: 5000 });

  // Get all suggestion elements
  const suggestions = await page.$$('.autoFill li');

  console.log(`Total suggestions found: ${suggestions.length}`);

  for (const [index, suggestion] of suggestions.entries()) {
    const text = await suggestion.textContent();
    console.log(`Suggestion ${index + 1}: ${text?.trim()}`);
  }

})