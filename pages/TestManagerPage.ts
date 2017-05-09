import { $ } from 'protractor';
import {browser, element, by} from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

export class TestmanPageObject {
   
    public testManager: any;
    public enterText: any;
    public enterSubject: any;
    public dropdown: any;
    public enterCategory: any;
    public catLink: any;
    public selCat: any;
    public enterMailbody: any;
    public manageButt: any;
    public startButt: any;
    public resetButt: any;
    public result_man_Butt: any;
    public nameScore: any;
    public resultSearch: any;
    public boldButton: any;
    public boldVerify: any;
    

    constructor() {
    	this.testManager = element(by.xpath("html/body/amiti-root/div/div/div/amiti-hr-dashboard/amiti-dashboardpanel/div/div[2]/nav/div/ul/li[3]/a"));
       
        this.enterText = $("input[name ='emailTextArea']");
        this.enterSubject = $("input[name ='subject']");

       this.enterMailbody = $("div[class='fr-element fr-view']");
        this.boldButton = $("button[id ='bold-1']");
		this.enterCategory = $("input[name ='category']");
     this.catLink = element(by.xpath("html/body/amiti-root/div/div/div/amiti-hr-dashboard/div/amiti-createtest/div[2]/div[2]/amiti-createtest/div/div/form/div[6]/div[2]/ul[1]/li/a"));

     // this.boldVerify = element(by.xpath("//div[@class='fr-element fr-view']/p[1]"));
      this.boldVerify = element(by.css("div[class^='fr-element fr-view']>p:nth-child(1)"))
      

      this.selCat = element(by.xpath("html/body/amiti-root/div/div/div/amiti-hr-dashboard/div/amiti-createtest/div[2]/div[2]/amiti-createtest/div/div/form/div[7]/div/div[2]/div/span"));

      this.manageButt = $("button[class ='btn btn-primary']");

          this.resetButt = $("button[type ='reset']");

  this.startButt = element(by.css("button[type='button']"));
  //this.nameScore = $("input[type ='text']");
  //this.resultSearch = $("button[type ='button']");
      


       this.result_man_Butt = $("button[class ='btn btn-info']");








       
       	//this.enterSubmit = $("input[type ='submit']");
    }

    SelectCategory() {

let select = element(by.id('singleSelect'));
return select.$('[value="JAVA TRAINEE"]').click();
}


getOptions(enterText) {

return element(by.css(enterText));

}





 CorrectOptions() {
let checkBoxes = element.all(by.css("input[type='checkbox']"));
return checkBoxes.get(1).click(); 

    }

waitForCssValue(elementFinder, cssProperty, cssValue) {
    return function () {
        return elementFinder.getCssValue(cssProperty).then(function(actualValue) {
            return actualValue === cssValue;
        });
    };
};

}


