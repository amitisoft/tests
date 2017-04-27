Feature: Candidate Data Dashboard
    As a user of Candidate Shortlisting Application
    I should be able to use Candidate Data Dashboard
    In order to Upload the candidates data

    Scenario: Uploading the Candidate Data
        Given I go to CandidateData Dashboard
        When I add the data file Directory
		Then I click Upload
		#Then I verify successful upload message
