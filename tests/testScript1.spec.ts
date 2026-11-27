import{test} from '@playwright/test';
import Cart from '../POM/cart.page';
import Home from '../POM/home.page';
import Login from '../POM/login.page';
import Payment from '../POM/payment.page';
import Download from '../POM/download.page';
import fs from 'fs';
import path from 'path';

//For login page data
const logdatafile=fs.readFileSync(path.join(__dirname,'../testdata/login.json'),'utf-8');
const logdata=JSON.parse(logdatafile);
//for home page data
const homePagedataFile=fs.readFileSync(path.join(__dirname,'../testdata/home.json'),'utf-8');
const homePagedata=JSON.parse(homePagedataFile);
//for credit details
const paymentdetaildata=fs.readFileSync(path.join(__dirname,'../testdata/credit.json'),"utf-8")
const paymentdata=JSON.parse(paymentdetaildata)

//test function starts here
test("Cart page testing",async ({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    
    await page.goto(logdata.url);
    //Login page
    const logPage=new Login(page);
    await logPage.Log(logdata.email,logdata.pass);
    //Home page
    const homePage=new Home(page);
    // await page.waitForTimeout(2000);
    for(let d of homePagedata.add ){
        await homePage.add(d)
    }
    await homePage.carts();


    //cart page
    const cartPage=new Cart(page);
    await cartPage.buy();

    //Payment page
    const pay=new Payment(page);
    await pay.credit(paymentdata.card_number,paymentdata.month,paymentdata.date,paymentdata.CVV,paymentdata.name);
    await pay.address(paymentdata.email,paymentdata.country);
    await pay.final_order();
    //Download page
    const dow=new Download(page);
    await dow.downloads();
    await dow.dow_history();
    


})