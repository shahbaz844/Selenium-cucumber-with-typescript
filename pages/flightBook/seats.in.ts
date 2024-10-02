export interface ISeats {

    selectSeats(seats:number[]): Promise<void>;

    tapOnNextFlightButton(): Promise<void>;

    tapOnContinueButton(): Promise<void>;

}