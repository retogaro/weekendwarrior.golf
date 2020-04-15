import Route from "@ember/routing/route";

export default class ProductRoute extends Route {
  model() {
    // Array
    // const arr = ['apple', 'pear', 'lemons'];

    // Object
    // const obj = {
    //   firstName: 'Jan',
    //   lastName: 'Werkhoven',
    //   age: 33
    // }

    // Javascript
    // JSON
    return {
      product: {
        brand: "aaa",
        model: "bbb",
        length: "ccc",
        shaft: "ddd",
        condition: "eee",
        description: "eee",
        image: "eee.jpg",
        price: 300
      }
    };

    // TODO
    // return this.store.findAll('product');
  }
}
