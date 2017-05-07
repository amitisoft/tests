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

    Then(/^I Verify the question count is updated to ([0-9]+?)$/, (number) => {

        question.showQuestion.click();
        return expect(question.questionTable.count()).to.be.eventually.equals(number);
    });

    Given(/^I am on the question manager module$/, () => {

        browser.sleep(20000);
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

    Given(/^I click on Show Questions module$/, () => {

        return question.showQuestion.click();

    });

    Then(/^I verify available options in category dropdown$/, () => {

        return  question.getCategoryItems().getText().then(function (list) {
            console.log("Combo list items are : "+list);
            //expect(list).to.eql([]);

            question.getCategoryItems().count().then(function (count) {
                console.log("Count of combo items : "+count);
                //expect(count).to.equals(18);
            });
        });
    });

    Given(/^I click on edit option for particular question$/, () => {

        //return question.questionTable.$$('td').get(4).click().then(function (count) {
        //element(by.css('.table.table-striped')).all(by.tagName('td')).getText().then(function (count) {
        //amiti-viewquestions/div[3]/div/table/tbody/tr[2]/td[5]
        return element(by.xpath('amiti-viewquestions/div[3]/div/table/tbody/tr[2]/td[5]')).click();
    });

    Then(/^I Verify the pre-filled data$/, () => {

        return ;
    });

    When(/^Edit the question by entering text$/, () => {

        return ;
    });

    When(/^Edit the answer choices$/, () => {

        return ;
    });

    When(/^Edit checkbox of the Right answer$/, () => {

        return ;
    });

    When(/^I click on save$/, () => {

        return ;
    });

    Then(/^I verify question has been saved successfully$/, () => {

        return ;
    });

    When(/^I click on paper management module$/, () => {

        return question.paperManager.click();
    });

    When(/^I enter text for paper name$/, () => {

        return question.paperName.sendKeys("Paper 1");
    });

    When(/^I select "(.*?)" category$/, (category) => {

        return question.paperManage_SelectCategory(category);

    });

    When(/^I select set of questions for paper$/, (selection : TableDefinition) => {

        //element(by.xpath('//amiti-papermanagement/div[2]/div[1]/div[2]/table/thead/tr')).all(by.tagName('th'));
        let data = selection.hashes();
        for (let i = 0; i < selection.rows().length; i++) {
            question.selectQuestionTable.all(by.xpath("//tr["+data[i].optionNo+"]/td[1]/input")).click();
            question.selectQuestionTable.all(by.xpath("//tr["+data[i].optionNo+"]/td[1]/input")).getAttribute("data-questionname").then(function (tableSelect) {
                question.selectedQuestionTable.all(by.xpath("//tr["+(i+1)+"]/td[2]")).getText().then(function (tableSelected) {
                    return expect(tableSelected.toString()).to.eql((i+1)+","+tableSelect);
                });
           });
        }
    });

    Then(/^I verify selected question$/, () => {

        return console.log("Succesfully verified");
    });
});