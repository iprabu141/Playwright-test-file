import{test,expect}from '@playwright/test'
import{loginpage} from '../pom/loginpom'
test('pom',async({page})=>{
const login =new loginpage(page);
await login.gotologinpage();
await login.login('iprabu23','prabu@1234');
await page.waitForTimeout(3000)

})