import React from "react";
import Register from "./Register";


Cypress.Commands.add('fullfieldRegisterForm', (myUser) => {
  cy.get('input[name="email"]').type(myUser.email);
  cy.get('input[name="password"]').type(myUser.password);
})

Cypress.Commands.add('clickOutside', () => {
      return cy.get('body').click(0, 0);
    });

describe('<Register />', () => {
  
  const myUser = {
    email: 'usermail@email.com',
    password: '123456'
  };

  beforeEach(() => {
    cy.viewport(1440, 900)
    cy.mount(<Register />)
  })

  it('Deve exibir o formulário de registro com botão registre-se desabilitado', () => {
    cy.contains('h2', 'Cadastro').should('be.visible')
    cy.get('input[name="email"]').should('be.visible')
    cy.get('input[name="password"]').should('be.visible')
    cy.contains('button', 'Registre-se').should('be.disabled')
  })

  it('Registrar um usuario com successo', () => {
    cy.fullfieldRegisterForm(myUser)

    cy.intercept('POST', 'http://wallet.cardfify.dev/api/users', (req) => {
      req.reply({
        statusCode: 201,
        body: {
          message: 'Cadastro realizado com sucesso!'
        }
      })
    }).as('registerUser')

    cy.contains('button', 'Registre-se').click()
    cy.wait(1000)
    cy.get('.success-modal').should('be.visible')
    cy.get('.modal-title').should('be.visible').and('have.text', 'Registro')
    cy.get('.modal-message').should('be.visible').and('have.text', 'Cadastro realizado com sucesso!')
    cy.get('.modal-button').should('be.visible').and('have.text', 'Fechar')
    cy.get('.modal-button').click()
    cy.get('.success-modal').should('not.exist')})

    it('Exibe erros quando os campos não são informados', () => {
      cy.get('input[name="email"]').should('exist').click()
      cy.clickOutside()
      cy.get('.text-red-500').and('have.text','O campo email é obrigatório')
      cy.get('input[name="password"]').should('exist').click()
      cy.clickOutside()
      cy.contains('.text-red-500', 'O campo senha é obrigatório')
    })
    
    it('Exibe erro quando o email é inválido', () => {
      cy.get('input[name="email"]').type('user@');
      cy.clickOutside()
      cy.get(':nth-child(2) > .text-red-500').and('have.text','Email inválido')
    })

    it('Exibe erro quando a senha é menor que 6 caracteres', () => {
      cy.get('input[name="password"]').type('12345')
      cy.clickOutside()
      cy.get('.text-red-500').and('have.text','A senha é menor que 6 caracteres')
    })

}); 