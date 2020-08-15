$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/UdymeSelenium/ShopizerCucumberBDDFramework/src/main/java/cucumber/feature/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Shopizer Login",
  "description": "",
  "id": "shopizer-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
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
      "value": "#with Example keyword"
    }
  ],
  "line": 14,
  "name": "Shopizer Login Test Scenario",
  "description": "",
  "id": "shopizer-login;shopizer-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is present on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on Popup Close button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "title of login page is FabIndia",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "shopizer-login;shopizer-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "shopizer-login;shopizer-login-test-scenario;;1"
    },
    {
      "cells": [
        "rekharaut7@gmail.com",
        "Anaya@143"
      ],
      "line": 25,
      "id": "shopizer-login;shopizer-login-test-scenario;;2"
    },
    {
      "cells": [
        "pramoddeshmane@gmail.com",
        "rekha"
      ],
      "line": 26,
      "id": "shopizer-login;shopizer-login-test-scenario;;3"
    },
    {
      "cells": [
        "ahsgd@gmail.com",
        "jdhfkjds"
      ],
      "line": 27,
      "id": "shopizer-login;shopizer-login-test-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Shopizer Login Test Scenario",
  "description": "",
  "id": "shopizer-login;shopizer-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is present on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on Popup Close button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "title of login page is FabIndia",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "enter \"rekharaut7@gmail.com\" and \"Anaya@143\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_is_present_on_login_page()"
});
formatter.result({
  "duration": 10735349200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Popup_Close_Button()"
});
formatter.result({
  "duration": 5222765000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.title_of_login_page_is_FabIndia()"
});
formatter.result({
  "duration": 922299600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rekharaut7@gmail.com",
      "offset": 7
    },
    {
      "val": "Anaya@143",
      "offset": 34
    }
  ],
  "location": "LoginStepDef.enter_username_and_Passowrd(String,String)"
});
formatter.result({
  "duration": 2593226700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Login_Button()"
});
formatter.result({
  "duration": 146441800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 50065200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Shopizer Login Test Scenario",
  "description": "",
  "id": "shopizer-login;shopizer-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is present on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on Popup Close button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "title of login page is FabIndia",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "enter \"pramoddeshmane@gmail.com\" and \"rekha\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_is_present_on_login_page()"
});
formatter.result({
  "duration": 5396463100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Popup_Close_Button()"
});
formatter.result({
  "duration": 5572571300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.title_of_login_page_is_FabIndia()"
});
formatter.result({
  "duration": 506388200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pramoddeshmane@gmail.com",
      "offset": 7
    },
    {
      "val": "rekha",
      "offset": 38
    }
  ],
  "location": "LoginStepDef.enter_username_and_Passowrd(String,String)"
});
formatter.result({
  "duration": 1942942900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Login_Button()"
});
formatter.result({
  "duration": 129915300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 95632600,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Shopizer Login Test Scenario",
  "description": "",
  "id": "shopizer-login;shopizer-login-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is present on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on Popup Close button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "title of login page is FabIndia",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "enter \"ahsgd@gmail.com\" and \"jdhfkjds\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_is_present_on_login_page()"
});
formatter.result({
  "duration": 5340850900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Popup_Close_Button()"
});
formatter.result({
  "duration": 5607970200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.title_of_login_page_is_FabIndia()"
});
formatter.result({
  "duration": 579890900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ahsgd@gmail.com",
      "offset": 7
    },
    {
      "val": "jdhfkjds",
      "offset": 29
    }
  ],
  "location": "LoginStepDef.enter_username_and_Passowrd(String,String)"
});
formatter.result({
  "duration": 2313696800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Login_Button()"
});
formatter.result({
  "duration": 197635600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 88407500,
  "status": "passed"
});
});