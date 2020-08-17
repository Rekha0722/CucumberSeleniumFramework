@FinctionalTest
Feature: shopizer online shopping system testing

@SmokeTest @RegressionTest
Scenario:Login with valid username and password
Given user enters correct username and password

 @RegressionTest
Scenario:Login with Invalid username and password
Given user enters Incorrect username and password

 @RegressionTest
Scenario: Search kurtis
Given User search kurtis for women

 @RegressionTest
Scenario:verify women Tab
Given clicking on Women tab

@SmokeTest @RegressionTest
Scenario: Open Tops from Women tab
Given User click on tops from Women tab

 @RegressionTest
Scenario: add tops in cart
Given User select top and click on Add to cart
Then User Verify Added item in cart.

@SmokeTest @RegressionTest
Scenario: User Go to proceed.
Given User clicks on cart and select item 
Then user click on proceed button.

@SmokeTest @EndToEnd
Scenario:verify Men Tab
Given clicking on Men tab

@SmokeTest @EndToEnd
Scenario:verify Kids Tab
Given clicking on Kids tab

@EndToEnd
Scenario:verify Home Decor Tab
Given clicking on Home Decor tab

@EndToEnd
Scenario:verify Beauty Tab
Given clicking on Beauty tab

@RegressionTest
Scenario:verify food Tab
Given clicking on food tab

@SmokeTest @RegressionTest
Scenario:verify collections Tab
Given clicking on collections tab


Scenario:verify furniture Tab
Given clicking on furniture tab
