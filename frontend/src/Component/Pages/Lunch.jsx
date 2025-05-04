import React from "react";
import Card from "./Card";

const Lunch = ({ searchTerm = '' }) => {
  const lunchItems = [
    {
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      rating: 4.2,
      name: "Burger",
      type: "Veg",
      persons: 1,
      price: 299,
    },
    {
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
      rating: 4.5,
      name: "Pizza",
      type: "Veg",
      persons: 1,
      price: 399,
    },
    {
      image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
      rating: 4.3,
      name: "Pasta",
      type: "Veg",
      persons: 1,
      price: 249,
    },
    {
      image: "https://images.unsplash.com/photo-1485451456034-3f9391c6f769",
      rating: 4.0,
      name: "Sandwich",
      type: "Veg",
      persons: 1,
      price: 199,
    },
    {
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71",
      rating: 4.1,
      name: "Wrap",
      type: "Veg",
      persons: 1,
      price: 179,
    },
    // {
    //   image: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
    //   rating: 4.4,
    //   name: "Salad",
    //   type: "Veg",
    //   persons: 1,
    //   price: 159,
    // },
    // {
    //   image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a",
    //   rating: 4.6,
    //   name: "Biryani",
    //   type: "Non-Veg",
    //   persons: 1,
    //   price: 349,
    // },
    // {
    //   image: "https://images.unsplash.com/photo-1555244162-803834f70033",
    //   rating: 4.2,
    //   name: "Noodles",
    //   type: "Veg",
    //   persons: 1,
    //   price: 229,
    // },
    // {
    //   image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47",
    //   rating: 4.3,
    //   name: "Tacos",
    //   type: "Non-Veg",
    //   persons: 1,
    //   price: 279,
    // },
    // {
    //   image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143",
    //   rating: 4.7,
    //   name: "Steak",
    //   type: "Non-Veg",
    //   persons: 1,
    //   price: 499,
    // },
    // {
    //   image: "https://images.unsplash.com/photo-1588315029754-2dd090d09047",
    //   rating: 4.4,
    //   name: "Sushi",
    //   type: "Non-Veg",
    //   persons: 1,
    //   price: 399,
    // },
    // {
    //   image: "https://images.unsplash.com/photo-1601050690117-64b6d5a5d2a1",
    //   rating: 4.5,
    //   name: "Curry",
    //   type: "Veg",
    //   persons: 1,
    //   price: 279,
    // }
  ];

  const filteredItems = lunchItems.filter((item) =>
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

export default Lunch;