// Ações de interação com a página Cadastro de Usúarios.

const elementos = require("./carrinhoelementos").elementos;

class Carrinho {
  carrinho() {
    cy.visit("/");

    cy.get(":nth-child(1) > div > :nth-child(4) > a")
      .should("be.visible")
      .click();

    cy.get(elementos.ProdImage).should("be.visible");

    cy.get(elementos.Preco).should("be.visible");

    cy.wait(10000)
      .get(elementos.AddCarrinho, { timeout: 10000 })
      .should("be.visible")
      .click();

    cy.get(elementos.ModalCor).should("be.visible");

    cy.get(elementos.SelecionaCor).should("be.visible").dblclick();

    cy.get(elementos.SelecionaTamanho).should("be.visible").dblclick();

    cy.wait(10000)
      .get(elementos.AddSacola, { timeout: 10000 })
      .should("be.visible")
      .click();

    cy.get(elementos.Sacola).should("be.visible").click();

    cy.get(elementos.Checkout).should("be.visible").click();

    cy.wait(10000)
      .get(elementos.EfetuaLogin, {
        timeout: 10000,
      })
      .should("be.visible")
      .click();

    cy.get(elementos.FacaLogin).should("be.visible");

    cy.get(elementos.Email).should("be.visible").type("willia_teste@email.com");

    cy.get(elementos.Senha).should("be.visible").type("erf444@fgfkkk");

    cy.get(elementos.BtnLogin).should("be.visible").click();
  }
}

export default new Carrinho();
