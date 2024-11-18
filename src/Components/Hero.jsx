import React from 'react'
import { Link } from 'react-router-dom';
import bottlesImage from '../assets/bottles.jpg';
const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-gradient-to-r from-[#172d44] to-[#15516d] overflow-hidden">
      <div className="relative flex items-center justify-around h-full text-white z-10">
        <div className="flex flex-col justify-evenly items-center w-1/2" >
          <h1 className="text-2xl md:text-5xl font-bold">Bo'ter Water Store</h1>
          <p className="mt-4 text-lg md:text-2xl">Your Perfect Companion for Every Sip.</p>
          <Link to={'/products'} className="px-4 py-2 no-underline text-white text-xl bg-[#232a85] rounded-lg text-center self-center hover:shadow-hover-shadow focus:shadow-click-shadow " >Shop Now</Link>
        </div>
      </div>
      <div
        loading="lazy"
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-20 z-0"
        style={{
          backgroundImage: `url(${bottlesImage})`,
          width: '100%',
          height: '500px',
        }}
        aria-hidden="true"
      ></div>
      <div className="absolute bottom-0 w-full overflow-x-hidden leading-none waves z-0">
        <svg
          className="relative block w-full h-[150px] md:h-[200px] rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="fill-current text-blue-100 parallax">
            <use xlinkHref="#gentle-wave" x="48" y="3" fillOpacity="0.7" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fillOpacity="0.5" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fillOpacity="0.3" />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Hero