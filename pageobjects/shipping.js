import { product } from "../cypress/fixtures/product.json";
class Shipping {
  proceedToCheckout = () => cy.get("[name='processCarrier']");

  verifyDeliveryPrice() {
    cy.get(".delivery_option_price")
      .first()
      .should("include.text", `${product.deliveryPrice}`);
  }
  clickAgreeToTermsOfService() {
    cy.get("input[type='checkbox']").check();
    this.clickProceedToCheckout();
    //check url 
  }
  verifyAgreeToTermsOfServiceNotification() {
    this.clickProceedToCheckout();
    cy.get(".fancybox-error").should(
      "have.text",
      "You must agree to the terms of service before continuing."
    );
    cy.get(".fancybox-skin>[title='Close']").click();
  }
  clickProceedToCheckout() {
    this.proceedToCheckout().click();
  }
}
export default Shipping;
