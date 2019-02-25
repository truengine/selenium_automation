$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("e2e.feature");
formatter.feature({
  "line": 2,
  "name": "e2e",
  "description": "",
  "id": "e2e",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "e2e scenario",
  "description": "",
  "id": "e2e;e2e-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "profile landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "i add text to the name field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "i add text to the email field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i add text to the country field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "text viewable in console output",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "i add text to the Summary fieldb",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "i can view the added text in the console outputb",
  "keyword": "Then "
});
formatter.match({
  "location": "E2E.profile_landing_page()"
});
formatter.result({
  "duration": 13090937300,
  "status": "passed"
});
formatter.match({
  "location": "E2E.i_add_text_to_the_name_field()"
});
formatter.result({
  "duration": 742209700,
  "status": "passed"
});
formatter.match({
  "location": "E2E.i_add_text_to_the_email_field()"
});
formatter.result({
  "duration": 494052800,
  "status": "passed"
});
formatter.match({
  "location": "E2E.i_add_text_to_the_country_field()"
});
formatter.result({
  "duration": 931866200,
  "status": "passed"
});
formatter.match({
  "location": "E2E.text_viewable_in_console_output()"
});
formatter.result({
  "duration": 109894100,
  "status": "passed"
});
formatter.match({
  "location": "E2E.i_add_text_to_the_Summary_fieldb()"
});
formatter.result({
  "duration": 917083700,
  "status": "passed"
});
formatter.match({
  "location": "E2E.i_can_view_the_added_text_in_the_console_outputb()"
});
formatter.result({
  "duration": 1179373200,
  "status": "passed"
});
});