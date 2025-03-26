// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { useRef, useEffect, useState } from "react";
import Events from "./pages/Events.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
