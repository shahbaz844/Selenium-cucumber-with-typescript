import {By, until, WebElement} from "selenium-webdriver";
import { BasePage } from "./basePage";

export class BaseComponent extends BasePage {

    private readonly searchContext: string;

    constructor(searchContext:string) {
        super();
        this.searchContext = searchContext;
    }

    getElement(selector: string) {
        const parentElement = this.driver.findElement(By.css(this.searchContext));
        const element = parentElement.findElement(By.css(selector));
        return this.driver.wait(until.elementIsVisible(element),10000);
    }

    getElementByCss(selector: string){
        return this.driver.findElement(By.css(selector));
    }

    getElementsByCss(selector: string): Promise<WebElement[]> {
        return this.driver.findElements(By.css(selector));
    }

    getElements(selector: string): Promise<WebElement[]> {
        const parentElement = this.driver.findElement(By.css(this.searchContext));
        return parentElement.findElements(By.css(selector));
    }

    async waitForReadiness(time:number = 2000): Promise<void> {
        await this.driver.sleep(time)
    }

}