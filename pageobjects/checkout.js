import {address} from "../cypress/fixtures/address.json"
class Checkout {
  proceedToCheckoutBtn = () => cy.get("[name='processAddress']");
  firstNameFld = () => cy.get("#firstname");
  lastNameFld = () => cy.get("#lastname");
  company = () => cy.get("#company");
  address1 = () => cy.get("#address1");
  address2 = () => cy.get("#address2");
  city = () => cy.get("#city");
  postcode = () => cy.get("#postcode");
  state = () => cy.get("#id_state");
  phoneNumber = () => cy.get("#phone_mobile")
  submitAddressBtn = () => cy.get("#submitAddress");
  breadcrumb = () => cy.get(".breadcrumb.clearfix>.navigation_page");

  clickProceedToCheckout() {
    this.proceedToCheckoutBtn().click();
    this.breadcrumb().should(
      "have.text",
      "Shipping"
    );
  }
  uncheckAddressAreaEuals(){
    cy.get("#uniform-addressesAreEquals")
    .find("input[type='checkbox']")
    .uncheck();
  }

  updateDeliveryAddress() {
    cy.get("#address_delivery>.address_update>a").click();
    cy.url().should("include", "controller=address");
    this.firstNameFld().clear().type(`${address.updateDeliveryAddress.firstName}`);
    this.lastNameFld().clear().type(`${address.updateDeliveryAddress.lastName}`);
    this.company().clear().type(`${address.updateDeliveryAddress.company}`);
    this.address1().clear().type(`${address.updateDeliveryAddress.address1}`);
    this.address2().clear().type(`${address.updateDeliveryAddress.address2}`);
    this.city().clear().type(`${address.updateDeliveryAddress.city}`);
    this.postcode().clear().type(`${address.updateDeliveryAddress.postcode}`);
    this.state().select(`${address.updateDeliveryAddress.state}`);
    this.phoneNumber().clear().type(`${address.updateDeliveryAddress.phonenumber}`);
    this.submitAddressBtn().click();
    //check delivery address
    cy.get("#address_delivery>.address_firstname.address_lastname").should("include.text",`${address.updateDeliveryAddress.firstName} ${address.updateDeliveryAddress.lastName}`);
    cy.get("#address_delivery>.address_company").should("include.text",`${address.updateDeliveryAddress.company}`);
    cy.get("#address_delivery>.address_address1.address_address2").should("include.text",`${address.updateDeliveryAddress.address1} ${address.updateDeliveryAddress.address2}`);
    cy.get("#address_delivery>.address_city.address_state_name.address_postcode").should("include.text",`${address.updateDeliveryAddress.city}, New York ${address.updateDeliveryAddress.postcode}`);
    cy.get("#address_delivery>.address_country_name").should("include.text","United States");
    cy.get("#address_delivery>.address_phone_mobile").should("include.text",`${address.updateDeliveryAddress.phonenumber}`);
  }

  updateBillingAddress() {
    cy.get("#address_invoice>.address_update>a").click();
    cy.url().should("include", "controller=address");
    this.firstNameFld().clear().type(`${address.updateBillingAddress.firstName}`);
    this.lastNameFld().clear().type(`${address.updateBillingAddress.lastName}`);
    this.company().clear().type(`${address.updateBillingAddress.company}`);
    this.address1().clear().type(`${address.updateBillingAddress.address1}`);
    this.address2().clear().type(`${address.updateBillingAddress.address2}`);
    this.city().clear().type(`${address.updateBillingAddress.city}`);
    this.postcode().clear().type(`${address.updateBillingAddress.postcode}`);
    this.state().select(`${address.updateBillingAddress.state}`);
    this.phoneNumber().clear().type(`${address.updateBillingAddress.phonenumber}`);
    this.submitAddressBtn().click();
    //check billing address
    cy.get("#address_invoice>.address_firstname.address_lastname").should("include.text",`${address.updateBillingAddress.firstName} ${address.updateBillingAddress.lastName}`);
    cy.get("#address_invoice>.address_company").should("include.text",`${address.updateBillingAddress.company}`);
    cy.get("#address_invoice>.address_address1.address_address2").should("include.text",`${address.updateBillingAddress.address1} ${address.updateBillingAddress.address2}`);
    cy.get("#address_invoice>.address_city.address_state_name.address_postcode").should("include.text",`${address.updateBillingAddress.city}, New York ${address.updateBillingAddress.postcode}`);
    cy.get("#address_invoice>.address_country_name").should("include.text","United States");
    cy.get("#address_invoice>.address_phone_mobile").should("include.text",`${address.updateBillingAddress.phonenumber}`);
  }
  addNewAddress() {
    this.firstNameFld().clear().type(`${address.firstName}`);
    this.lastNameFld().clear().type(`${address.lastName}`);
    this.company().clear().type(`${address.company}`);
    this.address1().clear().type(`${address.address1}`);
    this.address2().clear().type(`${address.address2}`);
    this.city().clear().type(`${address.city}`);
    this.postcode().clear().type(`${address.postcode}`);
    this.state().select(`${address.state}`);
    this.phoneNumber().clear().type(`${address.phonenumber}`); 
    this.submitAddressBtn().click();
    //verify address
     cy.get("#address_delivery>.address_firstname.address_lastname").should("include.text",`${address.firstName} ${address.lastName}`);
     cy.get("#address_delivery>.address_company").should("include.text",`${address.company}`);
     cy.get("#address_delivery>.address_address1.address_address2").should("include.text",`${address.address1} ${address.address2}`);
     cy.get("#address_delivery>.address_city.address_state_name.address_postcode").should("include.text",`${address.city}, North Carolina ${address.postcode}`); //state - use text value instead of code
     cy.get("#address_delivery>.address_country_name").should("have.text","United States");
     cy.get("#address_delivery>.address_phone_mobile").should("have.text",`${address.phonenumber}`);
  }
  clickAddNewAddress(){
      cy.get("#address_invoice_form>.button").click()
  }
  addBillingAddress(){
    this.firstNameFld().clear().type(`${address.billingAddress.firstName}`);
    this.lastNameFld().clear().type(`${address.billingAddress.lastName}`);
    this.company().clear().type(`${address.billingAddress.company}`);
    this.address1().clear().type(`${address.billingAddress.address1}`);
    this.address2().clear().type(`${address.billingAddress.address2}`);
    this.city().clear().type(`${address.billingAddress.city}`);
    this.postcode().clear().type(`${address.billingAddress.postcode}`);
    this.state().select(`${address.billingAddress.state}`);
    this.phoneNumber().clear().type(`${address.billingAddress.phonenumber}`); 
    cy.get("#alias").type("billing address")
    this.submitAddressBtn().click();
    //verify address 
    cy.get("#address_invoice>.address_firstname.address_lastname").should("include.text",`${address.billingAddress.firstName} ${address.billingAddress.lastName}`);
    cy.get("#address_invoice>.address_company").should("include.text",`${address.billingAddress.company}`);
    cy.get("#address_invoice>.address_address1.address_address2").should("include.text",`${address.billingAddress.address1} ${address.billingAddress.address2}`);
    cy.get("#address_invoice>.address_city.address_state_name.address_postcode").should("include.text",`${address.billingAddress.city}, North Carolina ${address.billingAddress.postcode}`); //state - use text value instead of code
    cy.get("#address_invoice>.address_country_name").should("have.text","United States");
    cy.get("#address_invoice>.address_phone_mobile").should("have.text",`${address.billingAddress.phonenumber}`);
}
}
export default Checkout;
