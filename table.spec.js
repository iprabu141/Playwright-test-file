import {test,expect}from'@playwright/test';
test('table handling',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/2018/09/automation-form.html");
    const table= page.locator("#productTable")


    //total no of rows and column

    const columns= table.locator('thead tr th')
    console.log(await columns.count());
    expect(await columns.count()).toBe(4)

    const Rows= table.locator('tbody tr')
    console.log(await Rows.count());
    expect(await Rows.count()).toBe(5);

//selct checkboc for particular item
    
//     const selRow = rows.filter({  
//         has: page.locator('td'),
//         hasText: 'Smartwatch'
//     })
// await selRow.locator('input[type="checkbox"]').check();


    //select multiple checkbox

    // const products=["Smartphone","Laptop","Tablet "]
    // for(const product of products){
    //     const selRow=rows.filter({
    //         has: page.locator('td'),
    //         hasText: product
    //     })
    //     await selRow.locator('input').check();
    // }

    //select checkbox of item as reusable


//     async function product(Rows,page,name){
//         const selrow=Rows.filter({
//             has: page.locator('td'),
//             hasText:name
//         })
//         await selrow.locator('input').check();
//     }
//       await product(Rows,page,'Smartphone')
// await product(Rows,page,'laptop')
// await product(Rows,page,'Tablet')


    //print all products in table

    // for(let i=0;i<await Rows.count();i++){
    //     const row=Rows.nth(i)
    //     const tds=row.locator('td') ;

    //     for(let j=0;j<await tds.count()-1;j++)

    //     {
    //         console.log(await tds.nth(j).textContent())
    //     }
    // }

 

    //read data from all pages in the table

const pages=await page.locator('#pagination li a')
console.log(await pages.count())

    for(let i=0;i<await pages.count();i++){
        if(i>0)
        {
            await pages.nth(i).click();

        }
        
    for(let i=0;i<await Rows.count();i++){
        const row=Rows.nth(i)
        const tds=row.locator('td') ;

        for(let j=0;j<await tds.count()-1;j++)

        {
            console.log(await tds.nth(j).textContent())
        }
    }

    }

    await page.waitForTimeout(5000);
  
})
