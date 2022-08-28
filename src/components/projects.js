import React, { useEffect, useRef, createRef, useState } from "react";
import hoverEffect from "hover-effect";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import Marquee from "react-fast-marquee";
import { projects } from "../data/data";

const Projects = () => {
  const [size, setSize] = useState(window.innerHeight);

  let wrappers = useRef({});

  projects.map((project) => (wrappers.current[project.id - 1] = createRef()));

  useEffect(() => {
    projects.map(
      (project) =>
        new hoverEffect({
          parent: wrappers.current[project.id - 1].current,
          intensity: 0.5,
          imagesRatio: 1080 / 1920,
          image1: project.img,
          image2: project.img2,
          displacementImage: project.distort,
        })
    );
  }, []);
  return (
    <section className="projects" id="projects">
      <Marquee speed={100} gradient={false} className="marquee">
        <h2>
          Aspire to inspire. <span>Creativity takes courage.</span> Aspire to
          inspire. <span>Creativity takes courage.</span> Aspire to inspire.{" "}
          <span>Creativity takes courage.</span>
        </h2>
      </Marquee>
      <motion.h1 id="project">
        <span>projects </span>
      </motion.h1>
      <div className="list container">
        {projects.map((project) => (
          <div key={project.id} className={`project${project.id}`}>
            <div className="title">
              <div className="title-main">
                <h3>0{project.id}</h3>
                <h3>{project.title}</h3>
              </div>
              <p>{project.type}</p>
              <p>{project.about}</p>
              <a className="btn" href={project.github} target="_blank">
                <span>See Code</span>
              </a>
              <a className="btn btn2" href={project.link} target="_blank">
                <span>View Page</span>
              </a>
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div
                className="wrapper"
                ref={wrappers.current[project.id - 1]}
              ></div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
