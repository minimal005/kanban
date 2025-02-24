/// <reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Column Component E2E", () => {
  beforeEach(() => {
    cy.viewport(320, 640);
    cy.visit("/test-column");
  });

  it("за замовчуванням колонки згорнуті на малих екранах", () => {
    cy.get('[aria-label="Expand"]').should("exist");
    cy.get("article").should("not.exist");
    cy.contains("No issues").should("exist");
  });
});
