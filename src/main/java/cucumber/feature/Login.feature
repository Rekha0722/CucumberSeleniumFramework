Feature: Shopizer Login
#Scenario: Shopizer Login Test Scenario

#Given User is present on login page
#Then User clicks on Popup Close button
#When title of login page is FabIndia
#Then enter "rekharaut7@gmail.com" and "Anaya@143"
#Then User clicks on Login Button
#And User is on Home Page



#with Data Driven Example keyword
#Scenario Outline: Shopizer Login Test Scenario

#Given User is present on login page
#Then User clicks on Popup Close button
#When title of login page is FabIndia
#Then enter "<username>" and "<password>"
#Then User clicks on Login Button
#And User is on Home Page

#Examples:
#	|username|password|
#	|rekharaut7@gmail.com|Anaya@143|
#	|pramoddeshmane@gmail.com|rekha|
#	|ahsgd@gmail.com|jdhfkjds|
	
	
# Data driven using data table	
#Scenario: Shopizer Login Test Scenario

#Given User is present on login page
#Then User clicks on Popup Close button
#When title of login page is FabIndia
#Then enter username and password
 #|rekharaut7@gmail.com | Anaya@143 |
#Then User clicks on Login Button
#And User is on Home Page

# Data driven using map	
Scenario: Shopizer Login Test Scenario

Given User is present on login page
Then User clicks on Popup Close button
When title of login page is FabIndia
Then enter username and password
 |username|password|
 |rekharaut7@gmail.com | Anaya@143 |
 |jshgjhj@jsdhgf.dxfh|dhf|
 |jdhfj|eiru|
Then User clicks on Login Button
And User is on Home Page




