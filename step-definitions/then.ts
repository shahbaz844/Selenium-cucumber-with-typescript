import {AfterAll, Then} from "@cucumber/cucumber";
import assert from "assert";
import {BookFlight} from "../pages/flightBook/bookFlight";
import Login from "../pages/home/home";
import { Extras } from "../pages/flightBook/extras.po";
import {SearchResult} from "../pages/flightBook/searchResult.po";
import {Constants} from "../pages/utils/enums";

let bookFlight : BookFlight;
let result: SearchResult;
let extras: Extras;

Then('I should see the search results with available flights', {timeout:300000} , async function () {
    bookFlight = new BookFlight();
    result = await bookFlight.getInBoundFlight();

    assert.strictEqual(await result.verifyElementExists(result.editSearchButton), true);
    assert.strictEqual(await result.getEditButton(), Constants.editSearch);
});


Then( 'I should see the login popup', {timeout:300000} , async function () {
    bookFlight = new BookFlight();
    extras = await bookFlight.getExtras();

    assert.strictEqual(await extras.verifyElementExists(extras.authPopup),true);
    assert.strictEqual(await extras.getElementByCss(extras.authPopup).getText(), Constants.authModalHeader);
});


AfterAll(async function () {
    await Login.driver.quit();
});