import React, { useState, useEffect } from "react";
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
    }, 1300);
  }, []);

  return (
    <div className="Header">
      {loading ? (
        <motion.div
          className="home-title"
          initial={{ x: "0vw" }}
          animate={{ x: "100vw" }}
          transition={{
            duration: 1.2,
            delay: 0.4,
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
