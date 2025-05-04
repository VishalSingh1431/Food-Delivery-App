import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";
import { jsPDF } from "jspdf";

const Email = () => {
  const location = useLocation();
  const item = location.state;

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      phone: formData.get("user_phone"),
      address: formData.get("message"),
      item: formData.get("item_name"),
      price: formData.get("item_price"),
      paymentId: "pay_" + Math.random().toString(36).substring(2, 10).toUpperCase(), // dummy ID
      date: new Date().toLocaleString(),
    };

    emailjs
      .sendForm(
        "service_g7foke4",
        "template_cqxstig",
        e.target,
        "UeBxyTh7aWD9lVF7s"
      )
      .then(
        () => {
          setSubmittedData(data);
          setOrderConfirmed(true);
          generatePDF(data); // generate receipt
          e.target.reset();
        },
        (error) => {
          alert("Failed to send email. Try again.");
        }
      );
  };

  const generatePDF = (data) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Order Receipt", 80, 20);

    doc.setFontSize(12);
    doc.text(`Date: ${data.date}`, 14, 30);
    doc.text(`Payment ID: ${data.paymentId}`, 14, 40);

    doc.text(`Name: ${data.name}`, 14, 60);
    doc.text(`Email: ${data.email}`, 14, 70);
    doc.text(`Phone: ${data.phone}`, 14, 80);
    doc.text(`Address: ${data.address}`, 14, 90);

    doc.text(`Item: ${data.item}`, 14, 110);
    doc.text(`Price: ₹${data.price}`, 14, 120);

    doc.text("Thank you for your order!", 14, 140);

    doc.save(`Receipt_${data.paymentId}.pdf`);
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      {orderConfirmed && submittedData ? (
        <div className="bg-green-100 border border-green-400 text-green-700 p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-3">🎉 Order Successful!</h2>
          <p><strong>Item:</strong> {submittedData.item}</p>
          <p><strong>Price:</strong> ₹{submittedData.price}</p>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Phone:</strong> {submittedData.phone}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <p><strong>Payment ID:</strong> {submittedData.paymentId}</p>
          <p className="mt-4 text-sm text-gray-600">A confirmation has been sent to your email.</p>
          <p className="mt-2 text-sm font-semibold">📄 Receipt has been downloaded automatically.</p>
        </div>
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-6 text-center">Confirm Your Order</h2>

          <form onSubmit={sendEmail} className="space-y-5">
            <input type="hidden" name="to_email" value="vishalkumar.singh.cer21@itbhu.ac.in" />

            <div>
              <label className="block mb-1 font-medium">Item Name</label>
              <input
                name="item_name"
                value={item?.name}
                readOnly
                className="w-full p-2 border rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Price (₹)</label>
              <input
                name="item_price"
                value={item?.price}
                readOnly
                className="w-full p-2 border rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input name="user_name" type="text" required className="w-full p-2 border rounded" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Your Email</label>
              <input name="user_email" type="email" required className="w-full p-2 border rounded" />
            </div>

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

            <div>
              <label className="block mb-1 font-medium">Delivery Address / Notes</label>
              <textarea
                name="message"
                required
                className="w-full p-2 border rounded"
                placeholder="Include address, delivery instructions, etc."
              />
            </div>

            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
              Place Order
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Email;
