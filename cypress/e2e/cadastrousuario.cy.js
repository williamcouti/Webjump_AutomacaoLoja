import cadastrousuario from '../support/pages/cadastrousuario/cadastroindex';

describe("Cadastro de Usuário", () => {
  it("Permite cadastrar um novo usuário", () => {

    cadastrousuario.CadastraUsuario();
    
  });
});
