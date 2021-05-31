import React, { useState } from "react";
import { Link } from "react-scroll";
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
        <a className="logo">
          <img src="https://res.cloudinary.com/noname-m-/image/upload/v1622245542/images/namelogo_hpncdo.png" />
        </a>
        <div className="navbar-items">
          <Link
            activeClass="active"
            to="home-id"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about-id"
            spy={true}
            smooth={true}
            duration={700}
          >
            SKills
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={600}
          >
            Projects
          </Link>

          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={800}
          >
            Contact
          </Link>
        </div>
        <div className="burger-icon">
          <FaBars size={28} onClick={handleClick} />
        </div>
      </div>
      {/* <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
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
      </nav> */}
    </>
  );
};

{
  /* <div className="icons-navbar">
          <a href="https://github.com/roimalka10" target="_blank">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/roi-malka/" target="_blank">
            <FaLinkedinIn size={30} />
          </a>
        </div> */
}

export default Navbar;
