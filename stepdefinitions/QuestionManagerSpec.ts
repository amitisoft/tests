/**
 * Created by Amiti on 27-04-2017.
 */
import {$, element,by,browser} from 'protractor';
import { QuestionManager } from '../pages/QuestionManagerPage';
import { defineSupportCode } from 'cucumber';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;



defineSupportCode(function ({Given,When,Then}) {
    let question: QuestionManager = new QuestionManager();

    Given(/^I am on the Dashboard page$/, () => {

        return expect(question.hr_dashboard.isPresent()).to.be.true;

    });

    When(/^I click on question manager$/, () => {

        return question.QuestionManager_Tab.click();
    });

    Then(/^I click Upload$/, () => {


    });

})