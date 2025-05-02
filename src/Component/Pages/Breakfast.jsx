import React from "react";
import Card from "./Card"; // Assuming Card is your component

const Breakfast = () => {
  // List of food items
  const foodItems = [
    {
      id: 1,
      name: "Pancake",
      type: "Veg",
      rating: 4.5,
      persons: 1,
      price: 199,
      image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg",
    },
    {
      id: 2,
      name: "Omelet",
      type: "Non-Veg",
      rating: 4.3,
      persons: 1,
      price: 149,
      image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg",
    },
    {
      id: 3,
      name: "Toast",
      type: "Veg",
      rating: 4.6,
      persons: 1,
      price: 99,
      image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg",
    },
    {
      id: 4,
      name: "Paratha",
      type: "Veg",
      rating: 4.2,
      persons: 1,
      price: 129,
      image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg",
    },
    {
      id: 5,
      name: "Dosa",
      type: "Veg",
      rating: 4.7,
      persons: 1,
      price: 159,
      image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-10 items-center">
      {/* List of all items */}
      <div className="flex flex-wrap justify-center gap-4">
        {foodItems.map((item) => (
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
