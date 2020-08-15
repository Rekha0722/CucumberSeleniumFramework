$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/UdymeSelenium/ShopizerCucumberBDDFramework/src/main/java/cucumber/feature/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Shopizer Login",
  "description": "",
  "id": "shopizer-login",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "#Scenario: Shopizer Login Test Scenario"
    },
    {
      "line": 4,
      "value": "#Given User is present on login page"
    },
    {
      "line": 5,
      "value": "#Then User clicks on Popup Close button"
    },
    {
      "line": 6,
      "value": "#When title of login page is FabIndia"
    },
    {
      "line": 7,
      "value": "#Then enter \"rekharaut7@gmail.com\" and \"Anaya@143\""
    },
    {
      "line": 8,
      "value": "#Then User clicks on Login Button"
    },
    {
      "line": 9,
      "value": "#And User is on Home Page"
    },
    {
      "line": 13,
      "value": "#with Data Driven Example keyword"
    },
    {
      "line": 14,
      "value": "#Scenario Outline: Shopizer Login Test Scenario"
    },
    {
      "line": 16,
      "value": "#Given User is present on login page"
    },
    {
      "line": 17,
      "value": "#Then User clicks on Popup Close button"
    },
    {
      "line": 18,
      "value": "#When title of login page is FabIndia"
    },
    {
      "line": 19,
      "value": "#Then enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\""
    },
    {
      "line": 20,
      "value": "#Then User clicks on Login Button"
    },
    {
      "line": 21,
      "value": "#And User is on Home Page"
    },
    {
      "line": 23,
      "value": "#Examples:"
    },
    {
      "line": 24,
      "value": "#\t|username|password|"
    },
    {
      "line": 25,
      "value": "#\t|rekharaut7@gmail.com|Anaya@143|"
    },
    {
      "line": 26,
      "value": "#\t|pramoddeshmane@gmail.com|rekha|"
    },
    {
      "line": 27,
      "value": "#\t|ahsgd@gmail.com|jdhfkjds|"
    }
  ],
  "line": 30,
  "name": "Shopizer Login Test Scenario",
  "description": "",
  "id": "shopizer-login;shopizer-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "User is present on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User clicks on Popup Close button",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "title of login page is FabIndia",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "enter username and password",
  "rows": [
    {
      "cells": [
        "rekharaut7@gmail.com",
        "Anaya@143"
      ],
      "line": 36
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_is_present_on_login_page()"
});
formatter.result({
  "duration": 12528132600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Popup_Close_Button()"
});
formatter.result({
  "duration": 5930273900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.title_of_login_page_is_FabIndia()"
});
formatter.result({
  "duration": 457903400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.enter_username_and_Passowrd(DataTable)"
});
formatter.result({
  "duration": 1835618500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Login_Button()"
});
formatter.result({
  "duration": 145348000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 84713400,
  "status": "passed"
});
});