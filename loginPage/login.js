exports.LoginPage = class login {

    constructor(page) {

        this.page = page;

        this.username_box = page.locator('#username');
        this.passward_box = page.locator('#password');
        this.login_button = page.locator('button[type="submit"]');
        URL = 'https://the-internet.herokuapp.com/login'

    }
    async go_to_login_psage() {

        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login_Function(vsarUsername, varPasword) {

        await this.username_box.click();
        await this.username_box.fill(vsarUsername);
        await this.passward_box.click();
        await this.passward_box.fill(varPasword);
        await this.login_button.click();

    }



}