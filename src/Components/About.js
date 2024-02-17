import React from "react";

const Hero = () => {
  return (
    <div>
      <div className='w-full text-center flex justify-center items-center h-[50vh] bg-[url("https://images.pexels.com/photos/5705478/pexels-photo-5705478.jpeg")] bg-cover'>
        <div className="bg-black  bg-opacity-50 w-full h-full flex justify-center items-center ">
          <div>
            <h1 className="text-3xl md:text-6xl font-bold my-5 text-[#CFAA8D]">
              {" "}
              About Us
            </h1>
          </div>
        </div>
      </div>
      <div className="block md:flex">
        <div className="w-full md:w-1/2 text-center  md:flex justify-center items-center">
          <div className="flex justify-center">
            <div>
              <h1 className="text-4xl p-4 font-bold">Who We Are</h1>
              <p className="px-10">
                Welcome to Vogue Vastralay: Vo-Guy, your personal fashion mate!
                At Vo-Guy, we believe that fashion is a form of self-expression
                and everyone deserves to feel confident and stylish. That’s why
                we’ve made it our mission to bring expert styling advice right
                to your fingertips. Personalized Styling: Our team of
                experienced stylists are dedicated to understanding your unique
                style preferences and needs. They will work closely with you to
                curate outfits that not only make you look good but also make
                you feel good. Whether you’re dressing up for a special event,
                need a wardrobe refresh, or just want to try something new, our
                stylists are here to guide you.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="https://images.pexels.com/photos/9392460/pexels-photo-9392460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
