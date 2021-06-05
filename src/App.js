import React, { useState, useEffect } from "react";
import "./App.scss";
import BarLoader from "react-spinners/BarLoader";
import { css, jsx } from "@emotion/react";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <BarLoader
          color={"rgb(66, 184, 253)"}
          height={"100vh"}
          width={"100vw"}
          css={css`
            position: absolute;
            background-color: rgb(24, 24, 24);
          `}
          loading={loading}
          size={20}
          speedMultiplier={0.7}
        />
      ) : (
        <div className="app">
          <Navbar />
          <Home />
          <About />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
