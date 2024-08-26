
describe('Add to Cart Test', () =>{

    it('Add to Cart', async()=>{
        const addtocartButton = await browser.$('//button[@class="btn btn_secondary btn_small btn_inventory"]')

        await addtocartButton.click()
        await browser.pause(5000)
    });
});