import React, { useEffect, useRef, createRef, useState } from "react";
import hoverEffect from "hover-effect";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Fade from "react-reveal/Fade";
import { projects } from "../data/data";

const Projects = () => {
  const { scrollYProgress } = useViewportScroll();

  const x = useTransform(scrollYProgress, [0.9, 0.1], [1000, 0]);

  const x2 = useTransform(scrollYProgress, [0.9, 0.1], [500, 0]);

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
      <motion.h1 id="project">
        <span>projects </span>
        {/* <span>projects </span>
         <span>projects </span>
        <span>projects </span>
        <span>projects </span>
        <span>projects </span>
        <span>projects </span>
        <span>projects </span> */}
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
              <a className="btn" href={project.github} target="_blank">
                <span>See Code</span>
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
// style={{ x: size > 600 ? x : x2 }}
