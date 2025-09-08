import{test,expect}from '@playwright/test';
test('file upload',async({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")


        await page.locator("#filesToUpload").setInputFiles(['uploadfiles/Prabu_I_Resume.pdf','uploadfiles/prabu.pdf']);
        await page.waitForTimeout(3000)
        await expect(await  page.locator("#fileList li:nth-child(1)")).toHaveText("Prabu_I_Resume.pdf");
      await  expect(await  page.locator("#fileList li:nth-child(2)")).toHaveText("prabu.pdf");
        await page.locator("#filesToUpload").setInputFiles([]);
    await    expect(await  page.locator("#fileList")).toHaveText("No Files Selected");

        await page.waitForTimeout(4000)
        
})