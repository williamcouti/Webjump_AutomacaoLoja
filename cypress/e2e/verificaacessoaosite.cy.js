import AcessoSite from '../support/pages/acessoaosite/siteindex';

describe('Acesso ao Site', () => {
    it('Verifica se o site está acessível e na página correta', () => {

        AcessoSite.AcessaSite();
        AcessoSite.ValidaAcessoSite();

    });
});
