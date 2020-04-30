import Model, { attr } from "@ember-data/model";

// {
//   id: 'xxx',
//   type: 'product',
//   attributes:{
//     brand: "Bridgestone",
//     model: "J36",
//     length: "standard",
//     shaft: "standard",
//     condition: "Used",
//     description: "For the weekend warrior only",
//     image: "/assets/images/Bridgestone J36.jpg", // string = text
//     price: 450, // number
//     sold: false, // boolean = false or true "SOLD"
//     clubrange: "3 - PW",
//     slug: "Bridgestone-J36"
//   }
// },

export default class ProductModel extends Model {
  @attr("string") brand;
  @attr("string") model;
  @attr("string") length;
  @attr("string") shaft;
  @attr("string") condition;
  @attr("number") price;
  @attr("boolean") sold;
}
