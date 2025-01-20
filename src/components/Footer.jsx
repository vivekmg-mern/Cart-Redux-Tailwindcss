import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='bg-green-700 text-white px-3 py-10 flex justify-between margin-top:500px'>
         <div className='w-1/4'>
         <h1 className='font-bold text-xl mb-2'><i class="fa-solid fa-truck"></i> Daily Truck</h1><br />
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus commodi, quisquam animi, exercitationem dolorem tenetur nobis blanditiis ea voluptatem cupiditate labore placeat sunt, ab vitae molestias nemo eaque necessitatibus. Omnis?
         <br />
         Current Version v5.3

          </div> 

          <div>
            <h1 className='font-bold text-xl mb-2'>Links</h1>
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/cart'}>Cart</Link>
              </li> 
              <li>
                <Link to={'/wishlist'}>Wishlist</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className='font-bold text-xl mb-2'>Guides</h1>
            <h5>React</h5>
            <h5>React Bootstrap</h5>
            <h5>React Router </h5>
          </div>

          <div>
            <h1 className='font-bold text-xl mb-2'>Contact</h1>
            <input type="text" placeholder='enter your email'className='rounded pl-3 mb-4' />
            <ul className='flex justify-between'>
              <li><i class="fa-brands fa-instagram"></i></li>
              <li><i class="fa-brands fa-facebook"></i></li>
              <li><i class="fa-brands fa-twitter"></i></li>
              <li><i class="fa-brands fa-youtube"></i></li>
            </ul>
          </div>
      </div>    
    </>
  )
}

export default Footer