import React, { useEffect, useRef, useState } from "react";

import { motion, useTransform, useViewportScroll } from "framer-motion";
import Fade from "react-reveal/Fade";

const Projects = () => {
  const { scrollYProgress } = useViewportScroll();

  const x = useTransform(scrollYProgress, [0.9, 0.1], [1000, 0]);

  const x2 = useTransform(scrollYProgress, [0.9, 0.1], [500, 0]);

  const [size, setSize] = useState(window.innerHeight);
  return (
    <section id="projects">
      <div className="p-content">
        <motion.h1 style={{ x: size > 600 ? x : x2 }} className="p-text">
          {" "}
          <span>projects </span>
          <span>projects </span>
          <span>projects </span>
          <span>projects </span>
          <span>projects </span>
          <span>projects </span>
          <span>projects </span>
          <span>projects </span>
        </motion.h1>
        <ul className="p-list">
          <li>
            <a
              href="https://github.com/roimalka10/portfolio"
              target="_blank"
              id="first"
              className="project1"
            >
              <div className="mask"></div>
              <div className="project-number">01</div>
              <div className="text-section">
                <Fade bottom duration={800}>
                  <h3 className="project-title">Personal Portfolio</h3>
                  <h5 className="project-subtitle">
                    React | Sass | Framer Motion
                  </h5>
                  <button className="the-button">
                    <span className="button-text">See Code</span>
                  </button>
                </Fade>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/roimalka10/portfolio"
              target="_blank"
              id="first"
              className="project2"
            >
              <div className="mask2"></div>
              <div className="project-number2">02</div>
              <div className="text-section2">
                <Fade bottom duration={800}>
                  <h3 className="project-title">Second Project</h3>
                  <h5 className="project-subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h5>
                  <button className="the-button">
                    <span className="button-text">See Code</span>
                  </button>
                </Fade>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/roimalka10/portfolio"
              target="_blank"
              id="first"
              className="project3"
            >
              <div className="mask3"></div>
              <div className="project-number">03</div>

              <div className="text-section">
                <Fade bottom duration={800}>
                  <h3 className="project-title">Third Project</h3>
                  <h5 className="project-subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h5>
                  <button className="the-button">
                    <span className="button-text">See Code</span>
                  </button>
                </Fade>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
