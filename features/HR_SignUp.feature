Feature: HR signUP    

Scenario: Register a new user using valid credentials
    Given I am on the signup page
    When  I have entered my desired username "UserName" and password "password"
    And   I have confirmed my password "password"
    And   I click the register button
    Then  I shall get confirmation that I am now a registered mail id and link has to sent registered mail id



Scenario: Register a new user using INvalid credentials
    Given I am on the signup page
    When  I have entered my desired username "UserName" and password "password"
    And  I have confirmed my password "wrong password"
    And I click the register button
    Then  I shall get messages as password mismatch


Scenario: Register a user using no credentials at all
    Given I am on the registration page
    When  I click on the Register button with no credentials entered
    Then  I shall get an error message that says I have to fill all required fields in
