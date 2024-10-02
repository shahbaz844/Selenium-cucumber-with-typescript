import {Seats} from "./seats.po";
import {IBags} from "./bags.in";

export class Bags extends Seats implements IBags {

    private readonly noModalButton = "[data-ref='enhanced-takeover-beta-desktop__dismiss-cta']";
    private readonly bagsContinueButton = "[data-ref='bags-continue-button']";
    private readonly addBagDropdown = ".icon";
    private readonly bagRadioButtons = ".ry-radio-circle-button__label";

    async acceptModal(): Promise<void> {
        await this.getElementByCss(this.noModalButton).click();
    }

    async tapOnBagsDropdown(): Promise<void>  {
        let dropdown = await this.getElements(this.addBagDropdown);
        await this.driver.executeScript('arguments[0].click();', dropdown[0]);
    }

    async selectBags(bags:number[]): Promise<void> {
        let allBags = await this.getElements(this.bagRadioButtons);
        for(let bag of bags) {
            await this.driver.executeScript('arguments[0].click();', allBags[bag]);
        }
    }

    async tapOnContinueButton(): Promise<void>  {
        await this.getElement(this.bagsContinueButton).click();
    }
}