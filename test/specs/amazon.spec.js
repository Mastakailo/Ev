const {expect} = require("chai");

describe('', () => {
    before('go to amazom.com', () => {
        browser.url('https://www.amazon.com/')
    });
    it('get title', () => {
        expect(browser.getTitle()).eq("Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more")
    });

    // it('should open login window', () => {
    //     browser.$('//a[@href="/gp/navigation/redirector.html/ref=sign-in-redirect?ie=UTF8&associationHandle=usflex&currentPageURL=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_custrec_signin&pageType=Gateway&switchAccount=&yshURL=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_custrec_signin"]').click();
    //    // browser.$('//*[@class="nav-action-button"]').click();
    // });

    // it('get h1', () => {
    //     const actual = browser.$("//h1").getText();
    //     const expected = "Sign-In";
    //     expect(actual).eq(expected)
    // });

    it('set email ', () => {
        browser.$('//input[@type="text"]').setValue("car phone holder");
        ;
    });

    it('should  click `continue ` btn ', () => {
        browser.$('//input[@type="submit"]').click();
        browser.pause(1000);
    });


    // it('should sort by department', () => {
    //     browser.$('//span[@dir="auto"]').click();
    //     browser.pause(15000);
    // });



    let max = 0;
    let maxDiscountProduct;
    it('should add the product with the highest discount on the first page to bag', () => {
        const products = $$('//div[@data-index]');
        console.log (products.length);
        console.log ("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        const count = products.length;
        for (let i = 0; i < count; i++) {
                const originalPrice = $(`(${'//div[@data-index]'})[${i}]//span[@aria-hidden="true"]`).getText().slice(1);
                const discountPrice = $(`(${'//div[@data-index]'})[${i}]//span[@id = "priceblock_saleprice"]`).getText().replace(/\s/g, '.').slice(1);
                const difference = (+originalPrice - +discountPrice).toFixed(2);
                if (+difference > max) {
                    max = +difference;
                    maxDiscountProduct = $(`(${'//div[@data-index]'})[${i}]//span[@class = "priceBlockStrikePriceString a-text-strike"]`);
        maxDiscountProduct.click();
                }
            }

        // browser.pause(500);
        // const productInListTitle = browser.$('//span[@id="productTitle"]').getText();
        // browser.$('//select[@id="native_dropdown_selected_size_name"]').selectByVisibleText("8");
        // browser.$('//input[@id="add-to-cart-button"]').click();
        // browser.pause(500);
        // browser.$('//a[@id="nav-cart"]').click();
        // browser.refresh();
        // const productInCartTitle = browser.$('//span[@class="a-size-medium sc-product-title"]').getText();


        // it('set password ', () => {
        //     browser.$('//input[@type="password"]').setValue("A8044001a");
        // });

        // it('should  click `sign in ` btn ', () => {
        //     browser.$('//input[@id="signInSubmit"]').click();
        //     browser.pause(25000);
        // });



    });

});

    //span[@class="a-size-medium inlineBlock unitLineHeight dealPriceText"]').getText();
// it('should click button Submit after filling all fields', () => {
//     RegistrationPage.submitBtn.click();
// });
// get submitBtn() {
//     return $('//form//button[@type="submit"]');
// }