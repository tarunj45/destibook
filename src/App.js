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
import Explore from "./Restaurants";
import AboutPage from "./AboutPage";

function App() {
  return (
    <div className="App bg-gray-800">
      <Routes>
        <Route path="/" element={[<Header />, <Hero />, <Footer />]} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/tajmahal" element={<Tajmahal />} />
        <Route path="/gallery/hampi" element={<Hampi />} />
        <Route path="/gallery/hawamahal" element={<Hawamahal />} />
        <Route path="/success" element={<Success />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={[<Header />, <AboutPage />, <Footer />]} />
      </Routes>
    </div>
  );
}

export default App;

