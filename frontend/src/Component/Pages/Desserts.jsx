import React from "react";
import Card from "./Card";

const Desserts = ({ searchTerm = '' }) => {
  const dessertItems = [
    {
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      rating: 4.7,
      name: "Cake",
      type: "Veg",
      persons: 1,
      price: 199,
    },
    {
      image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e",
      rating: 4.6,
      name: "Brownie",
      type: "Veg",
      persons: 1,
      price: 149,
    },
    
    {
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
      rating: 4.8,
      name: "Donut",
      type: "Veg",
      persons: 1,
      price: 99,
    },
    {
      image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75",
      rating: 4.3,
      name: "Muffin",
      type: "Veg",
      persons: 1,
      price: 119,
    },
    {
      image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1",
      rating: 4.4,
      name: "Pudding",
      type: "Veg",
      persons: 1,
      price: 159,
    },
    
    // {
    //   image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d",
    //   rating: 4.5,
    //   name: "Cupcake",
    //   type: "Veg",
    //   persons: 1,
    //   price: 139,
    // },
    // {
    //   image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d",
    //   rating: 4.6,
    //   name: "Waffle",
    //   type: "Veg",
    //   persons: 1,
    //   price: 169,
    // },
    // {
    //   image: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd",
    //   rating: 4.2,
    //   name: "Macaron",
    //   type: "Veg",
    //   persons: 1,
    //   price: 189,
    // },
    // {
    //   image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f",
    //   rating: 4.9,
    //   name: "Ice Cream",
    //   type: "Veg",
    //   persons: 1,
    //   price: 149,
    // },
    // {
    //   image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75",
    //   rating: 4.4,
    //   name: "Cheesecake",
    //   type: "Veg",
    //   persons: 1,
    //   price: 219,
    // }
  ];

  const filteredItems = dessertItems.filter((item) =>
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

export default Desserts;