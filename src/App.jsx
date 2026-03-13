import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Hero from "./Sections/hero";
import Technical from "./Sections/Technical";
import MyProjects from "./Sections/MyProjects";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import ProjectView from "./Components/ProjectView"; // Import your view component

// Create a Home component to hold your main landing page sections
const Home = () => (
  <>
    <Hero />
    <Technical />
    <MyProjects />
    <Contact />
  </>
);

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Main Portfolio Page */}
          <Route path="/" element={<Home />} />
          
          {/* Dynamic Project Detail Page */}
          <Route path="/project/:id" element={<ProjectView />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;