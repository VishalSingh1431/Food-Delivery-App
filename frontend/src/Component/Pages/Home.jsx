import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import All from '../All';
import Signup from './signup';
// import Signup from './Signup';

const Home = () => {
  const location = useLocation();

  return (
    <div>
      <div>
      {/* <Signup/> */}
        <h1 className='text-5xl font-bold text-center pb-4'>Eat Fresh & Healthy</h1>

        {/* Navigation */}
        <ul className='flex gap-4 justify-center p-4'>
          <li className='text-xl w-25 p-1 text-center hover:bg-white transition duration-1000 shadow-[0px_-10px_20px_rgba(0,255,255,0.3),0px_10px_20px_rgba(255,255,255,0.3)] shadow-white rounded-2xl'>
            <Link to="/">All</Link>
          </li>
          <li className='text-xl w-25 p-1 text-center hover:bg-white transition duration-1000 shadow-[0px_-10px_20px_rgba(0,255,255,0.3),0px_10px_20px_rgba(255,255,255,0.3)] shadow-white rounded-2xl'>
            <Link to="/breakfast">Breakfast</Link>
          </li>
          <li className='text-xl w-25 p-1 text-center hover:bg-white transition duration-1000 shadow-[0px_-10px_20px_rgba(0,255,255,0.3),0px_10px_20px_rgba(255,255,255,0.3)] shadow-white rounded-2xl'>
            <Link to="/lunch">Lunch</Link>
          </li>
          <li className='text-xl w-25 p-1 text-center hover:bg-white transition duration-1000 shadow-[0px_-10px_20px_rgba(0,255,255,0.3),0px_10px_20px_rgba(255,255,255,0.3)] shadow-white rounded-2xl'>
            <Link to="/dinner">Dinner</Link>
          </li>
          <li className='text-xl w-25 p-1 text-center hover:bg-white transition duration-1000 shadow-[0px_-10px_20px_rgba(0,255,255,0.3),0px_10px_20px_rgba(255,255,255,0.3)] shadow-white rounded-2xl'>
            <Link to="/beverages">Beverages</Link>
          </li>
          <li className='text-xl w-25 p-1 text-center hover:bg-white transition duration-1000 shadow-[0px_-10px_20px_rgba(0,255,255,0.3),0px_10px_20px_rgba(255,255,255,0.3)] shadow-white rounded-2xl'>
            <Link to="/desserts">Desserts</Link>
          </li>
        </ul>
      </div>

      {/* Show All component if on root path */}
      {location.pathname === '/' && <All />}
    </div>
  );
};

export default Home;
