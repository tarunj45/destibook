import React from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header class="text-white body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="https://ibb.co/HHZb2Vy"
              alt=""
              srcset=""
              className="w-50"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl text-white">Destibook</span>
          </a>
          <nav class="md:mr-auto md:ml-8 md:py-1 flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-300" href="/">
              Monuments
            </a>
            <Link class="mr-5 hover:text-gray-300" to="/explore">
              Restaurants
            </Link>
            <a class="mr-5 hover:text-gray-300">About Us</a>
          </nav>
          <button class="inline-flex items-center text-white bg-gradient-to-r from-indigo-500 via-indigo-500 to-indigo-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Explore the unexplored!
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
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
