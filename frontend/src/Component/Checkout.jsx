import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import emailjs from "emailjs-com";

const Checkout = () => {
  const location = useLocation();
  const { image, rating, name, type, persons, price } = location.state || {};

  const [userData, setUserData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const [paymentId, setPaymentId] = useState("");
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState("");
  const [receiptHtml, setReceiptHtml] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => {
        setError("Failed to load Razorpay script.");
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const createOrder = async () => {
    try {
      const res = await axios.post("http://localhost:5000/orders", {
        amount: price * 100,
        currency: "INR",
      });
      return res.data;
    } catch (err) {
      console.error("Error creating order:", err);
      setError("Failed to create order. Please try again.");
      return null;
    }
  };

  const fetchPaymentDetails = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/payment/${id}`);
      setPaymentDetails(res.data);
    } catch (err) {
      console.error("Error fetching payment details:", err);
      setError("Could not fetch payment details.");
    }
  };

  const sendEmail = (paymentId) => {
    const formData = {
      to_email: "vishalkumar.singh.cer21@itbhu.ac.in",
      item_name: name,
      item_price: price,
      user_name: userData.user_name,
      user_email: userData.user_email,
      user_phone: userData.user_phone,
      message: userData.message,
      payment_id: paymentId,
    };

    emailjs
      .send("service_g7foke4", "template_cqxstig", formData, "UeBxyTh7aWD9lVF7s")
      .then(
        (res) => {
          console.log("Email sent successfully", res.text);
        },
        (err) => {
          console.error("Email failed", err.text);
        }
      );
  };

  const generateReceipt = (paymentId) => {
    const receipt = `
      <h2>Receipt</h2>
      <p><strong>Item:</strong> ${name}</p>
      <p><strong>Amount:</strong> ₹${price}</p>
      <p><strong>Payment ID:</strong> ${paymentId}</p>
      <p><strong>Name:</strong> ${userData.user_name}</p>
      <p><strong>Email:</strong> ${userData.user_email}</p>
      <p><strong>Phone:</strong> ${userData.user_phone}</p>
      <p><strong>Message:</strong> ${userData.message}</p>
      <p><strong>Status:</strong> Payment Successful</p>
    `;
    setReceiptHtml(receipt);
  };

  const downloadReceipt = () => {
    const blob = new Blob([receiptHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `receipt-${paymentId}.html`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handlePayment = async () => {
    if (!userData.user_name || !userData.user_email || !userData.user_phone || !userData.message) {
      setError("Please fill all the details before making payment.");
      return;
    }

    const isScriptLoaded = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!isScriptLoaded) return;

    const order = await createOrder();
    if (!order) return;

    const options = {
      key: "rzp_test_XnEiyGAi048Iub",
      amount: order.amount,
      currency: "INR",
      name: "Food",
      description: "Payment for service",
      image: "https://avswebsolutions.tech/logo.png",
      order_id: order.id,
      handler: async function (response) {
        const paymentId = response.razorpay_payment_id;
        setPaymentId(paymentId);
        setPaymentSuccess(true);
        await fetchPaymentDetails(paymentId);
        sendEmail(paymentId);
        generateReceipt(paymentId);  // Generate receipt after payment success
      },
      prefill: {
        name: userData.user_name,
        email: userData.user_email,
        contact: userData.user_phone,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response) {
      console.error("Payment failed:", response.error);
      setError("Payment failed. Please try again.");
    });
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 space-y-6">
        <div className="text-center">
          <img src={image} alt={name} className="w-32 h-32 object-cover mx-auto rounded-full mb-4" />
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-500">{type}</p>
          <p className="text-lg font-semibold mt-2">₹{price}</p>
        </div>

        {!paymentSuccess && (
          <form className="space-y-4">
            <input type="text" name="user_name" placeholder="Your Name" className="w-full p-2 border rounded" onChange={handleChange} required />
            <input type="email" name="user_email" placeholder="Your Email" className="w-full p-2 border rounded" onChange={handleChange} required />
            <input type="tel" name="user_phone" placeholder="Your Phone (10 digits)" className="w-full p-2 border rounded" pattern="[0-9]{10}" onChange={handleChange} required />
            <textarea name="message" placeholder="Delivery Address / Notes" className="w-full p-2 border rounded" rows={3} onChange={handleChange} required />
            <button type="button" onClick={handlePayment} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full">
              Pay ₹{price}
            </button>
          </form>
        )}

        {paymentSuccess && paymentId && (
          <div className="bg-green-50 border border-green-300 rounded p-4 text-green-800 text-center">
            <h3 className="font-semibold text-xl mb-2">🎉 Order Successful!</h3>
            <p><strong>Payment ID:</strong> {paymentId}</p>
            {/* Show Receipt and Download Button */}
            <div>
              <button
                onClick={downloadReceipt}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mt-4"
              >
                Download Receipt
              </button>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-300 rounded p-4 text-red-800">
            {error}
          </div>
        )}

        {paymentDetails && (
          <div className="bg-white border rounded p-4 mt-4 shadow-inner">
            <h4 className="font-bold text-lg mb-2">Payment Details</h4>
            <ul className="space-y-1 text-sm">
              <li><strong>Amount:</strong> ₹{paymentDetails.amount / 100}</li>
              <li><strong>Status:</strong> {paymentDetails.status}</li>
              <li><strong>Currency:</strong> {paymentDetails.currency}</li>
              <li><strong>Method:</strong> {paymentDetails.method}</li>
              <li><strong>Email:</strong> {paymentDetails.email}</li>
              <li><strong>Contact:</strong> {paymentDetails.contact}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
