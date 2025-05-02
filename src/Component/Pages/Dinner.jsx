import React from "react";
import Card from "./Card";

const dinnerItems = [
  {
    image: "https://images.unsplash.com/photo-1547592180-85f173990554",
    rating: 4.5,
    name: "Soup",
    type: "Veg",
    persons: 1,
    price: 249,
  },
  {
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707",
    rating: 4.6,
    name: "Paneer",
    type: "Veg",
    persons: 1,
    price: 399,
  },
  {
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    rating: 4.7,
    name: "Dal",
    type: "Veg",
    persons: 1,
    price: 199,
  },
  {
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    rating: 4.3,
    name: "Roti",
    type: "Veg",
    persons: 1,
    price: 99,
  },
  {
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    rating: 4.4,
    name: "Rice",
    type: "Veg",
    persons: 1,
    price: 149,
  },
  {
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
    rating: 4.6,
    name: "Fish",
    type: "Non-Veg",
    persons: 1,
    price: 499,
  },
  {
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143",
    rating: 4.5,
    name: "Chicken",
    type: "Non-Veg",
    persons: 1,
    price: 449,
  },
  {
    image: "https://images.unsplash.com/photo-1602253057119-44d745d9b860",
    rating: 4.2,
    name: "Mutton",
    type: "Non-Veg",
    persons: 1,
    price: 599,
  },
  {
    image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc",
    rating: 4.1,
    name: "Egg",
    type: "Non-Veg",
    persons: 1,
    price: 199,
  },
  {
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    rating: 4.3,
    name: "Bowl",
    type: "Veg",
    persons: 1,
    price: 179,
  },
];

const Dinner = ({ searchTerm = '' }) => {
  const filteredItems = dinnerItems.filter((item) =>
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

export default Dinner;