describe("Integration Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Home page is loaded", () => {
    // homepage get started button
    cy.contains("GET STARTED");
  });

  it("Docs Pages Works: Default Page", () => {
    // homepage get started button clicked
    cy.contains("GET STARTED").click();

    // show default docs page
    cy.contains("Install and Quick start");
    cy.contains("Coloring");
    cy.contains("Sort and Filter");
    cy.contains("Alignment");

    cy.contains("Installation");
    cy.contains("Basic Example");
  });

  it("Docs Pages Works: Quick Start", () => {
    // homepage get started button clicked
    cy.contains("GET STARTED").click();

    // show default docs page
    cy.contains("Quick Start").click();

    cy.contains("Detailed usage");
  });
});
