@run
Feature: e2e
  Scenario: e2e scenario
    Given profile landing page
    When i add text to the name field
    When i add text to the email field
    When i add text to the country field
    Then text viewable in console output

    When i add text to the Summary fieldb
    Then i can view the added text in the console outputb

