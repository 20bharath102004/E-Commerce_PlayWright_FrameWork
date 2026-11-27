import {Page,Locator} from '@playwright/test';
import fs from 'fs';
import path from 'path';
let datafile=fs.readFileSync(path.join(__dirname,'../testdata/home.json'),'utf-8');
let data=JSON.parse(datafile);
class Home{
    page:Page;
    home_btn:Locator;
    order:Locator;
    cart:Locator;
    signOut:Locator;
    view:Locator;
    add_To:Locator;
    filter:Locator;
    min_Price:Locator;
    max_Price:Locator;
    Categories:Locator;
    Sub_cat:Locator;
    search_for:Locator;
    
    constructor(page:Page){
        this.page=page;
        this.home_btn=page.getByRole('button',{name:'HOME'});
        this.order=page.getByRole('button',{name:"ORDERS"});
        this.cart=page.getByRole('button',{name:'Cart'});
        this.signOut=page.getByRole('button',{name:'Sign Out'})
        this.view=page.getByRole('button',{name:'View'});
        this.add_To=page.getByRole('button',{name:'Cart'})
        this.filter=page.getByRole('textbox',{name:"search"});
        this.min_Price=page.getByRole('textbox',{name:'Min Price'});
        this.max_Price=page.getByRole('textbox',{name:"Max Price"});
        this.Categories=page.locator(`//label[@for="cat"]/preceding-sibling::input`)
        this.Sub_cat=page.locator(`//label[@for="sub"]/preceding-sibling::input`)
        this.search_for=page.locator(`//label[@for="ge"]/preceding-sibling::input`)
    }
    async home(){
        await this.home_btn.click();
    }
    async orders(){
        await this.order.click();
    }
    async carts(){
        await this.cart.first().click();

    }
    async signout(){
        await this.signOut.click();
    }
    async View(){
        await this.view.nth(1).click();
    }
    async add(i:number){
        await this.add_To.nth(i).click();
    }
    async filters(d:string){
        await this.filter.fill(d);
        await this.filter.focus();
        await this.filter.press('Enter');
    }
    async min_max(min:string,max:string){
        await this.min_Price.fill(min);
        await this.max_Price.fill(max)
    }
    async category(i:number){
        await this.Categories.nth(i).click();
    }
    async sub_cat(i:number){
        await this.Sub_cat.nth(i).click();
    }
    async search(i:number){
        await this.search_for.nth(i).click();
    }
}
export default Home;