class Login {
  emailFld = () => cy.get("#login_form #email");
  passwordFld = () => cy.get("#login_form #passwd");
  submitLoginBtn = () => cy.get("#SubmitLogin");

  login() {
    cy.fixture("user").then(({ user }) => {
      this.emailFld().clear().type(user.email);
      this.passwordFld().clear().type(user.password);
      this.submitLoginBtn().click();
    });
  }
}
export default Login;
