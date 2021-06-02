import React from "react";
import "./App.scss";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
