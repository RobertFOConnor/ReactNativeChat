describe('LoginTests', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });


    it('Test 1: Email/password input and sign in button should be visible.', async () => {
        await expect(element(by.id('emailInput'))).toBeVisible();
        await expect(element(by.id('passwordInput'))).toBeVisible();
        await expect(element(by.id('signInButton'))).toBeVisible();
    });


    it('should show error message for empty fields.', async () => {
        await element(by.id('signInButton')).tap();
        await expect(element(by.text('Please fill all fields.'))).toBeVisible();

        await element(by.id('emailInput')).typeText('johnmurphy');
        await element(by.id('signInButton')).tap();
        await expect(element(by.text('Please fill all fields.'))).toBeVisible();

        await element(by.id('emailInput')).clearText();

        await element(by.id('passwordInput')).typeText('jellybelly98');
        await element(by.id('signInButton')).tap();
        await expect(element(by.text('Please fill all fields.'))).toBeVisible();
    });


    it('should show error message for invalid credentials.', async () => {
        await element(by.id('emailInput')).typeText('poop@poop.com');
        await element(by.id('passwordInput')).typeText('poopybutt79');
        await element(by.id('signInButton')).tap();
        await expect(element(by.text('Login failed.'))).toBeVisible();
    });


    it('should log in with valid credentials.', async () => {
        await element(by.id('emailInput')).typeText('test@test.com');
        await element(by.id('passwordInput')).typeText('test123');
        await element(by.id('signInButton')).tap();
        await expect(element(by.text('Friends'))).toBeVisible();
    });
});