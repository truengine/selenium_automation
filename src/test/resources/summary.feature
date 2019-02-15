
@run
Feature: summary
  #home class features
  Scenario: Add info to Summary text field
    Given I am on the profile creation page
    When i add text to the Summary field
    Then i can view the added text in the console output
