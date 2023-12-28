Feature: Logando no site
    Feature Login page will work depending on the user credentials.
  

Scenario: Login with success
    Given I visit the SauceDemo website
    When I log in with username "<username>"
    When insert my password "secret_sauce"
    When click in the login button
    Then I should see the inventory page
    
    Examples:
    | username             |
    | standard_user        |
    | problem_user         |
    | performance_glitch_user |
    | error_user           |
    | visual_user          |
