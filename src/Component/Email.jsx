import React from "react";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";

const Email = () => {
  const location = useLocation();
  const item = location.state;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_g7foke4",       // service ID
      "template_cqxstig",      // template ID
      e.target,
      "UeBxyTh7aWD9lVF7s"      // public Key
    ).then(
      (result) => {
        alert("Order placed successfully!");
      },
      (error) => {
        alert("Failed to send email. Try again.");
      }
    );

    e.target.reset();
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Confirm Your Order</h2>

      <form onSubmit={sendEmail} className="space-y-5">
        {/* Send To Email */}
        <input type="hidden" name="to_email" value="vishalkumar.singh.cer21@itbhu.ac.in" />

        {/* Order Item Name */}
        <div>
          <label className="block mb-1 font-medium">Item Name</label>
          <input
            name="item_name"
            value={item?.name}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>

        {/* Order Price */}
        <div>
          <label className="block mb-1 font-medium">Price (₹)</label>
          <input
            name="item_price"
            value={item?.price}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>

        {/* User Name */}
        <div>
          <label className="block mb-1 font-medium">Your Name</label>
          <input
            name="user_name"
            type="text"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* User Email */}
        <div>
          <label className="block mb-1 font-medium">Your Email</label>
          <input
            name="user_email"
            type="email"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            name="user_phone"
            type="tel"
            required
            className="w-full p-2 border rounded"
            pattern="[0-9]{10}"
            placeholder="10-digit phone number"
          />
        </div>

        {/* Delivery Message */}
        <div>
          <label className="block mb-1 font-medium">Delivery Address / Notes</label>
          <textarea
            name="message"
            required
            className="w-full p-2 border rounded"
            placeholder="Include address, delivery instructions, etc."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Email;
