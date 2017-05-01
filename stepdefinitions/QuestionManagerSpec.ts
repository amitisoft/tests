/**
 * Created by Amiti on 27-04-2017.
 */
import {$, element, by, browser, utils} from 'protractor';
import { QuestionManager } from '../pages/QuestionManagerPage';
import { defineSupportCode,TableDefinition } from 'cucumber';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({Given,When,Then}) {
    let question: QuestionManager = new QuestionManager();

    Given(/^I am on the Dashboard page$/, () => {

        //console.log(question.hr_dashboard.isPresent());
        //return expect(question.hr_dashboard.isPresent()).to.be.true;

    });

    When(/^I click on question manager$/, () => {

        return question.QuestionManager_Tab.click();

    });

    When(/^I click on create Questions$/, () => {

        return question.createQuestion.click();

    });

    When(/^I enter text in create question$/, () => {

        return question.question_Field.sendKeys('What is the sum of 3+2 ?');

    });

    When(/^I enter multiple choice Answer$/, (options : TableDefinition) => {

        let data = options.hashes();
        for (let i = 1; i < 5; i++) {

             question.EnterOptions('option'+i,data[i-1].answers);

        }
    });

    When(/^I select the check box for right choices$/, () => {

        question.CorrectOptions(1);
        question.CorrectOptions(2);


    });

    When(/^I select category "(.*?)" from dropdown$/, (cat) => {

        return question.SelectCategory(cat);

    });

    When(/^I click on Add Button$/, () => {

        return question.submit_Button.click();

    });

    Then(/^I Verify the success alert$/, () => {

        return question.alertVerify();

       });

    Then(/^I Verify the new question added$/, () => {

        question.showQuestion.click();
        //return question.questionCount();

    });

    Then(/^I should get the page with Questions fields$/, () => {

        //browser.pause();
        //browser.sleep(700000);
        //return browser.sleep(700000);

    });

    Given(/^I am on the question manager module$/, () => {

        return question.QuestionManager_Tab.click();

    });


    When(/^I click on create question$/, () => {

        return question.createQuestion.click();

    });


    Then(/^I verify Add button isdisabled$/, (callback) => {

        question.submit_Button.isEnabled().then(function(enabled){
            console.log(enabled);
           //expect(enabled).to.be.eventually.equalto("false");
        }); return;


    });

    When(/^I add Quetion text$/, () => {

        return question.question_Field.sendKeys("Sample text");
    });

    When(/^I add first answer choice$/, () => {

        return question.EnterOptions("option1","answer1_text");
    });

    When(/^I add all options$/, () => {

        question.EnterOptions("option2","answer2_text");
        question.EnterOptions("option3","answer3_text");
        question.EnterOptions("option4","answer4_text");

    });

    When(/^I slect one correct option$/, () => {

        question.CorrectOptions(2);

    });

    When(/^I click on clear Button$/, () => {

        question.clear_Button.click();

    });

    Then(/^I verify All fields are empty$/, () => {

        browser.pause();

    });

})