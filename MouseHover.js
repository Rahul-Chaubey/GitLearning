/// <reference types="cypress" />

describe('MouseHover', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        console.log(err);
        return false;
    })

    it('Logic', () => {
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
            cy.get('#mousehover').scrollIntoView().trigger('mouseover').then(() => {
                cy.get('a[href="#top"]').click({force:true})
            })
          
    })
})