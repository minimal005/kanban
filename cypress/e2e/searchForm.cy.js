describe("SearchForm E2E", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("має початкове значення в полі введення", () => {
    cy.get("input.searchField").should("have.value", "https://github.com/");
  });

  it("дозволяє ввести адресу репозиторію та натиснути Load Issues", () => {
    cy.get("input.searchField")
      .clear()
      .type("https://github.com/facebook/react");
    cy.contains("Load Issues").click();
  });

  it("скидає поле до початкового значення при натисканні ✖", () => {
    cy.get("input.searchField").clear().type("https://github.com/some/repo");
    cy.get("button").contains("✖").click();
    cy.get("input.searchField").should("have.value", "https://github.com/");
  });
});
