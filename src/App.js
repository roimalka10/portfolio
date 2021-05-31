import React from "react";
import "./App.css";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";

const App = () => {
  return (
    <>
      <Navbar />
      <About />
    </>
  );
};

export default App;
