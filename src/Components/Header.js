import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    console.log("header");
  return (
    <div className="w-full h-24 text-center flex items-center  justify-around font-bold bg-[#EBE7E4]">
      <div className="flex gap-24 list-none cursor-pointer">
        <Link to={"/"}>
          <li>HOME</li>
        </Link>

        <Link to={"/"}>
          <li>STYLIST</li>
        </Link>
      </div>
      <h1 className="text-4xl  text-[#C0A36E]">VOGUE VAस्त्रा</h1>
      <div className="flex gap-24 list-none cursor-pointer">
        <Link to={"/about"}>
          <li>ABOUT</li>
        </Link>
        <Link to={"contact"}>
          <li>CONTACT</li>
        </Link>
      </div>
    </div>
  );
};

export default Header;
