import{Page,Locator} from '@playwright/test';
import fs from 'fs';
import path from 'path'
class Download{
    page:Page;
    dow_bill_btn:Locator;
    order_history:Locator;
    constructor(page:Page){
        this.page=page;
        this.dow_bill_btn=page.getByRole('button',{name:'Click To Download Order Details in CSV'});
        this.order_history=page.getByText('Orders History Page');
    }
    async downloads(){
        // const download_folder='C:/Users/Bharath/OneDrive/Desktop/filedownload'
        // const name='framework.csv';
        // const fullpath=path.join(download_folder,name);

        const downloadPromise=this.page.waitForEvent('download')
        this.dow_bill_btn.click();
        const download=await downloadPromise;
        await download.saveAs('C:/Users/Bharath/Downloads/framework.csv')
        console.log('Test complete')
    }
    async dow_history(){
        await this.order_history.click();
    }
}
export default Download