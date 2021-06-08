import React from "react";
import "./projects.scss";

const Projects = () => {
  return (
    <section id="projects">
      <div className="p-content">
        <div className="p-text">Latest Works</div>
        <ul className="p-list">
          <li>
            <a
              // href="https://www.google.co.il/webhp?hl=iw"
              id="first"
              className="project"
            >
              <div className="mask"></div>
              <div className="project-number">01</div>
              <div className="text-section">
                <h3 className="project-title">Cerasa Redesign</h3>
                <h5 className="project-subtitle">
                  Leader in bathroom furniture since 1983
                </h5>
                <button
                  href="https://www.google.co.il/webhp?hl=iw"
                  className="the-button"
                >
                  <span className="button-text">Case Study</span>
                </button>
              </div>
            </a>
          </li>
          <li>
            <a
              // href="https://www.google.co.il/webhp?hl=iw"
              id="first"
              className="project"
            >
              <div className="mask2"></div>
              <div className="project-number">02</div>
              <div className="text-section">
                <h3 className="project-title">Cerasa Redesign</h3>
                <h5 className="project-subtitle">
                  Leader in bathroom furniture since 1983
                </h5>
                <button
                  href="https://www.google.co.il/webhp?hl=iw"
                  className="the-button"
                >
                  <span className="button-text">Case Study</span>
                </button>
              </div>
            </a>
          </li>
          <li>
            <a
              // href="https://www.google.co.il/webhp?hl=iw"
              id="first"
              className="project"
            >
              <div className="mask3"></div>
              <div className="project-number">03</div>
              <div className="text-section">
                <h3 className="project-title">Cerasa Redesign</h3>
                <h5 className="project-subtitle">
                  Leader in bathroom furniture since 1983
                </h5>
                <button
                  href="https://www.google.co.il/webhp?hl=iw"
                  className="the-button"
                >
                  <span className="button-text">Case Study</span>
                </button>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
