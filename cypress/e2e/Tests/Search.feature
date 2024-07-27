Feature: Search functionality on the documents page

  Scenario Outline: Search for a keyword
    Given I am on the documents page
    When I search "<keyword>"
    Then I should see "<keyword>" is displayed in result

  Examples:
    | keyword         |
    | automation      |
    | end-to-end test |