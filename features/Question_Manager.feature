Feature: HR can view question manager module 


Scenario: HR can create question by entering text

	Given I am on the Dashboard page
	When  I click on question manager module 
	And   I click on create Questions
	And   I enter text in  create question 
	And   I enter text for Answer choices
	And   I click on Check box for answer choices
	And   I select Dropdown to select module
	And   I click on save Button 
	And   I click on save and create new question
    	Then  I should get the page with Questions fields



Scenario: HR cannot create question without selecting or entering text

	Given I am on the Dashboard page
	When  I click on question manager module 
	And   I click on save Button 
	And   I click on save and create new question
    	Then  I should get appropriate message as please enter the fields to create questions	



Scenario: HR cannot create question for missing some of the fields

	Given I am on the Dashboard page
	When  I click on question manager module 
	And   I click on create Questions
	And   I enter text in  create question field
	And   I enter text for  three Answer choices
	And   I select Dropdown to select module
	And   I click on save Button 
	And   I click on save and create new question
    	Then  I should get appropriate message as please enter missing fields	




Scenario: HR can edit the question in Show Question module
	

	Given I am on the Dashboard page
	Given I am on question manager module
	And   click on Show Questions module
	And   Select dropdown menu from category to which we want to edit
	And   select check box for edit the question 
	When  I Click on the Edit option for particular question in the Table.
	Then  I should get a page with pre filled data for edit	
	And   Edit the question by entering text
	And   Edit the answer in the Answer Choices
	And   Edit checkbox of the Right answer
	And   Edit category in the dropdown
	And   I click on save
	Then  Edit question has been saved successfully



Scenario: HR can Delete the question in question manager
	

	Given I am on the Dashboard page
	Given I am on question manager module 
	And   click on Show Questions module
	And   Select dropdown menu from category to which we want to delet
        And   select check box for edit the question 
	When  I Click on the Delete option for particular question in the Table
	Then  I should get alert or pop up for delete the question
	And   I click delete button
	Then question has been deleted successfully



Scenario: HR can create paper version in question manager

	Given I am on the Dashboard page
	When  I click on question manager module 
	And   I click on paper management module
	And   I enter text for paper version  
	And   I click save button
	And   select category 
	And   select checkbox to create paper version
	And   I click on send button
	Then  aproprite message has to paper version has susccesfully created




Scenario: HR cannot create paper version by missing mandatory fields in question manager

	Given I am on the Dashboard page
	When  I click on question manager module 
	And   I click on paper management module
	And   I click save button without entering text paper version
	And   select checkbox to create paper version
	And   I click on send button without selecting category
	Then  aproprite message has to display to please enter the mandatory fields