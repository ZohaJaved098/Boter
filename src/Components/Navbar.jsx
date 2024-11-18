import React, {useState} from 'react';
import { FaBars } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpened, setIsOpened]=useState(false);
  return (
    <nav className={`bg-[#060628] w-screen flex ${isOpened? 'flex-col items-center pl-5 h-screen': 'flex-row h-24 items-center'} justify-between text-white fixed z-[1000]`}>
      <div className='flex justify-center items-center w-[15%] cursor-pointer' >
        <img src="/bottle_splash.png" alt="Logo" width={100} height={100} className='ml-5' />
        <p className='text-2xl font-semibold ' >Bo'ter</p>
      </div>
      <div className={`flex lg:hidden mr-5`} >
        <FaBars className='w-10 h-10' onClick={()=>setIsOpened(!isOpened)} />
      </div>
      <div className={` justify-evenly items-center w-[60%] h-full text-lg ${isOpened? 'flex flex-col ': 'hidden'} lg:flex`}>
        <Link to={'/'} className="no-underline text-white relative before:absolute before:-bottom-2 
          before:left-1/2 before:bg-[#3c78b8] before:w-full before:h-[4px] before:origin-center 
          before:transition-transform before:duration-300 before:transform before:translate-x-[-50%] 
          before:scale-x-0 hover:before:scale-x-100">Home</Link>
        <Link to={'/products'} className="no-underline text-white relative before:absolute before:-bottom-2 
          before:left-1/2 before:bg-[#3c78b8] before:w-full before:h-[4px] before:origin-center 
          before:transition-transform before:duration-300 before:transform before:translate-x-[-50%] 
          before:scale-x-0 hover:before:scale-x-100">Products</Link>
        <Link to={'/about'} className="no-underline text-white relative before:absolute before:-bottom-2 
          before:left-1/2 before:bg-[#3c78b8] before:w-full before:h-[4px] before:origin-center 
          before:transition-transform before:duration-300 before:transform before:translate-x-[-50%] 
          before:scale-x-0 hover:before:scale-x-100">About Us</Link>
        <Link to={'/contact'} className="no-underline text-white relative before:absolute before:-bottom-2 
          before:left-1/2 before:bg-[#3c78b8] before:w-full before:h-[4px] before:origin-center 
          before:transition-transform before:duration-300 before:transform before:translate-x-[-50%] 
          before:scale-x-0 hover:before:scale-x-100">Contact Us</Link>
      </div>
      <div className={`w-[20%] mr-5 ${isOpened? 'flex': 'hidden'} lg:flex `} >
        <form action="#" id='search' className='flex justify-around w-full'>
          <input type="text" id='search' name='search' className='text-[#131553] font-semibold px-2 py-1 outline-none rounded-lg focus:border-0 active:border-0' />
          <input type="button" value="Search" className='px-3 py-1 bg-sky-700 hover:bg-[#222263] text-lg font-semibold rounded-lg ' />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
