@run
Feature: summary
  #home class features
  Scenario: Add info to Summary text fieldb
    Given I am on the profile creation pageb
    When i add text to the Summary fieldb
    Then i can view the added text in the console outputb
