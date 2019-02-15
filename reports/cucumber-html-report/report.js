$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contactinfo.feature");
formatter.feature({
  "line": 2,
  "name": "contactinfo",
  "description": "",
  "id": "contactinfo",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#home class features"
    }
  ],
  "line": 4,
  "name": "Add info to name, email, and country text fields",
  "description": "",
  "id": "contactinfo;add-info-to-name,-email,-and-country-text-fields",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on the profile creation page again",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i add text to the name, email, and country text fields",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i can view the added texts in the console output",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactInfo.i_am_on_the_profile_creation_page()"
});
formatter.result({
  "duration": 15566170900,
  "status": "passed"
});
formatter.match({
  "location": "ContactInfo.i_add_text_to_the_name_email_and_country_text_fields()"
});
formatter.result({
  "duration": 2680618600,
  "status": "passed"
});
formatter.match({
  "location": "ContactInfo.i_can_view_the_added_texts_in_the_console_output()"
});
formatter.result({
  "duration": 1519521100,
  "status": "passed"
});
formatter.uri("summary.feature");
formatter.feature({
  "line": 3,
  "name": "summary",
  "description": "",
  "id": "summary",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@run"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#home class features"
    }
  ],
  "line": 5,
  "name": "Add info to Summary text field",
  "description": "",
  "id": "summary;add-info-to-summary-text-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on the profile creation page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "i add text to the Summary field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "i can view the added text in the console output",
  "keyword": "Then "
});
formatter.match({
  "location": "Summary.i_am_on_the_profile_creation_page()"
});
formatter.result({
  "duration": 11365814000,
  "status": "passed"
});
formatter.match({
  "location": "Summary.i_add_text_to_the_Summary_field()"
});
formatter.result({
  "duration": 1313457000,
  "status": "passed"
});
formatter.match({
  "location": "Summary.i_can_view_the_added_text_in_the_console_output()"
});
formatter.result({
  "duration": 1472303500,
  "status": "passed"
});
});