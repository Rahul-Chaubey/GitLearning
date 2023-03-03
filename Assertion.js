/// <reference types="cypress" />

describe ('Update Taskbase', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
      })

it('Assert', () => {
    cy.visit('http://114.143.149.14:4356/TaskbaseAWS-2.0/NeovaTaskBase/LoginPage.aspx')
    cy.get('input[name="txtUserName"]').type("Rahul_Chaubey@neovasolutions.in")
    cy.get('input[name="txtPassword"]').type("Neova@123")
    cy.get('input[type="submit"][name="btnLogin"]').click()
    cy.wait(1000)
    cy.get('div[class="form-group row"]').should('have.length',10)
    cy.wait(500)
    cy.get('.card-body.myTimesheetCardBody').find('div[class="form-group row"]').should('have.length', 7)
        
});
})