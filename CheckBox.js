///  <reference types="cypress" />

describe('CheckBox', () => {
    it('Check Uncheck', () => {

        cy.visit("https://admin:admin@the-internet.herokuapp.com/")
        cy.get('a[href="/checkboxes"]').click()
        cy.get('#checkboxes>input').eq(0).check().should('be.checked', 'checkboxes')
        cy.wait(1500)
        cy.get('#checkboxes>input').eq(1).uncheck().should('not.be.checked', 'checkboxes')


    })
})