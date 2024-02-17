import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='w-full text-center flex justify-center items-center h-[80vh] bg-[url("https://images.pexels.com/photos/5705478/pexels-photo-5705478.jpeg")] bg-cover'>
      <div className="bg-black  bg-opacity-50 w-full h-full flex justify-center items-center ">
        <div>
          <h1 className=" text-3xl md:text-6xl font-bold text-[#CFAA8D]">
            {" "}
             <span className="text-xl block text-white">Welcome to</span> Vogue Vastralay
          </h1>
          <h1 className="text-3xl md:text-6xl font-bold my-5 text-[#CFAA8D]">
            {" "}
            VoGuy, your personal fashion mate!
          </h1>
          <div className="flex justify-center my-4">
            <p className="text-sm md:text-2xl  text-white w-1/2 line leading-8	font-bold">
              At Vogue, we believe that fashion is a form of self-expression and
              everyone deserves to feel confident and stylish
            </p>
          </div>
          <Link to={"/about"}>
          <button className="text-xl font-bold w-96 p-2 bg-[#CFAA8D] hover:text-white hover:bg-black">
          About More
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
