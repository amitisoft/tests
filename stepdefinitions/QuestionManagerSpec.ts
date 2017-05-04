/**
 * Created by Amiti on 27-04-2017.
 */
import {$, element, by, browser, utils, $$} from 'protractor';
import { QuestionManager } from '../pages/QuestionManagerPage';
import { defineSupportCode,TableDefinition } from 'cucumber';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({Given,When,Then}) {
    let question: QuestionManager = new QuestionManager();

    Given(/^I am on the Dashboard page$/, () => {

        question.hr_dashboard.isPresent().then(function (isPresent) {
            return expect(isPresent).to.be.true;
        });
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

    When(/^I enter multiple choice Answer$/, (options: TableDefinition) => {

        let data = options.hashes();
        for (let i = 1; i < 5; i++) {

            question.EnterOptions('option' + i, data[i - 1].answers);

        }
    });

    When(/^I select the check box for right choices$/, () => {

        question.getCorrectOptions(1).click();
        question.getCorrectOptions(2).click();


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

    Then(/^I Verify the question count is updated to "(.*?)"$/, (number) => {

        question.showQuestion.click();
        return expect(question.questionTable.count()).to.be.eventually.equal(number);
    });

    Then(/^I should get the page with Questions fields$/, () => {

        browser.pause();
        browser.sleep(700000);
        return browser.sleep(700000);

    });

    Given(/^I am on the question manager module$/, () => {

        browser.sleep(70000);

        return question.QuestionManager_Tab.click();

    });


    When(/^I click on create question$/, () => {

        return question.createQuestion.click();

    });


    Then(/^I verify Add button isdisabled$/, () => {

        question.submit_Button.isEnabled().then(function (enabled) {
            return expect(enabled).to.be.false;
        });


    });

    When(/^I add Quetion text$/, () => {

        return question.question_Field.sendKeys("Sample text");
    });

    When(/^I add first answer choice$/, () => {

        return question.EnterOptions("option1", "answer1_text");
    });

    When(/^I add all options$/, () => {

        question.EnterOptions("option2", "answer2_text");
        question.EnterOptions("option3", "answer3_text");
        question.EnterOptions("option4", "answer4_text");

    });

    When(/^I slect one correct option$/, () => {

        return question.getCorrectOptions(2).click();

    });

    Then(/^I verify Add button isenabled$/, () => {

        question.submit_Button.isEnabled().then(function (enabled) {
            return expect(enabled).to.be.true;
        });

    });

    When(/^I click on clear Button$/, () => {

        return question.clear_Button.click();

    });

    Then(/^I verify Question field is empty$/, () => {

        question.createQuestion.getText().then(function (text) {
            return expect(text).to.be.empty;
        });
    });

    Then(/^I verify Option fields are empty$/, () => {

        for (let i = 1; i < 5; i++) {

            question.getOptions('option' + i).getText().then(function (text) {
                question.getOptions('option' + i).click();
                return expect(text).to.be.empty;
            });
        }
    });

    Then(/^I verify check box are empty$/, () => {

        for (let i = 1; i < 5; i++) {
            question.getCorrectOptions(i).isSelected().then(function (box) {
                return expect(box).to.be.false;
            });
        }
    });

    Then(/^I verify category combo is empty$/, () => {

        return question.getCategory.getText().then(function (comboText) {
            return expect(comboText).to.be.empty;
        });
    });

    Given(/^show question is selected$/, () => {

        return question.showQuestion.click();

    });

})