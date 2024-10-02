import {BasePage} from "../base/basePage";
import {SearchResult} from "./searchResult.po";
import {Passengers} from "./passengers.po";
import {Seats} from "./seats.po";
import {Bags} from "./bags.po";
import {Extras} from "./extras.po";
import {SearchFlight} from "./searchFlight.po";

export class BookFlight extends BasePage {

    private readonly searchFlightContext = ".search-widget__content";
    private readonly inBoundFlightsContext = "[data-ref='inbound']";
    private readonly outBoundFlightsContext = "[data-ref='outbound']";
    private readonly fareCardTableContext = ".fare-table-spinner ";
    private readonly passengerContext = ".app-container";
    public readonly seatMapContext = ".seatmap";
    private readonly bagsContext = ".booking-content";
    private readonly extrasContext = ".app-container__main-content";

    async getSearchFlight(): Promise<SearchFlight> {
        return new SearchFlight(this.searchFlightContext);
    }

    async getInBoundFlight(): Promise<SearchResult> {
        return new SearchResult(this.inBoundFlightsContext);
    }

    async getOutBoundFlight(): Promise<SearchResult> {
        return new SearchResult(this.outBoundFlightsContext);
    }

    async getFareCards(): Promise<SearchResult> {
        return new SearchResult(this.fareCardTableContext);
    }

    async getPassengers(): Promise<Passengers> {
        return new Passengers(this.passengerContext);
    }

    async selectSeats(): Promise<Seats> {
        return new Seats(this.seatMapContext);
    }

    async getBags(): Promise<Bags> {
        return new Bags(this.bagsContext);
    }

    async getExtras(): Promise<Extras> {
        return new Extras(this.extrasContext);
    }
}