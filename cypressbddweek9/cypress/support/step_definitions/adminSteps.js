import AdminPage from "../../pages/AdminPage";
import LoginPage from "../../pages/loginPage";
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given("user is logged in as {string} with {string}", (username, password) => {
  LoginPage.visit();
  LoginPage.enterUsername(username);
  LoginPage.enterPassword(password);
  LoginPage.Submit();
});

Given("user navigates to Admin page", () => {
  AdminPage.navigateToAdmin();
});

When("user adds a new admin {string} with role {string}", (username, role) => {
  AdminPage.addNewUser(username, role);
});

Then("the admin {string} should appear in the user list", (username) => {
  AdminPage.verifyUserExists(username);
});