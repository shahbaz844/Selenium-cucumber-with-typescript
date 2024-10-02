import {WebElement} from "selenium-webdriver";

export interface IExtras {

    tapOnContinueButton(): Promise<void>;

    isAuthPopupExist(): Promise<WebElement[]>;

}