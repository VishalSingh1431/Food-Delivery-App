import React from 'react' 
import Card from './Pages/Card'
const Navbar = () => {
  return (
    <div className='bg-rgb(188, 204, 220) h-20 flex justify-between p-5'>
{/* shadow-[0px_-10px_20px_rgba(0,255,255,0.3),0px_10px_20px_rgba(255,255,255,0.3)] shadow-white rounded-2xl */}
      <div>
        <h1 className='shadow-[0px_-10px_20px_rgba(0,255,255,0.3),0px_10px_20px_rgba(255,255,255,0.3)] shadow-white rounded-2xl text-2xl p-0.5'>FOOD</h1>
      </div>
      <div>
        <ul className='flex gap-3 '>
          {/* <li>Home</li> */}
          {/* <li>About</li>
          <li>Our Team</li>
          <li>Testimonials</li>
          <li>Contact</li> */}
        </ul>
      </div>
      <div >
        {/* <ul className='flex gap-3'> 
          <li className='border-amber-50'>Search Here</li>
        </ul>  */}
      </div>


    </div>
  )
}

export default Navbar
