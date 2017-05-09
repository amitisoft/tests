import { $ } from 'protractor';

export class LoginPageObject {
    public searchTextBox: any;
    public searchTextBoxp: any;
    public loginButton: any;
    public searchButton: any;

    constructor() {
    	this.loginButton = $("a[href='/signin']");
       this.searchTextBox = $("input[name='email']");
        this.searchTextBoxp = $("input[name='password']");
        this.searchButton = $("button[type ='submit']");
    }
}