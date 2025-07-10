class LoginPage {
  visit() {
    cy.visit("/");
  }

  enterUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  enterPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  Submit() {
    cy.get('button[type="submit"]').click();
  }

  checkErrorMessage() {
    cy.get(".oxd-alert-content-text").should("be.visible");
  }
}

export default new LoginPage();