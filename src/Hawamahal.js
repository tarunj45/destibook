import React from "react";

const Hawamahal = () => {
  return (
    <div>
      <section class="text-gray-400 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Hawa_Mahal_east_facade_%2814-07-2022%29.jpg"
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              HAWA MAHAL
            </h1>
            <p class="mb-8 leading-relaxed">
              Hampi, located in Karnataka, is a UNESCO World Heritage Site known for its stunning ruins and rich history as the capital of the Vijayanagara Empire. The town is filled with ancient temples, stone chariots, and unique architecture set against a surreal boulder-strewn landscape. It stands as a testament to India’s glorious past and attracts history lovers and travelers from around the world.
            </p>
            <div class="flex justify-center">
              <a href="https://rzp.io/l/bhramaan">
                <button
                  class="payment-button inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={displayRazorpay}
                >
                  Book Now
                </button>
              </a>
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hawamahal;
