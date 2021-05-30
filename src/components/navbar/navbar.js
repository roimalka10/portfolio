import React, { useState } from "react";
import "./navbar.scss";
import { FaBars } from "react-icons/fa";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="navbar">
        <div className="content">
          <a className="logo" onClick={handleClick} href="/home">
            <img src="https://res.cloudinary.com/noname-m-/image/upload/v1622245542/images/namelogo_hpncdo.png" />
          </a>
          <ul className="navbar-lg-item">
            <li>
              <a className="navbar-a" href="/">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a className="navbar-a" href="/projects">
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a className="navbar-a" href="/about">
                <span>About</span>
              </a>
            </li>
            <li>
              <a className="navbar-a" href="/contact">
                <span>Contact</span>
              </a>
            </li>
          </ul>
          <div className="burger-icon">
            <FaBars size={28} onClick={handleClick} />
          </div>
        </div>
      </div>
      <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="icons-navbar">
          <a href="https://github.com/roimalka10" target="_blank">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/roi-malka/" target="_blank">
            <FaLinkedinIn size={30} />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
