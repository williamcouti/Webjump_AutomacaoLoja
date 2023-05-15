// Ações de interação com a página Cadastro de Usúarios.

const elementos = require("./cadastroelementos").elementos;

class CadastroUsuario {
  CadastraUsuario() {
    cy.visit("/");

    cy.get(elementos.Entrar).should("be.visible").click();

    cy.get(elementos.TextoFacaLogin).should("be.visible");

    cy.get(elementos.BtnCriarConta)
      .contains("Create an Account")
      .should("be.visible")
      .click();

    cy.get(elementos.TextoCriacaoconta).should("be.visible");

    cy.get(elementos.PNome).should("be.visible").type("Willian");

    cy.get(elementos.SNome).should("be.visible").type("Coutinho lima");

    cy.get(elementos.Email).should("be.visible").type("willia_teste@email.com");

    cy.get(elementos.Senha).should("be.visible").type("erf444@fgfkkk");

    cy.get(elementos.Noticias)
      .contains("Subscribe to news and updates")
      .should("be.visible");

    cy.get(elementos.Subscrito)
      .should("be.visible")
      .then(($element) => {
        if (!$element.is(":checked")) {
          cy.get(elementos.Subscrito).click();
        }

        cy.get(elementos.BtnCriar)
          .contains("Create an Account")
          .should("be.visible")
          .click();
      });
  }
}
export default new CadastroUsuario();
