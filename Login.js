/// <reference types="cypress" />


describe('Login to Taskbase', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })

      beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('http://114.143.149.14:4356/TaskbaseAWS-2.0/NeovaTaskBase/LoginPage.aspx')
      })
    
    it('Login', () => {
        cy.get('input[name="txtUserName"]').type("Rahul_Chaubey@neovasolutions.in")
        cy.get('input[name="txtPassword"]').type("Neova@123")
        cy.get('input[type="submit"][name="btnLogin"]').click()
    });
    
});