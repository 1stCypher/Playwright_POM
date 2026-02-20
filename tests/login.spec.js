import { test, expect } from '@playwright/test';
import { LoginPage } from '../loginPage/login';

test("login the test", async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.go_to_login_psage()

    await Login.login_Function("tomsmith", "SuperSecretPassword!");

    // Optional: Assert successful login
    await expect(page.locator('#flash')).toContainText("You logged into a secure area!");
});