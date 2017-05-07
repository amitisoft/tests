/**
 * Created by Amiti on 27-04-2017.
 */
import {$, element, by, protractor, promise, Ptor, browser, ExpectedConditions, $$} from 'protractor';

export class QuestionManager {

    public hr_dashboard: any;
    public QuestionManager_Tab: any;
    public createQuestion: any;
    public question_Field: any;
    public submit_Button: any;
    public showQuestion: any;
    public clear_Button: any;
    public getCategory: any;
    public questionTable: any;
    public paperManager: any;
    public paperName: any;
    public selectQuestionTable: any;
    public selectedQuestionTable: any;

    constructor() {

        this.hr_dashboard = element(by.xpath('//amiti-hr-dashboard/amiti-dashboardpanel'));
        this.QuestionManager_Tab = element(by.xpath('//amiti-hr-dashboard/amiti-dashboardpanel/nav/div/div/ul/li[1]/a'));
        this.createQuestion = element(by.buttonText('CREATE QUESTIONS'));
        this.question_Field = element(by.id('question'));
        this.submit_Button = element(by.buttonText('ADD'));
        this.showQuestion = element(by.buttonText('SHOW QUESTIONS'));
        this.clear_Button = element(by.buttonText('CLEAR'));
        this.getCategory = element(by.id('singleSelect'));
        this.questionTable = $$('table tr');
        this.paperManager = element(by.buttonText('PAPER MANAGEMENT'));
        this.paperName = element(by.css('[placeholder="Paper Name:"]'));
        this.selectQuestionTable = element(by.xpath("//amiti-questionsmanager/div[3]/div/amiti-papermanagement/div[2]/div[1]/div[2]/table/tbody"));
        this.selectedQuestionTable = element(by.xpath("//amiti-questionsmanager/div[3]/div/amiti-papermanagement/div[2]/div[2]/div/div[5]/table/tbody"));

    }

    EnterOptions(optionNo, answer) {

        element(by.name(optionNo)).click().then(function () {
            element(by.name(optionNo)).sendKeys(answer);

        });
    }

    getOptions(optionNo) {

        return element(by.name(optionNo));

    }

    getCorrectOptions(optionNo) {

        return element(by.id('option' + optionNo + 'IsCorrect'));

    }

    SelectCategory(category) {

        let select = element(by.id('singleSelect'));
        return select.$('[value="'+category+'"]').click();
    }

    alertVerify() {

        browser.wait(protractor.ExpectedConditions.alertIsPresent(), 10000).then(function (ispresent) {
            return browser.switchTo().alert().accept();
        });
    }

    getAlertText() {

        browser.wait(protractor.ExpectedConditions.alertIsPresent(), 10000).then(function (ispresent) {
            browser.switchTo().alert().getText().then(function (text) {
                return text;
            });
        });
    }

    getCategoryItems() {

        return this.getCategory.all(by.tagName('option'));
    }

    paperManage_SelectCategory(category) {

        let select = element(by.tagName('select'));
        return select.$('[ng-reflect-ng-value="'+category+'"]').click();
    }

}