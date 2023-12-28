Feature: Verify sorting of items by Name on Saucedemo

  Scenario: Items are sorted correctly by Name A -> Z and Z -> A
    Given I visit the SauceDemo website
    When I log in with username "standard_user"
    When insert my password "secret_sauce"
    When click in the login button
    When I Verify of the items are sorted correctly A-Z
    Then I verify of items are sorted correctly Z-A