import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Ideas from "./Pages/Ideas";
import Echoes from "./Pages/Echoes";
import Soul from "./Pages/Soul";
import Pocket from "./Pages/Pocket";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/ideas-journal" element={<Ideas />} />
            <Route path="/products/echoes-and-light" element={<Echoes />} />
            <Route path="/products/soul-dump" element={<Soul />} />
            <Route path="/products/pocket-buddy" element={<Pocket />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
