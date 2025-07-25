import spicyPaneer from "../assets/images/tandoripanner.png";
import cheese from "../assets/images/cheesepanner.png";
import veggie from "../assets/images/veggiefiesta.png";
import masalaPaneer from "../assets/images/masalapanner.png";


import farmhouse from "../assets/images/vegpizza.png";
import masala from "../assets/images/pannermasala.png";
import combo from "../assets/images/drink.png";

import slice from "../assets/images/customer.png";


export const PIZZAS = [
  {
    name: "Tandoori Paneer",
    price: "₹279",
    description:
      "Tandoori-marinated paneer, onion, green & red capsicum, mozzarella, Indian herbs",
    image: spicyPaneer,
  },
  {
    name: "Cheese Overload",
    price: "₹299",
    description:
      "Mozzarella, Cheddar, Processed Cheese, Tomato Sauce,  buttery golden crust",
    image: cheese,
  },
  {
    name: "Veggie Fiesta",
    price: "₹239",
    description:
      "Bell peppers, onion, mushrooms, zucchini or brinjal, mozzarella cheese",
    image: veggie,
  },
  {
    name: "Masala Paneer",
    price: "₹249",
    description:
      "Masala-marinated paneer, sautéed onions, green & red capsicum, mozzarella cheese",
    image: masalaPaneer,
  },
];



export const CRAVINGS_DATA = {
  All: [
    {
      price: "₹229 / ₹359 / ₹499",
      name: "Farmhouse Magic",
      description:
        "Onion, capsicum, tomato, grilled mushroom, mozzarella cheese",
      img: farmhouse,
    },
    {
      price: "₹279 / ₹399 / ₹519",
      name: "Masala Paneer",
      description:
        "Onion, capsicum, tomato, grilled mushroom, mozzarella cheese",
      img: masala,
    },
    {
      price: "₹379",
      name: "Solo Meal Combo",
      description:
        "Onion, capsicum, tomato, grilled mushroom, mozzarella cheese",
      img: combo,
    },
  ],
  "Veg Pizzas": [
    {
      price: "₹229 / ₹359 / ₹499",
      name: "Farmhouse Magic",
      decscription:
        "Onion, capsicum, tomato, grilled mushroom, mozzarella cheese",
      img: farmhouse,
    },
    {
      price: "₹279 / ₹399 / ₹519",
      name: "Masala Paneer",
      description:
        "Onion, capsicum, tomato, grilled mushroom, mozzarella cheese",
      img: masala,
    },
  ],
  "Non-Veg Pizzas": [
    {
      price: "₹299 / ₹419 / ₹549",
      name: "Chicken Tikka",
      description:
        "Onion, capsicum, tomato, grilled mushroom, mozzarella cheese",
      img: masala,
    },
  ],

  "Combos & Drinks": [
    {
      price: "₹379",
      name: "Solo Meal Combo",
      decscription:
        "Onion, capsicum, tomato, grilled mushroom, mozzarella cheese",
      img: combo,
    },
  ],
  "Sides & Dips": [
    {
      price: "₹99",
      name: "Garlic Bread",
      decscription:
        "Onion, capsicum, tomato, grilled mushroom, mozzarella cheese",
      img: combo,
    },
  ],
};


export const TEST_DATA = [
  {
    name: "Aarav Mehta",
    role: "Software Developer",
    text: " The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snck-just in pizza from! Super satisfying and definitely ordering again. ",
    pizza: slice,
  },
  {
    name: "Jiya Sharma",
    role: "UI/UX Designer",
    text: " The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snck-just in pizza from! Super satisfying and definitely ordering again.",
    pizza: slice,
  },
  {
    name: "Rahul Sharma",
    role: "front-end developer",
    text: "The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snck-just in pizza from! Super satisfying and definitely ordering again.",
    pizza: slice,
  },
];
