import React from "react";
import displayRazorpay from "./utils/PaymentGateway";
import { GoogleMap, LoadScript, useLoadScript } from "@react-google-maps/api";

const Tajmahal = () => {
  const {} = useLoadScript({
    googleMapsApiKey: "AIzaSyC04nwf62luxKbAQ2Z84jAooFJRnffpdzk",
  });

  if (!LoadScript) return <div>Loading..</div>;

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  function MyComponent() {
    return (
      <LoadScript googleMapsApiKey="AIzaSyC04nwf62luxKbAQ2Z84jAooFJRnffpdzk">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          mapContainerClassName="map-container"
        >
          <></>
        </GoogleMap>
      </LoadScript>
    );
  }

  return (
    <div>
      <section class="text-gray-400 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg"
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              TAJ MAHAL
            </h1>
            <p class="mb-8 leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
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
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
        <MyComponent />
      </section>
    </div>
  );
};

export default Tajmahal;
