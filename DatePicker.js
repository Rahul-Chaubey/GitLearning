/// <reference types="cypress" />

describe('DatepickerDemo', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })

    it('DatepickerUrl', () => {
        cy.visit('http://114.143.149.14:4356/TaskbaseAWS-2.0/NeovaTaskBase/LoginPage.aspx')
        cy.get('input[name="txtUserName"]').type("Rahul_Chaubey@neovasolutions.in")
        cy.get('input[name="txtPassword"]').type("Neova@123")
        cy.get('input[type="submit"][name="btnLogin"]').click()
        cy.get('#ctl00_ContentPlaceHolder1_txtEntryDate').click()  
        
    });
})