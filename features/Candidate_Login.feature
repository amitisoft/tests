Feature: Candidate Login 


Scenario: Candidate Login as a user using Google valid credentials

	Given I am on the signin page
	When  I have entered my desired username "UserName" and password "password"
      	And   I click the Signin button
    	Then  I shall get confirmation that I am Logged in succesfully




Scenario: Candidate Login as a user using Google Invalid credentials
 
	Given I am on the signup page
	When  I have entered my desired username "UserName" and password "password"
    	And   I have confirmed my password "wrong password"
    	And   I  click the register button
    	Then  I shall get messages as password mismatch



Scenario: Candidate Registration valid details

	Given I am on the registration page
	And   I have entered firstname and lastname in text box
    	And   I have entered proper email id
	And   I have entered proper 10 digit phone number
	When  I click on save and submit 
    	Then  I shall get messages as registered suceessfully and redirects to instruction page


Scenario: Candidate Registration Invalid details

	Given I am on the registration page
	And   I have entered firstname and lastname in text box
    	And   I have entered not proper email id
	And   I have entered not proper 10 digit phone number
	When  I click on save and submit 
    	Then  I shall get messages as please enter valid phone number and email id

Scenario: Candidate Registration without entering mandatory fields

	Given I am on the registration page
	When  I click on save and submit 
    	Then  I shall get messages as please enter mandatory fields



Scenario: After Candidate Registration candidate has to agree the instruction page
 
	Given I am on the insturcton page
	And   I accept agree button or check box
	When  I click on save and submit 
    	Then  It redirects to mcq questions



Scenario: After agree instructions redirects to MCQ question 


	Given I am on the question page contains four choices
	And   I  click on check box
	And   I click on another check box
	When  I click on next 
    	Then  It redirects to next mcq questions


Scenario:click on next MCQ question without selecting check box 

	Given I am on the question page contains four choices
	When  I click on next 
    	Then  It redirects to next mcq questions

Scenario:click on back button to switch prevoious MCQ question  

	Given I am on the question page contains four choices
	When  I click on back button
    	Then  It doesnot switch back page


Scenario:After answering all the question within elapsed time 

	Given I am on the question page contains four choices
	When  I click on answer choice and next button(20 times)
    	Then  exam should finished within elapsed time and result page should diplayed with proper result 


Scenario:After answering few question wait till elapsed time 

	Given I am on the question page contains four choices
	When  I click on answer choice and next button(5 times)
    	Then  I wait till elapsed time and result page should diplayed with proper result 
