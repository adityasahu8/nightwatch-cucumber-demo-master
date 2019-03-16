@Login
Feature: Login to Customer Portal

	Scenario: Login to CUP
		Given User opens the Customer Portal page
		And verify title is "Avalara Identity"
		Then verify the Avalara identity page ui
		Then verify user able to login into Customer Portal
		And verify user lands on Company landing page and title contains "AvaTax"