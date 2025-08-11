import React from 'react'
import AddCard from './AddCard'
import { formatExpirationDate } from '../utils'

Cypress.Commands.add('alertErrorHaveText', (expectedText) => {
  cy.contains('.alert-error', expectedText).should('be.visible')
})

Cypress.Commands.add('fillCardForm', (card) => {
    cy.get('[data-cy="holderName"]').type(card.holderName),
    cy.get('[data-cy="expirationDate"]').type(card.expirationDate),
    cy.get('[data-cy="cvv"]').type(card.cvv),
    //bom para fazer quando não tem acesso ao codigo. melhor o de cima.
    cy.contains('label', 'Número do Cartão').parent().find('input').type(card.number)
})

Cypress.Commands.add('submitCard', () => {
  cy.contains('button', 'Adicionar Cartão').click()
})

describe('<AddCard />', () => {

  const myCard = {
      number: '4242424242424242',
      holderName: 'Fernando Papito',
      expirationDate: '12/35',
      cvv: '123',
      bank: 'Neon'
  }

  beforeEach(() => {
    cy.viewport(1440, 900)
    cy.mount(<AddCard />)
  })

  /*it é cada cenario de caso*/
  it('Exibe error quando os campos não são informados.', () => {
    // see: https://on.cypress.io/mounting-react
    cy.submitCard()

    const alerts = [
      'Número do cartão é obrigatório',
      'Nome do titular é obrigatório',
      'Data de expiração é obrigatória',
      'CVV é obrigatório',
      'Selecione um banco'
    ]
    
    alerts.forEach((alert) => {
      cy.alertErrorHaveText(alert)
    })
  })

  it('Deve cadastrar um novo cartão de credito', () => {

    cy.fillCardForm(myCard)
    cy.contains('button', 'Neon').click()

    cy.intercept('POST', 'http://wallet.cardfify.dev/api/cards', (req) => {
      req.reply({
        statusCode: 201,
        body: myCard
      })  
    }).as('addCart')

    cy.submitCard()
    cy.wait(2000)
    cy.get('.notice-success').should('be.visible').and('have.text', 'Cartão cadastrado com sucesso!')

  })

  it('valida nome do titulo com menos de 2 character', () => {
    cy.fillCardForm({...myCard, holderName: 'F'})
    cy.contains('button', 'Neon').click()
    cy.submitCard()
    cy.get('.alert-error').should('be.visible').and('have.text', 'Nome deve ter pelo menos 2 caracteres')
    cy.alertErrorHaveText('Nome deve ter pelo menos 2 caracteres')
  })

  it('valida data de expiração invalida', () => {
    cy.fillCardForm({...myCard, expirationDate: '35/12'})
    cy.contains('button', 'Neon').click()
    cy.submitCard()
    cy.alertErrorHaveText('Data de expiração inválida ou vencida')
  })

  it('valida cvv com menos de 3 digitos', () => {
    cy.fillCardForm({...myCard, cvv: '1'})
    cy.contains('button', 'Neon').click()
    cy.submitCard()
    cy.alertErrorHaveText('CVV deve ter 3 ou 4 dígitos')
  })

})