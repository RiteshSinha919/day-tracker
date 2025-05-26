describe("Day Tracker", () => {
  it("adding empty tasks", () => {
    cy.visit("/");

    cy.contains("Add Task").click();

    cy.get('[data-test-id="input-error"]')
      .should("be.visible")
      .and("contain", "Please enter a task");
  });

  it("adding first task", () => {
    cy.visit("/");

    cy.get("input[name=addItem]").type("test task 1");
    cy.contains("Add Task").click();
    cy.get("body").should("not.contain", "Please enter a task");
    cy.contains("p", "test task 1");
    cy.contains("button", "Remove Task");
  });

  it("removing first task", () => {
    cy.visit("/");

    cy.get("input[name=addItem]").type("test task 1");
    cy.contains("Add Task").click();
    cy.contains("button", "Remove Task").click();
    cy.get("body")
      .should("not.contain", "test task 1")
      .and("not.contain", "Remove Task");
  });

  it("change language", () => {
    cy.visit("/");

    cy.contains("button", "Change Language").dblclick();
    cy.contains("button", "भाषा बदलें").click();
    cy.contains("button", "Change Language");
  });
});
