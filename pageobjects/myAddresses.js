class MyAddresses {
  dleteBtn = () => cy.get("[title='Delete']").eq(0);
  alertDialog = () => cy.get("[name='alert']");

  deleteAddress() {
    this.dleteBtn().click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Are you sure?");
      cy.log(str);
      this.alertDialog().click();
    });
  }
}
export default MyAddresses;
