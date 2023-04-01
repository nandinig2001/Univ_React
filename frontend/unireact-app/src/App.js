import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import axios from "axios";

// npm i react-redux
// import Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Component
import Header from "./components/Header";
import Footer from "./components/Footer";



// import Pages
import Home from "./pages/Home";
import SLoginForm from "./pages/SLoginForm";
import CLoginForm from "./pages/CLoginForm";
import RegisterForm from "./pages/RegisterForm";
import Admissions from "./pages/Admissions";
import Examform from "./pages/Examform";
import Examschedule from "./pages/Examschedule";
import Hallticket from "./pages/Hallticket";
import Admissionpro from "./pages/Admissionpro";
import Admissionform from "./pages/Admissionform";
import Myprofile from "./pages/Myprofile";
import Myrecords from "./pages/Myrecords";
import Notification from "./pages/Notification";
import Result from "./pages/Result";

import Dashboard from "./views/dashboard/Dashboard";


function App() {
  const [college, setCollege] = useState([])
  useEffect(()=>{
    async function getAllColege(){
      try {
        const students = await axios.get("http://127.0.0.1:8000/colleges/")
        console.log(college.data)
        setCollege(college.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllColege()
  }, [])

  
  return (
    <React.StrictMode>
      <Router>
        <Header />
        
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/SLoginForm" element={<SLoginForm/>} />
            <Route exact path="/CLoginForm" element={<CLoginForm/>} />
            <Route exact path="/RegisterForm" element={<RegisterForm/>} />
            <Route exact path="/Admissions" element={<Admissions/>} />
            <Route exact path="/Examform" element={<Examform/>} />
            <Route exact path="/Examschedule" element={<Examschedule/>} />
            <Route exact path="/Hallticket" element={<Hallticket/>} />
            <Route exact path="/Admissionpro" element={<Admissionpro/>} />
            <Route exact path="/Admissionform" element={<Admissionform/>} />
            <Route exact path="/Myprofile" element={<Myprofile/>} />
            <Route exact path="/Myrecords" element={<Myrecords/>} />
            <Route exact path="/Notification" element={<Notification/>} />
            <Route exact path="/Result" element={<Result/>} />

            <Route exact path="/Dashboard" element={<Dashboard/>} />
          </Routes>
        
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App
