import {Locator,Page} from '@playwright/test';
import fs from 'fs';
import path from 'path';
let datafile=fs.readFileSync(path.join(__dirname,'../testdata/register.json'),'utf-8')
let data=JSON.parse(datafile)
class Register{

    page:Page;
    register_link:Locator;
    f_name:Locator;
    l_name:Locator;
    email:Locator
    ph_no:Locator;
    Occupation_click:Locator;
    gender:Locator;
    pass:Locator;
    C_pass:Locator;
    age:Locator;
    reg_btn:Locator;
    constructor(page:Page){
        this.page=page;
        this.register_link=page.getByText('Register here')
        this.f_name=page.getByRole('textbox',{name:'First Name'});
        this.l_name=page.getByRole('textbox',{name:'Last Name'});
        this.email=page.getByRole('textbox',{name:'Email'});
        this.ph_no=page.getByRole('textbox', { name: 'enter your number' })
        this.Occupation_click=page.getByRole('combobox');
        this.gender=page.getByRole('radio',{name:`${data.gen}`,exact:true})
        this.pass=page.getByPlaceholder('Passsword',{exact:true})
        this.C_pass=page.getByPlaceholder('Confirm Passsword',{exact:true})
        this.age=page.getByRole('checkbox');
        this.reg_btn=page.getByRole('button',{name:'Register'});

    }
    async reg(fn:string,ln:string,em:string,pn:string,occ:string,Pass:string,c_p:string){
        await this.register_link.click({timeout:5000});
        await this.f_name.fill(fn);
        await this.l_name.fill(ln);
        await this.email.fill(em);
        await this.ph_no.fill(pn);

        await this.Occupation_click.selectOption(occ);
        await this.gender.click()
        await this.pass.fill(Pass);
        await this.C_pass.fill(c_p);
        await this.age.check();
        await this.reg_btn.click();
    }

}
export default Register;