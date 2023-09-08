class logintest
{
    elements = {
        stgurl: () => cy.visit ("https://staging.raptortech.com/"),
        txtUsername:() => cy.get("#Username"),
        invalidUsererror: ()=>cy.get("#Username-error"),
        buttonNext: ()=>cy.get("#showPassword"),
        txtPassword: () => cy.get("#Password"),
        buttonLogin: () => cy.get ("#login-btn"),
        headertxt:() => cy.get(".main-nav__title"),        
        logoutButton: () => cy.get("div[class='toast toast--top-right-arrow']>strong:last-child"),
        clickProfile: ()=> cy.get("button[class='btn btn--secondary btn--icon-only']>svg"),
        badCredentials: () => cy.get ("#validationSummary")
    }

    accessStgapplication()
    {
        this.elements.stgurl();
    }
    enterUserName(username)
    {
        this.elements.txtUsername().type(username)
    }
    enterinvalidUserName(invalidUsername)
    {
        this.elements.txtUsername().type(invalidUsername)
    }
    clickNext()
    {        
        this.elements.buttonNext().click();
    }
    enterPassword(password)
    {
        this.elements.txtPassword().type(password)
    }
    clickLogin()
    {
        this.elements.buttonLogin().click();
    }
    verifyHomescreen()
    {
        this.elements.headertxt().should('have.text','MAIN MENU');
    }
    verifyinvalidusererror()
    {
        this.elements.invalidUsererror().should('have.text','Please enter a valid email address.');
    }
    verifybadcredentialserror()
    {
        this.elements.badCredentials().should('have.text','Invalid Username or Password')
    }
    verifyLogoutvisible()
    {
        this.elements.logoutButton().should('have.text','Logout');
    }
    clickonProfile()
    {
        this.elements.clickProfile().click();
    }
    clickLogoutButton()
    {
       this.elements.logoutButton().click();
    }
    
}

module.exports = new logintest();