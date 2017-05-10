import { browser,protractor } from 'protractor';
import { TestmanPageObject } from '../pages/TestManagerPage';
import { defineSupportCode } from 'cucumber';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import { ProtractorBrowser}from 'protractor'; 



defineSupportCode(function ({Given,When,Then}) {
    let search: TestmanPageObject = new TestmanPageObject();

 Given(/^I select the CREATE TEST button$/, () => {
        browser.sleep(5000)
       return search.testManager.click();

        //return expect(browser.getTitle()).to.eventually.equal('AmitiOnlineTest');
    });



 When(/^I Enter email$/, () => {
   browser.sleep(3000);
        return search.enterText.sendKeys("prashanth@amiti.com");
    });


 When(/^I Enter Subject$/, () => {
   browser.sleep(4000);
        return search.enterSubject.sendKeys("protractor.Key.TAB");
    });

 When(/^I Enter Post Applied$/, () => {
   browser.sleep(4000);
        return search.SelectCategory()
    });



When(/^I Click on Bold Button$/, () => {
   browser.sleep(10000);
      return search.boldButton.click();
   });

 When(/^I Enter Mail Body$/, () => {
   browser.sleep(10000);
        return search.enterMailbody.sendKeys("HI AM PRASHANTH\nhi this prashanth");
    
});

 When(/^I verify bold$/, () => {
  //browser.sleep(2000);
       // return search.boldVerify.getText().getCssValue('font-weight').then(function(inputValue) {
        //.getCssValue('font-weight')
 // console.log(inputValue);
  //inputValue.eventually.equal('bold').then(function(outputValue) {
  //console.log(outputValue);
  //});


        browser.wait(search.waitForCssValue(search.boldVerify, "font-weight", "normal"), 1000).then(function () {
    //success handler
}, function (error) {
    expect(false).to.be.false;
});
});


//expect(elm.getCssValue("text-decoration")).toEqual("none");
//expect(element(by.css('h1.text-center')).getText()).toEqual('ArrowGrey Slim Fit Formal Trouser');
// return expect(search.boldVerify.getCssValue("font-weight").count()).to.eventually.be.eq(700);
   


    When(/^I Select Exam category$/, () => {
    browser.sleep(10000);
	
            search.enterCategory.sendKeys("java");
           browser.sleep(20000);
             
return browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function (click) {
           browser.sleep(20000);
search.catLink.click();
search.enterCategory.clear();
});

    });

 Then(/^I again select exam category$/, () => {
   browser.sleep(20000);
return search.enterCategory.sendKeys("QA").then(function (click) {
           browser.sleep(20000);
search.catLink.click();
   });
   });
Then(/^I verify$/, () => {
   browser.sleep(30000);

      return expect(search.selCat.getText()).to.eventually.equal('Java');
   });


   Then(/^I reset$/, () => {
   browser.sleep(10000);
      return search.resetButt.click();
   });


Then(/^I verify Option fields are empty$/, () => {


search.getOptions('enterText').getText().then(function (text) {
//search.getOptions('option' + i).click();
return expect(text).to.be.empty;
});

});


  



 Given(/^I select the Manage TEST button$/, () => {
   browser.sleep(4000);
      return search.manageButt.click();
   });


     When(/^I Select checkboxes$/, () => {

browser.sleep(30000);
return search.CorrectOptions();



    });
Then(/^I click start$/, () => {
   browser.sleep(20000);
      return search.startButt.click();
   });




 Given(/^I select the  result manager button$/, () => {
   browser.sleep(20000);
      return search.result_man_Butt.click();
   });



//When(/^I Select category$/, () => {
 //  browser.sleep(4000);
    //    return search.ResultCategory()
   // });


//When(/^I enter name and score$/, () => {
   //browser.sleep(4000);
    //    return search.nameScore.sendKeys("sarath,30");
   // });

//Then(/^I click search$/, () => {
  // browser.sleep(20000);
     // return search.resultSearch.click();
  // });



})

