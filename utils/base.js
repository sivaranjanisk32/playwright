class BaseClass {

    static async navigateToUrl(page, url) {
        await page.goto(url);
    };
   //changes the local
    
    static async clickElement(page, locator) {
        await page.click(locator);
    };

    static async fillInput(page, locator, inputValue) {
        if (inputValue === undefined) {
            throw new Error(`Input value for ${locator} is undefined`);
        }
        await page.fill(locator, inputValue.toString());
    };

    static async getText(page, locator) {
        return await page.textContent(locator);
    };

    static async selectOption(page, locator, value) {
        if (typeof value === "number") {
            await page.selectOption(locator, { index: value });
        } else {
            await page.selectOption(locator, value);
        }
    }

    static async getElementAttribute(page, locator, attribute) {
        return await page.getAttribute(locator, attribute);
    }

    static async waitForLoadState(page, state = 'load') {
        await page.waitForLoadState(state);
    }

    static async waitForElement(page, selector) {
        await page.waitForSelector(selector);
    }

};

module.exports = {BaseClass}
