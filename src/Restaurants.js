// Restaurants.js
import React from "react";

const Restaurants = () => {
  return (
    <div className="text-white p-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Nearby Restaurants</h1>

      {/* Hawa Mahal */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-400">Near Hawa Mahal, Jaipur</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>LMB (Laxmi Misthan Bhandar) - Famous for Rajasthani thali and sweets</li>
          <li>Shreenath Lassiwala - Best lassi spot near Hawa Mahal</li>
          <li>The Tattoo Café & Lounge - Rooftop café with a view of Hawa Mahal</li>
        </ul>
      </div>

      {/* Taj Mahal */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-400">Near Taj Mahal, Agra</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>Pinch of Spice - Fine dining with North Indian cuisine</li>
          <li>Joney’s Place - Small café popular with travelers</li>
          <li>Esphahan at The Oberoi Amarvilas - Luxury dining with a view of the Taj</li>
        </ul>
      </div>
    </div>
  );
};

export default Restaurants;
