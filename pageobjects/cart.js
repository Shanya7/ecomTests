import { product } from "../cypress/fixtures/product.json";
class Cart {
  proceedToCheckoutBtn = () =>
    cy.get(".cart_navigation>[title='Proceed to checkout']");

  clickProceedToCheckout() {
    this.proceedToCheckoutBtn().click();
    cy.url().should("include", "controller=authentication");
  }
  verifyProductDetails() {
    cy.get(".cart_description>.product-name").should(
      "include.text",
      `${product.name}`
    );
    cy.get(".cart_unit>.price>.price.special-price").should(
      "include.text",
      `${product.price}`
    );
  }
  verifyPrice() {
    cy.get(".cart_total_price>#total_product").should(
      "include.text",
      `${product.price}`
    );
    cy.get(".cart_total_delivery>#total_shipping").should(
      "include.text",
      `${product.deliveryPrice}`
    );
    cy.get(".cart_total_price>#total_price_without_tax").should(
      "include.text",
      `${product.totalPrice}`
    );
    cy.get(".cart_total_price>#total_price_container>#total_price").should(
      "include.text",
      `${product.totalPrice}`
    );
  }
}
export default Cart;
