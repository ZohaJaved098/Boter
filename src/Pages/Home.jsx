import React from "react";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#172d44] to-[#15516d] pb-10 ">
      <Hero/>
      <div className=" h-full w-full text-white p-10 flex flex-col justify-between gap-5 items-center " >
        <h6 className="text-4xl md:text-3xl font-bold underline">Why Us?</h6>
        <p className="text-2xl ml-10 text-center w-1/2 ">
          Our water bottles are crafted with care, 
          blending modern designs, eco-friendly materials, 
          and unparalleled durability. <br />Stay hydrated in style and make a difference in the world one sip at a time.
        </p>
      </div>
    </div>
    
  );
};

export default Home;