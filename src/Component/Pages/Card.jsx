import React from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Card = ({ image, rating, name, type, persons, price }) => {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/email", {
      state: {
        image,
        rating,
        name,
        type,
        persons,
        price,
      },
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-62 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
      <img src={image} alt={name} className="w-40 h-40 object-cover rounded-full shadow-md" />

      <div className="mt-3 flex flex-col items-center">
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="ml-1 text-sm font-medium">{rating}</span>
        </div>
        <h3 className="text-xl font-semibold mt-2">{name}</h3>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            <th className="p-2">Type</th>
            <th className="border-l border-l-indigo-200 p-2">Persons</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">{type}</td>
            <td className="border-l border-l-indigo-200 p-2">{persons}</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-3 flex gap-20">
        <div className="text-lg font-bold">₹{price}</div>
        <button
          onClick={handleOrder}
          className="w-25 shadow-[0px_-10px_20px_rgba(0,255,255,0.3),0px_10px_20px_rgba(255,255,255,0.3)] shadow-blue-300 p-2 rounded-3xl hover:bg-blue-300 transition duration-300"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Card;
