import React from "react";
import NavBar from "./NavBar";
import MasterHead from "./MasterHead";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Copyright from "./Copyright";
import "./css/styles.css";
import Experience from "./Experience";
const App = () => {
  return (
    <div className="">
      <NavBar />
      <MasterHead />
      <Experience />
      <About />
      <Contact />
      <Footer />
      <Copyright />
    </div>
  );
};
export default App;
