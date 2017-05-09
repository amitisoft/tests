import { browser } from 'protractor';
import { CategorymanPageObject } from '../pages/CategoryManagerPage';
import { defineSupportCode } from 'cucumber';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;


defineSupportCode(function ({Given,When,Then}) {
   
    let search: CategorymanPageObject = new CategorymanPageObject();

 Given(/^I click on category manager module$/, () => {
        browser.sleep(5000)
       return search.categoryManager.click();

        //return expect(browser.getTitle()).to.eventually.equal('AmitiOnlineTest');
    });



 When(/^click on create new category$/, () => {
   browser.sleep(3000);
         return search.createCategory.click();
    });


 When(/^enter text  for category name$/, () => {
   browser.sleep(4000);
        return search.entercategory.sendKeys("Java");
    });

 When(/^enter description for category description$/, () => {
   browser.sleep(4000);
       return search.categoryDesc.sendKeys("microsifnsdakf")
    });


When(/^click on add button$/, () => {
   browser.sleep(3000);
         return search.addButton.click();
    });


Then(/^click on clear button$/, () => {
   browser.sleep(3000);
         return search.clearButton.click();
    });

    })