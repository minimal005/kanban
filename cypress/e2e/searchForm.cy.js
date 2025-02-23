describe("SearchForm E2E", () => {
  // Перед кожним тестом відвідуємо головну сторінку (де рендериться SearchForm)
  beforeEach(() => {
    cy.visit("/");
  });

  it("має початкове значення в полі введення", () => {
    // Шукаємо інпут з класом searchField
    cy.get("input.searchField").should("have.value", "https://github.com/");
  });

  it("дозволяє ввести адресу репозиторію та натиснути Load Issues", () => {
    // Очищаємо інпут і вводимо нове значення
    cy.get("input.searchField")
      .clear()
      .type("https://github.com/facebook/react");

    // Натискаємо кнопку "Load Issues"
    cy.contains("Load Issues").click();

    // Тут можна додати перевірку, чи з’явилися дані
    // Наприклад, якщо після завантаження з’являється текст "facebook" чи інша ознака успіху:
    // cy.contains("facebook").should("be.visible");
  });

  it("скидає поле до початкового значення при натисканні ✖", () => {
    cy.get("input.searchField").clear().type("https://github.com/some/repo");

    // Натискаємо кнопку reset (✖)
    cy.get("button").contains("✖").click();

    // Перевіряємо, що поле повернулося до початкового значення
    cy.get("input.searchField").should("have.value", "https://github.com/");
  });
});
