import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
