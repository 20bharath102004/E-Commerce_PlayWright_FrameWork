import{Page,Locator} from '@playwright/test';
class Cart{
    page:Page;
    home_btn:Locator;
    orders:Locator;
    signout:Locator;
    continue_shopping:Locator;
    buy_now:Locator;
    del:Locator;
    check:Locator;
    constructor(page:Page){
        this.page=page;
        this.home_btn=page.getByRole('button',{name:'HOME'});
        this.orders=page.getByRole('button',{name:"ORDERS"});
        this.signout=page.getByRole('button',{name:'Sign Out'});
        this.continue_shopping=page.getByRole('button',{name:'Continue Shopping'})
        this.buy_now=page.getByRole('button',{name:'Buy Now'});
        this.del=page.locator('//button[@class="btn btn-danger"]');
        this.check=page.getByRole('button',{name:'Checkout'});
    }
    async home(){
        await this.home_btn.click();
    }
    async order(){
        await this.orders.click();
    }
    async signOut(){
        await this.signout.click();
    }
    async continue(){
        await this.continue_shopping.click();
    }
    async buy(){
        await this.buy_now.click();
    }
    async delete(){
        await this.del.click();
    }
    async che(){
        await this.check.click();
    }
}
export default Cart;