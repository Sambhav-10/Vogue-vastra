import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="">
      <div className='w-full text-center flex justify-center items-center h-[50vh] bg-[url("https://images.pexels.com/photos/5705478/pexels-photo-5705478.jpeg")] bg-cover'>
        <div className="bg-black  bg-opacity-50 w-full h-full flex justify-center items-center ">
          <div>
            <h1 className="text-3xl md:text-6xl font-bold my-5 text-[#CFAA8D]">
              {" "}
              Contact Us
            </h1>

            <div className="">
              <form className="space-y-4 text-white text-center w-full mb-4 ">
                <div className="flex justify-center">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="block bg-black text-whites w-[100%] h-10 p-4"
                  />
                </div>
                <div className="flex justify-center">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="block bg-black text-whites w-[100%] h-10 p-4"
                  />
                </div>
                <div className="flex justify-center">
                  <input
                    type="email"
                    placeholder="Email"
                    className="block bg-black text-whites w-[100%] h-10 p-4"
                  />
                </div>
                <button className="bg-[#C39D63] h-10 p-2 w-[100%]">
                  Contact Us
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-center text-4xl font-bold">
          Follow Our Team Social Media Account
        </h1>
        <h1 className="text-2xl text-center my-10 font-bold">Connect To </h1>
        <div className="flex justify-center gap-12">
          <div className="text-center">
            <Link to="https://www.instagram.com/jyotis_mangalam_apparels?igsh=MXJjYmFqcHFwZHRlZg==">
              <div className="flex justify-center">
                <img
                  width={50}
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt=""
                />
              </div>
                <h4 className="text-2xl">Jyoti</h4>
            </Link>
          </div>
          <div className="text-center">
            <Link to="https://www.instagram.com/poonambhojwani?igsh=NDV1YWZnY2gxeDdk&utm_source=qr">
              <div className="flex justify-center">
                <img
                  width={50}
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt=""
                />
              </div>
                <h4 className="text-2xl">Poonam</h4>
            </Link>
          </div>
          <div className="text-center">
            <Link to="https://www.instagram.com/__namratasingh__?utm_source=qr&igsh=cjRuN29md2w5bDk2">
              <div className="flex justify-center">
                <img
                  width={50}
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt=""
                />
              </div>
                <h4 className="text-2xl">Namrata</h4>
            </Link>
          </div>
          <div className="text-center">
            <Link to="https://www.instagram.com/aditya.singhhhhh?utm_source=qr&igsh=MTNsYzAxenE1NnV3ZA=">
              <div className="flex justify-center">
                <img
                  width={50}
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt=""
                />
              </div>
                <h4 className="text-2xl">Aditya</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
