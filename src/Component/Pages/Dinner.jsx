import React from "react";
import Card from "./Card";

const dinnerItems = [
  {
    image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg",
    rating: 4.5,
    name: "Soup",
    type: "Veg",
    persons: 1,
    price: 249,
  },
  {
    image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg",
    rating: 4.6,
    name: "Paneer",
    type: "Veg",
    persons: 1,
    price: 399,
  },
  {
    image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg",
    rating: 4.7,
    name: "Dal",
    type: "Veg",
    persons: 1,
    price: 199,
  },
  {
    image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg",
    rating: 4.3,
    name: "Roti",
    type: "Veg",
    persons: 1,
    price: 99,
  },
  {
    image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg",
    rating: 4.4,
    name: "Rice",
    type: "Veg",
    persons: 1,
    price: 149,
  },
  {
    image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg",
    rating: 4.6,
    name: "Fish",
    type: "Non-Veg",
    persons: 1,
    price: 499,
  },
  {
    image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg",
    rating: 4.5,
    name: "Chicken",
    type: "Non-Veg",
    persons: 1,
    price: 449,
  },
  {
    image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg",
    rating: 4.2,
    name: "Mutton",
    type: "Non-Veg",
    persons: 1,
    price: 599,
  },
  {
    image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg",
    rating: 4.1,
    name: "Egg",
    type: "Non-Veg",
    persons: 1,
    price: 199,
  },
  {
    image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg",
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