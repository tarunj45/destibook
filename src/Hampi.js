import React from "react";
import displayRazorpay from "./utils/PaymentGateway";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Hampi = () => {
  const containerStyle = {
    width: "400px",
    height: "400px",
    margin: "2rem auto",
  };

  const center = {
    lat: 15.335,
    lng: 76.462,
  };

  return (
    <div>
      <section className="text-gray-400 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="Hampi"
            src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Hampi_virupaksha_temple.jpg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              GROUP OF MONUMENTS HAMPI
            </h1>
            <p className="mb-8 leading-relaxed">
              Hampi, located in Karnataka, is a UNESCO World Heritage Site known
              for its stunning ruins and rich history as the capital of the
              Vijayanagara Empire. The town is filled with ancient temples, stone
              chariots, and unique architecture set against a surreal
              boulder-strewn landscape. It stands as a testament to India’s
              glorious past and attracts history lovers and travelers from around
              the world.
            </p>
            <div className="flex justify-center">
              <button
                className="payment-button inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={displayRazorpay}
              >
                Book Now
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <LoadScript googleMapsApiKey="AIzaSyC04nwf62luxKbAQ2Z84jAooFJRnffpdzk">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            mapContainerClassName="map-container"
          >
            {/* Optional: Add Marker here */}
          </GoogleMap>
        </LoadScript>
      </section>
    </div>
  );
};

export default Hampi;
