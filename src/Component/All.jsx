import React from "react";
import Breakfast from "./Pages/Breakfast";
import Lunch from "./Pages/Lunch";
import Dinner from "./Pages/Dinner";
import Beverages from "./Pages/Beverages";
import Desserts from "./Pages/Desserts";
 

const All = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <h1 className="text-3xl font-bold">All Categories</h1>
      
      <div className="w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">🍳 Breakfast</h2>
        <Breakfast/>
      </div>

      <div className="w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">🍛 Lunch</h2>
        <Lunch/>
      </div>

      <div className="w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">🍽️ Dinner</h2>
        <Dinner/>
      </div>

      <div className="w-full text-center">
        <h2 className="text-2xl font-semibold mb-4 text-center">🥤 Beverages</h2>
        <Beverages/>
      </div>

      <div className="w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">🍰 Desserts</h2>
        <Desserts/>
      </div>
    </div>
  );
};

export default All;
