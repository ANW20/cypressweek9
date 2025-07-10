class AdminPage {
  navigateToAdmin() {
    cy.get(".oxd-main-menu-item").contains("Admin").click();
  }

  addNewUser(username, role) {
    cy.get('button[type="button"]').contains("Add").click();
    cy.get('input[placeholder="Type for hints..."]').type(username);
    cy.get(".oxd-select-text-input").click();
    cy.get(".oxd-select-dropdown").contains(role).click();
    cy.get('button[type="submit"]').click();
  }

  verifyUserExists(username) {
    cy.get(".oxd-table-cell").contains(username).should("exist");
  }
}

export default new AdminPage();