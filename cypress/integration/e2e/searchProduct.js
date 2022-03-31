/// <reference types="cypress" />
import Search from "../../../pageobjects/search";
import ProductDetailsPage from "../../../pageobjects/product";
import Login from "../../../pageobjects/login";
import Cart from "../../../pageobjects/cart";
import CartModule from "../../../pageobjects/cartModuleBlock";
import Checkout from "../../../pageobjects/checkout";
import Shipping from "../../../pageobjects/shipping";
import Payment from "../../../pageobjects/payment";
import Header from "../../../pageobjects/header";
import MyAccount from "../../../pageobjects/myAccount";
import MyAddresses from "../../../pageobjects/myAddresses";

describe("Search products", () => {
  const onSearch = new Search();
  const onPDP = new ProductDetailsPage();
  const onLogin = new Login();
  const onCartPage = new Cart();
  const onCartModule = new CartModule();
  const onCheckout = new Checkout();
  const onShipping = new Shipping();
  const onPayment = new Payment();
  const onHeader = new Header();
  const onMyAccount = new MyAccount();
  const onMyAddresses = new MyAddresses();

  

  beforeEach(() => {
    cy.visit("");
  });
  it(" should search product, change product's attributes on PDP and make order", () => {
    onSearch.doSearch("Dress");
    onSearch.navigateToPdpFirstItem();
    onPDP.selectSizeM(); 
    onPDP.selectColorBlue();
    onPDP.clickAddToCardBtn();
    onCartModule.verifyProductDetails();
    onCartModule.verifyProductPrice();
    onCartModule.clickProceedToCheckout();
    onCartPage.verifyProductDetails();
    onCartPage.verifyPrice();
    onCartPage.clickProceedToCheckout();
    onLogin.login();
    onCheckout.addNewAddress();
    onCheckout.uncheckAddressAreaEuals();
    onCheckout.clickAddNewAddress();
    onCheckout.addBillingAddress()
    onCheckout.updateDeliveryAddress();
    onCheckout.updateBillingAddress();
    onCheckout.clickProceedToCheckout();
    onShipping.verifyDeliveryPrice();
    onShipping.verifyAgreeToTermsOfServiceNotification();
    onShipping.clickAgreeToTermsOfService();
    onPayment.verifyBreadCrumb();
    onPayment.verifyProductDetails();
    onPayment.verifyProductPrice();
    onPayment.verifyAvailablePaymentMethods();
    onPayment.selectPayByBankWire();
    onPayment.confirmOrder();
    //post-condition
    onHeader.navigateToCustomerAccount();
    onMyAccount.navigateToMyAddresses();
    onMyAddresses.deleteAddress();
    onMyAddresses.deleteAddress();
  });
});
