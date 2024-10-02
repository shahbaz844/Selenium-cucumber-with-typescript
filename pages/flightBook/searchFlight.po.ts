import {BaseComponent} from "../base/baseComponent";
import {Months} from "../utils/enums";
import {parseInt} from "lodash";
import assert from "assert";
import {By} from "selenium-webdriver";
import {ISearchFlight} from "./searchFlight.in";
import {differenceInDays, format, parse} from 'date-fns';

export class SearchFlight extends BaseComponent implements ISearchFlight{

    private readonly departureInput = "#input-button__departure";
    private readonly destinationInput = "#input-button__destination";
    private readonly airportItem = ".airport-item";
    private readonly tooltip = ".tooltip-inner";
    private readonly monthButtons = "[data-ref='m-toggle-months-item']";
    private readonly calendar = ".datepicker__calendar--left .calendar-body__cell";
    private readonly adultPassenger = "[data-ref='passengers-picker__adults']";
    private readonly childrenPassenger = "[data-ref='passengers-picker__children']";
    protected readonly addButtons = "[data-ref='counter.counter__increment']";
    private readonly countValue = ".counter__value";
    private readonly doneButton = "[aria-label='Done']";
    private readonly searchButton = "[aria-label='Search']";
    public readonly dateModal = "[data-ref='fsw-datepicker-container__from']";

    async addDepartureLocation(city:string, airport: string): Promise<void>{
        await this.selectLocation(this.departureInput, city, airport);
    }

    async addDestinationLocation(city:string, airport: string): Promise<void> {
        await this.selectLocation(this.destinationInput, city, airport);
    }

    async selectDepartDate(days:string): Promise<void> {
        await this.selectDate(days);
    }

    async selectReturnDate(days:string): Promise<void> {
        await this.selectDate(days);
    }

    async addPassengers(adult: number, children: number): Promise<void> {
        assert.strictEqual(await this.verifyElementExists(this.tooltip), true);
        await this.addAllPassengers(this.adultPassenger, adult);
        await this.addAllPassengers(this.childrenPassenger, children);
        await this.tapOnDoneButton();
    }

    async tapOnDoneButton(): Promise<void> {
        await this.getElementByCss(this.doneButton).click();
    }

    async tapOnSearchButton(): Promise<void> {
        await this.getElement(this.searchButton).click();
    }

    async selectLocation(selector: string,city:string, airport: string): Promise<void> {
        await this.waitForReadiness();
        await this.getElement(selector).click();
        await this.getElement(selector).clear();
        await this.getElement(selector).sendKeys(city);
        await this.waitForReadiness();
        await this.clickElementBasedOnText(this.airportItem, airport)
    }

    async selectDate(date:string): Promise<void> {
        const currentDate = new Date();
        const startDateString = format(currentDate, 'yyyy-MM-dd');
        const endDateString = date;

        const startDate = parse(startDateString, 'yyyy-MM-dd', new Date());
        const endDate = parse(endDateString, 'yyyy-MM-dd', new Date());

        const addDays:number =  differenceInDays(endDate, startDate);
        let month = parseInt(this.calculateDatePlusDays(addDays).split("-")[1]);
        let day = String(parseInt(this.calculateDatePlusDays(addDays).split("-")[2]));
        await this.clickElementBasedOnText(this.monthButtons, Months[month]);
        await this.clickElementBasedOnText(this.calendar, day);
    }

    async addAllPassengers(selector: string, value: number): Promise<void> {
        let element = await this.driver.findElement(By.css(selector));
        let buttons = await element.findElements(By.css(this.addButtons));
        let add = await buttons[0];
        while(true){
            let count = await this.getElementByCss(selector).findElement(By.css(this.countValue)).getText();
            if(Number(count) != value) { await add.click(); }
            else { break; }
        }
    }

}