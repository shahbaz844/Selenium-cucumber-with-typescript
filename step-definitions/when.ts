import {When} from "@cucumber/cucumber";
import {bags, Constants, departSeats, returnSeats} from "../pages/utils/enums";
import {SearchFlight} from "../pages/flightBook/searchFlight.po";
import Login from "../pages/home/home";
import {BookFlight} from "../pages/flightBook/bookFlight";
import assert from "assert";
import {Seats} from "../pages/flightBook/seats.po";
import {Bags} from "../pages/flightBook/bags.po";
import {Extras} from "../pages/flightBook/extras.po";

let bookFlight : BookFlight;
let searchFlight: SearchFlight;
let seats: Seats;
let bag: Bags;
let extras: Extras;


When('I search for a flight from {string} to {string} on {string} to {string} for 2 adults and 1 child', {timeout:300000} , async function (departCity:string, destinationCity:string, departDate:string, destDate:string) {

    bookFlight = new BookFlight()
    searchFlight = await bookFlight.getSearchFlight();

    await Login.waitForReadiness();
    await Login.acceptCookies();
    await searchFlight.addDepartureLocation(departCity, Constants.dublinAirport);
    await searchFlight.addDestinationLocation(destinationCity, Constants.londonAirport);
    await Login.waitForReadiness();
    assert.strictEqual(await searchFlight.verifyElementExists(searchFlight.dateModal),true);

    await searchFlight.waitForReadiness();
    await searchFlight.selectDepartDate(departDate);
    await searchFlight.selectReturnDate(destDate);
    await searchFlight.addPassengers(2, 1);

    await searchFlight.tapOnSearchButton();
});


When('I proceed to pay with selected seats and 20kg bags added', {timeout:300000} , async function () {

    bookFlight = new BookFlight();
    seats = await bookFlight.selectSeats();
    bag = await bookFlight.getBags();
    extras = await bookFlight.getExtras();

    await seats.confirmSelectSeatsModal();
    assert.strictEqual(await seats.verifyElementExists(bookFlight.seatMapContext),true);

    await seats.selectSeats(departSeats);
    await seats.tapOnNextFlightButton();
    await seats.selectSeats(returnSeats);
    await seats.tapOnContinueButton();

    await bag.acceptModal();
    await bag.tapOnBagsDropdown();
    await bag.selectBags(bags);
    await bag.tapOnContinueButton();

    await extras.tapOnContinueButton();
    await extras.tapOnContinueButton();

});