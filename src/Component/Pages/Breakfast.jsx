import React from "react";
import Card from "./Card";

const Breakfast = ({ searchTerm = '' }) => {
  // List of food items with proper images
  const foodItems = [
    {
      id: 1,
      name: "Pancake",
      type: "Veg",
      rating: 4.5,
      persons: 1,
      price: 199,
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
    },
   
    {
      id: 3,
      name: "Toast",
      type: "Veg",
      rating: 4.6,
      persons: 1,
      price: 99,
      image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
    },
    
    {
      id: 5,
      name: "Dosa",
      type: "Veg",
      rating: 4.7,
      persons: 1,
      price: 159,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
    },
    {
      id: 6,
      name: "Idli",
      type: "Veg",
      rating: 4.4,
      persons: 1,
      price: 119,
      image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d",
    },
    {
      id: 7,
      name: "Upma",
      type: "Veg",
      rating: 4.1,
      persons: 1,
      price: 109,
      image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26",
    },
    
    {
      id: 9,
      name: "Sandwich",
      type: "Veg",
      rating: 4.5,
      persons: 1,
      price: 149,
      image: "https://images.unsplash.com/photo-1485451456034-3f9391c6f769",
    },
    {
      id: 10,
      name: "Cereal",
      type: "Veg",
      rating: 4.0,
      persons: 1,
      price: 129,
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    }
  ];

  const filteredItems = foodItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-10 items-center">
      {/* List of all items */}
      <div className="flex flex-wrap justify-center gap-4">
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            rating={item.rating}
            name={item.name}
            type={item.type}
            persons={item.persons}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Breakfast;