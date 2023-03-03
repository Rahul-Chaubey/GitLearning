/// <reference types="cypress" />

describe('', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })

    it('', () => {
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
            cy.get('#mousehover').invoke('show')
            cy.contains('Top').click()
            
    })
})