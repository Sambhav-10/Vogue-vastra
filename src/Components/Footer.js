// ExampleFooter.jsx

import React from "react";
import { Link } from "react-router-dom";

const ExampleFooter = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold">VOGUE VAस्त्रा</p>
            <p>&copy; 2024. All rights reserved.</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <Link to={"/"} className="hover:text-gray-500">
                <li>HOME</li>
              </Link>

              

              <Link to={"/about"} className="hover:text-gray-500">
                <li>ABOUT</li>
              </Link>
              <Link to={"contact"} className="hover:text-gray-500">
                <li>CONTACT</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ExampleFooter;
