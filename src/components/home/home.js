import React from "react";
import "./home.scss";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home">
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
            <a className="btn" href="#about">
              More About Me
            </a>
          </div>
          <ul className="icons">
            <li>
              <a>
                <FaGithub size={30} />
              </a>
            </li>
            <li>
              <a>
                <FaLinkedinIn size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
