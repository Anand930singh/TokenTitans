import { useAddress } from "@thirdweb-dev/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const address = useAddress();

  return (
    <nav className="flex items-center justify-between w-full max-w-7xl mx-auto py-4 bg-inherit">
      <div className="flex items-center justify-center gap-4 text-white text-xl hover:text-purple-600">
        <svg
          width="46"
          height="55"
          viewBox="0 0 46 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.6 5.70001V27.2L17.7 24.4C9 19.4 3.59999 10.1 3.59999 0H0V24.6C0 32.6 4.59999 40 11.9 43.5L22.7 48.7V27.2L27.6 30C36.3 35 41.7 44.3 41.7 54.4H45.3V29.8C45.3 21.8 40.7 14.4 33.4 10.9L22.6 5.70001Z"
            fill="white"
          />
        </svg>
        <Link to={"/"}>Token Titans</Link>
      </div>
      <div className="text-white flex items-center justify-center gap-6">
        <Link to="/#" className="hover:text-purple-600">
          About Us
        </Link>
        <Link to="/team" className="hover:text-purple-600">
          Team
        </Link>
        <Link to="/#" className="hover:text-purple-600">
          Tech Stack
        </Link>

        {address ? (
          <button className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white border border-white border-opacity-20 px-4 py-2 rounded-md shadow-lg hover:bg-gradient-to-r from-violet-500 to-blue-500">
            {address}
          </button>
        ) : (
          <Link
            to="/"
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white border border-white border-opacity-20 px-10 py-2 rounded-md shadow-lg hover:bg-gradient-to-r from-violet-500 to-blue-500"
          >
            Sign Up
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
