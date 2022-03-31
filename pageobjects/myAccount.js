class MyAccount {
  addressTab = () => cy.get("[title='Addresses']");

  navigateToMyAddresses() {
    this.addressTab().click();
    cy.url().should("include", "controller=addresses");
  }
}
export default MyAccount;
