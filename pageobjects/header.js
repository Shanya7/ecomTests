class Header {
  userName = () => cy.get(".account");

  navigateToCustomerAccount() {
    this.userName().click();
    cy.url().should("include", "controller=my-account");
  }
}
export default Header;
