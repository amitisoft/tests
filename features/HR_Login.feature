Feature: HR Login

Scenario: HR Login as a Registered user using valid credentials

	Given I am on the signin page
	When  I have entered my desired username "UserName" and password "password"
      	And   I click the Signin button
    	Then  I shall get confirmation that I am Logged in succesfully


Scenario: HR Login as a Registered user using Invalid credentials

	Given I am on the signin page
	When  I have entered my desired username "invalid UserName" and password "invalid password"
      	And   I click the Signin button
    	Then  I shall get confirmation that I entered wrong password please try again

Scenario: HR Login as a user without signing up 

	Given I am on the signin page
	When  I have entered my desired username "UserName" and password "password"
      	And   I click the Signin button
    	Then  I shall get confirmation as invalid credentials  please signup for registration