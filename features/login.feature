Feature: Login Fuctionality

  @smoke
  Scenario: Validating the login with valid username and password
    Given User is on the login page
    When User enters valid username and password
      | username | mahalakshmi9 |
      | password | maha@123     |
    Then User clicks the login button
