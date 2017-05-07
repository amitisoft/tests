Feature: HR can view and edit question manager dashboard
	As a user of Candidate Shortlisting Application
	I should be able to use Question Manager Dashboard
	In order to Create/Edit and Mange Questions

#@start
Scenario: HR can create question by entering text
	Given I am on the Dashboard page
	When I click on question manager
	When I click on create Questions
	When I enter text in create question
	When I enter multiple choice Answer
		| answers  |
		| Sum is 5 |
		| Sum is 6 |
		| Sum is 3 |
		| Sum is 8 |
	When I select the check box for right choices
	When I select the check box for right choices
	When I select category "Java" from dropdown
	When I click on Add Button
	Then I Verify the success alert
	#Then I Verify the question count is updated to 4


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
	Then I verify Add button isenabled
	When I slect one correct option
	Then I verify Add button isenabled
	When I click on clear Button
	Then I verify Question field is empty
	Then I verify Option fields are empty
	Then I verify check box are empty
	Then I verify category combo is empty
	Then I verify Add button isdisabled



Scenario: HR can edit the question in Show Question module
	Given I click on Show Questions module
	Then  I verify available options in category dropdown
	When  I click on edit option for particular question
	Then  I Verify the pre-filled data
	When  Edit the question by entering text
	When  Edit the answer choices
	When  Edit checkbox of the Right answer
	When  I click on save
	Then  I verify question has been saved successfully



Scenario: HR can edit the question category in Show Question module
#	Given I click on Show Questions module
#	When  I click on edit option for particular question
#	Then  I Verify the pre-filled data
#	When  Edit category in the dropdown
#	When  I click on save
#	Then  I verify question has been saved successfully
#	Then  I verify question count has been updated accordingly


Scenario: HR can delete the question in Show Question module
#	Given I click on Show Questions module
#	When I click on delete option for particular question
#	Then I Verify the delete confirmation pop-up
#	When I select Cancel in delete confirmation
#	Then I Verify the question is not deleted
#	When  I click on delete option for particular question
#	When I select Ok in delete confirmation
#	Then  I verify Total question count has been updated accordingly
# 	Then  I verify count has been updated accordingly under particular category
#	Then  I verify Total question has been deleted


Scenario: HR can filter the question upon category in Show Question module
#	Given I am on question manager module
#	When I click on Show Questions module
#	When I Select category from dropdown
#   Then I Verify the questions are filtered upon selected category


@test
Scenario: HR can create paper of multiple categories in question manager
	Given I am on the question manager module
	When I click on paper management module
	When I enter text for paper name
	When I select "JavaScript" category
	When I select set of questions for paper
		| optionNo |
		| 1        |
		| 2        |
		| 3        |
		| 4        |
		| 5        |
		| 7        |
		| 9        |
		| 11       |
		| 12       |
		| 13       |
		| 15       |
	Then I verify selected question
#	When  I click on save button
#	Then  I verify the message added


#Scenario: HR can create paper of single category in question manager
#	Given I am on the question manager module
#	When  I click on paper management module
#	When  I enter text for paper name
#	When  I select category
#	When  I select questions
#	Then  I verify selected question
#	When  I click on save button
#	Then  I verify the message added



#Scenario: HR cannot create paper version by missing mandatory fields in question manager

#	Given I am on the Dashboard page
#	When  I click on question manager module
#	When   I click on paper management module
#	When   I click save button without entering text paper version
#	When   select checkbox to create paper version
#	When   I click on send button without selecting category
#	Then  aproprite message has to display to please enter the mandatory fields