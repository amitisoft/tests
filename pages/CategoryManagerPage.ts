import { $ } from 'protractor';
import {browser, element, by} from 'protractor';
export class CategorymanPageObject {
   
    public categoryManager: any;
    public createCategory: any;
    public entercategory: any;
    public categoryDesc: any;
    public addButton: any;
    public clearButton: any;
    

    constructor() {
    	

      this.categoryManager = element(by.xpath("html/body/amiti-root/div/div/div/amiti-hr-dashboard/amiti-dashboardpanel/div/div[2]/nav/div/ul/li[2]/a"));
        this.createCategory = $("button[class='btn btn-success']");
        this.entercategory = $("input[id='categoryname']");

       this.categoryDesc = $("textarea[id='categorydescription']");

       this.addButton = $("button[class='btn btn-primary']");
        this.clearButton = $("button[class='btn btn-success']");

    }
    }