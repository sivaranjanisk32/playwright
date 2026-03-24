const { Given, When, Then } = require('@cucumber/cucumber');
const {LoginLocators} = require('../pages/login_page');

Given('User is on the login page', async function () {
    this.loginPage = new LoginLocators(this.page);
});

When('User enters valid username and password', async function (dataTable) {
    const data = dataTable.rowsHash();
    await this.loginPage.enterUsername(data.username);
    await this.loginPage.enterPassword(data.password);
});

Then('User clicks the login button', async function () {
    await this.loginPage.clickLogin();
});