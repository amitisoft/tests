/**
 * Created by Amiti on 27-04-2017.
 */
import {$, element,by,browser} from 'protractor';
let path = require('path');

export class CadidateDataManager {

    public CandidateData_Tab: any;
    public Browse_button: any;
    public Upload_button: any;


    constructor() {
        this.CandidateData_Tab = element(by.xpath('//amiti-hr-dashboard/amiti-dashboardpanel/nav/div/div/ul/li[4]/a'));
        this.Browse_button = element(by.id('files'));
        this.Upload_button = element(by.buttonText('UPLOAD'));
    }

    addFile(fileUrl : any) {
        let fileToUpload = fileUrl,
            absolutePath = path.resolve(__dirname, fileToUpload);

        let remote = require('selenium-webdriver/remote');
        browser.setFileDetector(new remote.FileDetector());

        $('input[type="file"]').sendKeys(absolutePath);
    }
}