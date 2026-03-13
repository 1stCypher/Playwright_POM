import { test, expect } from '@playwright/test';
import LoginPage from '../Pages/LoginPage';

// tests refactored to use Page Object Model properly

test.describe('Login page tests', () => {
    let login;

    test.beforeEach(async ({ page }) => {
        login = new LoginPage(page);
        await login.goToLoginPage();
    });

    test('TC01_Succesfull Login', async () => {
        await login.login('abhib77', 'Dhurandhar@2025');
        const welcome = await login.getWelcomeMessage();
        expect(welcome).toBe('Welcome abhib77');
    });

    test('TC02_InCorrect Username', async () => {
        const message = await login.loginAndGetDialog('nonexistentuser123', 'Dhurandhar@2025');
        expect(message).toBe('User does not exist.');
    });

    test('TC03_InCorrect Password', async () => {
        const message = await login.loginAndGetDialog('abhib77', 'adsetfdrgy@2025');
        expect(message).toBe('Wrong password.');
    });
});