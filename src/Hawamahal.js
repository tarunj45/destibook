
            
 import React from "react";
import displayRazorpay from "./utils/PaymentGateway";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Hawamahal = () => {
  const containerStyle = {
    width: "400px",
    height: "400px",
    margin: "2rem auto",
  };

  const center = {
    lat: 26.9239, // Hawa Mahal latitude
    lng: 75.8267, // Hawa Mahal longitude
  };

  return (
    <div>
      <section className="text-gray-400 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="Hawa Mahal"
            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Hawa_Mahal_east_facade_%2814-07-2022%29.jpg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              HAWA MAHAL
            </h1>
            <p className="mb-8 leading-relaxed">
              Hawa Mahal, located in Jaipur, Rajasthan, is an iconic pink sandstone palace built in 1799 by Maharaja Sawai Pratap Singh. Known as the "Palace of Winds," it features a five-story facade with 953 small windows designed for royal women to observe street festivals unseen. Its architecture is a beautiful blend of Rajput and Mughal styles.
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
            {/* Optional: Add a marker */}
          </GoogleMap>
        </LoadScript>
      </section>
    </div>
  );
};

export default Hawamahal;

