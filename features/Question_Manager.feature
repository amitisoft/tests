Feature: HR can view and edit question manager dashboard
	As a user of Candidate Shortlisting Application
	I should be able to use Question Manager Dashboard
	In order to Create/Edit and Mange Questions

Scenario: HR can create question by entering text
	Given I am on the Dashboard page
	When I click on question manager
	When I click on create Questions
	When I enter text in create question
	When I enter multiple choice Answer
		| answers    |
		| Sum is 5   |
		| Sum is 6   |
		| Sum is 3   |
		| Sum is 8   |
	When I select the check box for right choices
	When I select category "Java" from dropdown
	When I click on Add Button
	Then I Verify the success alert
#	Then I Verify the new question added
	Then I should get the page with Questions fields



Scenario: HR cannot create question without selecting or entering required fields

	Given I am on the question manager module
	When I click on create question
	Then I verify Add button isdisabled
	When I add Quetion text
	Then I verify Add button isdisabled
	When I add first answer choice
	Then I verify Add button isdisabled
	When I add all options
	Then I verify Add button isdisabled
	When I select category "QA" from dropdown
	Then I verify Add button isdisabled
	When I slect one correct option
	Then I verify Add button isenabled
	When I click on clear Button
	Then I verify All fields are empty
	Then I verify Add button isdisabled

#Scenario: HR cannot create question for missing some of the fields

#	Given I am on the Dashboard page
#	When  I click on question manager module
#	When   I click on create Questions
#	When   I enter text in  create question field
#	When   I enter text for  three Answer choices
#	When   I select Dropdown to select module
#	When   I click on save Button
#	When   I click on save and create new question
 #   	Then  I should get appropriate message as please enter missing fields




#Scenario: HR can edit the question in Show Question module
	

#	Given I am on the Dashboard page
#	Given I am on question manager module
#	When   click on Show Questions module
#	When   Select dropdown menu from category to which we want to edit
#	When   select check box for edit the question
#	When  I Click on the Edit option for particular question in the Table.
#	Then  I should get a page with pre filled data for edit
#	When   Edit the question by entering text
#	When   Edit the answer in the Answer Choices
#	When   Edit checkbox of the Right answer
#	When   Edit category in the dropdown
#	When   I click on save
#	Then  Edit question has been saved successfully



#Scenario: HR can Delete the question in question manager
	

#	Given I am on the Dashboard page
#	Given I am on question manager module
#	When   click on Show Questions module
#	When   Select dropdown menu from category to which we want to delet
#        When   select check box for edit the question
#	When  I Click on the Delete option for particular question in the Table
#	Then  I should get alert or pop up for delete the question
#	When   I click delete button
#	Then question has been deleted successfully



#Scenario: HR can create paper version in question manager

#	Given I am on the Dashboard page
#	When  I click on question manager module
#	When   I click on paper management module
#	When   I enter text for paper version
#	When   I click save button
#	When   select category
#	When   select checkbox to create paper version
#	When   I click on send button
#	Then  aproprite message has to paper version has susccesfully created




#Scenario: HR cannot create paper version by missing mandatory fields in question manager

#	Given I am on the Dashboard page
#	When  I click on question manager module
#	When   I click on paper management module
#	When   I click save button without entering text paper version
#	When   select checkbox to create paper version
#	When   I click on send button without selecting category
#	Then  aproprite message has to display to please enter the mandatory fields