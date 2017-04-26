Feature: HR can view category manager module 
  
 Scenario: HR can create category in category manager

	Given I am on the Dashboard page
	When  I click on category manager module
	And   click on create new category
	And   enter text  for category name 
	And   enter description for category description
	And   click on save button
	Then  I should get message as sucessfully created category


Scenario: HR cannot create category in category manager by missing fields

	Given I am on the Dashboard page
	When  I click on category manager module
	And   click on create new category
	And   click on save button
	Then  I should get message as please enter mandatory fields

Scenario: HR can view category in category manager

	Given I am on the Dashboard page
	When  I click on category manager module
	And   click on view category button
	Then Hr can able to view the category list


Scenario: HR can edit view category in category manager

	Given I am on the Dashboard page
	When  I click on category manager module
	And   click on view category button
	And   click on edit link Button
	Then  It redirects to page with pre-filled data
	And   Enter text to edit
	And   click on save button



Scenario: After creating a category it has to updated in question manager

	Given I am on the Dashboard page
	When  I click on category manager module
	And   click on create new category
	And   enter text  for category name 
	And   enter description for category description
	And   click on save button
	When  I click on question mangager module
	And   I click on show question
	Then  The created category has to be updated succesfully in dropdown
	And   Select category from the dropdown
