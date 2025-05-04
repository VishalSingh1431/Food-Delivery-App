import React, { useState } from 'react';

const Search = () => {
  // Sample list of food items
  const foodItems = [
    'Pizza',
    'Burger',
    'Pasta',
    'Salad',
    'Sushi',
    'Taco',
    'Steak',
    'Sandwich',
    'Ramen',
    'Curry',
  ];

  // State for the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the food items based on the search term
  const filteredFoodItems = foodItems.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div> 
      <input
        type="text"
        placeholder="Search Here"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredFoodItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;