export default class LoginPage {
    constructor(page) {
        this.page = page;
        // locators
        this.loginlink = '#login2';
        this.inputUsername = '#loginusername';
        this.inputPassword = '#loginpassword';
        this.loginButton = "//button[text()='Log in']";
        this.welcomeLabel = '#nameofuser';
    }

    // navigate to the site home page
    async goToLoginPage() {
        await this.page.goto('https://www.demoblaze.com/');
    }

    // perform the login flow (click, enter credentials, submit)
    async login(username, password) {
        // open the login modal
        await this.page.locator(this.loginlink).click();
        // wait for username field to appear before interacting
        await this.page.waitForSelector(this.inputUsername, { state: 'visible' });
        await this.page.locator(this.inputUsername).fill(username);
        await this.page.locator(this.inputPassword).fill(password);
        await this.page.locator(this.loginButton).click();
    }

    // return the visible welcome message (e.g. "Welcome abhib77")
    async getWelcomeMessage() {
        await this.page.waitForSelector(this.welcomeLabel, { state: 'visible' });
        return this.page.locator(this.welcomeLabel).textContent();
    }

    // helper that performs login and listens for an alert/dialog message
    // returns the dialog text if one appears. Uses waitForEvent to be reliable.
    async loginAndGetDialog(username, password) {
        const [dialog] = await Promise.all([
            this.page.waitForEvent('dialog'),
            this.login(username, password),
        ]);

        const message = dialog.message();
        await dialog.accept();
        return message;
    }
}
