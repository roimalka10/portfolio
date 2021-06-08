import React, { useState, useEffect } from "react";
import "./header.scss";
import BarLoader from "react-spinners/BarLoader";
import { css, jsx } from "@emotion/react";
import Navbar from "./navbar";
import Home from "./home";
import Footer from "./footer";
import Projects from "./projects";

const Header = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  }, []);

  return (
    <div className="header">
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
        <div className="header">
          <Navbar />
          <Home />
          <Projects />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Header;
