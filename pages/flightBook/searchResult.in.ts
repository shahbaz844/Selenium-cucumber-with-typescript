export interface ISearchResult {

    tapOnFlightCard(index:number): Promise<void>;

    tapOnPriceCard(cardIndex:number): Promise<void>;

    tapOnContinueButton(): Promise<void>;
}