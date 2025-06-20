import React from "react";
import "./index.css"
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { Resume } from "./routes/Resume";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
       <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Project" element={<Project/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        {/* <Route path="/Resume" element={<Resume/>}></Route> */}
      </Routes>
      </Router>
    </>
  );
}

export default App;
