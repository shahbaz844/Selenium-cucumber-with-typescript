import {SearchFlight} from "./searchFlight.po";
import {ISearchResult} from "./searchResult.in";

export class SearchResult extends SearchFlight implements ISearchResult {

    public readonly editSearchButton = ".details__edit-search";
    private readonly flightCards = ".flight-card";
    private readonly fareCards = ".fare-card-item";
    public readonly valueFarePopup = ".fare-upgrade-header-title";
    private readonly popupContinueButton = ".fare-upgrade-footer-continue_button";

    async getEditButton(): Promise<string> {
        let editButton = await this.getElementByCss(this.editSearchButton);
        return await editButton.getText();
    }

    async tapOnFlightCard(cardIndex:number): Promise<void> {
        let allCards = await this.getElements(this.flightCards);
        await allCards[cardIndex].click();
    }

    async tapOnPriceCard(cardIndex:number): Promise<void> {
        let fareCards = await this.getElements(this.fareCards);
        await fareCards[cardIndex].click();
    }

    async tapOnContinueButton(): Promise<void> {
        await this.getElementByCss(this.popupContinueButton).click();
    }

}