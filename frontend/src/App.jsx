import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Pages/Home';
import Breakfast from './Component/Pages/Breakfast';
import Lunch from './Component/Pages/Lunch';
import Dinner from './Component/Pages/Dinner';
import Beverages from './Component/Pages/Beverages';
import Desserts from './Component/Pages/Desserts';
import Landing from './Component/Pages/Landing';
import All from './Component/All';
import Email from './Component/Email';
import Signup from './Component/Pages/signup';
import Login from './Component/Pages/Login';
import Checkout from './Component/Checkout';  // Import Checkout page
import axios from 'axios';
import React from 'react';
import './App.css';

function App() {
  return (
    <>
          <Navbar />
      <Landing /> 
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout/>} /> {/* Add route for checkout */}
        <Route path="/all" element={<All />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/email" element={<Email />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
