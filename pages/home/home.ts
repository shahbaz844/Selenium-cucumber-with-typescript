import { BasePage } from "../base/basePage";
import { Constants } from "../utils/enums";

export class Home extends BasePage {

    private readonly acceptCookie = "[data-ref='cookie.accept-all']";

    async visitUrl() {
        await this.driver.get(Constants.baseUrl);
    }

    async acceptCookies() {
        let element = await this.getElement(this.acceptCookie);
        await element.click();
    }
}

export default new Home();