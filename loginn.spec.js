import {test,expect}from '@playwright/test';
import {loginn}from '../pom/loginn';
test("loginn",async({page})=>{

    const login= new loginn(page);
    await login.gotopage(); 
    await login.loginn("prabu","prabu1234");
    await page.waitForTimeout(2000);
   
})