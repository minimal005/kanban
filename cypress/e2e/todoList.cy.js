describe("TodoList E2E", () => {
  beforeEach(() => {
    // Переконайтеся, що ваш додаток запущено на базовому URL, вказаному в cypress.config
    cy.visit("/");
  });

  it("відображає колонки після завантаження", () => {
    // Чекаємо, поки Loading... зникне
    cy.contains("Loading...").should("not.exist");

    // Залежно від твоїх колонок: toDo -> "ToDo", inProgress -> "In Progress", done -> "Done"
    cy.contains("ToDo").should("exist");
    cy.contains("In Progress").should("exist");
    cy.contains("Done").should("exist");
  });

  it("відображає або картки, або 'No issues' у колонці ToDo", () => {
    cy.contains("Loading...").should("not.exist");

    // Знаходимо заголовок "ToDo", потім переходимо до батьківського елемента (колонки)
    cy.contains("ToDo")
      .parent()
      .then(($col) => {
        const text = $col.text();
        if (text.includes("No issues")) {
          // Якщо у колонці є напис "No issues", тест проходить
          expect(true).to.be.true;
        } else {
          // Якщо "No issues" немає, очікуємо, що є хоча б одна картка <article>
          cy.wrap($col).find("article").should("have.length.greaterThan", 0);
        }
      });
  });
});
