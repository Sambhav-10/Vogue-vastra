import React from "react";

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
          <button className="text-white bg-[#CFAA8D] p-2 rounded-sm mt-3 w-40 font-bold">
          About More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
