// Ações de interação com a página Acesso ao Site.

const elementos = require('./siteelementos').elementos;

class AcessoSite {
  AcessaSite() {
    cy.visit(Cypress.config('baseUrl'));
  }

  ValidaAcessoSite() {
    cy.url().should('eq', Cypress.config('baseUrl'));
    cy.get(elementos.ImageVenia).should('be.visible');
  }
}
export default new AcessoSite();