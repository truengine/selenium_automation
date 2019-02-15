@run
Feature: contactinfo
  #home class features
  Scenario: Add info to name, email, and country text fields
    Given I am on the profile creation page again
    When i add text to the name, email, and country text fields
    Then i can view the added texts in the console output