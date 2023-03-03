///  <reference types="cypress" />

describe('CheckBox', () => {
    it('Check Uncheck', () => {

        cy.visit("https://admin:admin@the-internet.herokuapp.com/")
        cy.get('a[href="/checkboxes"]').click()
        cy.get('input[type="checkbox"]').check().should('be.checked', 'checkboxes')
        cy.wait(1500)
        cy.get('input[type="checkbox"]').uncheck().should('not.be.checked', 'checkboxes')


    })
})