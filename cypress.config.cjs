module.exports = {
  e2e: {
    baseUrl: "http://localhost:5173", // або інший URL, на якому запускається ваш додаток
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: false,
  },
};
