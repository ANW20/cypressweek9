import LoginPage from "../../pages/loginPage";
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given("user is on the login page", () => {
  LoginPage.visit();
});

When("user logs in using username {string} and password {string}", (username, password) => {
  LoginPage.enterUsername(username);
  LoginPage.enterPassword(password);
  LoginPage.Submit();
});

Then("user should see the dashboard page", () => {
  cy.url().should("include", "/dashboard");
});

When("user logs in using invalid credentials", () => {
  LoginPage.enterUsername("invalid");
  LoginPage.enterPassword("invalid");
  LoginPage.Submit();
});

Then("user should see an error message", () => {
  LoginPage.checkErrorMessage();
});