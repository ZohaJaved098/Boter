import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BgImage2 from "../assets/abstract-pool-water-surface-background-with-sun-light-reflection.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="flex flex-col justify-around h-full w-screen pt-28"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(166,166,230,0.8), rgba(97,97,210,0.8)), url(${BgImage2})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      loading="lazy"
    >
      <h1 className="text-center text-[#060628] font-extrabold text-4xl" data-aos="fade-up">
        About Bo'ter Water Store
      </h1>
      <div className="flex justify-around gap-10 p-10">
        <div
          className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition"
          data-aos="fade-up"
        >
          <i className="fas fa-tint text-blue-500 text-4xl"></i>
          <h2 className="text-[#161655] font-bold mt-2">Our Mission</h2>
          <p className="text-lg text-gray-700 mt-2 text-center">
            Providing water bottles that blend sustainability with style.
          </p>
        </div>

        <div
          className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition"
          data-aos="fade-up"
        >
          <i className="fas fa-leaf text-green-500 text-4xl"></i>
          <h2 className="text-[#161655] font-bold mt-2">Our Vision</h2>
          <p className="text-lg text-gray-700 mt-2 text-center">
            Leading the way in eco-friendly hydration solutions.
          </p>
        </div>
      </div>
      <div className="flex justify-center p-10">
        <Link to={'/products'} className="bg-[#060628] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#161655] transform hover:scale-110 transition">
          Shop Now
        </Link>
      </div>
      <div className="p-10 flex flex-col items-center">
        <h2 className="text-[#161655] text-3xl font-bold mb-4" data-aos="fade-up">
          Welcome to Bo'ter Water Store
        </h2>
        <p
          className="text-lg text-black w-3/4 self-center text-center leading-8"
          data-aos="fade-up"
        >
          Welcome to Bo'ter Water Store, your go-to destination for premium water bottles
          that are as stylish as they are sustainable. We believe hydration should be an
          enjoyable part of your lifestyle, and that's why we offer bottles designed for
          durability, functionality, and elegance. By choosing us, you're not just choosing
          a product—you're supporting a greener future.
        </p>
      </div>
    </div>
  );
};

export default About;
