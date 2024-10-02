import { Builder, WebDriver } from 'selenium-webdriver';

export class Driver {

    private static instance: WebDriver;

    public static getInstance(): WebDriver {
        if (!Driver.instance) {
            Driver.instance = new Builder().forBrowser('chrome').build();
        }
        return Driver.instance;
    }
}