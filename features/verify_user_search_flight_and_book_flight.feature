
Feature: Booking a flight on Ryanair

  Scenario: Searching and booking a flight
    Given I visit ryanair web application
    When I search for a flight from "DUB" to "STN" on "2023-06-12" to "2023-07-03" for 2 adults and 1 child
    Then I should see the search results with available flights

  Scenario: Selecting seats and adding bags
    Given I have selected a flight from the search results
    When I proceed to pay with selected seats and 20kg bags added
    Then I should see the login popup
