describe('FriendsListTests', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });


    it('Test 1: List should be visible.', async () => {
        await element(by.id('emailInput')).typeText('test@test.com');
        await element(by.id('passwordInput')).typeText('test123');
        await element(by.id('signInButton')).tap();
        await expect(element(by.text('Friends'))).toBeVisible();
        await expect(element(by.id('friendsList'))).toBeVisible();
    });
});