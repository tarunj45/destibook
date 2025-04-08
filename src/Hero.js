import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://img.freepik.com/free-vector/india-background_1284-22033.jpg?w=900&t=st=1659982371~exp=1659982971~hmac=968dedbdc00aaa74389eb7c31d2484c6e601b0fbe2f1fd9b85d7bae7d31132cc"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Book your tickets hassle-free with Destibook!
            </h1>
            <p class="mb-8 leading-relaxed text-gray-300">
              Discover and explore India's most beautiful monuments and cultural heritage sites.
              Plan your journey with ease, book tickets instantly, and create unforgettable
              memories at India's iconic destinations.
            </p>
            <div class="flex justify-center">
              <Link
                class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                // onClick={() => navigate("gallery")}
                to="/gallery"
              >
                Book Now!
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
