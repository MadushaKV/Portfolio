import React from "react";
import Navbar from "./Components/navbar";
import Hero from "./Sections/hero";
import Technical from "./Sections/Technical";
//import About from "./Sections/About";
import MyProjects from "./Sections/MyProjects";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

const app = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Technical />
      {/* <About /> */}
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default app;