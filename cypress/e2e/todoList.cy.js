describe("TodoList E2E", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("відображає колонки після завантаження", () => {
    cy.contains("Loading...").should("not.exist");
    cy.contains("ToDo").should("exist");
    cy.contains("In Progress").should("exist");
    cy.contains("Done").should("exist");
  });

  it("відображає або картки, або 'No issues' у колонці ToDo", () => {
    cy.contains("Loading...").should("not.exist");
    cy.contains("ToDo")
      .parent()
      .then(($col) => {
        const text = $col.text();
        if (text.includes("No issues")) {
          expect(true).to.be.true;
        } else {
          cy.wrap($col).find("article").should("have.length.greaterThan", 0);
        }
      });
  });
});
