import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "./navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const changeBackground = () => {
    if (window.scrollY >= 900) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <motion.div
        className={navbar ? "navbar active" : "navbar"}
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, type: "tween" }}
      >
        <a href="/header" className="logo">
          <img src="https://res.cloudinary.com/noname-m-/image/upload/v1622245542/images/namelogo_hpncdo.png" />
        </a>
        <div className={showMenu ? "navbar-items active" : "navbar-items"}>
          <Link
            activeClass="active"
            to="home-id"
            spy={true}
            smooth={true}
            duration={0}
            onClick={handleClick}
          >
            <span>Home</span>
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={0}
            onClick={handleClick}
          >
            <span>Projects</span>
          </Link>

          <a activeClass="active" className="span-contact" href="/contact">
            <span>Contact</span>
          </a>
          <a activeClass="active" className="span-resume" /* href="/contact"*/>
            <span>Resume</span>
          </a>
          <div className="icons-navbar">
            <a href="https://github.com/roimalka10" target="_blank">
              <FaGithub size={40} />
            </a>
            <a href="https://www.linkedin.com/in/roi-malka/" target="_blank">
              <FaLinkedinIn size={40} />
            </a>
          </div>
        </div>
        <div className="burger-icon" onClick={handleClick}>
          {showMenu ? <FaTimes size={34} /> : <FaBars size={28} />}
        </div>
      </motion.div>
    </>
  );
};

{
}

export default Navbar;
