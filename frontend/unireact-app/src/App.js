import React from "react";
import "./App.css";

// import Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Component
import Header from "./components/Header";
import Footer from "./components/Footer";


// import Pages
import Home from "./pages/Home";
import Slogin from "./pages/Slogin";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Slogin" element={<Slogin/>} />
          </Routes>
        
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
