import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  // homepage
  // this.route('index');
  // slug = the dynamic part of the URL
  // weekendwarrior.golf/product/Mizuno-MP33
  // weekendwarrior.golf/product/Tourstage-Ts201
  this.route("product", { path: "/product/:slug" });
  // weekendwarrior.golf/about-us
  // about
  // about.index
  // this.route("about", { path: "about-us" });
  // weekendwarrior.golf/contact
  // contact
  // contact.index
  // this.route("contact");
  // interflux.com
  // interflux.com/products
  // interflux.com/soldering-fluxes
  // interflux.com/soldering-fluxes/IF-2005M
  //
  // interflux.com/products/:family/:product
  // interflux.com/products/soldering-fluxes/IF-2005M
  // interflux.com/products/solder-pastes/DP-5600
  // products.family.product
  //
  // this.route("products", function() {
  //   this.route("brand", { path: "/:brand" }, function() {
  //     this.route("product", { path: "/:product" });
  //   });
  // });
});
