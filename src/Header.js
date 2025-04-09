import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-white">Destibook</span>
          </Link>
          <nav className="md:mr-auto md:ml-8 md:py-1 flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-300" to="/">
              Monuments
            </Link>
            <Link className="mr-5 hover:text-gray-300" to="/explore">
              Restaurants
            </Link>
            <Link className="mr-5 hover:text-gray-300" to="/about">
              About Us
            </Link>
          </nav>
          <button className="inline-flex items-center text-white bg-gradient-to-r from-indigo-500 via-indigo-500 to-indigo-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Explore the unexplored!
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
