import {test,expect}from '@playwright/test';
test('date picker',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/2018/09/automation-form.html");
    // await page.locator("#datepicker").click( ) 
    await page.locator("input[id='txtDate']").click();

    const year="2026";
    const month="March";
    const date="23"

    while(true)
        {
            const currentyear=await page.locator(".ui-datepicker-year").textContent()
        const currentmonth=await page.locator(".ui-datepicker-month").textContent()

    
        if(currentyear==year  && currentmonth==month)
     {
        break;
     }
          await page.locator("[title='Next']").click();
          //await page.locator("[title='Prev']").click(); //if year is previous then current then click previous button

        }
        
        /*const dates=await page.$$("a[class='ui-state-default']")
            for(const dt of dates)
            {
                if(await dt.textContent()==date){
                    await dt.click();  
                    break; 
                }
                
            }
                */
    await page.locator(`//a[@class='ui-state-default'][text()='${date}']`).click();
    await expect(await page.locator("#datepicker")).toHaveValue("03/23/2026");

    await page.waitForTimeout(3000);
    })




 