Feature: After HR Logged in succesfully check he can able to acesss different modules on dasboard page 

Scenario: HR can able to acess question manager module 

	Given I am on the Dashboard page
	When  I click on question manager module 
    	Then  I should get the contents of question manager


Scenario: HR can able to acess category manager module 
	
	Given I am on the Dashboard page
	When  I click on category manager module 
    	Then  I should get the contents of question manager

Scenario: HR can able to acess Test manager module 
	
	Given I am on the Dashboard page
	When  I click on Test manager module 
    	Then  I should get the contents of question manager


Scenario: HR can able to acess Candidate data module 
	
	Given I am on the Dashboard page
	When  I click on candidate data module 
    	Then  I should get the contents of candidate data