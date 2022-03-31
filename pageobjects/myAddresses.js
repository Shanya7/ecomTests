class MyAddresses {
  dleteBtn = () => cy.get("[title='Delete']").eq(0);

  deleteAddress() {
    this.dleteBtn().click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Are you sure?");
      cy.log(str);
      cy.get("[name='alert']").click();
    });
  }
}
export default MyAddresses;
