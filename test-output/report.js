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
    },
    {
      "line": 30,
      "value": "# Data driven using data table"
    },
    {
      "line": 31,
      "value": "#Scenario: Shopizer Login Test Scenario"
    },
    {
      "line": 33,
      "value": "#Given User is present on login page"
    },
    {
      "line": 34,
      "value": "#Then User clicks on Popup Close button"
    },
    {
      "line": 35,
      "value": "#When title of login page is FabIndia"
    },
    {
      "line": 36,
      "value": "#Then enter username and password"
    },
    {
      "line": 37,
      "value": "#|rekharaut7@gmail.com | Anaya@143 |"
    },
    {
      "line": 38,
      "value": "#Then User clicks on Login Button"
    },
    {
      "line": 39,
      "value": "#And User is on Home Page"
    },
    {
      "line": 41,
      "value": "# Data driven using map"
    }
  ],
  "line": 42,
  "name": "Shopizer Login Test Scenario",
  "description": "",
  "id": "shopizer-login;shopizer-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "User is present on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "User clicks on Popup Close button",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "title of login page is FabIndia",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "enter username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 48
    },
    {
      "cells": [
        "rekharaut7@gmail.com",
        "Anaya@143"
      ],
      "line": 49
    },
    {
      "cells": [
        "jshgjhj@jsdhgf.dxfh",
        "dhf"
      ],
      "line": 50
    },
    {
      "cells": [
        "jdhfj",
        "eiru"
      ],
      "line": 51
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_is_present_on_login_page()"
});
formatter.result({
  "duration": 8024839300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Popup_Close_Button()"
});
formatter.result({
  "duration": 3051744000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.title_of_login_page_is_FabIndia()"
});
formatter.result({
  "duration": 24400700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.enter_username_and_Passowrd(DataTable)"
});
formatter.result({
  "duration": 5337776600,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"#CC-headermodalpane\" id\u003d\"CC-loginHeader-login\" data-original-title\u003d\"login\" data-bind\u003d\"click:function(data,event){$parent[\u0027elements\u0027][\u0027FabindiaLoginRegistrationPicker\u0027].clickLogin.bind($parent[\u0027elements\u0027][\u0027FabindiaLoginRegistrationPicker\u0027],$data,event)();$parent.navigationEventForGTMClick(\u0027...\u0027,\u0027null\u0027)}, widgetLocaleText: {attr: \u0027innerText\u0027, value: \u0027buttonSignInText\u0027}\" data-toggle\u003d\"modal\"\u003eSign In\u003c/a\u003e is not clickable at point (646, 73). Other element would receive the click: \u003cdiv class\u003d\"modal fade in\" id\u003d\"CC-headermodalpane\" tabindex\u003d\"-1\" role\u003d\"link\" aria-hidden\u003d\"false\" style\u003d\"display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d84.0.4147.125)\nBuild info: version: \u00274.0.0-alpha-3\u0027, revision: \u00278c567de6dc\u0027\nSystem info: host: \u0027DESKTOP-N6RMJT6\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.125, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\hp\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:56473}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 04e33a3c1802e84e943c4c0e98963448\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:191)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:125)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:576)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:308)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat stepDefinition.LoginStepDef.enter_username_and_Passowrd(LoginStepDef.java:89)\r\n\tat ✽.Then enter username and password(F:/UdymeSelenium/ShopizerCucumberBDDFramework/src/main/java/cucumber/feature/Login.feature:47)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
});