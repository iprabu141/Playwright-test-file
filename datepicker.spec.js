import{test,expect}from '@playwright/test';
test('date picker',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/2018/09/automation-form.html")


    const month="Feb";
    const year="2035"
    const date="23"

    await page.locator("input[id='txtDate']").click();

    await page.selectOption(".ui-datepicker-year",year)
    await page.selectOption(".ui-datepicker-month",month)
    await page.locator(`//a[@class='ui-state-default'][text()=${date}]`).click()
    expect(await page.locator("#txtDate")).toHaveValue("23/02/2035");


// const options=await page.$$("[class='ui-datepicker-year']")
// for(const option of options)
// {
//     const nyear=await option.textContent();
//     if(nyear.includes(year))
//     {
//         await page.selectOption(".ui-datepicker-year",year)
//     }
// }
// const currentmonth=await page.$$("[class='ui-datepicker-month']");
// for(const months of currentmonth){
//     const nmonth=await months.textContent()
//     if(nmonth.includes(month)){
//         await page.selectOption('.ui-datepicker-month',month)
//     }
// }
await page.waitForTimeout(3000);


})