import { browser, Config } from 'protractor';

export let config: Config = {

    //directConnect     : true,

    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    baseUrl: 'http://localhost:4200/hrdashboard',

    capabilities: {
        browserName: 'chrome'
    },

    getPageTimeout: 60000,
    allScriptsTimeout: 500000,

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        '../../features/Question_Manager.feature'
    ],

    onPrepare: () => {

        //browser.ignoreSynchronization = true;
        browser.manage().window().maximize();

    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: ['pretty'],
        require: ['../../stepdefinitions/QuestionManagerSpec.ts', '../../support/*.ts']
    }
};