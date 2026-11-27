import{Page,Locator} from '@playwright/test';
class Login{
    page:Page;
    email:Locator;
    pass:Locator;
    log_btn:Locator;
    for_pass_link:Locator
    em_for:Locator;
    em_pass:Locator;
    em_c_pass:Locator
    save_btn:Locator;

    constructor(page:Page){
        this.page=page;
        this.email=page.getByRole('textbox',{name:'Email'});
        this.pass=page.getByRole('textbox',{name:'enter your passsword'});
        this.log_btn=page.getByRole('button',{name:'Login'});
        this.for_pass_link=page.locator('//a[text()="Forgot password?"]');
        this.em_for=page.getByRole('textbox',{name:'Enter your email address'});
        this.em_pass=page.getByRole('textbox',{name:'Passsword'});
        this.em_c_pass=page.getByRole('textbox',{name:'Confirm Password'})
        this.save_btn=page.getByRole('button',{name:'Save New Password'})
    }
    async Log(email:string,pass:string){
        await this.email.fill(email);
        await this.pass.fill(pass);
        await this.log_btn.click();
    }
    async forgot(em:string,p:string,cp:string){
        await this.for_pass_link.click();
        await this.em_for.fill(em);
        await this.em_pass.fill(p);
        await this.em_c_pass.fill(cp);
        await this.save_btn.click();
    }
}
export default Login