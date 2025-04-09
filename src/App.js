// App.js
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import { Routes, Route } from "react-router-dom";
import Gallery from "./Gallery";
import Tajmahal from "./Tajmahal";
import Hampi from "./Hampi";
import Hawamahal from "./Hawamahal";
import Success from "./Success";
import Restaurants from "./Restaurants";
import IntercomChat from "./IntercomChat"; // Optional, for chatbot

function App() {
  return (
    <div className="App bg-gray-800">
      <IntercomChat />
      <Routes>
        <Route path="/" element={[<Header />, <Hero />, <Footer />]} />
        <Route path="/gallery" element={[<Header />, <Gallery />, <Footer />]} />
        <Route path="/gallery/tajmahal" element={[<Header />, <Tajmahal />, <Footer />]} />
        <Route path="/gallery/hampi" element={[<Header />, <Hampi />, <Footer />]} />
        <Route path="/gallery/hawamahal" element={[<Header />, <Hawamahal />, <Footer />]} />
        <Route path="/success" element={[<Header />, <Success />, <Footer />]} />
        <Route path="/explore" element={[<Header />, <Restaurants />, <Footer />]} />
      </Routes>
    </div>
  );
}

export default App;
