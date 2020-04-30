import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class ApplicationRoute extends Route {
  @service store; // Ember data store

  model() {
    this.store.pushPayload({
      data: [
        {
          id: "Bridgestone-J36",
          type: "product",
          attributes: {
            brand: "Bridgestone",
            model: "J36",
            length: "standard",
            shaft: "standard",
            condition: "Used",
            description: "For the weekend warrior only",
            image: "/assets/images/Bridgestone J36.jpg", // string = text
            price: 450, // number
            sold: false, // boolean = false or true "SOLD"
            clubrange: "3 - PW",
            slug: "Bridgestone-J36"
          }
        },

        {
          id: "Titleist-DCI962",
          type: "product",
          attributes: {
            brand: "Titleist",
            model: "DCI962",
            length: "Standard",
            shaft: "Regular",
            condition: "Used",
            description: "For the weekend warrior only",
            image: "/assets/images/Titleist DCI962.jpg",
            price: false,
            sold: true,
            clubrange: "3 - PW",
            slug: "Titleist-DCI962"
          }
        },

        {
          id: "Mizuno-MP33",
          type: "product",
          attributes: {
            brand: "Mizuno",
            model: "MP33",
            length: "Standard",
            shaft: "Stiff",
            condition: "Used",
            description: "For the weekend warrior only",
            image: "/assets/images/Mizuno MP33.jpg",
            price: 600,
            sold: false,
            clubrange: "3 - PW",
            slug: "Mizuno-MP33"
          }
        },

        {
          id: "Tourstage-709MC",
          type: "product",
          attributes: {
            brand: "Tourstage",
            model: "709MC",
            length: "Standard",
            shaft: "Stiff",
            condition: "Used",
            description: "For the weekend warrior only",
            image: "/assets/images/Tourstage 709MC xBlade.jpg",
            price: 500,
            sold: false,
            clubrange: "3 - PW",
            slug: "Tourstage-709MC"
          }
        },

        {
          id: "Mizuno-MP64",
          type: "product",
          attributes: {
            brand: "Mizuno",
            model: "MP-64",
            length: "Standard",
            shaft: "Stiff",
            condition: "Used",
            description: "For the weekend warrior only",
            image: "/assets/images/Mizuno MP-64.jpg",
            price: 450,
            sold: false,
            clubrange: "3 - PW",
            slug: "Mizuno-MP64"
          }
        },

        {
          id: "Mizuno-MP64",
          type: "product",
          attributes: {
            brand: "Mizuno",
            model: "MP-64",
            length: "Standard",
            shaft: "Stiff",
            condition: "Used",
            description: "For the weekend warrior only",
            image: "/assets/images/Mizuno MP-64.jpg",
            price: 450,
            sold: false,
            clubrange: "3 - PW",
            slug: "Mizuno-MP64"
          }
        },

        {
          id: "Miura-501CB",
          type: "product",
          attributes: {
            brand: "Miura",
            model: "501CB",
            length: "Standard",
            shaft: "Stiff",
            condition: "Used",
            description: "For the weekend warrior only",
            image: "/assets/images/Miura CB501.jpg",
            price: 0,
            sold: true,
            clubrange: "3 - PW",
            slug: "Miura-501CB"
          }
        },

        {
          id: "Mizuno-Tzoid",
          type: "product",
          attributes: {
            brand: "Mizuno",
            model: "Tzoid",
            length: "Standard",
            shaft: "Stiff",
            condition: "Used",
            description: "For the weekend warrior only",
            image: "/assets/images/Mizuno Tzoid.jpg",
            price: 350,
            sold: false,
            clubrange: "3 - PW",
            slug: "Mizuno-Tzoid"
          }
        },

        {
          id: "Tourstage-TS-201",
          type: "product",
          attributes: {
            brand: "Tourstage",
            model: "TS-201",
            length: "Standard",
            shaft: "Stiff",
            condition: "Used",
            description: "For the weekend warrior only",
            image: "/assets/images/Tourstage TS-201.jpg",
            price: 0,
            sold: true,
            clubrange: "3 - PW",
            slug: "Tourstage-TS-201"
          }
        },

        {
          id: "Mizuno-MP-54",
          type: "product",
          attributes: {
            brand: "Mizuno",
            model: "MP-54",
            length: "Standard",
            shaft: "Stiff",
            condition: "Used",
            description: "For the weekend warrior only",
            image: "/assets/images/Mizuno MP54.jpg",
            price: 0,
            sold: true,
            clubrange: "3 - PW",
            slug: "Mizuno-MP-54"
          }
        },

        {
          id: "Mizuno-MP-H4",
          type: "product",
          attributes: {
            brand: "Mizuno",
            model: "MP-H4",
            length: "Standard",
            shaft: "Regular",
            condition: "Used",
            description: "For the weekend warrior only",
            image: "/assets/images/Mizuno MP-H4.jpg",
            price: 400,
            sold: false,
            clubrange: "Single club",
            slug: "Mizuno-MP-H4"
          }
        },

        {
          id: "Titleist-690CB",
          type: "product",
          attributes: {
            brand: "Titleist",
            model: "690CB",
            length: "Standard",
            shaft: "Regular",
            condition: "Used",
            description: "For the weekend warrior only",
            image: "/assets/images/Titleist 690CB.jpg",
            price: 400,
            sold: false,
            clubrange: "3 - PW",
            slug: "Titleist-690CB"
          }
        }
      ]
    });
  }
}
