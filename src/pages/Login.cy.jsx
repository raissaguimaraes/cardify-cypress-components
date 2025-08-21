import React from "react";
import Login from "./Login";

describe('<AddCard />', () => { 

    beforeEach(() => {
        cy.viewport(1440, 900)
        cy.mount(<Login />)
    })
    
    it('Deve exibir o formulário de login', () => {
        cy.contains('h2', 'Login').should('be.visible')
        cy.get('input#email').should('be.visible')
        cy.get('input#password').should('be.visible')
        cy.contains('button', 'Sign In').should('be.visible')
        cy.get('button').should('have.css', 'background-color').and('be.colored', '#24a0ed');
});
})