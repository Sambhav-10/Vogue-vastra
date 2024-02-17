import React from "react";

const Cta = () => {
  return (
    <div className="my-5">
      <h1 className="text-center text-4xl py-4 mb-4 font-bold">
        Book Your Call
      </h1>
      <div className="block  md:flex w-full justify-center gap-24 ">
        <div className="">
          <div className="w-full">
            <div className="flex justify-center relative text-center">
              <img
                className="w-96 h-96"
                src="https://images.pexels.com/photos/3868311/pexels-photo-3868311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              {/* <h1 className="absolute top-1/2 left-1 text-center text-white">Lets Discuss Your Comfort & Budget</h1> */}
            </div>

           <div className="flex justify-center relative text-center">

            <button className="text-xl font-bold w-96 p-2 bg-[#CFAA8D] hover:text-white hover:bg-black">
              Male
            </button>
           </div>
          </div>
        </div>
        <div className="sm:my-5 md:my-0">
          <div className="w-full">
            <div className="flex justify-center relative text-center">

            <img
              className="w-96 h-96"
              src="https://images.pexels.com/photos/13562801/pexels-photo-13562801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              />
              </div>
            <div className="text-center">
             <div className="flex justify-center relative text-center">


              <button className="text-xl font-bold w-96 p-2 bg-[#CFAA8D] hover:text-white hover:bg-black">
                Female
              </button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
