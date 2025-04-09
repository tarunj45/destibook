import React from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-2/3 mx-auto">
            <div class="flex flex-wrap w-full bg-gray-400 py-32 px-10 relative mb-4">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                src="https://i.pinimg.com/originals/99/02/b9/9902b90e5e15f798c5762cc52f7950bb.jpg"
              />
              <div class="text-center relative z-10 w-full">
                <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">
                  Taj Mahal
                </h2>
                <p class="leading-relaxed">Explore the wonder of the world!</p>
                <Link
                  class="mt-3 text-gray-900 inline-flex items-center"
                  // onClick={() => navigate("tajmahal")}
                  to="/gallery/tajmahal"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div class="flex flex-wrap -mx-2">
              <div class="px-2 w-1/2">
                <div class="flex flex-wrap w-full bg-gray-400 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                    src="https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-group-of-monuments-hampi-0-2020-11-10-t-15-16-37.jpg"
                  />
                  <div class="text-center relative z-10 w-full">
                    <h2 class="text-xl text-gray-900 font-medium title-font mb-2">
                      Group of Monuments, Hampi
                    </h2>
                    <p class="leading-relaxed">
                      Ancient ruins, temples, boulders, Vijayanagara empire, heritage, Karnataka.
                    </p>
                    <Link
                      class="mt-3 text-gray-900 inline-flex items-center"
                      to="/gallery/hampi"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="px-2 w-1/2">
                <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Wind_Palace-Jaipur-India0002.JPG/1280px-Wind_Palace-Jaipur-India0002.JPG"
                  />
                  <div class="text-center relative z-10 w-full">
                    <h2 class="text-xl text-gray-900 font-medium title-font mb-2">
                      Hawa Mahal
                    </h2>
                    <p class="leading-relaxed">
                     Pink facade, Jaipur, windows, breeze, royal palace, architecture.
                    </p>
                    <Link
                      class="mt-3 text-gray-900 inline-flex items-center"
                      to="/gallery/hawamahal"
                    >
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
