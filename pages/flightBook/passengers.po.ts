import {SearchResult} from "./searchResult.po";
import {IPassengers} from "./passengers.in";
import {Constants, Names} from "../utils/enums";


export class Passengers extends SearchResult implements IPassengers {

    public readonly loginPopup = ".login-touchpoint__title";
    private readonly loginLatter = ".login-touchpoint__login-later";
    public readonly loginLatterHeader = ".login-touchpoint__header";
    private readonly titleDropdown = ".dropdown";
    private readonly titleDropdownValues = ".dropdown-item__label";
    private readonly nameInput = "input.date-placeholder";
    private readonly continueButton = ".continue-flow__button";

    async tapOnLoginLatter(): Promise<void> {
        await this.getElement(this.loginLatter).click();
    }
    async selectPassengerTitle(): Promise<void> {
        await this.addTitle(this.titleDropdownValues, Constants.title)
    }

    async addPassengerNames(): Promise<void> {
        await this.addName(Names);
    }

    async tapOnContinueButton(): Promise<void> {
        await this.getElement(this.continueButton).click();
    }

    async addName(names:any): Promise<void> {
        let elements = await this.getElements(this.nameInput);
        let keys = Object.keys(names)
        keys.map( (x, y) => elements[y].sendKeys(names[x]));
    }

    async addTitle(selector:string, text:string): Promise<void> {
        let elements = await this.getElements(this.titleDropdown);
        for(let element in elements) {
            await elements[element].click();
            await this.clickElementBasedOnText(selector,text);
        }
    }

    async loginLatterHeaderText() {
        let loginHeader = await this.getElementByCss(this.loginLatterHeader);
        return await loginHeader.getText();
    }
}