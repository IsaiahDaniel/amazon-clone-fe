export interface Product {
  _id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
}

export const products: Product[] = [
  {
    _id: "1",
    name: "Nike Slim Shirt",
    category: "Shirts",
    image: require("../assets/p1.jpeg"),
    price: 120,
    brand: "Nike",
    rating: 4.5,
    numReviews: 10,
    countInStock: 20,
    description: "high quality product",
  },
  {
    _id: "2",
    name: "Adidas Fit Shirt",
    category: "Shirts",
    image: require("../assets/p2.jpeg"),
    price: 100,
    brand: "Adidas",
    rating: 2.5,
    numReviews: 10,
    countInStock: 15,
    description: "high quality product",
  },
  {
    _id: "3",
    name: "Lacoste Free Shirt",
    category: "Shirts",
    image: require("../assets/p3.jpeg"),
    price: 220,
    brand: "Lacoste",
    rating: 4.8,
    numReviews: 17,
    countInStock: 0,
    description: "high quality product",
  },
  {
    _id: "4",
    name: "Nike Slim Pant",
    category: "Pants",
    image: require("../assets/d2.jpeg"),
    price: 78,
    brand: "Nike",
    rating: 4.5,
    numReviews: 14,
    countInStock: 11,
    description: "high quality product",
  },
  {
    _id: "5",
    name: "Puma Slim Pant",
    category: "Pants",
    image: require("../assets/d3.jpeg"),
    price: 65,
    brand: "Puma",
    rating: 4.5,
    numReviews: 10,
    countInStock: 0,
    description: "high quality product",
  },
  {
    _id: "6",
    name: "Adidas Fit Pant",
    category: "Pants",
    image: require("../assets/p1.jpeg"),
    price: 139,
    brand: "Adidas",
    rating: 5,
    numReviews: 15,
    countInStock: 15,
    description: "high quality product",
  },
];
