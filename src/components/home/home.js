import React from "react";
import "./home.scss";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home" name="home-id">
      <div className="name-logo">
        <img src="https://res.cloudinary.com/noname-m-/image/upload/v1622245542/images/namelogo_hpncdo.png" />
      </div>
      <div className="home-content">
        <div className="home-content-main">
          <div className="home-title">
            <h1>Roi Malka</h1>
          </div>
          <div className="home-subtitle">
            <h3>Front-end Web Developer</h3>
          </div>
          <div className="buttons">
            <a className="btn" href="#projects">
              Latest Projects
            </a>
          </div>
          <ul className="icons">
            <li>
              <a href="https://github.com/roimalka10" target="_blank">
                <FaGithub size={30} className="icon-size" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/roi-malka/" target="_blank">
                <FaLinkedinIn size={30} className="icon-size" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
