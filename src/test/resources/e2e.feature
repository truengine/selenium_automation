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

    When i add text to the role field
    When i add select role months
    When i add select role years
    Then keyrole text viewable in console output

    When i select basic skills
    When i select intermediate skills
    When i select advanced skills
    Then skills viewable in console output

    When i add text to the industry field
    When i add text to the area field
    When i add text to the industry months field
    When i add text to the industry years field
    Then industry values viewable in console output

    When i add qualification type
    When i add course title
    When i add university
    When i add gradyear
    Then quals viewable in console output

    When i add text to the exp company field
    When i add text to the exp role field
    When i add start month
    When i add start year
    When i select currently work here
    When i add responsibilities
    When i submit form
    Then sched exp viewable in console output
