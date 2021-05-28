import React from "react";
import "./home.scss";

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
          <div>
            <a className="btn" href="#projects">
              Latest Projects
            </a>
            <a className="btn" href="#about">
              More About Me
            </a>
          </div>
        </div>
      </div>
      <ul className="icons"></ul>
    </section>
  );
};

export default Home;
