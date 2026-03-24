const {Before, After} = require('@cucumber/cucumber');
const {BrowserManager} = require('../config/browsermanager');
const {BaseClass} = require('../utils/base');
const env = require('../config/env');
 
Before(async function() {
    const browserSetup = await BrowserManager.browserlaunch();
    this.browser = browserSetup.browser;
    this.context = browserSetup.context;
    this.page = browserSetup.page;
    await BaseClass.navigateToUrl(this.page, env.baseurl);
});

After(async function() {
    await this.browser.close();
});
