/// <reference types="cypress" />

// Якщо у додатку виникають помилки через global state (наприклад, BreadCrumbs),
// можна вимкнути помилки, щоб тест продовжував виконання.
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Column Component E2E", () => {
  beforeEach(() => {
    // Встановлюємо маленький розмір вікна для аккордеон режиму (base)
    cy.viewport(320, 640);
    // Відвідуємо тестову сторінку, яка монтує Column
    // Припускаємо, що цей URL відображає компонент Column з відповідними даними
    cy.visit("/test-column");
  });

  it("за замовчуванням колонки згорнуті на малих екранах", () => {
    // Очікуємо, що елемент з aria-label "Expand" присутній (тобто колонка закрита)
    cy.get('[aria-label="Expand"]').should("exist");
    // А контент (елементи, наприклад <article> від Card, або текст "No issues") не монтується
    cy.get("article").should("not.exist");
    // Якщо колонка пуста, має бути напис "No issues"
    cy.contains("No issues").should("exist");
  });
});
