import{test, expect} from '@playwright/test';

test('click multiple buttons using for loop', async ({page})=>{

    await page.goto('https://www.facebook.com/')

    const buttons = await page.$$('button')

    console.log(buttons);

    // for( let i=0; i<buttons.length; i++){
    //     await buttons[i].click();
    // }

    for(const button of buttons){
        await button.click()
    }
    page.close()
})