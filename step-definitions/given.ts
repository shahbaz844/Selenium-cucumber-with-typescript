import {Given} from "@cucumber/cucumber";
import Login from "../pages/home/home";
import {BookFlight} from "../pages/flightBook/bookFlight";
import assert from "assert";
import {SearchResult} from "../pages/flightBook/searchResult.po";
import {Passengers} from "../pages/flightBook/passengers.po";
import {Constants} from "../pages/utils/enums";


let bookFlight : BookFlight;
let passenger: Passengers;
let fareCard: SearchResult;
let inbound: SearchResult;
let outbound: SearchResult;

Given('I visit ryanair web application', {timeout:200000} , async function () {
    await Login.visitUrl();
});


Given('I have selected a flight from the search results', {timeout:200000} , async function () {

    bookFlight = new BookFlight();
    outbound = await bookFlight.getOutBoundFlight();
    inbound = await bookFlight.getInBoundFlight();
    fareCard = await bookFlight.getFareCards();
    passenger = await bookFlight.getPassengers();

    await outbound.tapOnFlightCard(0);
    await inbound.tapOnFlightCard(0);
    await fareCard.tapOnPriceCard(0);

    assert.strictEqual(await fareCard.verifyElementExists(fareCard.valueFarePopup),true);
    assert.strictEqual(await fareCard.getElementByCss(fareCard.valueFarePopup).getText(), Constants.fareModalHeader);

    await fareCard.tapOnContinueButton();
    await passenger.tapOnLoginLatter();
    assert.strictEqual(await passenger.verifyElementExists(passenger.loginPopup),true);
    assert.strictEqual(await passenger.loginLatterHeaderText(), Constants.loginLatter);

    await passenger.selectPassengerTitle();
    await passenger.addPassengerNames();
    await passenger.tapOnContinueButton();
});
