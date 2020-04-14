import Route from "@ember/routing/route";

export default class ProductRoute extends Route {
  beforeModel() {
    console.log("beforeModel()");
  }

  model() {
    console.log("model()");

    return {
      products: [
        {
          name: "Apple",
          price: 200
        },
        {
          name: "Pear",
          price: 100
        },
        {
          name: "Lemons",
          price: 150
        }
      ]
    };
  }

  afterModel() {
    console.log("afterModel()");
  }
}
