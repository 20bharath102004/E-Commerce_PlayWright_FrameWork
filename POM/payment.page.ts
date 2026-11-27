import{Page,Locator} from '@playwright/test';
class Payment{
    page:Page;
    home_btn:Locator;
    orders:Locator;
    cart:Locator;
    signOut:Locator;
    Credit_Card_number:Locator;
    expi_date:Locator;
    expi_month:Locator;
    cvv:Locator;
    name_on:Locator;
    app_cou:Locator;
    apply_btn:Locator;
    email:Locator;
    country:Locator
    
    place_Order:Locator;
    constructor(page:Page){
        this.page=page;
        this.home_btn=page.getByRole('button',{name:'HOME'});
        this.orders=page.getByRole('button',{name:"ORDERS"});
        this.cart=page.getByRole('button',{name:'Cart'});
        this.signOut=page.getByRole('button',{name:'Sign Out'})
        this.Credit_Card_number=page.getByRole('textbox');
        this.expi_date=page.locator('//select[@class="input ddl"]')
        this.expi_month=page.locator('//select[@class="input ddl"]');
        this.cvv=page.locator('//div[text()="CVV Code "]/following-sibling::input')
        this.name_on=page.locator('//div[text()="Name on Card "]/following-sibling::input')
        this.app_cou=page.locator('//div[text()="Apply Coupon "]/following-sibling::input');
        this.apply_btn=page.getByRole('button',{name:'Apply Coupon'});
        this.email=page.locator('//div[@class="user__name mt-5"]/child::input');
        this.country=page.getByPlaceholder('Select Country');

        this.place_Order=page.getByText('Place Order')
    }
    async home(){
        await this.home_btn.click();
    }
    async order(){
        await this.orders.click();
    }
    async carts(){
        await this.cart.first().click();

    }
    async signout(){
        await this.signOut.click();
    }
    async credit(card:string,month:string,date:string,cvv:string,name:string){
        await this.Credit_Card_number.first().fill(card);
        await this.expi_month.first().selectOption(month);
        await this.expi_date.last().selectOption(date);
        await this.cvv.fill(cvv);
        await this.name_on.fill(name);

    }
    async coupon(){
        await this.app_cou.fill("");
        await this.apply_btn.click();
    }
    async address(email:string,country:string){
        await this.email.fill(email);
        await this.country.pressSequentially(country)
        await this.page.waitForTimeout(2000);
        await this.country.focus();
        
        await this.country.press('Enter');
        // 
        // await this.page.getByText('India', { exact: true }).click();
    }
    async final_order(){
        await this.place_Order.click();
    }
}
export default Payment;