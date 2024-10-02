import {Passengers} from "./passengers.po";
import {ISeats} from "./seats.in";

export class Seats extends Passengers implements ISeats {

    private readonly seatModal = ".seats-modal__cta";
    private readonly seatMap = "button.seatmap__seat--standard";
    private readonly nextFlightButton = "[data-ref='seats-action__button-next']";
    private readonly flightContinueButton = "[data-ref='seats-action__button-continue']";

    async confirmSelectSeatsModal(): Promise<void> {
        await this.getElementByCss(this.seatModal).click();
    }

    async tapOnNextFlightButton(): Promise<void> {
        await this.getElementByCss(this.nextFlightButton).click();
    }

    async selectSeats(seats:number[]): Promise<void> {
        let allSeats = await this.getElements(this.seatMap);
        for(let seat of seats) {
            await this.driver.executeScript('arguments[0].click();', allSeats[seat]);
        }
    }

    async tapOnContinueButton(): Promise<void> {
        await this.getElementByCss(this.flightContinueButton).click();
    }
}