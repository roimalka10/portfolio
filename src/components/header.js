import React, { useState, useEffect } from "react";
import "./header.scss";
import BarLoader from "react-spinners/BarLoader";
import { css, jsx } from "@emotion/react";
import { motion } from "framer-motion";
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
    }, 1700);
  }, []);

  return (
    <div className="Header">
      {loading ? (
        <motion.div
          className="home-title"
          initial={{ x: "-140vw" }}
          animate={{ x: "0vw" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "tween",
            stiffness: 65,
          }}
        >
          <div className="loader"></div>
        </motion.div>
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
