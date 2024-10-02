import {IBasePage} from "./basePage.in";
import {Driver} from "./driver";
import {By, until} from "selenium-webdriver";

export abstract class BasePage extends Driver implements IBasePage {

    driver = Driver.getInstance();

    async waitForReadiness(wait:number=2000): Promise<void> {
        await this.driver.sleep(wait);
    }

    getElement(selector: string) {
        let element = this.driver.findElement(By.css(selector));
        return this.driver.wait(until.elementIsVisible(element),10000);
    }

    getElements(element: string) {
        return this.driver.findElements(By.css(element));
    }

    async verifyElementExists(selector: string):Promise<boolean> {
        return await this.driver.findElements(By.css(selector)).then(found => !!found.length);
    }

    async clickElementBasedOnText(selector: string, text:string) {
        try {
            let elements = this.driver.findElements(By.css(selector));
            for (let element of (await elements)) {
                if (await element.getText() == text) {
                    await element.click();
                }
            }
        } catch (err) {
            return err
        }
    }

    /**
     * calculate date plus day
     * @param days_to_add - how many days to add
     * @returns {date} - date string
     */
    calculateDatePlusDays(days_to_add: number) {
        let today = new Date();
        today.setDate(today.getDate() + days_to_add);
        let mm = today.getMonth() + 1;
        let dd = today.getDate();
        return (
            today.getFullYear() +
            "-" +
            (mm > 9 ? "" : "0") +
            mm +
            "-" +
            (dd > 9 ? "" : "0") +
            dd
        );
    }
}