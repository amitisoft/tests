/**
 * Created by Amiti on 27-04-2017.
 */
import {$, element, by, protractor, promise, Ptor, browser} from 'protractor';

export class QuestionManager {

    public hr_dashboard: any;
    public QuestionManager_Tab: any;
    public createQuestion: any;
    public question_Field: any;
    public submit_Button: any;
    public showQuestion: any;
    public submitAlert: any;
    public clear_Button: any;

    constructor() {

        this.hr_dashboard = element(by.css('.navbar navbar-default'));
        this.QuestionManager_Tab = element(by.xpath('//amiti-hr-dashboard/amiti-dashboardpanel/nav/div/div/ul/li[1]/a'));
        this.createQuestion = element(by.buttonText('CREATE QUESTIONS'));
        this.question_Field = element(by.id('question'));
        this.submit_Button = element(by.buttonText('ADD'));
        this.showQuestion = element(by.buttonText('SHOW QUESTIONS'));
        this.showQuestion = element(by.buttonText('CLEAR'));

    }

    EnterOptions(optionNo, answer) {

        element(by.name(optionNo)).click().then(function () {
            element(by.name(optionNo)).sendKeys(answer);

        });

    }

    CorrectOptions(optionNo) {

        return element(by.id('option' + optionNo + 'IsCorrect')).click();

    }

    SelectCategory(category) {

        let select = element(by.id('singleSelect'));
        return select.$('[value="'+category+'"]').click();

    }

    questionCount() {

        $('.table table-striped tr').then(function (rowCount) {
            //console.log("Count:" + rowCount);
        });
        return;

    }

    alertVerify() {

        browser.sleep(60000).then(function () {
            console.log(browser.switchTo().alert().getText());
            return browser.switchTo().alert().accept();
        });
    }

}