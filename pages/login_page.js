const {BaseClass} = require('../utils/base');

class LoginLocators {

    constructor(page) {
        this.page = page;
        this.usernameInput = '#username';
        this.passwordInput = '#password';
        this.loginButton = '#login';
    }

    async enterUsername(username) {
        await BaseClass.fillInput(this.page, this.usernameInput, username);
    }

    async enterPassword(password) {
        await BaseClass.fillInput(this.page, this.passwordInput, password);
    }

    async clickLogin() {
        await BaseClass.clickElement(this.page, this.loginButton);
    }

};

module.exports = {LoginLocators};