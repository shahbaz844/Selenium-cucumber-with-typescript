export interface ISearchFlight {

    addDepartureLocation(city:string, airport: string): Promise<void>;

    addDestinationLocation(city:string, airport: string): Promise<void>;

    selectDepartDate(days:string): Promise<void>;

    selectReturnDate(days:string): Promise<void>;

    addPassengers(adult: number, children: number): Promise<void>;

    tapOnSearchButton(): Promise<void>;

}