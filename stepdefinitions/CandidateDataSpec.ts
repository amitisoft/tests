/**
 * Created by Amiti on 27-04-2017.
 */
import {$, element,by,browser} from 'protractor';
import { CadidateDataManager } from '../pages/CandidateDataPage';
import { defineSupportCode } from 'cucumber';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;



defineSupportCode(function ({Given,When,Then}) {
    let candidate: CadidateDataManager = new CadidateDataManager();

    Given(/^I go to CandidateData Dashboard$/, () => {

        return candidate.CandidateData_Tab.click();

    });

    When(/^I add the data file Directory$/, () => {

        candidate.addFile('C:/Users/Amiti/Downloads/sd.txt');

    });

    Then(/^I click Upload$/, () => {
        browser.sleep(50000);
        return candidate.Upload_button.click();

    });

});