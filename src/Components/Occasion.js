import React from "react";

const Occasion = () => {
  return (
    <div className="my-10 ">
      <h1 className="text-center text-4xl font-bold">Our Market</h1>
      <div className="flex justify-center gap-7 wrap-scroll">
       
        <div className="">
          <h1 className="text-4xl text-center font-bold py-4">Wedding Looks</h1>
          <img
            className="w-96 "
            src="https://images.pexels.com/photos/16208954/pexels-photo-16208954/free-photo-of-guests-throwing-rice-during-a-wedding-ceremony.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="">
          <h1 className="text-4xl text-center font-bold py-4">Party Looks</h1>
          <img
            className="w-96 "

            src="https://images.pexels.com/photos/1649691/pexels-photo-1649691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="">
          <h1 className="text-4xl text-center font-bold py-4">Trip Looks</h1>
          <img
            className="w-96 h-60"
            src="https://images.pexels.com/photos/4388168/pexels-photo-4388168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            />
        </div>
        <div className="">
          <h1 className="text-4xl text-center font-bold py-4">Ariport Looks</h1>
          <img
            className="w-96  "
            src="https://images.pexels.com/photos/837129/pexels-photo-837129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Occasion;
