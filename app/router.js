import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  // weekendwarrior.golf/
  // this.route('index');

  // weekendwarrior.golf/about
  this.route("about");

  // weekendwarrior.golf/products
  this.route("products", function() {
    // weekendwarrior.golf/products/Mizuno-MP33
    // weekendwarrior.golf/products/Tourstage-Ts201
    this.route("product", { path: "/:product_slug" });
  });

  // weekendwarrior.golf/contact
  this.route("contact");
});
