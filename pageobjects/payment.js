import { product } from "../cypress/fixtures/product.json";
class Payment {
  breadCrumbs = () => cy.get(".breadcrumb.clearfix>.navigation_page");
  confirmOrderBtn = () => cy.contains("button", "I confirm my order");

  sizePicker = () => cy.get("#group_1");
  colorPicker = () => cy.get("#color_to_pick_list");
  addToCartBtn = () => cy.get("#add_to_cart");

  verifyBreadCrumb() {
    this.breadCrumbs().should("have.text", "Your payment method");
  }
  verifyProductDetails() {
    cy.get(".cart_item .product-name").should(
      "include.text",
      `${product.name}`
    );
    cy.get(".cart_item small>a").should(
      "include.text",
      `Color : ${product.color}, Size : ${product.size}`
    );
  }
  verifyProductPrice() {
    cy.get(".cart_item .price.special-price").should(
      "include.text",
      `${product.price}`
    );
    cy.get(".cart_item .old-price").should(
      "include.text",
      `${product.oldPrice}`
    );
    cy.get(".cart_item .cart_quantity.text-center>span").should(
      "include.text",
      `${product.qty}`
    );
    cy.get(".cart_item .cart_total>span").should(
      "include.text",
      `${product.price}`
    );
    cy.get(".cart_total_price>#total_product").should(
      "include.text",
      `${product.price}`
    );
    cy.get(".cart_total_delivery>#total_shipping").should(
      "include.text",
      `${product.deliveryPrice}`
    );
    cy.get(".cart_total_price>#total_price_container").should(
      "include.text",
      `${product.totalPrice}`
    );
  }

  confirmOrder() {
    this.confirmOrderBtn().click();
    cy.url().should("include", "controller=order-confirmation");
    cy.get(".cheque-indent>.dark").should(
      "have.text",
      "Your order on My Store is complete."
    );
    cy.get(".box .price>strong").should(
      "include.text",
      `${product.totalPrice}`
    );
  }
  verifyAvailablePaymentMethods() {
    cy.get("#HOOK_PAYMENT .payment_module").should("have.length", 2);
    cy.get("#HOOK_PAYMENT")
      .should("include.text", "Pay by bank wire")
      .and("include.text", "Pay by check");
  }
  selectPayByBankWire() {
    cy.get("#HOOK_PAYMENT .payment_module")
      .find("[title='Pay by bank wire']")
      .click();
    cy.url().should("include", "controller=payment");
    cy.get(".breadcrumb.clearfix>.navigation_page").should(
      "include.text",
      "Bank-wire payment."
    );
    cy.get("#amount").should("include.text", `${product.totalPrice}`);
  }
}
export default Payment;
