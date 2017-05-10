import { browser } from 'protractor';
import { LoginPageObject } from '../pages/HrLoginPage';
import { defineSupportCode } from 'cucumber';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({Given}) {
    let search: LoginPageObject = new LoginPageObject();

    Given(/^I am on amiti page$/, () => {
        return expect(browser.getTitle()).to.eventually.equal('AmitiOnlineTest');
    });
})

defineSupportCode(function ({When,Then	}) {
    let search: LoginPageObject = new LoginPageObject();

When(/^I click on login button$/, () => {
  browser.sleep(2000)
       return search.loginButton.click();

    });


    When(/^I type "(.*?)"$/, (text) => {
      browser.sleep(2000)
        return search.searchTextBox.sendKeys(text);
    });


 When(/^I enter "(.*?)"$/, (text) => {
   browser.sleep(2000)
        return search.searchTextBoxp.sendKeys(text);
    });

    Then(/^I click on submit button$/, () => {
      browser.sleep(2000)
        return search.searchButton.click();
    });

})
