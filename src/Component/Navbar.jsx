import React from 'react'
import Search from './Pages/Search'

const Navbar = () => {
  return (
    <div className='bg-green-500 h-20 flex justify-between p-5'>

      <div>
        <h1 className='bg-white rounded-2xl text-2xl p-0.5'>VIPRA FOOD</h1>
      </div>
      <div>
        <ul className='flex gap-3 '>
          <li>Home</li>
          <li>Menu</li>
          <li>Offers</li>
          <li>Your Orders</li>

        </ul>
      </div>
      <div >
        <ul className='flex gap-3'>
          <li>Cart</li>
          <li className='border-amber-50'>Search Here</li>
        </ul>
      </div>


    </div>
  )
}

export default Navbar
