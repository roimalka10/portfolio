import React, { useState } from "react";
import "./navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="navbar">
          <div className="content">
            <a className="logo" onClick={handleClick} href="/home">
              <img src="https://d33wubrfki0l68.cloudfront.net/7d67067382c65bc1d6deb566dc125e2091c377be/1d162/images/name-logo.jpeg" />
            </a>
            <ul className="navbar-lg-item">
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
            <div className="burger-icon">
              <FaBars size={28} onClick={handleClick} />
            </div>
          </div>
        </div>
        <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={handleClick}>
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
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
