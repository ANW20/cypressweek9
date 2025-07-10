Feature: Admin Management

  Scenario Outline: Add New Admin User
    Given user is logged in as "<username>" with "<password>"
    And user navigates to Admin page
    When user adds a new admin "<newUsername>" with role "<role>"
    Then the admin "<newUsername>" should appear in the user list

    Examples:
      | username | password  | newUsername | role       |
      | Admin    | admin123  | cypressuser1 | ESS        |
      | Admin    | admin123  | cypressuser2 | Admin      |