import React from "react";
import Card from "./Card";

const beverageItems = [
  {
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9",
    rating: 4.5,
    name: "Tea",
    type: "Hot",
    persons: 1,
    price: 49,
  },
  {
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
    rating: 4.6,
    name: "Coffee",
    type: "Hot",
    persons: 1,
    price: 79,
  },
  {
    image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a",
    rating: 4.7,
    name: "Juice",
    type: "Cold",
    persons: 1,
    price: 99,
  },
  {
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767",
    rating: 4.3,
    name: "Shake",
    type: "Cold",
    persons: 1,
    price: 149,
  },
  {
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7",
    rating: 4.4,
    name: "Soda",
    type: "Cold",
    persons: 1,
    price: 89,
  },
  // {
  //   image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
  //   rating: 4.6,
  //   name: "Milk",
  //   type: "Cold",
  //   persons: 1,
  //   price: 59,
  // },
  // {
  //   image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5",
  //   rating: 4.5,
  //   name: "Mocha",
  //   type: "Hot",
  //   persons: 1,
  //   price: 129,
  // },
  // {
  //   image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5",
  //   rating: 4.2,
  //   name: "Latte",
  //   type: "Hot",
  //   persons: 1,
  //   price: 139,
  // },
  // {
  //   image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a",
  //   rating: 4.1,
  //   name: "Punch",
  //   type: "Cold",
  //   persons: 1,
  //   price: 119,
  // },
  // {
  //   image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a",
  //   rating: 4.3,
  //   name: "Cocoa",
  //   type: "Hot",
  //   persons: 1,
  //   price: 149,
  // },
];

const Beverages = ({ searchTerm = '' }) => {
  const filteredItems = beverageItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {filteredItems.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default Beverages;