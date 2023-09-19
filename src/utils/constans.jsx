import en from "../assets/en.svg";
import deu from "../assets/deu.svg";

export const langs = [
  {
    id: 1,
    text: "english",
    icon: en,
  },
  {
    id: 2,
    text: "Deutsch",
    icon: deu,
  },
];

export const departments = [
  {
    id: 1,
    text: "Dairy, Bread & Eggs",
    link: "/shop",
  },
  {
    id: 2,
    text: "Snacks & Munchies",
    link: "/shop",
  },
  {
    id: 3,
    text: "Fruits & Vegetables",
    link: "/shop",
  },
  {
    id: 4,
    text: "Cold Drinks & Juices",
    link: "/shop",
  },
  {
    id: 5,
    text: "Breakfast & Instant Food",
    link: "/shop",
  },
  {
    id: 6,
    text: "Bakery & Biscuits",
    link: "/shop",
  },
  {
    id: 7,
    text: "Chicken, Meat & Fish",
    link: "/shop",
  },
];

export const navLinks = [
  {
    id: 1,
    text: "Home",
    link: "/home",
    subLinks: [
      {
        id: 1.1,
        text: "Home 1",
        link: "/home",
      },
      {
        id: 1.2,
        text: "Home 2",
        link: "/home",
      },
      {
        id: 1.3,
        text: "Home 3",
        link: "/home",
      },
      {
        id: 1.4,
        text: "Home 4",
        link: "/home",
      },
      {
        id: 1.5,
        text: "Home 5",
        link: "/home",
      },
      {
        id: 1.6,
        text: "Home 6",
        link: "/home",
        recently: true,
      },
    ],
  },
  {
    id: 2,
    text: "Shop",
    link: "/shop",
    subLinks: [
      {
        id: 2.1,
        text: "Shop Grid - Filter",
        link: "/shop",
      },
      {
        id: 2.2,
        text: "hop Grid - 3 column",
        link: "/shop",
      },
      {
        id: 2.3,
        text: "Shop List - Filter",
        link: "/shop",
      },
      {
        id: 2.4,
        text: "Shop - Filter",
        link: "/shop",
      },
      {
        id: 2.5,
        text: "Shop Wide",
        link: "/shop",
      },
      {
        id: 2.6,
        text: "Shop Single",
        link: "/shop",
      },
      {
        id: 2.7,
        text: "Shop Single v2",
        link: "/shop",
      },
      {
        id: 2.8,
        text: "Shop Wishlist",
        link: "/shop",
      },
      {
        id: 2.9,
        text: "Shop Cart",
        link: "/shop",
      },
      {
        id: 2.01,
        text: "Shop Checkout",
        link: "/shop",
      },
    ],
  },
  {
    id: 3,
    text: "Stores",
    link: "/stores",
    subLinks: [
      {
        id: 3.1,
        text: "Store List",
        link: "/stores",
      },
      {
        id: 3.2,
        text: "Store Grid",
        link: "/stores",
      },
      {
        id: 3.3,
        text: "Store Single",
        link: "/stores",
      },
    ],
  },
  {
    id: 4,
    text: "Mega menu",
    link: "/shop",
    subMega: [
      {
        id: 4.1,
        text: "Dairy, Bread & Eggs",
        link: "/shop",
        subLinks: [
          {
            id: 4.01,
            text: "Butter",
            link: "/shop",
          },
          {
            id: 4.02,
            text: "Milk Drinks",
            link: "/shop",
          },
          {
            id: 4.03,
            text: "Curd & Yogurt",
            link: "/shop",
          },
          {
            id: 4.04,
            text: "Eggs",
            link: "/shop",
          },
          {
            id: 4.05,
            text: "Buns & Bakery",
            link: "/shop",
          },
          {
            id: 4.06,
            text: "Cheese",
            link: "/shop",
          },
          {
            id: 4.07,
            text: "Condensed Milk",
            link: "/shop",
          },
          {
            id: 4.08,
            text: "Dairy Products",
            link: "/shop",
          },
        ],
      },
      {
        id: 4.2,
        text: "Breakfast & Instant Food",
        link: "/shop",
        subLinks: [
          {
            id: 4.11,
            text: "Breakfast Cereal",
            link: "/shop",
          },
          {
            id: 4.12,
            text: "Noodles, Pasta & Soup",
            link: "/shop",
          },
          {
            id: 4.13,
            text: "Frozen Veg Snacks",
            link: "/shop",
          },
          {
            id: 4.14,
            text: "Frozen Non-Veg Snacks",
            link: "/shop",
          },
          {
            id: 4.15,
            text: "Buns & Bakery",
            link: "/shop",
          },
          {
            id: 4.16,
            text: "Vermicelli",
            link: "/shop",
          },
          {
            id: 4.17,
            text: "Instant Mixes",
            link: "/shop",
          },
          {
            id: 4.18,
            text: "Batter",
            link: "/shop",
          },
          {
            id: 4.19,
            text: "Fruit and Juices",
            link: "/shop",
          },
        ],
      },
      {
        id: 4.3,
        text: "Cold Drinks & Juices",
        link: "/shop",
        subLinks: [
          {
            id: 4.21,
            text: "Soft Drinks",
            link: "/shop",
          },
          {
            id: 4.22,
            text: "Fruit Juices",
            link: "/shop",
          },
          {
            id: 4.23,
            text: "Coldpress",
            link: "/shop",
          },
          {
            id: 4.24,
            text: "Water & Ice Cubes",
            link: "/shop",
          },
          {
            id: 4.25,
            text: "Soda & Mixers",
            link: "/shop",
          },
          {
            id: 4.26,
            text: "Health Drinks",
            link: "/shop",
          },
          {
            id: 4.27,
            text: "Herbal Drinks",
            link: "/shop",
          },
          {
            id: 4.28,
            text: "Milk Drinks",
            link: "/shop",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    text: "Pages",
    link: "/Pages",
    subLinks: [
      {
        id: 5.1,
        text: "Blog",
        link: "/pages",
      },
      {
        id: 5.2,
        text: "Blog Single",
        link: "/pages",
      },
      {
        id: 5.3,
        text: "Blog Category",
        link: "/pages",
      },
      {
        id: 5.4,
        text: "About us",
        link: "/pages",
      },
      {
        id: 5.5,
        text: "404 Error",
        link: "/pages",
      },
      {
        id: 5.6,
        text: "Contact",
        link: "/pages",
      },
    ],
  },
  {
    id: 6,
    text: "Account",
    link: "/account",
    subLinks: [
      {
        id: 6.1,
        text: "Sign in",
        link: "/account",
      },
      {
        id: 6.2,
        text: "Signup",
        link: "/account",
      },
      {
        id: 6.3,
        text: "Forgot Password",
        link: "/account",
        subLinks: [
          {
            id: 6.01,
            text: "Orders",
            link: "/account",
          },
          {
            id: 6.02,
            text: "Settings",
            link: "/account",
          },
          {
            id: 6.03,
            text: "Address",
            link: "/account",
          },
          {
            id: 6.04,
            text: "Payment Method",
            link: "/account",
          },
          {
            id: 6.05,
            text: "Notification",
            link: "/account",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    text: "Dashboard",
    link: "/dashboard",
  },
  {
    id: 8,
    text: "Docs",
    link: "/docs",
  },
];
