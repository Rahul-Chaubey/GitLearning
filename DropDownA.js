// <reference types="cypress" />

describe('DropDown', () => {
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
        cy.get('input[name="txtUserName"]').type("Rahul_Chaubey@neovasolutions.in")
        cy.get('input[name="txtPassword"]').type("Neova@123")
        cy.get('input[type="submit"][name="btnLogin"]').click()
      })
    it('Information 1', () => {
      //  cy.visit('http://114.143.149.14:4356/TaskbaseAWS-2.0/NeovaTaskBase/LoginPage.aspx')
        // cy.get('input[name="txtUserName"]').type("Rahul_Chaubey@neovasolutions.in")
        // cy.get('input[name="txtPassword"]').type("Neova@123")
        // cy.get('input[type="submit"][name="btnLogin"]').click()
        cy.get('div[id="ctl00_UpdatePanel1"]').find('select[id="ctl00_ContentPlaceHolder1_ddProjects"]').select('SDS Enterprise').should('have.value',4378)
        cy.wait(1000)
        cy.get('div[class="col-sm-8"]').find('#ctl00_ContentPlaceHolder1_ddPhase').select('QA - Manual Testing')
        cy.get('[name="ctl00$ContentPlaceHolder1$ddEntryHours"][id="ctl00_ContentPlaceHolder1_ddEntryHours"]').select("6")
        cy.get('.card-body.myTimesheetCardBody').find('div[class="form-group row"]').get('div[class="col-sm-9"]').click()
        .type('Functional Testing on new Build X5.1.0.10')
        cy.get('input[type="submit"]').click()
        cy.wait(2000)
        // cy.get('i[class="fa fa-sign-out fa-icon"]').click()
        // cy.get('.card-body.myTimesheetCardBody').find('[name="ctl00$ContentPlaceHolder1$ddProjects"]').select("Avoke").should('have.value',98)
        // cy.wait(1000)
        // cy.get('div[class="container-fluid"]').find('#ctl00_ContentPlaceHolder1_ddPhase').select("QA - Smoke Testing")
        // cy.get('#ctl00_ContentPlaceHolder1_ddEntryHours').select("2")
        // cy.get('#ctl00_ContentPlaceHolder1_txtDescription').clear().type('Smoke testing on Avoke browser')
        // cy.get('input[type="submit"]').click()
        // cy.wait(2000)
        cy.get('i[class="fa fa-sign-out fa-icon"]').click()
    });

    it('Delete Info', () => {
        cy.get('#ctl00_ContentPlaceHolder1_gvTimesheet_ctl02_lbDelete').find('.fa fa-trash-o secColor').click()
    });

})