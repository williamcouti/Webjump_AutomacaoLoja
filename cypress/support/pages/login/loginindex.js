// Ações de interação com a página Cadastro de Usúarios.

const elementos = require("./loginelementos").elementos;

class Login {
  login() {
    cy.visit("/");

    cy.get(elementos.textoentrar).click();

    cy.get(elementos.Email).type("willia_teste@email.com");

    cy.get(elementos.Senha).should("be.visible").type("erf444@fgfkkk");

    cy.get(elementos.BtnEntrar).should("be.visible").click();
  }
}
export default new Login();
