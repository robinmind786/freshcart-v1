import en from "../assets/en.svg";
import deu from "../assets/deu.svg";
import slider1 from "../assets/images/slider/slide-1.jpg";
import slider2 from "../assets/images/slider/slider-2.jpg";
import clock from "../assets/images/icons/clock.svg";
import gift from "../assets/images/icons/gift.svg";
import packages from "../assets/images/icons/package.svg";
import refresh from "../assets/images/icons/refresh-cw.svg";

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

export const sliders = [
  {
    id: 1,
    img: slider1,
    title: "SuperMarket For Fresh Grocery",
    desc: "Introduced a new model for online grocery shopping and convenient home delivery.",
    discount: "Opening Sale Discount 50%",
  },
  {
    id: 2,
    img: slider2,
    title: "Free Shipping - orders over $100",
    desc: "Free Shipping to First-Time Customers Only, After promotions and discounts are applied.",
    discount: "Free Shipping on",
    brTitle: "orders over",
    price: "100",
  },
];

export const categories = [
  {
    id: 1,
    title: "Categories",
    sub: [
      {
        id: 2,
        sub: [
          {
            id: 2.1,
            text: "Vegetables & Fruits",
            link: "/shop",
          },
          {
            id: 2.2,
            text: "Breakfast & instant food",
            link: "/shop",
          },
          {
            id: 2.3,
            text: "Bakery & Biscuits",
            link: "/shop",
          },
          {
            id: 2.4,
            text: "Atta, rice & dal",
            link: "/shop",
          },
          {
            id: 2.5,
            text: "Sauces & spreads",
            link: "/shop",
          },
          {
            id: 2.6,
            text: "Organic & gourmet",
            link: "/shop",
          },
          {
            id: 2.7,
            text: "Baby care",
            link: "/shop",
          },
          {
            id: 2.8,
            text: "Cleaning essentials",
            link: "/shop",
          },
          {
            id: 2.9,
            text: "Personal care",
            link: "/shop",
          },
        ],
      },
      {
        id: 3,
        sub: [
          {
            id: 3.1,
            text: "Dairy, bread & eggs",
            link: "/shop",
          },
          {
            id: 3.2,
            text: "Cold drinks & juices",
            link: "/shop",
          },
          {
            id: 3.3,
            text: "Tea, coffee & drinks",
            link: "/shop",
          },
          {
            id: 3.4,
            text: "Masala, oil & more",
            link: "/shop",
          },
          {
            id: 3.5,
            text: "Chicken, meat & fish",
            link: "/shop",
          },
          {
            id: 3.6,
            text: "Paan corner",
            link: "/shop",
          },
          {
            id: 3.7,
            text: "Pharma & wellness",
            link: "/shop",
          },
          {
            id: 3.8,
            text: "Home & office",
            link: "/shop",
          },
          {
            id: 3.9,
            text: "Pet care",
            link: "/shop",
          },
        ],
      },
    ],
  },
];

export const footers = [
  {
    id: 1,
    title: "Get to know us",
    sub: [
      {
        id: 1.1,
        text: "Company",
        link: "/",
      },
      {
        id: 1.2,
        text: "About",
        link: "/",
      },
      {
        id: 1.3,
        text: "Blog",
        link: "/",
      },
      {
        id: 1.4,
        text: "Help Center",
        link: "/",
      },
      {
        id: 1.5,
        text: "Our Value",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    title: "For Consumers",
    sub: [
      {
        id: 2.1,
        text: "Payments",
        link: "/",
      },
      {
        id: 2.2,
        text: "Shipping",
        link: "/",
      },
      {
        id: 2.3,
        text: "Product Returns",
        link: "/",
      },
      {
        id: 2.4,
        text: "FAQ",
        link: "/",
      },
      {
        id: 2.5,
        text: "Shop Checkout",
        link: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Become a Shopper",
    sub: [
      {
        id: 3.1,
        text: "Shopper Opportunities",
        link: "/",
      },
      {
        id: 3.2,
        text: "Become a Shopper",
        link: "/",
      },
      {
        id: 3.3,
        text: "Earnings",
        link: "/",
      },
      {
        id: 3.4,
        text: "Ideas & Guides",
        link: "/",
      },
      {
        id: 3.5,
        text: "New Retailers",
        link: "/",
      },
    ],
  },
  {
    id: 4,
    title: "Freshcart programs",
    sub: [
      {
        id: 4.1,
        text: "Freshcart programs",
        link: "/",
      },
      {
        id: 4.2,
        text: "Gift Cards",
        link: "/",
      },
      {
        id: 4.3,
        text: "Promos & Coupons",
        link: "/",
      },
      {
        id: 4.4,
        text: "Freshcart Ads",
        link: "/",
      },
      {
        id: 4.5,
        text: "Careers",
        link: "/",
      },
    ],
  },
];

export const details = [
  {
    id: 1,
    icon: clock,
    title: "10 minute grocery now",
    desc: "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.",
  },
  {
    id: 2,
    icon: gift,
    title: "Best Prices & Offers",
    desc: "Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.",
  },
  {
    id: 3,
    icon: packages,
    title: "Wide Assortment",
    desc: "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.",
  },
  {
    id: 4,
    icon: refresh,
    title: "Easy Returns",
    desc: "Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked",
    link: "policy",
  },
];
