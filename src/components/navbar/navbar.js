import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="navbar">
        <a className="logo">
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
            Home
          </Link>
          <Link
            activeClass="active"
            to="about-id"
            spy={true}
            smooth={true}
            offset={30}
            duration={0}
            onClick={handleClick}
          >
            SKills
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={0}
            onClick={handleClick}
          >
            Projects
          </Link>

          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={0}
            onClick={handleClick}
          >
            Contact
          </Link>
          <div className="icons-navbar">
            <a href="https://github.com/roimalka10" target="_blank">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/roi-malka/" target="_blank">
              <FaLinkedinIn size={30} />
            </a>
          </div>
        </div>
        <div className="burger-icon" onClick={handleClick}>
          {showMenu ? <FaTimes size={34} /> : <FaBars size={28} />}
        </div>
      </div>
    </>
  );
};

{
}

export default Navbar;
