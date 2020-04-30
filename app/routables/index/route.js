import Route from "@ember/routing/route";

// CSS, HTML: kebab-case
// JS: camelCase
// Ruby: snake_case

export default class IndexRoute extends Route {
  model() {
    console.log("hit index route");

    return {
      products: this.store.peekAll("product")
    };

    // return {
    //   products: [
    //     {
    //       brand: "Bridgestone",
    //       model: "J36",
    //       length: "standard",
    //       shaft: "standard",
    //       condition: "Used",
    //       description: "For the weekend warrior only",
    //       image: "/assets/images/Bridgestone J36.jpg", // string = text
    //       price: 450, // number
    //       sold: false, // boolean = false or true "SOLD"
    //       clubrange: "3 - PW",
    //       slug: "Bridgestone-J36"
    //     },
    //     {
    //       brand: "Titleist",
    //       model: "DCI962",
    //       length: "Standard",
    //       shaft: "Regular",
    //       condition: "Used",
    //       description: "For the weekend warrior only",
    //       image: "/assets/images/Titleist DCI962.jpg",
    //       price: false,
    //       sold: true,
    //       clubrange: "3 - PW",
    //       slug: "Titleist-DCI962"
    //     }
    //   ]
    // };
  }
}
