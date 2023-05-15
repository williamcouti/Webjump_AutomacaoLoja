// Posui elementos da pagina home login para executar ações.

export const elementos = {

    menu: ':nth-child(1) > div > :nth-child(4) > a',
    ProdImage: ':nth-child(5) > .item-images-2Jh > .item-imageContainer-2bp > .item-imageLoaded-2Dq',
    Preco: ':nth-child(5) > .item-price-1Qq, 102.40',
    AddCarrinho: ':nth-child(5) > .item-actionsContainer-2rd > .addToCartButton-root-vwC',
    ModalCor: '.swatchList-root-31_',
    SelecionaCor: '[title="Peach"]',
    SelecionaTamanho: '[title="XS"] > span',
    AddSacola: '.button-root_highPriority-1Zl',
    Sacola: '.cartTrigger-triggerContainer-2Jd > .cartTrigger-trigger-1c5',
    Checkout: '.miniCart-checkoutButton-3fk',
    EfetuaLogin: '.checkoutPage-signInButton-1ZZ > .button-content-3wD',
    FacaLogin: '.signIn-title-2hm',
    Email: '.signIn-form-nPj > .field-root-ffA > .fieldIcons-root-Gff > .fieldIcons-input-1wB > #email',
    Senha: '#Password',
    BtnLogin: '.button-root_highPriority-1Zl',
   
/*
    




   

    

   

    cy.contains(".signIn-title-2hm", "Sign-in to Your Account").should(
      "be.visible"
    );

    cy.get(
      ".signIn-form-nPj > .field-root-ffA > .fieldIcons-root-Gff > .fieldIcons-input-1wB > #email"
    )
      .should("be.visible")
      .type("willia_teste@email.com");

    cy.get('#Password')
      .should('be.visible')
      .type('erf444@fgfkkk');

    cy.get('.button-root_highPriority-1Zl')
      .should('be.visible')
      .click();
      */
}   
