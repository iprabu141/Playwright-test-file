import{test,expect}from'@playwright/test';
test('frame handling',async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")


    const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1.fill("//input[@name='mytext1']","Hii Prabu");


    const frame2=await page.frameLocator("frame[src='frame_2.html']").locator("//input[@name='mytext2']");
    frame2.fill("Hi prabu")

    const fram3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
            // await fram3.fill("//input[@name='mytext3']","Hi frame3")
        const childframes=await fram3.childFrames();
        await childframes[0].locator("//div[@id='i21']").check()
    await page.waitForTimeout(2000)
})


