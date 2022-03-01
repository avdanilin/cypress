describe('Auth in test.cc.artw.dev', () => {
    it('visit site and open modal auth', () => {
        cy.visit('https://test.cc.artw.dev/');

        cy.get('.additional-footer').find('[data-type="personal"]').click();
    })

    it('auth on email', () => {
        cy.get('.auth-popup__content-wrapper').find('.radiobutton').first().click();

        cy.get('.auth-popup__input-wrap').find('input[type="email"]').click().type('test@mail.ru');
        cy.get('.auth-popup__input-wrap').find('input[type="password"]').click().type('qtt321hqQ'); //{enter} or click
        cy.get('.auth-popup__auth-button_sign-in').find('button').click();
    });
});