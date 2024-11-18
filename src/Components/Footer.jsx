import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='w-screen h-full flex flex-col p-10 bg-[#15516d] backdrop-blur-3xl shadow-lg border-t-8 border-[#0a1e28] '>
        <div className='flex justify-around'>
            <div className='flex flex-col justify-evenly items-start'>
                <Link to={'/'} className='no-underline text-lg text-[#ffffff] font-semibold  hover:text-[#6262dc]' >Go to Home Page</Link>
                <Link to={'/products'} className='no-underline text-lg text-[#ffffff] font-semibold  hover:text-[#6262dc]' >Go to All Products Page</Link>
                <Link to={'/about'} className='no-underline text-lg text-[#ffffff] font-semibold  hover:text-[#6262dc]' >Go to About Us Page</Link>
                <Link to={'/contact'} className='no-underline text-lg text-[#ffffff] font-semibold  hover:text-[#6262dc]' >Go to Contact Us Page</Link>
            </div>
            <div className='flex flex-col justify-evenly items-end'>
                <Link to={'/'} className='no-underline text-lg text-[#ffffff] font-semibold  hover:text-[#6262dc]' >LinkedIn</Link>
                <Link to={'/'} className='no-underline text-lg text-[#ffffff] font-semibold  hover:text-[#6262dc]' >Instagram</Link>
                <Link to={'/'} className='no-underline text-lg text-[#ffffff] font-semibold  hover:text-[#6262dc]' >Facebook</Link>
                <Link to={'/'} className='no-underline text-lg text-[#ffffff] font-semibold  hover:text-[#6262dc]' >X (Formerly Twitter)</Link>
            </div>
        </div>
        <hr className='text-white border-4'/>
        <div className='text-center text-white'>
            <p>© 2024 Bo'ter Water Store. Created for Internshippakistan Internship. <br />Credit of all pictures to <a href="http://www.freepik.com/" className='no-underline text-[#000]' >FreePik</a> All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer