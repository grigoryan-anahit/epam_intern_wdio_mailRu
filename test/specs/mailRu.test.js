const LocatorPage = require('../pageobjects/mailRu.locators');

describe('Login to Mail.ru', () => {
    it('should say message with invalid credentials', async () => {
        await browser.maximizeWindow();
        await LocatorPage.open();

        await LocatorPage.login('tomsmith', 'SuperSecretPassword!');
        await browser.pause(2000)
        await expect(LocatorPage.wrongCredMessage).toHaveTextContaining('Неверное имя или пароль');
        await browser.pause(2000)
    });
    it('should login with valid credentials', async () => {
        await LocatorPage.open();

        await LocatorPage.login('nareyan5', 'zsxdc412');
        await expect(LocatorPage.welcomeUsername).toHaveTextContaining('nareyan5@mail.ru')
    });
});
describe('Create emails ', () => {
    it('should create new message', async () => {
await LocatorPage.createEmail.click();
        await browser.pause(2000)
       await LocatorPage.toWhomInput.setValue('grigoryan-anahit@mail.ru')
       await LocatorPage.temaInput.setValue('testing msg')
       await LocatorPage.bodyInput.setValue('Hello , how are you can you call me today?');
        await LocatorPage.sendMessageBtn.click();
        await browser.pause(20000)

    });
    it('should see sent message in inbox', async () => {
     await LocatorPage.inbox.click();
     await expect(LocatorPage.sentMessage).toBeExisting();
    });
});


