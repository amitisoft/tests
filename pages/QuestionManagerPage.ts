/**
 * Created by Amiti on 27-04-2017.
 */
import {$, element,by} from 'protractor';

export class QuestionManager {
    public hr_dashboard: any;
    public QuestionManager_Tab: any;

    constructor() {
        this.hr_dashboard = element(by.tagName('amiti-hr-dashboard'));
        this.QuestionManager_Tab = element(by.xpath('//amiti-hr-dashboard/amiti-dashboardpanel/nav/div/div/ul/li[1]/a'));
    }


}
