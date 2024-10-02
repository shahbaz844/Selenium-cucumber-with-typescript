import {Bags} from "./bags.po";
import {WebElement} from "selenium-webdriver";
import {IExtras} from "./extras.in";

export class Extras extends Bags implements IExtras {

    public readonly insuranceCards = ".ry-card__wrapper";
    private readonly extrasContinueButton = ".app-container__cta";
    public readonly authPopup = ".auth-popup";

    async tapOnContinueButton(): Promise<void> {
        await this.getElement(this.extrasContinueButton).click();
    }

    async isAuthPopupExist(): Promise<WebElement[]> {
        return this.getElementsByCss(this.authPopup);
    }
}