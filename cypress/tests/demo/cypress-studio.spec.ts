import { User } from "models";

describe("Cypress Studio Demo", function () {
  beforeEach(function () {
    cy.task("db:seed");

    cy.database("find", "users").then((user: User) => {
      cy.login(user.username, "s3cret", true);
      
    });
  });
  it("create new payment transaction", function () {
    // Extend test with Cypress Studio
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-search-input"]').type('Devon Becker')
    cy.get('[data-test="user-list-item-tsHF6_D5oQ"]').click()
    cy.get('#amount').type('500')
    cy.get('#transaction-create-description-input').type('pago de internet')
    cy.get('[data-test=transaction-create-submit-payment]').click()
    cy.screenshot('payment done')
    cy.get('[data-test="new-transaction-return-to-transactions"]').click()

  });
  it("create new request transaction", function () {
    // Extend test with Cypress Studio
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-search-input"]').type('Devon Becker')
    cy.get('[data-test="user-list-item-tsHF6_D5oQ"]').click()
    cy.get('#amount').type('500')
    cy.get('#transaction-create-description-input').type('pago de internet')
    cy.get('[data-test=transaction-create-submit-request]').click()
    cy.screenshot('request done')
    cy.get('[data-test="new-transaction-return-to-transactions"]').click()

  });
  it("create new bank account", function () {
    // Extend test with Cypress Studio
    cy.get('[data-test=sidenav-bankaccounts]').click()
    cy.get('[data-test=bankaccount-new]').click()
    cy.get('#bankaccount-bankName-input').type('BANK OF AMERICA')
    cy.get('#bankaccount-routingNumber-input').type('122105155')
    cy.get('#bankaccount-accountNumber-input').type('123456789')
    cy.get('[data-test=bankaccount-submit]').click()
    cy.screenshot('bank account created')
    cy.get('[data-test=sidenav-home]').click()

  });
  it("delate a bank account", function () {
    // Extend test with Cypress Studio
    cy.get('[data-test=sidenav-bankaccounts]').click()
    cy.get('[data-test=bankaccount-list-item-RskoB7r4Bic] > .MuiGrid-container > :nth-child(2) > [data-test=bankaccount-delete]').click()
    cy.screenshot('bank account dalated')
    cy.get('[data-test=sidenav-home]').click()
    //add assertion...
  });
  after(function () {
    cy.log('Test completed')
  })
});
