import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


// import Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Component
import Header from "./components/Header";
import Footer from "./components/Footer";



// import Pages
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import Admissions from "./pages/Admissions";
import Examform from "./pages/Examform";
import Examschedule from "./pages/Examschedule";
import Exampro from "./pages/Exampro";
import Admissionpro from "./pages/Admissionpro";


function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/LoginForm" element={<LoginForm/>} />
            <Route exact path="/RegisterForm" element={<RegisterForm/>} />
            <Route exact path="/Admissions" element={<Admissions/>} />
            <Route exact path="/Examform" element={<Examform/>} />
            <Route exact path="/Examschedule" element={<Examschedule/>} />
            <Route exact path="/Exampro" element={<Exampro/>} />
            <Route exact path="/Admissionpro" element={<Admissionpro/>} />
          </Routes>
        
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
