import React from "react";

const ExploreUnexplored = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-12 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Explore the Unexplored</h1>
      <div className="w-full max-w-4xl">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-96 rounded-lg"
            src="https://www.youtube.com/embed/44rTTLjZZz4"
            title="Explore the Unexplored"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ExploreUnexplored;
