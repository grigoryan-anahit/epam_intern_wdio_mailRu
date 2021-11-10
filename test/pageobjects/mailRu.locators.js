const Page = require('./page');

class LocatorPage extends Page {

    get inputUsername () { return $('[class="email-input svelte-1tib0qz"]') }
    get usernameContinueBtn () { return $('[class="button svelte-1tib0qz"]') }
    get inputPassword () { return $('[class="password-input svelte-1tib0qz"]') }
    get passwordContinueBtn () { return $('[class="second-button svelte-1tib0qz"]') }

    get wrongCredMessage () { return $('[class="error svelte-1tib0qz"]') }
    get welcomeUsername () { return $('[class="ph-project__user-name svelte-1hiqrvn"]') }
    get createEmail () { return $('[href="/compose/"]') }
    get toWhomInput () { return $('.//div[@class="contactsContainer--3RMuQ"]//input[@class="container--H9L5q size_s--3_M-_"]') }
    get temaInput () { return $('.//div[@class="subject__container--HWnat"]//input[@class="container--H9L5q size_s--3_M-_"]') }
    get bodyInput () { return $('.//div[@role="textbox"]/div[1]') }
    get sendMessageBtn () { return $('.//div[@class="compose-app__buttons"]/span[@title="Отправить"]') }
    get inbox () { return $('[href="/sent/"]') }
    get sentMessage () { return $('[href="/sent/1:90c4b02dbd037388:500000/?"]') }



    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.usernameContinueBtn.click();
        await browser.pause(2000);
        await this.inputPassword.setValue(password);
        await this.passwordContinueBtn.click();
    }


}

module.exports = new LocatorPage();
