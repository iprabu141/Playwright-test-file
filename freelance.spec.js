import{test,expect}from'@playwright/test';
import{freepom}from'../pom/freelancepom';
import { freesignpom } from '../pom/freesignup';
test("freelance",async({page})=>{



const freelanceapp= new freepom(page);
await freelanceapp.gotopage();
await freelanceapp.managetab();

const freesign=new freesignpom(page);
await freesign.signup("prabu141","iprabu141@gmail.com","prabu1234");
await freesign.selectintrest();
await freesign.selectgender();
await freesign.selectState("Tamil Nadu");
await freesign.selecthobbies(["Reading","Swimming"]);
await page.pause();
})